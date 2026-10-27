import { Link, useNavigate } from "react-router";
import ProjectCard from "../components/ProjectCard";
import ProjectsSwiper from "../components/ProjectsSwiper";
import useMediaQuery from "../components/useMediaQuery";
import Youtube from "../components/Youtube";
import ZoomMedia from "../components/ZoomMedia";
import { PROJECTS } from "../data/projects";
import DynamicPageTitle from "../components/DynamicPageTitle";

const PRESENTATION_VIDEO_ID = "Vy3ycDYDWJo";

const SKILLS = [
  "Animation d’environnements 3D",
  "Développement de jeux vidéo de différents styles",
  "Montage vidéo et photo",
  "Développement Web sur plusieurs plateformes",
];

const SOFTWARE = [
  "Unity",
  "Unreal Engine",
  "Blender",
  "Reaper",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
];

const LANGUAGES = ["C#", "JavaScript", "Blueprint", "Python", "HTML / CSS"];
const SOFT_SKILLS = [
  "Bonne communication",
  "Patience",
  "Altruisme",
  "Imagination poussée",
  "Soucis du détail",
];

const HUB_LINKS: {
  label: string;
  desc: string;
  /** External link, opened in a new tab */
  href?: string;
  /** Internal route, navigated to in the same tab */
  to?: string;
  /** id of an element on this page: smooth-scrolls there (no navigation) */
  anchor?: string;
}[] = [
  {
    label: "Présentation",
    desc: "Vidéo de ma personne",
    anchor: "presentation",
  },
  {
    label: "LinkedIn",
    desc: "Réseau professionnel",
    href: "https://www.linkedin.com/in/%C3%A9li-bousquet-0aa1063b8/",
  },
  {
    label: "GitHub",
    desc: "Accès à mes projets",
    href: "https://github.com/Jaajness",
  },
  {
    label: "Artstation",
    desc: "Accès à mes animations",
    href: "https://www.artstation.com/eli-scott5",
  },
  {
    label: "Utilisation de l’IA",
    desc: "Déclaration",
    to: "/declaration-ia",
  },
];

// Height of the fixed nav (64px) + some breathing room
const NAV_OFFSET = 0;

/** Smooth-scrolls to an element of the page, keeping it clear of the fixed nav. */
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
};

const PROJECT_IMAGES = [
  "/assets/cover-unity-iceberg.png",
  "/assets/cover-unreal-lappel.png",
  "/assets/cover-unreal-equipe.png",
  "/assets/cover-project-x.png",
  "/assets/cover-q-tipousse.png",
  "/assets/cover-route-infini-3d.png",
];

const AWARD_PROJECT_SLUGS = new Set(["project-x", "q-tipousse"]);

// Same cover tweaks as the grid's :nth-child(3) / :nth-child(4) rules
const PROJECT_IMAGE_POSITIONS: Record<number, string> = {
  2: "35% center",
  3: "center 43%",
};

// No hover on touch screens, so cards are shown in a swiper instead of the grid
const SWIPER_QUERY = "(max-width: 720px), (hover: none)";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-header">
      <span className="section-tag">{number}</span>
      <h2 className="section-title">{children}</h2>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const useSwiper = useMediaQuery(SWIPER_QUERY);
  const openProject = (slug: string) => navigate(`/projet/${slug}`);

  DynamicPageTitle();

  return (
    <>
      <section id="hub" className="hero">
        <div className="hero-bg" />
        <div className="hero-scan" />
        <div className="hero-ring" />
        <div className="hero-art" aria-hidden="true">
          <img src="/assets/hero-art-character.png" alt="" />
        </div>
        <span className="hero-sidetag">Éli Bousquet — Portfolio 2026</span>
        <div className="hero-wrapper">
          <div className="container hero-inner">
            <div className="hero-content">
              <div className="hero-intro">
                <span className="hero-eyebrow">
                  <span className="pulse-dot" />
                  Portfolio
                </span>
                <strong>Développeur &amp; Animateur</strong>
              </div>
              <h1 className="hero-name">
                Éli
                <br />
                Bousquet
              </h1>
              <p className="hero-hook hero-hook-desktop">
                Une personne <strong>créative</strong> qui cherche à utiliser
                ses <strong>compétences</strong> et son <strong>énergie</strong>{" "}
                pour aider, ajoutant une touche unique à toute{" "}
                <strong>collaboration</strong>.
              </p>
              <p className="hero-hook hero-hook-mobile">
                Une personne énergique cherchant à offrir cette même énergie
                dans les projets abordés
              </p>
              <div className="hero-actions">
                <button
                  className="btn-primary"
                  data-arc-target
                  onClick={() => scrollTo("projets")}
                >
                  Voir les projets
                </button>
                <button
                  className="btn-secondary"
                  data-arc-target
                  onClick={() => scrollTo("a-propos")}
                >
                  À propos
                </button>
              </div>
            </div>

            <nav className="hub-nav" aria-label="Liens professionnels">
              {HUB_LINKS.map((item) => {
                const content = (
                  <>
                    <span className="hub-card-label">{item.label}</span>
                    <span className="hub-card-desc">{item.desc}</span>
                    <span className="hub-card-arrow">→</span>
                  </>
                );
                if (item.anchor) {
                  const id = item.anchor;
                  return (
                    <a
                      key={item.label}
                      className="hub-card"
                      href={`#${id}`}
                      data-arc-target
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToId(id);
                      }}
                    >
                      {content}
                    </a>
                  );
                }
                return item.to ? (
                  <Link
                    key={item.label}
                    className="hub-card"
                    to={item.to}
                    data-arc-target
                  >
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    className="hub-card"
                    href={item.href}
                    data-arc-target
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      <section id="a-propos" className="section about-section">
        <div className="container">
          <SectionHeading number="01">À propos</SectionHeading>
          <figure className="about-portrait about-portrait-mobile">
            <div className="about-portrait-frame">
              <img
                src="/assets/portrait-eli.png"
                alt="Portrait d’Éli Bousquet"
              />
            </div>
            <figcaption>Crédit: Image prise par Alexandre Donato</figcaption>
          </figure>
          <div className="about-grid">
            <div className="about-column">
              <p className="about-value-prop">
                Ma présence apporte dans les projets une{" "}
                <strong>grande force</strong> en <strong>programmation</strong>{" "}
                et en <strong>animation</strong>. Je contribue grandement dans
                les équipes de <strong>jeux-vidéo</strong>, de{" "}
                <strong>web</strong> et d’<strong>animation</strong>, grâce à
                mes compétences en <strong>codage</strong>, mon sens de la{" "}
                <strong>résolution de problèmes</strong> et ma{" "}
                <strong>créativité</strong>.
              </p>
              <button
                className="btn-primary"
                data-arc-target
                onClick={() => scrollTo("projets")}
              >
                Voir les projets
              </button>
              <div className="about-block">
                <h3 className="about-block-title">Compétences techniques</h3>
                <ul className="skill-list">
                  {SKILLS.map((skill) => (
                    <li key={skill} className="skill-item">
                      <span className="skill-bullet" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-block">
                <h3 className="about-block-title">Langages maîtrisés</h3>
                <div className="tool-grid">
                  {LANGUAGES.map((item) => (
                    <div key={item} className="tool-tag">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="about-block">
                <h3 className="about-block-title">Logiciels maîtrisés</h3>
                <div className="tool-grid">
                  {SOFTWARE.map((item, index) => (
                    <div key={`${item}-${index}`} className="tool-tag">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="about-column about-column-right">
              <figure className="about-portrait about-portrait-desktop">
                <div className="about-portrait-frame">
                  <img
                    src="/assets/portrait-eli.png"
                    alt="Portrait d’Éli Bousquet"
                  />
                </div>
                <figcaption>
                  Crédit: Image prise par Alexandre Donato
                </figcaption>
              </figure>
              <div className="about-block">
                <h3 className="about-block-title">Qualités humaines</h3>
                <div className="pill-grid">
                  {SOFT_SKILLS.map((item) => (
                    <span key={item} className="pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="about-block">
                <h3 className="about-block-title">Intérêts</h3>
                <div className="pill-grid">
                  {["Jeux-vidéos", "Mangas / Anime", "Arts"].map((item) => (
                    <span key={item} className="pill pill-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="feature-block awards-block">
            <SectionHeading number="—">Prix</SectionHeading>
            <div className="awards-list">
              <article className="award-row">
                <div className="award-copy">
                  <span className="step-num">01</span>
                  <h3>Agences TIM Awards</h3>
                  <p>
                    Notre équipe a créé un site web, <strong>Project X</strong>,
                    et a gagné le <strong>Grand Prix Agence TIM</strong>, remis
                    au projet le plus complet et <strong>professionnel</strong>{" "}
                    : concept clair, contenu pertinent, design cohérent et bonne{" "}
                    intégration <strong>WordPress</strong>.
                  </p>
                </div>
                <ZoomMedia
                  className="award-media"
                  title="Agences TIM Awards"
                  images={[
                    {
                      src: "/assets/award-agences-tim.png",
                      alt: "Grand Prix des Agences TIM Awards",
                    },
                  ]}
                />
              </article>

              <article className="award-row award-row-reverse">
                <div className="award-copy">
                  <span className="step-num">02</span>
                  <h3>Webjam édition 2026</h3>
                  <p>
                    <strong>Erreur Fatale</strong> » a <strong>créé</strong> un
                    site web en 36h, <strong>Q-tipousse</strong>, et a été{" "}
                    <strong>couronnée</strong> pour le projet s’étant le plus{" "}
                    <strong>démarqué</strong> en{" "}
                    <strong>excellence technique</strong>,{" "}
                    <strong>créative</strong> et <strong>collaborative</strong>.
                    Composée de <strong>Yoan Robitaille</strong>,{" "}
                    <strong>Éli Bousquet</strong> (moi),{" "}
                    <strong>Miro Leblanc</strong> et{" "}
                    <strong>Nathan Fortier</strong>, notre équipe a su présenter
                    un <strong>projet remarquable</strong> afin de repartir avec
                    le <strong>Grand Prix</strong> du{" "}
                    <strong>meilleur site</strong> remis par les juges.
                  </p>
                </div>
                <ZoomMedia
                  className="award-media"
                  title="Webjam édition 2026"
                  images={[
                    {
                      src: "/assets/award-webjam-2026.png",
                      alt: "Équipe gagnante du Webjam 2026",
                    },
                  ]}
                />
              </article>
            </div>
          </div>

          <div id="presentation" className="feature-block">
            <SectionHeading number="—">Vidéo de présentation</SectionHeading>

            <Youtube
              videoId={PRESENTATION_VIDEO_ID}
              title="Vidéo de présentation d’Éli Bousquet"
            />
          </div>
        </div>
      </section>

      <section id="projets" className="section section-alt">
        <div className="container">
          <SectionHeading number="02">Projets</SectionHeading>
          {useSwiper ? (
            <ProjectsSwiper
              projects={PROJECTS}
              images={PROJECT_IMAGES}
              awardSlugs={AWARD_PROJECT_SLUGS}
              imagePositions={PROJECT_IMAGE_POSITIONS}
              onOpen={openProject}
            />
          ) : (
            <div className="projects-grid">
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  image={PROJECT_IMAGES[index]}
                  awarded={AWARD_PROJECT_SLUGS.has(project.slug)}
                  onOpen={openProject}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="stage-section">
        <div className="container contact-wrap">
          <SectionHeading number="03">Recherche de stage</SectionHeading>
          <p>
            J’ai un intérêt particulier pour les stages de jeux-vidéo et
            d’animation 3D!
          </p>
          <div className="contact-links">
            <a
              href="mailto:jaajnessmain@gmail.com"
              className="contact-link"
              data-arc-target
            >
              jaajnessmain@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/%C3%A9li-bousquet-0aa1063b8/"
              className="contact-link"
              data-arc-target
            >
              Linkedin
            </a>
            <a
              download="CV_Eli_Bousquet_2026_Portfolio.pdf"
              href="/assets/CV_Eli_Bousquet_2026_Portfolio.pdf"
              className="btn-primary"
              data-arc-target
            >
              Télécharger le CV
            </a>
          </div>
        </div>
      </section>

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
