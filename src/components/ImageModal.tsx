import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface ModalImage {
  src: string;
  alt: string;
}

interface ImageModalProps {
  open: boolean;
  images: ModalImage[];
  /** Short caption shown in the top bar (e.g. the step title). */
  title?: string;
  startIndex?: number;
  onClose: () => void;
}

const EXIT_MS = 280;

const FOCUSABLE =
  'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';

/**
 * Full-screen image viewer matching the portfolio's design system.
 * - Closes with Esc, the backdrop, or the close button
 * - ← / → (and on-screen arrows) browse when there are several images
 * - Locks page scroll, traps focus and restores it on close
 */
export default function ImageModal({
  open,
  images,
  title,
  startIndex = 0,
  onClose,
}: ImageModalProps) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);
  const [index, setIndex] = useState(startIndex);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusTo = useRef<HTMLElement | null>(null);

  const count = images.length;
  const hasMany = count > 1;

  // ── mount / unmount with enter + exit transitions ────────
  useEffect(() => {
    if (open) {
      returnFocusTo.current = document.activeElement as HTMLElement | null;
      setIndex(startIndex);
      setMounted(true);
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setShown(true)),
      );
      return () => cancelAnimationFrame(raf);
    }
    setShown(false);
    const t = window.setTimeout(() => {
      setMounted(false);
      returnFocusTo.current?.focus?.({ preventScroll: true });
    }, EXIT_MS);
    return () => window.clearTimeout(t);
  }, [open, startIndex]);

  // ── lock page scroll while open ──────────────────────────
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.add("modal-open");
    return () => document.documentElement.classList.remove("modal-open");
  }, [mounted]);

  // ── move focus into the dialog ───────────────────────────
  useEffect(() => {
    if (shown) closeRef.current?.focus({ preventScroll: true });
  }, [shown]);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  // ── keyboard: Esc, arrows, Tab trap ──────────────────────
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight" && hasMany) {
        go(1);
      } else if (e.key === "ArrowLeft" && hasMany) {
        go(-1);
      } else if (e.key === "Tab" && dialogRef.current) {
        const items = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
        );
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        } else if (!dialogRef.current.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, hasMany, go, onClose]);

  if (!mounted || count === 0) return null;
  const current = images[Math.min(index, count - 1)];

  return createPortal(
    <div
      className={`modal-root ${shown ? "is-open" : ""}`}
      role="presentation"
    >
      <div className="modal-backdrop" onClick={onClose} />
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title ?? current.alt}
        ref={dialogRef}
      >
        <div className="modal-bar">
          <div className="modal-caption">
            <span className="modal-caption-tag">Agrandissement</span>
            {title && <span className="modal-caption-title">{title}</span>}
          </div>
          <div className="modal-controls">
            {hasMany && (
              <>
                <span className="modal-counter" aria-live="polite">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  className="modal-btn modal-btn-icon"
                  data-arc-target
                  aria-label="Image précédente"
                  onClick={() => go(-1)}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="modal-btn modal-btn-icon"
                  data-arc-target
                  aria-label="Image suivante"
                  onClick={() => go(1)}
                >
                  →
                </button>
              </>
            )}
            <button
              type="button"
              className="modal-btn modal-btn-close"
              data-arc-target
              ref={closeRef}
              onClick={onClose}
            >
              Fermer <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>

        <div className="modal-frame" data-arc-target>
          <img
            key={current.src}
            className="modal-image"
            src={current.src}
            alt={current.alt}
            draggable={false}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
