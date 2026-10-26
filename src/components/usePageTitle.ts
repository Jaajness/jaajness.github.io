import { useEffect } from "react";
import { DEFAULT_TITLE, SITE_NAME, TITLE_SEPARATOR } from "../data/site";

/**
 * Sets the browser tab title, the React version of:
 *   <title><?php the_title() ?> | <?php bloginfo('name'); ?></title>
 *
 *   usePageTitle("Jeu vidéo Unity")  →  "Jeu vidéo Unity | Éli Bousquet"
 *   usePageTitle()                   →  "Éli Bousquet | Portfolio"
 *
 * The previous title is restored when the page unmounts, so a page can never
 * leave a stale title behind.
 */
export default function usePageTitle(title?: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title
      ? `${title}${TITLE_SEPARATOR}${SITE_NAME}`
      : DEFAULT_TITLE;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
