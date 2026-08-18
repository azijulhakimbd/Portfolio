import { notFound } from "next/navigation";
import ProjectDetailsClient from "../project-details-client";



type Project = {
  title: string;
  description: string;
  technologies: string[];
  overview: string;
  features: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
};

const projects: Record<string, Project> = {
  "ai-agent": {
    title: "Personal AI Agent",
    description:
      "A practical AI agent focused on completing useful tasks with tools, structured workflows, and intelligent reasoning.",
    technologies: ["Next.js", "TypeScript", "AI SDK", "LLMs"],
    category: "AI Engineering",
    overview:
      "This project explores how an AI application can move beyond simple chat by connecting language models with tools and structured workflows. The goal is to create an assistant that can understand intent, decide when a tool is needed, execute actions, and return useful results through a conversational interface.",
    features: [
      "Streaming AI responses",
      "Tool calling",
      "Structured AI workflows",
      "Conversational interface",
      "Context-aware interactions",
      "Extensible tool architecture",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  "nalitabari-ai": {
    title: "Nalitabari AI",
    description:
      "An AI-powered information experience designed to make local information easier to discover and understand.",
    technologies: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
    category: "AI Application",
    overview:
      "Nalitabari AI explores how artificial intelligence can improve access to structured local information. The platform combines a modern web interface with AI-powered retrieval to help users discover useful information about their local community.",
    features: [
      "AI-powered search",
      "Local information retrieval",
      "Structured data architecture",
      "Responsive interface",
      "Context-aware answers",
      "Scalable information model",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  "next-task": {
    title: "NextTask",
    description:
      "A modern task management application built around a clean interface and scalable Next.js architecture.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    category: "Web Application",
    overview:
      "NextTask is a productivity-focused web application designed around simplicity and usability. The project focuses on creating a clean task management experience while maintaining a type-safe and maintainable application architecture.",
    features: [
      "Task management",
      "Responsive dashboard",
      "Modern UI components",
      "Type-safe architecture",
      "Reusable components",
      "Clean application structure",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
};

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}