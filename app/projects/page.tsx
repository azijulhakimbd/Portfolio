"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiShadcnui,
} from "react-icons/si";

import type { IconType } from "react-icons";

import {
  containerVariants,
  cardVariants,
  fadeUpVariants,
  scaleInVariants,
} from "@/lib/animations";

const technologyIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  "shadcn/ui": SiShadcnui,

  // AI technologies
  "AI SDK": Brain,
  AI: Brain,
  LLMs: Brain,
};

const projects = [
  {
    slug: "ai-agent",
    title: "Personal AI Agent",
    description:
      "An AI agent designed to understand requests, use tools, and complete useful tasks through intelligent workflows.",
    technologies: ["Next.js", "TypeScript", "AI SDK", "LLMs"],
    github: "#",
    category: "AI Engineering",
  },
  {
    slug: "nalitabari-ai",
    title: "Nalitabari AI",
    description:
      "An AI-powered information experience for searching, retrieving, and understanding local information.",
    technologies: ["Next.js", "AI", "TypeScript", "PostgreSQL"],
    github: "#",
    category: "AI Application",
  },
  {
    slug: "next-task",
    title: "NextTask",
    description:
      "A modern task management application built with a scalable Next.js architecture and clean product interface.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    github: "#",
    category: "Web Application",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ========================================
          AI BACKGROUND
      ======================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Primary glow */}
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        {/* Left glow */}
        <div className="absolute -left-40 top-[40%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Right glow */}
        <div className="absolute -right-40 bottom-[10%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* ========================================
            HEADER
        ======================================== */}
        <motion.header
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur-md">
            <Sparkles className="size-4 text-primary" />

            <span>Selected work</span>

            <span className="size-1.5 rounded-full bg-primary" />

            <span>AI × Frontend</span>
          </div>

          {/* Title */}
          <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl">
            Projects
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A selection of projects exploring the intersection of frontend
            engineering, artificial intelligence, and useful digital products.
          </p>
        </motion.header>

        {/* ========================================
            PROJECT GRID
        ======================================== */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
              className="group relative flex min-h-[440px] flex-col overflow-hidden rounded-3xl border bg-background/60 p-7 shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* ========================================
                  HOVER GLOW
              ======================================== */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* ========================================
                  CARD HEADER
              ======================================== */}
              <div className="relative flex items-center justify-between">
                {/* Project Number */}
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Project Icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="flex size-10 items-center justify-center rounded-xl border bg-background/70"
                >
                  {project.category.includes("AI") ? (
                    <Brain className="size-5 text-primary" />
                  ) : (
                    <Sparkles className="size-5 text-primary" />
                  )}
                </motion.div>
              </div>

              {/* ========================================
                  PROJECT CONTENT
              ======================================== */}
              <div className="relative mt-10 flex-1">
                {/* Category */}
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  {project.category}
                </p>

                {/* Title */}
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="mt-4 leading-7 text-muted-foreground">
                  {project.description}
                </p>

                {/* ========================================
                    TECHNOLOGIES
                ======================================== */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => {
                    const Icon = technologyIcons[technology];

                    return (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:bg-muted"
                      >
                        {Icon && (
                          <Icon className="size-3.5 shrink-0 text-foreground" />
                        )}

                        {technology}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* ========================================
                  LINKS
              ======================================== */}
              <div className="relative mt-8 flex items-center gap-3 border-t pt-5">
                {/* View Project */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/link inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
                >
                  View project

                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>

                {/* GitHub */}
                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <FaGithub className="size-4" />
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground/50">
                    <FaGithub className="size-4" />
                    Coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.section>

        {/* ========================================
            BOTTOM CTA
        ======================================== */}
        <motion.section
          variants={scaleInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mt-24 overflow-hidden rounded-3xl border bg-background/60 p-8 text-center backdrop-blur-md sm:p-12"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <Sparkles className="mx-auto size-6 text-primary" />

            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
              More experiments are coming.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              I&apos;m continuously building and experimenting with AI agents,
              intelligent interfaces, and modern web technologies.
            </p>

            <Link
              href="/ai-lab"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl border bg-background px-5 py-3 text-sm font-medium transition-all duration-300 hover:bg-muted"
            >
              Explore AI Lab

              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}