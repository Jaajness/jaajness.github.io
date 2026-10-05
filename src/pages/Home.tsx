import { useNavigate } from "react-router"
import { PROJECTS } from "../data/projects"

const SKILLS = [
  "Animation d’environnements 3D",
  "Développement de jeux vidéo de différents styles",
  "Montage vidéo et photo",
  "Développement Web sur plusieurs plateformes",
]

const SOFTWARE = [
  "Unity",
  "Unreal Engine",
  "Blender",
  "Reaper",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
]

const LANGUAGES = ["C#", "JavaScript", "Blueprint", "Python", "HTML / CSS"]
const SOFT_SKILLS = [
  "Bonne communication",
  "Patience",
  "Altruisme",
  "Imagination poussée",
  "Soucis du détail",
]

const HUB_LINKS = [
  { label: "Vidéo de présentation", desc: "Extraits vidéo sélectionnés", href: "#presentation" },
  { label: "LinkedIn", desc: "Réseau professionnel", href: "#" },
  { label: "GitHub", desc: "Accès à mes projets", href: "#" },
  { label: "Artstation", desc: "Accès à mes animations", href: "#" },
  { label: "Utilisation de l’IA", desc: "Déclaration publique", href: "#utilisation-ia" },
]

const PROJECT_IMAGES = [
  "/assets/21dd5.png",
  "/assets/3d88e.png",
  "/assets/3330e.png",
  "/assets/a512c.png",
  "/assets/6970d.png",
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-header">
      <span className="section-tag">{number}</span>
      <h2 className="section-title">{children}</h2>
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <section id="hub" className="hero">
        <div className="hero-bg" />
        <div className="hero-scan" />
        <div className="hero-ring" />
        <div className="hero-art" aria-hidden="true">
          <img src="/assets/fb92f.png" alt="" />
        </div>
        <span className="hero-sidetag">Éli Bousquet — Portfolio 2026</span>
        <div className="hero-wrapper">
          <div className="container hero-inner">
            <div className="hero-content">
              <div className="hero-intro">
                <span className="hero-eyebrow"><span className="pulse-dot" />Portfolio</span>
                <strong>Développeur &amp; Animateur</strong>
              </div>
              <h1 className="hero-name">Éli<br />Bousquet</h1>
              <p className="hero-hook hero-hook-desktop">
                Une personne <strong>créative</strong> qui cherche à utiliser ses <strong>compétences</strong> et son{" "}
                <strong>énergie</strong> pour aider, ajoutant une touche unique à toute <strong>collaboration</strong>.
              </p>
              <p className="hero-hook hero-hook-mobile">
                Une personne énergique cherchant à offrir cette même énergie dans les projets abordés
              </p>
              <div className="hero-actions">
                <button className="btn-primary" data-arc-target onClick={() => scrollTo("projets")}>Voir les projets</button>
                <button className="btn-secondary" data-arc-target onClick={() => scrollTo("a-propos")}>À propos</button>
              </div>
            </div>

            <nav className="hub-nav" aria-label="Liens professionnels">
              {HUB_LINKS.map((item) => (
                <a key={item.label} className="hub-card" href={item.href} data-arc-target>
                  <span className="hub-card-label">{item.label}</span>
                  <span className="hub-card-desc">{item.desc}</span>
                  <span className="hub-card-arrow">→</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section id="a-propos" className="section about-section">
        <div className="container">
          <SectionHeading number="01">À propos</SectionHeading>
          <figure className="about-portrait about-portrait-mobile">
            <div className="about-portrait-frame">
              <img src="/assets/d580d.png" alt="Portrait d’Éli Bousquet" />
            </div>
            <figcaption>Crédit: Image prise par Alexandre Donato</figcaption>
          </figure>
          <div className="about-grid">
            <div className="about-column">
              <p className="about-value-prop">
                Ma présence apporte dans les projets une <strong>grande force</strong> en <strong>programmation</strong> et
                en <strong>animation</strong>. Je contribue grandement dans les équipes de <strong>jeux-vidéo</strong>, de{" "}
                <strong>web</strong> et d’<strong>animation</strong>, grâce à mes compétences en <strong>codage</strong>,
                mon sens de la <strong>résolution de problèmes</strong> et ma <strong>créativité</strong>.
              </p>
              <button className="btn-primary" data-arc-target onClick={() => scrollTo("projets")}>Voir les projets</button>
              <div className="about-block">
                <h3 className="about-block-title">Compétences techniques</h3>
                <ul className="skill-list">
                  {SKILLS.map((skill) => <li key={skill} className="skill-item"><span className="skill-bullet" />{skill}</li>)}
                </ul>
              </div>
              <div className="about-block">
                <h3 className="about-block-title">Langages maîtrisés</h3>
                <div className="tool-grid">{LANGUAGES.map((item) => <div key={item} className="tool-tag">{item}</div>)}</div>
              </div>
              <div className="about-block">
                <h3 className="about-block-title">Logiciels maîtrisés</h3>
                <div className="tool-grid">{SOFTWARE.map((item, index) => <div key={`${item}-${index}`} className="tool-tag">{item}</div>)}</div>
              </div>
            </div>
            <div className="about-column about-column-right">
              <figure className="about-portrait about-portrait-desktop">
                <div className="about-portrait-frame">
                  <img src="/assets/d580d.png" alt="Portrait d’Éli Bousquet" />
                </div>
                <figcaption>Crédit: Image prise par Alexandre Donato</figcaption>
              </figure>
              <div className="about-block">
                <h3 className="about-block-title">Qualités humaines</h3>
                <div className="pill-grid">{SOFT_SKILLS.map((item) => <span key={item} className="pill">{item}</span>)}</div>
              </div>
              <div className="about-block">
                <h3 className="about-block-title">Intérêts</h3>
                <div className="pill-grid">
                  {["Jeux-vidéos", "Mangas / Anime", "Arts"].map((item) => <span key={item} className="pill pill-muted">{item}</span>)}
                </div>
              </div>
            </div>
          </div>

          <div id="presentation" className="feature-block">
            <SectionHeading number="—">Vidéo de présentation</SectionHeading>
            <div className="media-frame" data-arc-target />
          </div>
        </div>
      </section>

      <section id="projets" className="section section-alt">
        <div className="container">
          <SectionHeading number="02">Projets</SectionHeading>
          <div className="projects-grid">
            {PROJECTS.map((project, index) => (
              <button
                key={project.id}
                className="project-card"
                data-arc-target
                onClick={() => navigate(`/projet/${project.slug}`)}
              >
                <img src={PROJECT_IMAGES[index]} alt="" />
                <span className="project-card-shade" />
                <span className="project-title">{project.title}</span>
                <span className="project-card-details">
                  <span className="project-card-number">{String(project.id).padStart(2, "0")}</span>
                  <span className="project-card-detail-title">{project.title}</span>
                  <span className="project-card-description">{project.tagline}</span>
                  <span className="project-card-footer">
                    <span>{project.platform}</span>
                    <span>Voir →</span>
                  </span>
                </span>
                <span className="project-spark" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="stage-section">
        <div className="container">
          <h2>Recherche de stage</h2>
          <p>J’ai un intérêt particulier pour les stages de jeux-vidéo et d’animation 3D!</p>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-wrap">
          <SectionHeading number="03">Contact</SectionHeading>
          <p className="contact-sub">Travaillons ensemble.</p>
          <div className="contact-links">
            <a href="mailto:jaajnessmain@gmail.com" className="contact-link" data-arc-target>jaajnessmain@gmail.com</a>
            <a href="#" className="contact-link" data-arc-target>Linkedin</a>
            <a href="#" className="btn-primary" data-arc-target>Télécharger le CV</a>
          </div>
        </div>
      </section>

      <section id="utilisation-ia" className="section ai-section">
        <div className="container">
          <SectionHeading number="—">Utilisation de l’IA</SectionHeading>
          <div className="ai-statement">
            <span className="ai-statement-label">Déclaration publique</span>
            <p>
              Pour concevoir et développer ce portfolio, j’ai utilisé <strong>Figma Make</strong> comme base afin
              d’explorer la structure, le design et le code. J’ai personnellement fourni la direction artistique,
              les couleurs et les inspirations, adapté les propositions, puis vérifié le design, les contenus et les
              fonctionnalités.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Éli Bousquet · 2026</span>
          <span>Animation · Jeux vidéo · Web</span>
        </div>
      </footer>
    </>
  )
}
