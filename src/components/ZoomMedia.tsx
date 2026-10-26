import { useCallback, useState } from "react";
import ImageModal, { type ModalImage } from "./ImageModal";

interface ZoomMediaProps {
  images: ModalImage[];
  /** Extra classes for the frame (e.g. "award-media" or "step-media"). */
  className?: string;
  /** Title displayed in the modal's top bar. */
  title?: string;
}

/**
 * A framed image that opens in a modal when clicked.
 * On hover the bottom-right corner bracket morphs into a "+" (see .zoom-hint
 * in index.css) so visitors know it can be opened.
 */
export default function ZoomMedia({ images, className = "", title }: ZoomMediaProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  if (images.length === 0) return null;
  const label = title ?? images[0].alt;
  const first = images[0];
  const extra = images.length - 1;

  return (
    <>
      <div className={`project-media is-zoomable ${className}`} data-arc-target>
        {/* Only the first image is shown on the card; the others are browsed in the modal */}
        <img src={first.src} alt={first.alt} />
        {extra > 0 && (
          <i className="zoom-count" aria-hidden="true">
            {images.length} images
          </i>
        )}
        <button
          type="button"
          className="zoom-trigger"
          aria-haspopup="dialog"
          aria-label={
            extra > 0
              ? `Voir les ${images.length} images : ${label}`
              : `Agrandir l’image : ${label}`
          }
          onClick={() => setOpen(true)}
        />
        <i className="zoom-hint" aria-hidden="true">
          <b className="zoom-hint-v" />
          <b className="zoom-hint-h" />
        </i>
      </div>
      <ImageModal open={open} images={images} title={title} onClose={close} />
    </>
  );
}
