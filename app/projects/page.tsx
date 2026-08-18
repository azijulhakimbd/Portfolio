import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "ai-agent",
    title: "Personal AI Agent",
    description:
      "An AI agent designed to understand requests, use tools, and complete useful tasks.",
    technologies: ["Next.js", "TypeScript", "AI SDK", "LLMs"],
    github: "#",
  },
  {
    slug: "nalitabari-ai",
    title: "Nalitabari AI",
    description:
      "An AI-powered information experience for searching and understanding local information.",
    technologies: ["Next.js", "AI", "TypeScript", "PostgreSQL"],
    github: "#",
  },
  {
    slug: "next-task",
    title: "NextTask",
    description:
      "A modern task management application built with a scalable Next.js architecture.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Portfolio
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">Projects</h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Selected projects demonstrating my work across frontend engineering,
          AI applications, and full-stack product development.
        </p>
      </header>

      <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{project.title}</h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 font-medium text-primary"
              >
                View project
                <ArrowUpRight className="size-4" />
              </Link>

              <Link
                href={project.github}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground"
              >
               
                GitHub
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}