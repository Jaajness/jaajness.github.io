import { useNavigate } from "react-router";
import DynamicPageTitle from "../components/DynamicPageTitle";

/** In-app 404 (unknown route or unknown project). Mirrors public/404.html. */
export default function NotFound() {
  const navigate = useNavigate();
  DynamicPageTitle("Page introuvable");

  return (
    <main className="not-found">
      <div className="container not-found-inner">
        <span className="not-found-tag">Erreur · 404</span>
        <h1>
          4<span>0</span>4
        </h1>
        <svg className="not-found-bolt" viewBox="0 0 360 28" aria-hidden="true">
          <path d="M2 14 L48 10 L70 20 L112 6 L140 22 L182 8 L206 19 L248 5 L276 21 L318 11 L358 15" />
        </svg>
        <h2>Page introuvable</h2>
        <p>
          La page que vous cherchez n’existe pas, ou a été déplacée. Retournez à
          l’accueil pour retrouver mes projets.
        </p>
        <button
          type="button"
          className="btn-secondary"
          data-arc-target
          onClick={() => navigate("/")}
        >
          ← Retour à l’accueil
        </button>
      </div>
    </main>
  );
}
