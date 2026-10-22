# Portfolio — Éli Bousquet

Mon portfolio (« Hub ») de **développeur & animateur** : présentation, projets de jeux vidéo, de web et d’animation 3D, CV téléchargeable et déclaration d’utilisation de l’IA.

🔗 **Site en ligne : [jaajness.github.io](https://jaajness.github.io)**

<!-- Ajoute une capture : place l'image dans docs/ et décommente la ligne
![Page d'accueil du portfolio](docs/accueil.png)
-->

## Contexte

Ce site a été réalisé en 2026 dans le cadre de ma formation en **Technique d’intégration multimédia** (Cégep Édouard-Montpetit). Il sert de vitrine professionnelle pour présenter mes travaux à de futurs employeurs et superviseurs de stage.

## Objectifs

- Présenter mes compétences, mes projets et mes prix en un seul endroit
- Offrir une expérience soignée, cohérente avec mon design system (sombre, accent rouge `#A40000`, Poppins / Cousine)
- Rester accessible et utilisable sur ordinateur comme sur mobile
- Être transparent sur la place de l’IA dans la création du site

## Fonctionnalités

- Pages de projet détaillées (étapes de la démarche, vidéos YouTube personnalisées, résultats)
- Fenêtres modales pour agrandir les images
- Carrousel de projets (Swiper) sur appareils tactiles
- Curseur à arcs électriques (canvas 2D) sur ordinateur
- Page de déclaration d’utilisation de l’IA et page 404 personnalisée

## Technologies

React 19 · TypeScript · Vite · React Router · Tailwind CSS 4 · Swiper · GitHub Pages (déploiement avec GitHub Actions)

## Exécuter le projet

Prérequis : [Node.js](https://nodejs.org/) 20 ou plus récent.

```bash
git clone https://github.com/jaajness/jaajness.github.io.git
cd jaajness.github.io
npm install
npm run dev       # serveur de développement
npm run build     # build de production dans /dist
npm run preview   # prévisualiser le build
```

## Structure

```
src/
  components/   Composants réutilisables (modales, carrousel, curseur, lecteur YouTube…)
  pages/        Accueil, détail d'un projet, déclaration IA, 404
  data/         Contenu des projets
  index.css     Design system et styles
public/         Images, CV (PDF) et 404.html
```

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages. Le fichier `public/404.html` permet de rafraîchir une page interne sans erreur (GitHub Pages n’a pas de routage côté serveur).

## Utilisation de l’IA

La base du site a été **générée par Figma Make** à partir de mon design system, puis modifiée par moi. **Claude** (Anthropic) m’a aidé à corriger et à coder certaines parties. Détails : [déclaration d’utilisation de l’IA](https://jaajness.github.io/declaration-ia).

## Crédits

- Design system, direction artistique, contenu et vérification : **Éli Bousquet**
- Génération de la base du site : [Figma Make](https://www.figma.com/make/)
- Assistance au code et au design : [Claude](https://claude.ai) (Anthropic)
- Polices : [Poppins](https://fonts.google.com/specimen/Poppins) et [Cousine](https://fonts.google.com/specimen/Cousine)
- Carrousel : [Swiper](https://swiperjs.com/)

## Ma contribution personnelle

J’ai conçu le design system et la direction artistique, rédigé et organisé le contenu, apporté mes propres modifications tout au long du projet et vérifié le design, les contenus et les fonctionnalités avant chaque publication.
