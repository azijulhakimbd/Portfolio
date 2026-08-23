export type TechItem = {
  id: string;
  name: string;
  shortName: string;
  color: string;
  description: string;
};

export const TECH_ITEMS: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    shortName: "NEXT",
    color: "#ffffff",
    description:
      "Production-ready React applications using the App Router, Server Components, and modern web architecture.",
  },
  {
    id: "react",
    name: "React",
    shortName: "REACT",
    color: "#61dafb",
    description:
      "Component-driven interfaces with reusable architecture and interactive UI systems.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    shortName: "TS",
    color: "#3178c6",
    description:
      "Strongly typed application development for safer and more maintainable frontend systems.",
  },
  {
    id: "ai",
    name: "AI Engineering",
    shortName: "AI",
    color: "#34d399",
    description:
      "AI-powered interfaces, tool calling, structured responses, AI workflows, and agentic experiences.",
  },
  {
    id: "node",
    name: "Node.js",
    shortName: "NODE",
    color: "#68a063",
    description:
      "Backend services, APIs, authentication, integrations, and server-side JavaScript.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    shortName: "MONGO",
    color: "#47a248",
    description:
      "Flexible document databases for full-stack applications and data-driven experiences.",
  },
];

export const PROJECTS = [
  {
    id: "portfolio",
    title: "AI Engineer Portfolio",
    description:
      "A modern AI-focused portfolio built with Next.js, TypeScript, Tailwind CSS, and interactive UI.",
    tech: ["Next.js", "TypeScript", "AI"],
  },
  {
    id: "petsera",
    title: "Petsera",
    description:
      "A full-stack pet adoption platform with authentication, payments, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "nalitabari",
    title: "Nalitabari Directory",
    description:
      "A modern digital information platform for Nalitabari Upazila.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
  },
];

export const SCENE_CONFIG = {
  camera: {
    position: [0, 3.2, 8] as [number, number, number],
    fov: 45,
  },

  colors: {
    background: "#030807",
    surface: "#07110e",
    emerald: "#10b981",
    emeraldBright: "#34d399",
  },

  performance: {
    dprDesktop: [1, 1.5] as [number, number],
    dprMobile: [1, 1.15] as [number, number],
  },
};