export interface ProcessStep {
  step: string
  title: string
  body: string
  mediaLabel: string
  mediaRatio: string
}

export interface Project {
  id: number
  slug: string
  title: string
  platform: string
  year: string
  role: string
  collaboration: string
  tools: string[]
  tagline: string
  overview: string
  process: ProcessStep[]
  outcomes: string[]
  links: { label: string; url: string }[]
  aiProject: string
  aiPresentation: string
}

const AI_PRESENTATION_DISCLOSURE =
  "J’ai utilisé Figma Make comme base pour concevoir et coder la présentation de ce projet. J’ai fourni la direction artistique, les couleurs et les inspirations, adapté les propositions et vérifié le design, le contenu et les fonctionnalités."

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "travail-pratique-unity",
    title: "Jeu vidéo Unity",
    platform: "Unity · C#",
    year: "2025",
    role: "Développeur gameplay & Animateur",
    collaboration: "Projet individuel",
    tools: ["Unity", "C#", "Blender", "Adobe Premiere Pro"],
    tagline:
      "Conception de systèmes de gameplay, intégration audio et animations 3D dans un jeu vidéo indépendant.",
    overview:
      "Ce projet explore la création d'une expérience de jeu vidéo indépendant de bout en bout. L'objectif était de concevoir des systèmes de gameplay cohérents, d'intégrer des animations 3D fluides et de produire une ambiance sonore immersive qui renforce l'identité visuelle du projet.",
    process: [
      {
        step: "01",
        title: "Conception & Prototype",
        body: "Définition du concept de jeu, des mécaniques principales et des boucles de gameplay. Mise en place d'un prototype jouable pour valider les sensations et l'ergonomie.",
        mediaLabel: "Capture d'écran · Prototype initial",
        mediaRatio: "16 / 9",
      },
      {
        step: "02",
        title: "Architecture des systèmes",
        body: "Programmation des systèmes de personnage, de physique et de progression en C#. Mise en place de l'architecture de code modulaire et réutilisable.",
        mediaLabel: "Capture d'écran · Architecture du code",
        mediaRatio: "16 / 9",
      },
      {
        step: "03",
        title: "Animation & Assets 3D",
        body: "Modélisation et rigging des personnages dans Blender, puis intégration des animations dans Unity via l'Animator Controller. Création des assets visuels du projet.",
        mediaLabel: "Rendu · Personnages et animations",
        mediaRatio: "16 / 9",
      },
      {
        step: "04",
        title: "Intégration audio & VFX",
        body: "Intégration de la bande sonore, des effets sonores et des effets visuels. Travail sur le polish global pour renforcer le ressenti de jeu.",
        mediaLabel: "Capture d'écran · Effets visuels en jeu",
        mediaRatio: "16 / 9",
      },
      {
        step: "05",
        title: "Tests & Livraison",
        body: "Tests fonctionnels complets, correction des bugs, optimisation des performances. Production de la build finale jouable et documentation du projet.",
        mediaLabel: "Capture d'écran · Build finale",
        mediaRatio: "16 / 9",
      },
    ],
    outcomes: [
      "Build jouable complète et stable",
      "Systèmes de gameplay documentés et réutilisables",
      "Pipeline animation Blender → Unity établi",
      "Retours utilisateurs très positifs sur la prise en main",
    ],
    links: [{ label: "Voir la démo", url: "#" }],
    aiProject: "Aucune IA générative n’a été utilisée pour réaliser ce projet.",
    aiPresentation: AI_PRESENTATION_DISCLOSURE,
  },
  {
    id: 2,
    slug: "prototype-jeu-unreal-engine",
    title: "Jeu vidéo Unreal Engine",
    platform: "Unreal Engine · Blueprint",
    year: "2025",
    role: "Développeur Unreal & Level Designer",
    collaboration: "Projet individuel",
    tools: ["Unreal Engine", "Blueprint"],
    tagline:
      "L'objectif de ce travail est de réaliser un prototype de jeu vidéo simple à l'aide d'Unreal Engine.",
    overview:
      "Prototype de jeu vidéo simple réalisé avec Unreal Engine. Le projet met l'accent sur la maîtrise des outils de base du logiciel, la création d'un environnement cohérent et l'implémentation de mécaniques de jeu fondamentales via Blueprint.",
    process: [
      {
        step: "01",
        title: "Prise en main d'Unreal Engine",
        body: "Exploration de l'interface et des outils d'Unreal Engine. Configuration du projet, paramétrage des options de rendu et prise en main du système Blueprint.",
        mediaLabel: "Capture d'écran · Interface UE5",
        mediaRatio: "16 / 9",
      },
      {
        step: "02",
        title: "Construction du level",
        body: "Création de l'environnement de jeu avec les outils de modélisation et les ressources intégrées à Unreal Engine. Mise en place de l'éclairage et de l'ambiance visuelle.",
        mediaLabel: "Capture d'écran · Level en construction",
        mediaRatio: "16 / 9",
      },
      {
        step: "03",
        title: "Systèmes Blueprint",
        body: "Implémentation des mécaniques de jeu (mouvement du personnage, caméra, interactions) via le système Blueprint visuel d'Unreal Engine.",
        mediaLabel: "Capture d'écran · Blueprint",
        mediaRatio: "16 / 9",
      },
      {
        step: "04",
        title: "Ambiance & polish visuel",
        body: "Peaufinage de l'éclairage, ajout d'effets de post-processing et d'éléments atmosphériques pour renforcer l'identité visuelle du prototype.",
        mediaLabel: "Rendu · Ambiance finale",
        mediaRatio: "16 / 9",
      },
      {
        step: "05",
        title: "Build & Présentation",
        body: "Compilation du projet en build jouable, documentation des choix techniques et présentation du prototype avec démonstration des mécaniques implémentées.",
        mediaLabel: "Capture d'écran · Build finale",
        mediaRatio: "16 / 9",
      },
    ],
    outcomes: [
      "Prototype jouable livré dans les délais",
      "Maîtrise des outils fondamentaux d'Unreal Engine",
      "Environnement 3D cohérent et immersif",
      "Mécaniques de base fonctionnelles via Blueprint",
    ],
    links: [{ label: "Voir le prototype", url: "#" }],
    aiProject: "Aucune IA générative n’a été utilisée pour réaliser ce projet.",
    aiPresentation: AI_PRESENTATION_DISCLOSURE,
  },
  {
    id: 3,
    slug: "prototype-unreal-equipe",
    title: "Jeu Unreal En Équipe",
    platform: "Unreal Engine · Blueprint",
    year: "2025",
    role: "Développeur Unreal & Coordinateur technique",
    collaboration: "Projet collectif",
    tools: ["Unreal Engine", "Blueprint"],
    tagline:
      "L'objectif de ce travail est de réaliser un prototype de jeu vidéo complexe à l'aide d'Unreal Engine, en équipe.",
    overview:
      "Développement collaboratif d'un prototype de jeu vidéo complexe avec Unreal Engine. Ce projet met l'accent sur la coordination d'équipe, la gestion de version et la répartition des responsabilités pour produire un résultat plus ambitieux qu'un projet individuel.",
    process: [
      {
        step: "01",
        title: "Organisation de l'équipe",
        body: "Définition des rôles et responsabilités de chaque membre. Mise en place des outils de gestion de version et des conventions de travail collaboratif.",
        mediaLabel: "Capture d'écran · Organisation du projet",
        mediaRatio: "16 / 9",
      },
      {
        step: "02",
        title: "Conception collaborative",
        body: "Sessions de conception en équipe pour définir les mécaniques, l'univers visuel et l'architecture technique du prototype. Création du document de conception partagé.",
        mediaLabel: "Capture d'écran · Documents de conception",
        mediaRatio: "16 / 9",
      },
      {
        step: "03",
        title: "Développement parallèle",
        body: "Développement simultané des différents systèmes par les membres de l'équipe. Intégration régulière pour éviter les conflits et assurer la cohérence du projet.",
        mediaLabel: "Capture d'écran · Prototype en développement",
        mediaRatio: "16 / 9",
      },
      {
        step: "04",
        title: "Intégration & Débogage",
        body: "Phase d'intégration des modules développés séparément. Résolution des conflits techniques, débogage collaboratif et ajustements des interfaces entre systèmes.",
        mediaLabel: "Capture d'écran · Prototype intégré",
        mediaRatio: "16 / 9",
      },
      {
        step: "05",
        title: "Polish & Livraison finale",
        body: "Finition collective du prototype, tests croisés par les membres de l'équipe et correction des derniers bugs. Présentation du résultat final à l'ensemble de la classe.",
        mediaLabel: "Capture d'écran · Rendu final en équipe",
        mediaRatio: "16 / 9",
      },
    ],
    outcomes: [
      "Prototype complexe livré en équipe",
      "Compétences en coordination technique acquises",
      "Pipeline de travail collaboratif maîtrisé",
      "Expérience de gestion de projet en conditions réelles",
    ],
    links: [{ label: "Voir le prototype", url: "#" }],
    aiProject: "Aucune IA générative n’a été utilisée par Éli pour réaliser sa partie de ce projet collectif.",
    aiPresentation: AI_PRESENTATION_DISCLOSURE,
  },
  {
    id: 4,
    slug: "project-x",
    title: "Site Web Project X",
    platform: "Web · JavaScript",
    year: "2026",
    role: "Développeur Front-End",
    collaboration: "Projet individuel",
    tools: ["Figma", "HTML / CSS", "JavaScript"],
    tagline:
      "Application web interactive à interface dynamique, intégrations API et expérience utilisateur poussée.",
    overview:
      "Développement d'une application web complète avec une interface réactive. L'accent est mis sur l'expérience utilisateur, les performances et l'intégration propre des contenus.",
    process: [
      {
        step: "01",
        title: "Recherche & Conception UX",
        body: "Analyse des besoins, création des wireframes et définition de l'architecture de l'application. Conception des flux utilisateurs et des interactions principales.",
        mediaLabel: "Capture d'écran · Wireframes & maquettes",
        mediaRatio: "16 / 9",
      },
      {
        step: "02",
        title: "Architecture des composants",
        body: "Définition de l'architecture des composants et des flux de données. Mise en place de la structure du projet et des conventions de code.",
        mediaLabel: "Capture d'écran · Architecture du projet",
        mediaRatio: "16 / 9",
      },
      {
        step: "03",
        title: "Développement des fonctionnalités",
        body: "Implémentation des fonctionnalités principales, intégration des APIs et mise en place de la gestion d'état. Développement itératif avec tests réguliers.",
        mediaLabel: "Capture d'écran · Interface en développement",
        mediaRatio: "16 / 9",
      },
      {
        step: "04",
        title: "Optimisation & Accessibilité",
        body: "Optimisation des performances (temps de chargement, rendu), amélioration de l'accessibilité et de la compatibilité cross-navigateurs. Tests fonctionnels approfondis.",
        mediaLabel: "Capture d'écran · Interface optimisée",
        mediaRatio: "16 / 9",
      },
      {
        step: "05",
        title: "Déploiement & Documentation",
        body: "Déploiement de l'application en production, rédaction de la documentation technique et utilisateur. Monitoring et corrections post-lancement.",
        mediaLabel: "Capture d'écran · Application en production",
        mediaRatio: "16 / 9",
      },
    ],
    outcomes: [
      "Application déployée en production",
      "Temps de chargement < 1 seconde",
      "Interface accessible et responsive",
      "Documentation technique complète",
    ],
    links: [{ label: "Voir l'application", url: "#" }],
    aiProject: "Aucune IA générative n’a été utilisée pour réaliser ce projet.",
    aiPresentation: AI_PRESENTATION_DISCLOSURE,
  },
  {
    id: 5,
    slug: "route-vers-infini",
    title: "Route vers l’infini en 3D",
    platform: "Blender · Animation 3D",
    year: "2025",
    role: "Animateur 3D & Réalisateur",
    collaboration: "Projet individuel",
    tools: ["Blender", "Adobe Premiere Pro"],
    tagline:
      "Séquence animée réalisée de A à Z dans Blender — modélisation, rigging, rendu final.",
    overview:
      "Production d'une séquence d'animation 3D complète intitulée « Route vers l'infini ». Le projet couvre l'ensemble du pipeline de production, de la conception initiale jusqu'au rendu et au montage final.",
    process: [
      {
        step: "01",
        title: "Storyboard & Animatique",
        body: "Développement du concept visuel et narratif de la séquence. Création du storyboard image par image et production de l'animatique pour valider le rythme et la composition.",
        mediaLabel: "Image · Storyboard de la séquence",
        mediaRatio: "16 / 9",
      },
      {
        step: "02",
        title: "Modélisation 3D",
        body: "Modélisation de l'ensemble des éléments 3D de la scène dans Blender. Création des décors, véhicules et objets avec un niveau de détail adapté aux besoins de l'animation.",
        mediaLabel: "Rendu · Modèles 3D finalisés",
        mediaRatio: "16 / 9",
      },
      {
        step: "03",
        title: "Rigging & Animation",
        body: "Mise en place des rigs d'animation pour les éléments mobiles de la scène. Animation image par image dans l'éditeur de courbes de Blender pour des mouvements fluides et expressifs.",
        mediaLabel: "Capture d'écran · Rig et courbes d'animation",
        mediaRatio: "16 / 9",
      },
      {
        step: "04",
        title: "Éclairage & Rendu",
        body: "Configuration de l'éclairage de la scène avec Cycles pour obtenir une ambiance cohérente avec le concept. Paramétrage du rendu et lancement des passes de rendu.",
        mediaLabel: "Rendu · Éclairage final de la scène",
        mediaRatio: "16 / 9",
      },
      {
        step: "05",
        title: "Compositing & Montage final",
        body: "Assemblage des passes de rendu dans le compositeur Blender puis montage final dans Adobe Premiere Pro. Ajout de la musique, des effets sonores et étalonnage colorimétrique.",
        mediaLabel: "Rendu · Image finale de la séquence",
        mediaRatio: "16 / 9",
      },
    ],
    outcomes: [
      "Séquence animée complète livrée",
      "Pipeline de production Blender maîtrisé de A à Z",
      "Rendu Cycles de qualité production",
      "Montage final assemblé avec musique et sound design",
    ],
    links: [{ label: "Voir la séquence", url: "#" }],
    aiProject: "Aucune IA générative n’a été utilisée pour réaliser ce projet.",
    aiPresentation: AI_PRESENTATION_DISCLOSURE,
  },
]
