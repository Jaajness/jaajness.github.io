import type { CSSProperties } from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  image: string;
  awarded?: boolean;
  /**
   * Show the "hovered" state permanently (blurred cover, number, title,
   * description and footer). Used by the mobile swiper where hover doesn't exist.
   */
  revealed?: boolean;
  /** Overrides object-position of the cover (the grid does it with :nth-child). */
  imagePosition?: string;
  onOpen: (slug: string) => void;
}

export default function ProjectCard({
  project,
  image,
  awarded = false,
  revealed = false,
  imagePosition,
  onOpen,
}: ProjectCardProps) {
  const imgStyle: CSSProperties | undefined = imagePosition
    ? { objectPosition: imagePosition }
    : undefined;

  return (
    <button
      type="button"
      className={[
        "project-card",
        awarded ? "project-card-awarded" : "",
        revealed ? "is-revealed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-arc-target
      onClick={() => onOpen(project.slug)}
    >
      <img src={image} alt="" style={imgStyle} />
      <span className="project-card-shade" />

      <span className="project-card-details">
        <span className="project-card-number">
          {String(project.id).padStart(2, "0")}
        </span>
        <span className="project-card-detail-title">{project.title}</span>
        <span className="project-card-description">{project.tagline}</span>
        <span className="project-card-footer">
          <span>{project.platform}</span>
          <span>Voir →</span>
        </span>
      </span>
      <span className="project-spark" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
      {awarded && (
        <span className="project-award" aria-hidden="true">
          <img src="/assets/icon-award-badge.svg" alt="" />
        </span>
      )}
    </button>
  );
}
