import React, { useEffect, useRef } from 'react';

interface ArcCursorProps {
  snapDistance?: number;
  arcColor?: string;
  glowColor?: string;
  branching?: number;
}

interface Spark {
  points: { x: number; y: number }[];
  life: number;
  maxLife: number;
}

export const ElectricArcCursor: React.FC<ArcCursorProps> = ({
  snapDistance = 150,
  arcColor = '#ffffff',
  glowColor = '#00d2ff',
  branching = 2.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef  = useRef({ x: 0, y: 0 });
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove);

    // ── Lightning path (midpoint displacement) ─────────────
    const lightning = (
      x1: number, y1: number, x2: number, y2: number, disp: number
    ): { x: number; y: number }[] => {
      const pts = [{ x: x1, y: y1 }, { x: x2, y: y2 }];
      const sub = (a: number, b: number, d: number) => {
        const pa = pts[a], pb = pts[b];
        const dx = pb.x - pa.x, dy = pb.y - pa.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        if (len < 5) return;
        const mx = (pa.x + pb.x) / 2, my = (pa.y + pb.y) / 2;
        const nx = -dy / len, ny = dx / len;
        const off = (Math.random() - 0.5) * d;
        pts.splice(a + 1, 0, { x: mx + nx * off, y: my + ny * off });
        sub(a, a + 1, d * 0.5);
        sub(a + 1, b + 1, d * 0.5);
      };
      sub(0, 1, disp);
      return pts;
    };

    // ── Build a short spark shape ───────────────────────────
    const buildSpark = (ox: number, oy: number, angle: number, len: number): Spark => {
      const segs = 3 + Math.floor(Math.random() * 3);
      const pts: { x: number; y: number }[] = [];
      for (let i = 0; i <= segs; i++) {
        const t = i / segs;
        const bx = ox + Math.cos(angle) * len * t;
        const by = oy + Math.sin(angle) * len * t;
        const perp = angle + Math.PI / 2;
        const jit = (Math.random() - 0.5) * len * 0.45 * (1 - t * 0.6);
        pts.push({ x: bx + Math.cos(perp) * jit, y: by + Math.sin(perp) * jit });
      }
      const life = 7 + Math.floor(Math.random() * 7);
      return { points: pts, life, maxLife: life };
    };

    const spawnIdle = (x: number, y: number) => {
      const n = 1 + Math.floor(Math.random() * 2);
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const l = 4 + Math.random() * 14;
        sparksRef.current.push(buildSpark(x, y, a, l));
      }
    };

    const spawnClick = (x: number, y: number) => {
      const n = 8 + Math.floor(Math.random() * 5);
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.6;
        const l = 14 + Math.random() * 30;
        sparksRef.current.push(buildSpark(x, y, a, l));
      }
    };

    const onClick = (e: MouseEvent) => spawnClick(e.clientX, e.clientY);
    window.addEventListener('click', onClick);

    // ── Draw one arc ────────────────────────────────────────
    const drawArc = (
      pts: { x: number; y: number }[],
      intensity: number,
      alpha = 1
    ) => {
      ctx.save();
      ctx.globalAlpha = alpha;

      // Glow pass — width and blur scale with intensity
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.strokeStyle  = glowColor;
      ctx.lineWidth    = 3 + intensity * 5 + Math.random() * 2;
      ctx.shadowColor  = glowColor;
      ctx.shadowBlur   = 8 + intensity * 22;
      ctx.lineCap      = 'round';
      ctx.lineJoin     = 'round';
      ctx.stroke();

      // Core pass
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.strokeStyle = arcColor;
      ctx.lineWidth   = 0.8 + intensity;
      ctx.shadowBlur  = 0;
      ctx.stroke();

      ctx.restore();
    };

    let raf: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my } = mouseRef.current;

      // ── Idle sparks — very rare, ~once every 5-8 s ──────
      if (mx !== 0 && Math.random() < 0.003) spawnIdle(mx, my);

      // ── Draw & age sparks ───────────────────────────────
      sparksRef.current = sparksRef.current.filter(s => s.life > 0);
      for (const spark of sparksRef.current) {
        const a = spark.life / spark.maxLife;
        ctx.save();
        ctx.globalAlpha = a * 0.85;
        ctx.beginPath();
        ctx.moveTo(spark.points[0].x, spark.points[0].y);
        for (let i = 1; i < spark.points.length; i++) ctx.lineTo(spark.points[i].x, spark.points[i].y);
        ctx.strokeStyle = arcColor;
        ctx.lineWidth   = 0.5 + a * 1.2;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur  = 5 * a;
        ctx.lineCap     = 'round';
        ctx.stroke();
        ctx.restore();
        spark.life--;
      }

      if (mx === 0 && my === 0) { raf = requestAnimationFrame(render); return; }

      // ── Find nearest target ─────────────────────────────
      const targets = document.querySelectorAll('[data-arc-target]');
      let best: { cx: number; cy: number; dist: number; rect: DOMRect } | null = null;

      targets.forEach(el => {
        const r  = el.getBoundingClientRect();
        const cx = Math.max(r.left, Math.min(mx, r.right));
        const cy = Math.max(r.top,  Math.min(my, r.bottom));
        const d  = Math.hypot(mx - cx, my - cy);
        if (d < snapDistance && (!best || d < best.dist))
          best = { cx, cy, dist: d, rect: r };
      });

      if (best) {
        const { cx, cy, dist, rect } = best as { cx: number; cy: number; dist: number; rect: DOMRect };

        // intensity curve: eases in faster as you approach
        const intensity = Math.pow(1 - dist / snapDistance, 1.1);

        // More chaos when close — displacement grows with intensity
        const disp = (dist / branching) * (1 + intensity * 0.7);

        // ── Primary arc ───────────────────────────────────
        const primaryPts = lightning(mx, my, cx, cy, disp);
        drawArc(primaryPts, intensity, 0.85 + intensity * 0.15);

        // ── Secondary spread arcs (kick in past ~30% intensity) ─
        if (intensity > 0.3) {
          // How many secondary arcs: 1 at medium, 2 at high intensity
          const secCount = intensity > 0.65 ? 2 : 1;

          for (let s = 0; s < secCount; s++) {
            // Spread along the element's nearest edge
            const edgeW = rect.right - rect.left;
            const edgeH = rect.bottom - rect.top;

            // Determine primary hit axis and spread perpendicular to it
            const hitOnV = cx === rect.left || cx === rect.right; // vertical edge
            const spreadPx = 20 + s * 18 + intensity * 25;

            let sx: number, sy: number;
            if (hitOnV) {
              // Spread vertically along the left/right edge
              sx = cx;
              sy = cy + (s % 2 === 0 ? 1 : -1) * (spreadPx * (0.5 + Math.random() * 0.5));
              sy = Math.max(rect.top, Math.min(sy, rect.bottom));
            } else {
              // Spread horizontally along the top/bottom edge
              sx = cx + (s % 2 === 0 ? 1 : -1) * (spreadPx * (0.5 + Math.random() * 0.5));
              sx = Math.max(rect.left, Math.min(sx, rect.right));
              sy = cy;
            }

            const sdist = Math.hypot(mx - sx, my - sy);
            const spts  = lightning(mx, my, sx, sy, sdist / branching * (1 + intensity * 0.5));
            const salpha = (intensity - 0.3) / 0.7 * (s === 0 ? 0.55 : 0.35);
            drawArc(spts, intensity * 0.65, salpha);
          }
        }
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      cancelAnimationFrame(raf);
    };
  }, [snapDistance, arcColor, glowColor, branching]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};
