import { useCallback, useEffect, useRef, useState } from "react";
import useMediaQuery from "./useMediaQuery";

/**
 * State + behaviour of the mobile nav menu:
 * - closes with Esc (focus goes back to the toggle), and when the layout
 *   switches back to desktop
 * - locks page scroll while open (html.menu-open in index.css)
 * Tapping the backdrop / a link is handled by the caller through `close`.
 */
export default function useMobileMenu(mobileQuery = "(max-width: 720px)") {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isMobile = useMediaQuery(mobileQuery);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  // Leaving the mobile layout (resize / rotate) closes the menu
  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("menu-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return { open, toggle, close, toggleRef };
}
