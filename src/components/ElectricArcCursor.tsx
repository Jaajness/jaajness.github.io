import React, { useEffect, useRef } from "react";

interface ArcCursorProps {
  snapDistance?: number;
  arcColor?: string;
  glowColor?: string;
  branching?: number;
}

type Pt = { x: number; y: number };

interface Spark {
  ox: number;
  oy: number;
  angle: number;
  len: number;
  points: Pt[];
  forks: Pt[][];
  life: number;
  maxLife: number;
  age: number;
  /** Idle sparks "twitch": their shape is re-rolled every few frames. */
  twitch: boolean;
}

/* ──────────────────────────────────────────────────────────────
   Tuning knobs (all lengths in px, all durations in frames @60fps)
   ────────────────────────────────────────────────────────────── */
const IDLE = {
  chance: 0.0045, // per frame → roughly one burst every 3–4 s
  minLen: 24, // was 4
  maxLen: 70, // was 18
  minLife: 18, // was 7
  maxLife: 34, // was 14
  twitchEvery: 2, // re-roll the zig-zag every N frames
  forkChance: 0.6,
};
const CLICK = { minLen: 18, maxLen: 58, minLife: 12, maxLife: 22 };
const AFTERGLOW_FRAMES = 10; // how long the arc lingers after leaving a target

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export const ElectricArcCursor: React.FC<ArcCursorProps> = ({
  snapDistance = 150,
  arcColor = "#ffffff",
  glowColor = "#00d2ff",
  branching = 2.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    // ── Lightning path (midpoint displacement) ─────────────
    const lightning = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      disp: number,
    ): Pt[] => {
      const pts: Pt[] = [
        { x: x1, y: y1 },
        { x: x2, y: y2 },
      ];
      const sub = (a: number, b: number, d: number) => {
        const pa = pts[a],
          pb = pts[b];
        const dx = pb.x - pa.x,
          dy = pb.y - pa.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        if (len < 5) return;
        const mx = (pa.x + pb.x) / 2,
          my = (pa.y + pb.y) / 2;
        const nx = -dy / len,
          ny = dx / len;
        const off = (Math.random() - 0.5) * d;
        pts.splice(a + 1, 0, { x: mx + nx * off, y: my + ny * off });
        sub(a, a + 1, d * 0.5);
        sub(a + 1, b + 1, d * 0.5);
      };
      sub(0, 1, disp);
      return pts;
    };

    // ── A jagged bolt starting at (ox, oy) ─────────────────
    const jaggedPath = (
      ox: number,
      oy: number,
      angle: number,
      len: number,
      segs: number,
      jitter: number,
    ): Pt[] => {
      const pts: Pt[] = [];
      const perp = angle + Math.PI / 2;
      for (let i = 0; i <= segs; i++) {
        const t = i / segs;
        const bx = ox + Math.cos(angle) * len * t;
        const by = oy + Math.sin(angle) * len * t;
        // the first point stays glued to the origin, the rest zig-zag
        const j =
          i === 0
            ? 0
            : (Math.random() - 0.5) * len * jitter * (1 - t * 0.45);
        pts.push({ x: bx + Math.cos(perp) * j, y: by + Math.sin(perp) * j });
      }
      return pts;
    };

    const buildForks = (
      main: Pt[],
      len: number,
      chance: number,
    ): Pt[][] => {
      const forks: Pt[][] = [];
      if (main.length < 4) return forks;
      const tries = Math.random() < chance ? 1 + (Math.random() < 0.4 ? 1 : 0) : 0;
      for (let f = 0; f < tries; f++) {
        const i = 1 + Math.floor(Math.random() * (main.length - 2));
        const p = main[i];
        const prev = main[i - 1];
        const base = Math.atan2(p.y - prev.y, p.x - prev.x);
        const a = base + (Math.random() < 0.5 ? -1 : 1) * rand(0.45, 1.05);
        forks.push(
          jaggedPath(p.x, p.y, a, len * rand(0.35, 0.6), 3 + Math.floor(Math.random() * 2), 0.5),
        );
      }
      return forks;
    };

    const buildSpark = (
      ox: number,
      oy: number,
      angle: number,
      len: number,
      life: number,
      twitch: boolean,
      forkChance: number,
    ): Spark => {
      const points = jaggedPath(ox, oy, angle, len, 5 + Math.floor(Math.random() * 4), 0.42);
      return {
        ox,
        oy,
        angle,
        len,
        points,
        forks: buildForks(points, len, forkChance),
        life,
        maxLife: life,
        age: 0,
        twitch,
      };
    };

    // Idle: short bursts of 1–3 whip-like bolts leaning the same way
    const spawnIdle = (x: number, y: number) => {
      const count = 1 + (Math.random() < 0.5 ? 1 : 0) + (Math.random() < 0.18 ? 1 : 0);
      const lean = Math.random() * Math.PI * 2;
      for (let i = 0; i < count; i++) {
        const a = lean + rand(-0.9, 0.9);
        const l = rand(IDLE.minLen, IDLE.maxLen);
        const life = Math.floor(rand(IDLE.minLife, IDLE.maxLife));
        sparksRef.current.push(buildSpark(x, y, a, l, life, true, IDLE.forkChance));
      }
    };

    const spawnClick = (x: number, y: number) => {
      const n = 10 + Math.floor(Math.random() * 5);
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.6;
        const l = rand(CLICK.minLen, CLICK.maxLen);
        const life = Math.floor(rand(CLICK.minLife, CLICK.maxLife));
        sparksRef.current.push(buildSpark(x, y, a, l, life, false, 0.35));
      }
    };

    const onClick = (e: MouseEvent) => spawnClick(e.clientX, e.clientY);
    window.addEventListener("click", onClick);

    const trace = (pts: Pt[]) => {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    };

    // ── Draw one arc (glow pass + hot core) ────────────────
    const drawArc = (pts: Pt[], intensity: number, alpha = 1) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      trace(pts);
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 3 + intensity * 5 + Math.random() * 2;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 8 + intensity * 22;
      ctx.stroke();

      trace(pts);
      ctx.strokeStyle = arcColor;
      ctx.lineWidth = 0.8 + intensity;
      ctx.shadowBlur = 0;
      ctx.stroke();

      ctx.restore();
    };

    // ── Draw one idle/click spark (with its forks) ─────────
    const drawSpark = (spark: Spark) => {
      const a = spark.life / spark.maxLife;
      // quick flare in, long fade out, with a random strobe on twitchy ones
      const attack = Math.min(1, spark.age / 3);
      const strobe = spark.twitch ? (Math.random() < 0.14 ? 0.25 : 1) : 1;
      const alpha = Math.min(1, a * 1.15) * attack * strobe * 0.95;

      const paths = [spark.points, ...spark.forks];
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowColor = glowColor;

      // glow
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 2.2 + a * 3;
      ctx.shadowBlur = 6 + a * 14;
      for (const p of paths) {
        trace(p);
        ctx.stroke();
      }
      // hot core
      ctx.strokeStyle = arcColor;
      ctx.lineWidth = 0.6 + a * 1.3;
      ctx.shadowBlur = 0;
      for (const p of paths) {
        trace(p);
        ctx.stroke();
      }
      ctx.restore();
    };

    // Remember the last arc so it can linger (afterglow) once the cursor leaves
    let ghost: { tx: number; ty: number; intensity: number; life: number } | null = null;

    let raf: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my } = mouseRef.current;

      // ── Idle sparks ─────────────────────────────────────
      if (mx !== 0 && Math.random() < IDLE.chance) spawnIdle(mx, my);

      // ── Draw & age sparks ───────────────────────────────
      sparksRef.current = sparksRef.current.filter((s) => s.life > 0);
      for (const spark of sparksRef.current) {
        if (spark.twitch && spark.age > 0 && spark.age % IDLE.twitchEvery === 0) {
          // re-roll the zig-zag: same origin, same direction, new kinks
          const wobble = spark.angle + rand(-0.12, 0.12);
          spark.points = jaggedPath(
            spark.ox,
            spark.oy,
            wobble,
            spark.len * rand(0.92, 1.08),
            5 + Math.floor(Math.random() * 4),
            0.42,
          );
          spark.forks = buildForks(spark.points, spark.len, IDLE.forkChance);
        }
        drawSpark(spark);
        spark.life--;
        spark.age++;
      }

      if (mx === 0 && my === 0) {
        raf = requestAnimationFrame(render);
        return;
      }

      // ── Find nearest target ─────────────────────────────
      const targets = document.querySelectorAll("[data-arc-target]");
      let best: { cx: number; cy: number; dist: number; rect: DOMRect } | null = null;

      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = Math.max(r.left, Math.min(mx, r.right));
        const cy = Math.max(r.top, Math.min(my, r.bottom));
        const d = Math.hypot(mx - cx, my - cy);
        if (d < snapDistance && (!best || d < best.dist))
          best = { cx, cy, dist: d, rect: r };
      });

      if (best) {
        const { cx, cy, dist, rect } = best as {
          cx: number;
          cy: number;
          dist: number;
          rect: DOMRect;
        };

        // intensity curve: eases in faster as you approach
        const intensity = Math.pow(1 - dist / snapDistance, 1.1);

        // More chaos when close — displacement grows with intensity
        const disp = (dist / branching) * (1 + intensity * 0.7);

        // ── Primary arc ───────────────────────────────────
        const primaryPts = lightning(mx, my, cx, cy, disp);
        drawArc(primaryPts, intensity, 0.85 + intensity * 0.15);
        ghost = { tx: cx, ty: cy, intensity, life: AFTERGLOW_FRAMES };

        // ── Little forks branching off the main bolt ──────
        if (intensity > 0.45 && primaryPts.length > 3) {
          const forks = buildForks(primaryPts, 40 + intensity * 50, 0.7);
          for (const f of forks) drawArc(f, intensity * 0.45, 0.5);
        }

        // ── Secondary spread arcs (kick in past ~30% intensity) ─
        if (intensity > 0.3) {
          const secCount = intensity > 0.65 ? 2 : 1;

          for (let s = 0; s < secCount; s++) {
            const hitOnV = cx === rect.left || cx === rect.right; // vertical edge
            const spreadPx = 20 + s * 18 + intensity * 25;

            let sx: number, sy: number;
            if (hitOnV) {
              sx = cx;
              sy = cy + (s % 2 === 0 ? 1 : -1) * (spreadPx * (0.5 + Math.random() * 0.5));
              sy = Math.max(rect.top, Math.min(sy, rect.bottom));
            } else {
              sx = cx + (s % 2 === 0 ? 1 : -1) * (spreadPx * (0.5 + Math.random() * 0.5));
              sx = Math.max(rect.left, Math.min(sx, rect.right));
              sy = cy;
            }

            const sdist = Math.hypot(mx - sx, my - sy);
            const spts = lightning(mx, my, sx, sy, (sdist / branching) * (1 + intensity * 0.5));
            const salpha = ((intensity - 0.3) / 0.7) * (s === 0 ? 0.55 : 0.35);
            drawArc(spts, intensity * 0.65, salpha);
          }
        }
      } else if (ghost && ghost.life > 0) {
        // Cursor just left the target: let the arc sputter out instead of
        // vanishing on the very next frame.
        const t = ghost.life / AFTERGLOW_FRAMES;
        const gdist = Math.hypot(mx - ghost.tx, my - ghost.ty);
        if (gdist > 4) {
          const pts = lightning(mx, my, ghost.tx, ghost.ty, (gdist / branching) * 1.2);
          drawArc(pts, ghost.intensity * t * 0.8, t * 0.7 * (Math.random() < 0.2 ? 0.3 : 1));
        }
        ghost.life--;
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
    };
  }, [snapDistance, arcColor, glowColor, branching]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default ElectricArcCursor;
