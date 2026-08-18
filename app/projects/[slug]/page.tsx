
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiOpenai,
} from "react-icons/si";

import type { IconType } from "react-icons";

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

const technologyIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  "AI SDK": Brain,
  LLMs: SiOpenai,
  AI: Brain,
  "shadcn/ui": Sparkles,
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
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border bg-background/70">
            <Brain className="size-7 text-primary" />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight">
            Project not found
          </h1>

          <p className="mt-4 text-muted-foreground">
            The project you are looking for does not exist.
          </p>

          <Link
            href="/projects"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to projects
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

        <div className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-[10%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur-md">
              <Sparkles className="size-3.5" />
              {project.category}
            </span>

            <span className="text-sm text-muted-foreground">
              Case Study
            </span>
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-9 text-muted-foreground">
            {project.description}
          </p>
        </motion.header>

        {/* Technology stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {project.technologies.map((technology) => {
            const Icon = technologyIcons[technology];

            return (
              <div
                key={technology}
                className="inline-flex items-center gap-2 rounded-xl border bg-background/70 px-4 py-2.5 text-sm font-medium backdrop-blur-md"
              >
                {Icon && <Icon className="size-4 text-primary" />}
                {technology}
              </div>
            );
          })}
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {project.liveUrl !== "#" ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Live Demo
              <ExternalLink className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-primary/50 px-5 py-3 font-medium text-primary-foreground">
              Live Demo
              <ExternalLink className="size-4" />
            </span>
          )}

          {project.githubUrl !== "#" ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border bg-background/70 px-5 py-3 font-medium backdrop-blur-md transition-colors hover:bg-muted"
            >
              <Github className="size-4" />
              GitHub
            </Link>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border px-5 py-3 font-medium text-muted-foreground">
              <Github className="size-4" />
              GitHub
            </span>
          )}
        </motion.div>

        {/* Divider */}
        <div className="my-20 h-px bg-border" />

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Brain className="size-5 text-primary" />
              </div>

              <h2 className="text-2xl font-semibold">Project Overview</h2>
            </div>

            <p className="mt-7 text-lg leading-9 text-muted-foreground">
              {project.overview}
            </p>
          </motion.section>

          {/* Project info */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="h-fit rounded-2xl border bg-background/60 p-6 backdrop-blur-md"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Project type
            </p>

            <p className="mt-2 text-lg font-semibold">{project.category}</p>

            <div className="my-6 h-px bg-border" />

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Technologies
            </p>

            <div className="mt-4 space-y-3">
              {project.technologies.map((technology) => {
                const Icon = technologyIcons[technology];

                return (
                  <div
                    key={technology}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    {Icon && (
                      <Icon className="size-4 shrink-0 text-primary" />
                    )}
                    {technology}
                  </div>
                );
              })}
            </div>
          </motion.aside>
        </div>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            What it does
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Key features
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border bg-background/60 p-6 backdrop-blur-md transition-shadow hover:shadow-lg"
              >
                <CheckCircle2 className="size-6 text-primary transition-transform group-hover:scale-110" />

                <h3 className="mt-5 font-semibold">{feature}</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Designed as part of the project&apos;s core product
                  experience.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-24 overflow-hidden rounded-3xl border bg-background/60 p-8 text-center backdrop-blur-md sm:p-12"
        >
          <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <Sparkles className="mx-auto size-7 text-primary" />

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              Interested in the implementation?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Explore more projects and experiments from my portfolio.
            </p>

            <Link
              href="/projects"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              View all projects
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
