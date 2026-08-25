"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Sparkles,
  Users,
} from "lucide-react";

import {
  containerVariants,
  fadeUpVariants,
  fadeLeftVariants,
  fadeRightVariants,
} from "@/lib/animations";

const experiences = [
  {
    period: "2026 — Present",
    role: "Frontend AI Engineer",
    company: "Independent / AI Projects",
    description:
      "Building AI-focused web applications and experimenting with intelligent agents, LLM-powered workflows, AI SDKs, and modern frontend architecture.",
    technologies: [
      "Next.js",
      "TypeScript",
      "AI SDK",
      "LLMs",
      "AI Agents",
      "RAG",
    ],
    current: true,
    type: "ai",
  },
  {
    period: "September — November 2025",
    role: "Team Lead",
    company: "DevOps Team",
    description:
      "Led a development team in building EasyStay, a short-term rental platform. Coordinated the team’s development workflow, contributed to frontend architecture and implementation, and helped guide the project from planning through feature development.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "Supabase",
    ],
    current: false,
    type: "leadership",
  },
  {
    period: "2025 — 2026",
    role: "Frontend Developer",
    company: "Web Development",
    description:
      "Developing responsive and production-ready web applications using React, Next.js, TypeScript, Tailwind CSS, and modern component systems.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    current: false,
    type: "frontend",
  },
];

export default function ExperienceSection() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* =====================================================
          AI BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute -left-40 top-[35%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

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

      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.header
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur-md">
            <BriefcaseBusiness className="size-4 text-primary" />

            <span>Career</span>

            <span className="size-1.5 rounded-full bg-primary" />

            <span>Experience</span>
          </div>

          <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl">
            Experience
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            My journey across frontend engineering, team leadership, and AI
            development, continuously learning, building, and exploring new
            technologies.
          </p>
        </motion.header>

        {/* =====================================================
            TIMELINE
        ====================================================== */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="relative mt-20"
        >
          {/* Timeline line */}
          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut" as const,
            }}
            style={{
              transformOrigin: "top",
            }}
            className="absolute left-[11px] top-2 h-[calc(100%-16px)] w-px bg-border sm:left-[15px]"
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.period}`}
                variants={
                  index % 2 === 0 ? fadeLeftVariants : fadeRightVariants
                }
                className="relative pl-10 sm:pl-12"
              >
                {/* =================================================
                    TIMELINE POINT
                ================================================== */}
                <div className="absolute left-0 top-8 flex items-center justify-center">
                  {experience.current && (
                    <motion.span
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.25, 0, 0.25],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut" as const,
                      }}
                      className="absolute size-7 rounded-full bg-primary"
                    />
                  )}

                  <span className="relative flex size-6 items-center justify-center rounded-full border-4 border-background bg-primary shadow-sm">
                    <span className="size-1.5 rounded-full bg-primary-foreground" />
                  </span>
                </div>

                {/* =================================================
                    EXPERIENCE CARD
                ================================================== */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="group relative overflow-hidden rounded-3xl border bg-background/60 p-7 shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl sm:p-8"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-primary/10 opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    {/* =================================================
                        TOP ROW
                    ================================================== */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        {/* Period */}
                        <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                          <CalendarDays className="size-3.5" />

                          {experience.period}
                        </div>

                        {/* Role */}
                        <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                          {experience.role}
                        </h2>

                        {/* Company / Team */}
                        <div className="mt-2 flex items-center gap-2 text-sm font-medium text-primary">
                          <BriefcaseBusiness className="size-4" />

                          {experience.company}
                        </div>
                      </div>

                      {/* Number */}
                      <div className="hidden font-mono text-sm text-muted-foreground sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* =================================================
                        SPECIAL BADGES
                    ================================================== */}

                    {experience.current && (
                      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                        <motion.span
                          animate={{
                            opacity: [1, 0.35, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                          className="size-1.5 rounded-full bg-primary"
                        />

                        Currently active
                      </div>
                    )}

                    {experience.type === "leadership" && (
                      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                        <Users className="size-3.5" />

                        Team Leadership
                      </div>
                    )}

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}
                    <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
                      {experience.description}
                    </p>

                    {/* =================================================
                        PROJECT HIGHLIGHT
                    ================================================== */}

                    {experience.type === "leadership" && (
                      <div className="mt-7 rounded-2xl border bg-muted/30 p-5">
                        <div className="flex items-start gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                            <BriefcaseBusiness className="size-5 text-primary" />
                          </div>

                          <div>
                            <p className="text-sm font-semibold">
                              Project: EasyStay
                            </p>

                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              A short-term rental platform designed to connect
                              guests with rental properties and provide a
                              modern booking experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* =================================================
                        TECHNOLOGIES
                    ================================================== */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                      className="mt-7 flex flex-wrap gap-2"
                    >
                      {experience.technologies.map((technology) => (
                        <motion.span
                          key={technology}
                          variants={fadeUpVariants}
                          whileHover={{
                            scale: 1.05,
                          }}
                          className="rounded-xl border bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* =================================================
                        BOTTOM
                    ================================================== */}
                    <div className="mt-8 flex items-center gap-3 border-t pt-5 text-sm text-muted-foreground">
                      {experience.type === "ai" ? (
                        <>
                          <Brain className="size-4 text-primary" />

                          <span>
                            Focused on AI-powered product development
                          </span>
                        </>
                      ) : experience.type === "leadership" ? (
                        <>
                          <Users className="size-4 text-primary" />

                          <span>
                            Team leadership & collaborative product development
                          </span>
                        </>
                      ) : (
                        <>
                          <Code2 className="size-4 text-primary" />

                          <span>
                            Frontend engineering & product development
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* =====================================================
            CURRENT DIRECTION
        ====================================================== */}
        <motion.section
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mt-24 overflow-hidden rounded-3xl border bg-background/60 p-8 backdrop-blur-md sm:p-12"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
            {/* Icon */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
              className="flex size-14 items-center justify-center rounded-2xl bg-primary/10"
            >
              <Brain className="size-7 text-primary" />
            </motion.div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <Sparkles className="size-4 text-primary" />

                Current direction
              </div>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Exploring the intersection of AI and frontend engineering.
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
                I&apos;m focused on building useful AI products with strong
                interfaces, combining intelligent systems with thoughtful
                frontend experiences.
              </p>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-16 flex items-center justify-center gap-3 text-sm text-muted-foreground"
        >
          <span className="h-px w-12 bg-border" />

          <Sparkles className="size-4 text-primary" />

          <span>Building. Leading. Learning. Evolving.</span>

          <Sparkles className="size-4 text-primary" />

          <span className="h-px w-12 bg-border" />
        </motion.div>
      </div>
    </main>
  );
}