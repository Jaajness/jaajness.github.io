import { useEffect } from "react";
import { DEFAULT_TITLE, SITE_NAME, TITLE_SEPARATOR } from "../data/site";

export default function DynamicPageTitle(title?: string) {
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
