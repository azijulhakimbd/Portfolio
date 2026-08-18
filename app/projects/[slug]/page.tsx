import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const projects: Record<
  string,
  {
    title: string;
    description: string;
    technologies: string[];
    overview: string;
    features: string[];
  }
> = {
  "ai-agent": {
    title: "Personal AI Agent",
    description:
      "A practical AI agent focused on completing useful tasks with tools.",
    technologies: ["Next.js", "TypeScript", "AI SDK", "LLMs"],
    overview:
      "This project explores how an AI application can move beyond simple chat by connecting language models with tools and structured workflows.",
    features: [
      "Streaming AI responses",
      "Tool calling",
      "Structured AI workflows",
      "Modern conversational UI",
    ],
  },
  "nalitabari-ai": {
    title: "Nalitabari AI",
    description:
      "An AI-powered information experience for local information.",
    technologies: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
    overview:
      "A local-information platform designed to make community information easier to discover through an AI-powered interface.",
    features: [
      "AI-powered search",
      "Local information retrieval",
      "Responsive interface",
      "Structured data architecture",
    ],
  },
  "next-task": {
    title: "NextTask",
    description: "A modern task management application.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    overview:
      "A productivity-focused web application built around a clean interface and modern Next.js architecture.",
    features: [
      "Task management",
      "Responsive dashboard",
      "Modern UI components",
      "Type-safe application architecture",
    ],
  },
};

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Project not found</h1>

        <Link
          href="/projects"
          className="mt-6 inline-flex items-center gap-2 text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to projects
      </Link>

      <header className="mt-10">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Project
        </p>

        <h1 className="mt-3 text-5xl font-bold">{project.title}</h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
          {project.description}
        </p>
      </header>

      <div className="mt-10 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border px-3 py-1 text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      <section className="mt-16 grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold">Overview</h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            {project.overview}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Key features</h2>

          <ul className="mt-4 space-y-3 text-muted-foreground">
            {project.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-12 flex gap-4">
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground"
        >
          Live Demo
          <ExternalLink className="size-4" />
        </Link>

        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-medium"
        >
          GitHub
          
        </Link>
      </div>
    </main>
  );
}