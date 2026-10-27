interface SiteShowcaseProps {
  /** Screenshot of the website */
  image?: string;
  /** Address of the site. Without it, only the image is shown. */
  url?: string;
  /** Name of the project (used for the alt text and accessible labels) */
  title: string;
  /** Text of the link under the image */
  label?: string;
  className?: string;
}

function getHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * Screenshot of a website + a text link (like the "Voir →" of the project
 * cards). Clicking the image or the link opens the site in a new tab.
 */
export default function SiteShowcase({
  image,
  url,
  title,
  label = "Voir le site",
  className = "",
}: SiteShowcaseProps) {
  const alt = `Aperçu du site ${title}`;
  const picture = image ? <img src={image} alt={alt} /> : <span>{alt}</span>;

  return (
    <div className={`site-showcase ${className}`}>
      {url ? (
        <a
          className="project-media site-frame"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          data-arc-target
          // The text link below is the accessible one; avoid a double tab stop
          tabIndex={-1}
          aria-hidden="true"
        >
          {picture}
          <i className="site-open">Ouvrir ↗</i>
        </a>
      ) : (
        <div className="project-media site-frame" data-arc-target>
          {picture}
        </div>
      )}

      {url && (
        <div className="site-link-row">
          <span className="site-link-host">{getHostname(url)}</span>
          <a
            className="site-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            data-arc-target
            aria-label={`${label} : ${title} (s’ouvre dans un nouvel onglet)`}
          >
            {label} <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </div>
  );
}
