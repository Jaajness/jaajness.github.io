import { useNavigate, useParams } from "react-router";
import ZoomMedia from "../components/ZoomMedia";
import NotFound from "./NotFound";
import { PROJECTS } from "../data/projects";
import DynamicPageTitle from "../components/DynamicPageTitle";

function DetailHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="detail-heading">
      <span>—</span>
      <h2>{children}</h2>
    </div>
  );
}

function renderBold(text: string) {
  return text
    .split("**")
    .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

function ProjectImage({
  src,
  alt,
  className = "",
  play = false,
  zoomTitle,
}: {
  src?: string | string[];
  alt: string;
  className?: string;
  play?: boolean;
  /** When set (and there is at least one image), clicking opens a modal with this title. */
  zoomTitle?: string;
}) {
  const sources = src ? (Array.isArray(src) ? src : [src]) : [];

  // Opens in a modal when asked to (zoomTitle) or as soon as there are
  // several images to browse. A "video" slot (play overlay) stays a plain frame.
  const isGallery = sources.length > 1 && !play;

  if (sources.length > 0 && (zoomTitle || isGallery)) {
    return (
      <ZoomMedia
        className={className}
        title={zoomTitle ?? alt}
        images={sources.map((source, index) => ({
          src: source,
          alt: index === 0 ? alt : `${alt} (${index + 1}/${sources.length})`,
        }))}
      />
    );
  }

  return (
    <div className={`project-media ${className}`} data-arc-target>
      {sources.length > 0 ? (
        <img src={sources[0]} alt={alt} />
      ) : (
        <span>{alt}</span>
      )}
      {play && (
        <img
          className="project-play"
          src="/assets/icon-play-overlay.svg"
          alt=""
        />
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const index = PROJECTS.findIndex((item) => item.slug === slug);
  const project = PROJECTS[index];
  DynamicPageTitle(project ? project.title : "Page introuvable");

  if (!project) return <NotFound />;

  const media = project.media;

  const isUnity = project.id === 1;
  const nextProject = PROJECTS[index + 1] ?? null;
  const previousProject = PROJECTS[index - 1] ?? null;

  return (
    <>
      <main className="project-detail">
        <ProjectImage
          src={media?.hero}
          alt={`Image principale du projet ${project.title}`}
          className="detail-cover"
        />

        <section className="detail-intro">
          <div className="container">
            <div className="detail-meta">
              <span>{String(project.id).padStart(2, "0")}</span>
              <span>·</span>
              <span>{project.platform}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h1>{project.title}</h1>
            <p className="detail-tagline">{project.tagline}</p>
            <div className="detail-info">
              <div>
                <small>Rôle</small>
                <span>{project.role}</span>
              </div>
              <div>
                <small>Outils</small>
                <span>{project.tools.join(" · ")}</span>
              </div>
              <div>
                <small>Collaboration</small>
                <span>{project.collaboration}</span>
              </div>
            </div>
            <aside
              className="project-ai-disclosure"
              aria-labelledby="project-ai-title"
            >
              <div>
                <small id="project-ai-title">
                  Utilisation de l’IA — projet
                </small>
                <p>{project.aiProject}</p>
              </div>
              <div>
                <small>Utilisation de l’IA — présentation</small>
                <p>{project.aiPresentation}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="detail-section detail-section-alt">
          <div className="container detail-context">
            <div>
              <DetailHeading>Contexte</DetailHeading>
              <p className="detail-lead">{renderBold(project.overview)}</p>
            </div>
            <ProjectImage
              src={media?.context}
              alt={`Contexte de ${project.title}`}
              className="context-media"
            />
          </div>
        </section>

        <section className="detail-section">
          <div className="container">
            <DetailHeading>Démarche</DetailHeading>
            <div className="steps-list">
              {project.process.map((step, stepIndex) => (
                <article
                  key={step.step}
                  className={`step-row ${stepIndex % 2 ? "step-row-reverse" : ""}`}
                >
                  <div className="step-text">
                    <span className="step-num">{step.step}</span>
                    <h3>{step.title}</h3>
                    <p>{renderBold(step.body)}</p>
                  </div>
                  <ProjectImage
                    src={media?.steps?.[stepIndex]}
                    alt={step.mediaLabel}
                    className="step-media"
                    zoomTitle={step.title}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-section detail-section-alt results-section">
          <div className="container">
            <div className="results-copy">
              <DetailHeading>Résultats</DetailHeading>
              <ul className="detail-outcomes">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>
                    <span className="skill-bullet" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <ProjectImage
              src={media?.result}
              alt={`Résultat final de ${project.title}`}
              className="result-media"
              play={media?.resultIsVideo}
            />
            {!!project.challenges?.length && (
              <div className="challenges">
                <DetailHeading>Défis &amp; solutions</DetailHeading>
                <ul className="detail-outcomes">
                  {project.challenges.map((challenge) => (
                    <li key={challenge.problem}>
                      <span className="skill-bullet" />
                      <span>
                        {challenge.problem} → {renderBold(challenge.solution)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>

      <nav className="detail-nav-projects">
        <div className="container detail-nav-projects-inner">
          <div>
            {previousProject && (
              <button
                onClick={() => navigate(`/projet/${previousProject.slug}`)}
              >
                ← Projet précédent
                <br />
                <strong>{previousProject.title}</strong>
              </button>
            )}
          </div>
          <button onClick={() => navigate("/")}>Tous les projets</button>
          <div>
            {nextProject && (
              <button onClick={() => navigate(`/projet/${nextProject.slug}`)}>
                Projet suivant →<br />
                <strong>{nextProject.title}</strong>
              </button>
            )}
          </div>
        </div>
      </nav>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Éli Bousquet · 2026</span>
          <div className="footer-right">
            <span>Animation · Jeux vidéo · Web</span>
            <a href="/declaration-ia" className="btn-nav" data-arc-target>
              Déclaration IA
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
