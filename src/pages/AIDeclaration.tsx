import { useNavigate } from "react-router";

type Tag = "Code" | "Design" | "Contenu";

interface Contribution {
  title: string;
  body: React.ReactNode;
  tags: Tag[];
}

const CLAUDE_CONTRIBUTIONS: Contribution[] = [
  {
    title: "Lecteur vidéo YouTube personnalisé",
    body: (
      <>
        Composant <strong>React</strong> avec bouton de lecture personnalisé :
        les contrôles de YouTube n’apparaissent qu’après le clic.
      </>
    ),
    tags: ["Code", "Design"],
  },
  {
    title: "Navigation entre les pages",
    body: (
      <>
        Correction du défilement : les pages de projet s’ouvrent maintenant{" "}
        <strong>en haut de page</strong> au lieu de conserver la position de la
        page précédente.
      </>
    ),
    tags: ["Code"],
  },
  {
    title: "Fenêtres modales d’agrandissement",
    body: (
      <>
        Modales pour les images des prix et des étapes de démarche, avec
        l’indicateur « <strong>+</strong> » qui apparaît au survol pour montrer
        qu’une image est interactive.
      </>
    ),
    tags: ["Code", "Design"],
  },
  {
    title: "Carrousel de projets sur mobile",
    body: (
      <>
        Remplacement de la grille de projets par un <strong>carrousel</strong>{" "}
        (Swiper.js) à défilement infini, où les informations de chaque carte
        sont visibles sans survol.
      </>
    ),
    tags: ["Code", "Design"],
  },
  {
    title: "Curseur à arcs électriques",
    body: (
      <>
        Ajustements du curseur : étincelles au repos plus longues et plus
        agressives, arcs qui persistent un instant, et réorganisation du code
        dans le dossier des composants.
      </>
    ),
    tags: ["Code", "Design"],
  },
  {
    title: "Survol des étiquettes",
    body: (
      <>
        Uniformisation du survol des <strong>qualités humaines</strong> et des{" "}
        <strong>intérêts</strong> avec celui des langages et logiciels, en
        gardant leur couleur grise.
      </>
    ),
    tags: ["Design"],
  },
  {
    title: "Cette page de déclaration",
    body: (
      <>
        Conception de la page et rédaction du texte à partir des informations
        que je lui ai fournies.
      </>
    ),
    tags: ["Design", "Contenu"],
  },
  {
    title: "CV téléchargeable",
    body: (
      <>
        Adaptation du contenu et de la mise en page de mon CV aux compétences
        et au design de ce portfolio.
      </>
    ),
    tags: ["Design", "Contenu"],
  },
];

const FIGMA_FACTS = [
  "Structure du site, pages, composants et code générés par Figma Make",
  "Point de départ : le design system que j’ai conçu et envoyé",
  "Un site entièrement fonctionnel dès la génération",
  "Évolution ensuite par mes propres modifications, au fil du projet",
];

const MY_PART = [
  "J’ai conçu le design system : palette, typographies, composants et inspirations.",
  "J’ai apporté mes propres modifications tout au long du projet.",
  "Je vérifie le design, les contenus et les fonctionnalités avant de publier une proposition de l’IA.",
  "Chaque page de projet précise séparément si de l’IA a été utilisée pour réaliser le projet lui-même.",
];

function DetailHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="detail-heading">
      <span>—</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function AIDeclaration() {
  const navigate = useNavigate();

  return (
    <>
      <main className="project-detail ai-page">
        <section className="detail-intro ai-hero">
          <div className="container">
            <div className="detail-meta">
              <span>Transparence</span>
              <span>·</span>
              <span>Déclaration</span>
              <span>·</span>
              <span>2026</span>
            </div>
            <h1>Utilisation de l’IA</h1>
            <p className="detail-tagline">
              Ce portfolio a été réalisé avec l’aide de l’intelligence
              artificielle. Voici, en toute transparence, quels outils ont été
              utilisés et quelle part me revient.
            </p>
            <div className="detail-info">
              <div>
                <small>Direction &amp; design</small>
                <span>
                  Éli Bousquet — design system, direction artistique,
                  modifications et vérification
                </span>
              </div>
              <div>
                <small>Génération du site</small>
                <span>
                  Figma Make — site complet généré à partir de mon design system
                </span>
              </div>
              <div>
                <small>Assistance technique</small>
                <span>
                  Claude — aide au code et au design de certaines parties
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="detail-section detail-section-alt">
          <div className="container ai-split">
            <div>
              <DetailHeading>Figma Make</DetailHeading>
              <p className="detail-lead">
                Le site a été <strong>entièrement généré par Figma Make</strong>{" "}
                à partir du <strong>design system</strong> que je lui ai fourni.
                Le résultat était un site <strong>complet et fonctionnel</strong>
                , que j’ai ensuite fait évoluer avec mes propres{" "}
                <strong>modifications</strong>.
              </p>
            </div>
            <ul className="ai-facts">
              {FIGMA_FACTS.map((fact) => (
                <li key={fact}>
                  <span className="skill-bullet" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="detail-section">
          <div className="container">
            <DetailHeading>Claude</DetailHeading>
            <p className="detail-lead ai-lead">
              En complément, j’ai travaillé avec <strong>Claude</strong>{" "}
              (Anthropic) pour <strong>faire fonctionner correctement</strong>{" "}
              certaines parties du site, et pour <strong>contribuer au code</strong>{" "}
              et au <strong>design</strong> de plusieurs éléments.
            </p>
            <div className="ai-contrib-list">
              {CLAUDE_CONTRIBUTIONS.map((item, index) => (
                <article key={item.title} className="ai-contrib">
                  <span className="step-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <div className="ai-contrib-body">
                    <p>{item.body}</p>
                    <div className="ai-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="ai-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-section detail-section-alt">
          <div className="container ai-split">
            <div>
              <DetailHeading>Ma part</DetailHeading>
              <p className="detail-lead">
                L’IA a été un <strong>outil</strong> : la{" "}
                <strong>direction</strong>, les <strong>décisions</strong> et la{" "}
                <strong>validation finale</strong> m’appartiennent.
              </p>
            </div>
            <ul className="ai-facts">
              {MY_PART.map((item) => (
                <li key={item}>
                  <span className="skill-bullet" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="detail-section ai-closing">
          <div className="container">
            <div className="ai-statement">
              <span className="ai-statement-label">Engagement</span>
              <p>
                Cette déclaration sera mise à jour si l’utilisation de l’IA dans
                ce portfolio évolue.
              </p>
            </div>
          </div>
        </section>
      </main>

      <nav className="detail-nav-projects">
        <div className="container ai-back">
          <button
            type="button"
            className="btn-secondary"
            data-arc-target
            onClick={() => navigate("/")}
          >
            ← Retour à l’accueil
          </button>
        </div>
      </nav>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Éli Bousquet · 2026</span>
          <span>Animation · Jeux vidéo · Web</span>
        </div>
      </footer>
    </>
  );
}
