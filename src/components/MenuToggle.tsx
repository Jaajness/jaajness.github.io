import { forwardRef } from "react";

interface MenuToggleProps {
  open: boolean;
  onToggle: () => void;
  /** id of the menu this button opens (for aria-controls) */
  controlsId: string;
}

/**
 * Hamburger button for the mobile nav. The three bars morph into a "✕" when
 * the menu is open (see .menu-bars in index.css). Touch target is 44×44.
 */
const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(
  function MenuToggle({ open, onToggle, controlsId }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={`nav-menu-toggle ${open ? "is-open" : ""}`}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls={controlsId}
        onClick={onToggle}
      >
        <span className="menu-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
    );
  },
);

export default MenuToggle;
