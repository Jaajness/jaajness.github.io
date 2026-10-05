import { useNavigate, useParams } from "react-router"
import { PROJECTS } from "../data/projects"

const UNITY_ASSETS = {
  hero: "/assets/3d6ef.png",
  context: "/assets/713af.png",
  steps: [
    "/assets/df16b.png",
    "/assets/2456e.png",
    "/assets/9dcdf.png",
    ["/assets/22a0e.png", "/assets/5358b.png"],
    "/assets/7cf07.png",
  ],
  result: "/assets/a6928.png",
}

function DetailHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="detail-heading">
      <span>—</span>
      <h2>{children}</h2>
    </div>
  )
}

function ProjectImage({
  src,
  alt,
  className = "",
  play = false,
}: {
  src?: string | string[]
  alt: string
  className?: string
  play?: boolean
}) {
  const sources = src ? (Array.isArray(src) ? src : [src]) : []

  return (
    <div className={`project-media ${className}`} data-arc-target>
      {sources.length > 0
        ? sources.map((source, index) => <img key={source} src={source} alt={index === 0 ? alt : ""} />)
        : <span>{alt}</span>}
      {play && <img className="project-play" src="/assets/6c2f4.svg" alt="" />}
    </div>
  )
}

const UNITY_PROCESS_COPY = [
  <>
    Définir le <strong>concept de jeu</strong>, les <strong>mécaniques principales</strong> et les{" "}
    <strong>boucles de gameplay</strong> dans un document et/ou avec des notes pour voir l’
    <strong>aspect global</strong> du jeu et ainsi <strong>planifier</strong> les objets à aller chercher, les modèles
    et fichiers audio à intégrer, le code à réaliser, etc.
  </>,
  <>
    <strong>Programmation</strong> des <strong>systèmes de personnage</strong>, de <strong>physique</strong> et de{" "}
    <strong>progression</strong> en <strong>C#</strong> pour tester et rapidement créer un{" "}
    <strong>environnement interactif</strong> sans se soucier des textures, objets, environnement, etc. Mise en place
    de l’architecture de <strong>code modulaire</strong> et réutilisable.
  </>,
  <>
    <strong>Modélisation et rigging</strong> des <strong>personnages</strong> dans <strong>Blender</strong>, puis
    intégration des animations dans Unity via l’<strong>Animator Controller</strong>. <strong>Création</strong> des{" "}
    <strong>assets visuels</strong> du projet. Le jeu doit avoir son <strong>aspect “vivant”</strong> pour pouvoir{" "}
    <strong>intégrer le son</strong> et le reste.
  </>,
  <>
    <strong>Intégration</strong> de la <strong>bande sonore</strong>, des <strong>effets sonores</strong> et des{" "}
    <strong>effets visuels</strong>, utilisant les principes de son 2D et 3D ainsi que la bonne utilisation de{" "}
    <strong>loop audio</strong>. Travail sur le <strong>polish global</strong> pour renforcer le{" "}
    <strong>ressenti de jeu</strong>.
  </>,
  <>
    <strong>Tests fonctionnels</strong> complets, <strong>correction des bugs</strong>, <strong>optimisation</strong>{" "}
    des performances pour permettre une expérience agréable et intéressante. Production de la{" "}
    <strong>build finale jouable</strong> et <strong>documentation</strong> du projet.
  </>,
]

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const index = PROJECTS.findIndex((item) => item.slug === slug)
  const project = PROJECTS[index]

  if (!project) {
    return (
      <main className="detail-not-found">
        <div className="container">
          <p>Projet introuvable.</p>
          <button className="btn-secondary" onClick={() => navigate("/")}>← Retour</button>
        </div>
      </main>
    )
  }

  const isUnity = project.id === 1
  const nextProject = PROJECTS[index + 1] ?? null
  const previousProject = PROJECTS[index - 1] ?? null

  return (
    <>
      <main className="project-detail">
        <ProjectImage
          src={isUnity ? UNITY_ASSETS.hero : undefined}
          alt={`Image principale du projet ${project.title}`}
          className="detail-cover"
        />

        <section className="detail-intro">
          <div className="container">
            <div className="detail-meta">
              <span>{String(project.id).padStart(2, "0")}</span>
              <span>·</span><span>{project.platform}</span>
              <span>·</span><span>{project.year}</span>
            </div>
            <h1>{project.title}</h1>
            <p className="detail-tagline">{project.tagline}</p>
            <div className="detail-info">
              <div><small>Rôle</small><span>{project.role}</span></div>
              <div><small>Plateforme</small><span>{project.platform}</span></div>
              <div><small>Année</small><span>{project.year}</span></div>
              <div><small>Outils</small><span>{project.tools.join(" · ")}</span></div>
              <div><small>Collaboration</small><span>{project.collaboration}</span></div>
            </div>
            <aside className="project-ai-disclosure" aria-labelledby="project-ai-title">
              <div>
                <small id="project-ai-title">Utilisation de l’IA — projet</small>
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
              <p className="detail-lead">
                {isUnity ? (
                  <>
                    Conception d’un <strong>jeu 3D éducatif</strong> avec une <strong>thématique écologique</strong>{" "}
                    (sauvegarde de l’environnement, recyclage, le compost, espèces menacées). Le joueur doit{" "}
                    <strong>se déplacer</strong> en utilisant les touches du clavier pour{" "}
                    <strong>collecter des objets</strong> et <strong>éviter des obstacles</strong>. Le but du jeu est
                    de <strong>sensibiliser les joueurs</strong> aux enjeux environnementaux tout en les{" "}
                    <strong>divertissant</strong>.
                  </>
                ) : project.overview}
              </p>
            </div>
            <ProjectImage src={isUnity ? UNITY_ASSETS.context : undefined} alt={`Contexte de ${project.title}`} className="context-media" />
          </div>
        </section>

        <section className="detail-section">
          <div className="container">
            <DetailHeading>Démarche</DetailHeading>
            <div className="steps-list">
              {project.process.map((step, stepIndex) => (
                <article key={step.step} className={`step-row ${stepIndex % 2 ? "step-row-reverse" : ""}`}>
                  <div className="step-text">
                    <span className="step-num">{step.step}</span>
                    <h3>{step.title}</h3>
                    <p>{isUnity ? UNITY_PROCESS_COPY[stepIndex] : step.body}</p>
                  </div>
                  <ProjectImage
                    src={isUnity ? UNITY_ASSETS.steps[stepIndex] : undefined}
                    alt={step.mediaLabel}
                    className="step-media"
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
                {project.outcomes.map((outcome) => <li key={outcome}><span className="skill-bullet" />{outcome}</li>)}
              </ul>
            </div>
            <ProjectImage
              src={isUnity ? UNITY_ASSETS.result : undefined}
              alt={`Résultat final de ${project.title}`}
              className="result-media"
              play={isUnity}
            />
            {isUnity && (
              <div className="challenges">
                <DetailHeading>Défis &amp; solutions</DetailHeading>
                <ul className="detail-outcomes">
                  <li>
                    <span className="skill-bullet" />
                    <span>La scène manquait d’effets de noirceur → <strong>recherches</strong> sur le <strong>post-processing</strong></span>
                  </li>
                  <li>
                    <span className="skill-bullet" />
                    <span>Les ennemis devaient avoir un comportement réaliste → <strong>Programmation</strong> d’un{" "}
                    <strong>système de vision</strong> et réaction selon la <strong>distance</strong>, le temps
                    d’entrée dans le <strong>champ de vision</strong> et la <strong>position</strong> du personnage
                    (debout ou accroupi)</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      </main>

      <nav className="detail-nav-projects">
        <div className="container detail-nav-projects-inner">
          <div>
            {previousProject && <button onClick={() => navigate(`/projet/${previousProject.slug}`)}>← Projet précédent<br /><strong>{previousProject.title}</strong></button>}
          </div>
          <button onClick={() => navigate("/")}>Tous les projets</button>
          <div>
            {nextProject && <button onClick={() => navigate(`/projet/${nextProject.slug}`)}>Projet suivant →<br /><strong>{nextProject.title}</strong></button>}
          </div>
        </div>
      </nav>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Éli Bousquet · 2026</span>
          <span>Animation · Jeux vidéo · Web</span>
        </div>
      </footer>
    </>
  )
}
