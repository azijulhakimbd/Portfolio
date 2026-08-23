export type TechItem = {
  id: string;
  name: string;
  shortName: string;
  color: string;
  description: string;
  category: "frontend" | "backend" | "ai" | "database";
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  href: string;
  github?: string;
};

export const TECH_ITEMS: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    shortName: "NEXT",
    color: "#ffffff",
    category: "frontend",
    description:
      "Production-ready React applications using the App Router, Server Components, dynamic rendering, and modern web architecture.",
  },

  {
    id: "react",
    name: "React",
    shortName: "REACT",
    color: "#61dafb",
    category: "frontend",
    description:
      "Component-driven interfaces with reusable architecture, interactive UI systems, state management, and modern React patterns.",
  },

  {
    id: "typescript",
    name: "TypeScript",
    shortName: "TS",
    color: "#3178c6",
    category: "frontend",
    description:
      "Strongly typed application development for safer, scalable, and more maintainable frontend systems.",
  },

  {
    id: "ai",
    name: "AI Engineering",
    shortName: "AI",
    color: "#34d399",
    category: "ai",
    description:
      "AI-powered interfaces, tool calling, structured responses, AI workflows, streaming experiences, and agentic applications.",
  },

  {
    id: "node",
    name: "Node.js",
    shortName: "NODE",
    color: "#68a063",
    category: "backend",
    description:
      "Backend services, REST APIs, authentication, integrations, server-side JavaScript, and full-stack application architecture.",
  },

  {
    id: "mongodb",
    name: "MongoDB",
    shortName: "MONGO",
    color: "#47a248",
    category: "database",
    description:
      "Flexible document-oriented data storage for full-stack applications, APIs, and data-driven experiences.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "portfolio",
    title: "AI Engineer Portfolio",
    description:
      "A modern AI-focused portfolio built with Next.js, TypeScript, Tailwind CSS, and interactive UI experiences.",
    tech: ["Next.js", "TypeScript", "AI"],
    href: "/projects",
    github:
      "https://github.com/azijulhakimbd",
  },

  {
    id: "petsera",
    title: "Petsera",
    description:
      "A full-stack pet adoption platform featuring authentication, MongoDB, Express.js, Firebase, and Stripe payments.",
    tech: ["React", "Node.js", "MongoDB"],
    href: "/projects",
    github:
      "https://github.com/azijulhakimbd",
  },

  {
    id: "nalitabari",
    title: "Nalitabari Directory",
    description:
      "A modern digital information platform for Nalitabari Upazila with structured local information and responsive UI.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    href: "/projects",
    github:
      "https://github.com/azijulhakimbd",
  },
];

export const SCENE_CONFIG = {
  camera: {
    position: [0, 3.2, 8] as [number, number, number],
    lookAt: [0, 1, 0] as [number, number, number],
    fov: 45,
    near: 0.1,
    far: 50,
  },

  colors: {
    background: "#030807",
    surface: "#07110e",
    surfaceLight: "#101816",

    emerald: "#10b981",
    emeraldBright: "#34d399",

    text: "#ffffff",
    textMuted: "#94a3b8",

    hologram: "#34d399",
  },

  lighting: {
    ambientIntensity: 0.4,

    directional: {
      intensity: 1.8,
      position: [4, 7, 4] as [number, number, number],
    },

    keyLight: {
      color: "#10b981",
      intensity: 8,
      position: [-4, 3, 2] as [number, number, number],
      distance: 8,
    },

    fillLight: {
      color: "#34d399",
      intensity: 5,
      position: [4, 2, -3] as [number, number, number],
      distance: 7,
    },
  },

  orbit: {
    minDistance: 5,
    maxDistance: 12,

    minPolarAngle: Math.PI / 3.5,
    maxPolarAngle: Math.PI / 2.05,

    desktopRotateSpeed: 0.5,
    mobileRotateSpeed: 0.65,

    desktopZoomSpeed: 1,
    mobileZoomSpeed: 0.7,

    dampingFactor: 0.06,
    mobileDampingFactor: 0.08,
  },

  parallax: {
    enabled: true,

    cameraX: 0.35,
    cameraY: 0.18,

    smoothing: 0.025,
    pointerSmoothing: 0.04,
  },

  stars: {
    desktopCount: 350,
    tabletCount: 160,
    mobileCount: 100,

    radius: 30,
    depth: 20,
    factor: 1.5,

    desktopSpeed: 0.2,
    mobileSpeed: 0,
  },

  workspace: {
    floorSize: 20,

    desk: {
      width: 7,
      height: 0.25,
      depth: 4.2,
      position: [0, -0.02, 0] as [number, number, number],
    },

    laptop: {
      position: [0, 0.55, 0] as [number, number, number],
    },

    hologram: {
      position: [0, 2.4, 0] as [number, number, number],
      radius: 0.65,
    },
  },

  techOrbit: {
    radius: 3.5,
    height: 1.6,

    floatAmplitude: 0.12,
    floatSpeed: 1.5,

    rotationSpeed: 0.12,

    normalScale: 1,
    hoverScale: 1.18,
    selectedScale: 1.35,
  },

  performance: {
    dprDesktop: [1, 1.5] as [number, number],
    dprTablet: [1, 1.25] as [number, number],
    dprMobile: [1, 1.1] as [number, number],

    desktopShadows: true,
    mobileShadows: false,

    desktopAntialias: true,
    mobileAntialias: false,

    lowPowerStarCount: 100,

    lowPowerDpr: [1, 1.1] as [number, number],

    targetDesktopFps: 60,
    targetMobileFps: 30,
  },

  responsive: {
    mobileBreakpoint: 640,
    tabletBreakpoint: 1024,

    mobileCameraFov: 48,
    desktopCameraFov: 45,

    mobileSceneHeight: 520,
    desktopSceneHeight: 620,
  },

  interaction: {
    cursorParallax: true,

    clickTechnologyNodes: true,

    autoRotate: true,

    colorCustomization: true,

    touchOrbit: true,

    touchZoom: true,

    keyboardAccessibleControls: true,
  },
} as const;