"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  ExternalLink,
  Server,
  Lightbulb,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiStripe,
  SiJavascript,
} from "react-icons/si";

import { FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";

/* =========================================================
   PROJECT TYPE
========================================================= */

type Project = {
  slug?: string;
  title: string;
  description: string;
  technologies: readonly string[];
  overview: string;
  features: readonly string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  serverUrl?: string;
  images: readonly string[];
  challenges?: string;
  improvements?: string;
};

type ProjectDetailsClientProps = {
  project: Project;
};

/* =========================================================
   TECHNOLOGY ICON TYPE
========================================================= */

type TechnologyIcon = IconType | LucideIcon;

/* =========================================================
   TECHNOLOGY ICONS
========================================================= */

const technologyIcons: Record<string, TechnologyIcon> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,

  MongoDB: SiMongodb,
  "MongoDB(Mongoose ORM)": SiMongodb,

  "Express.js": SiExpress,
  "Express JS": SiExpress,

  "Node.js": SiNodedotjs,
  Node: SiNodedotjs,

  Firebase: SiFirebase,
  Stripe: SiStripe,
  JavaScript: SiJavascript,

  /* AI / Other technologies */
  "AI SDK": Brain,
  AI: Brain,
  LLMs: Brain,

  "Next Auth": Sparkles,
  "Shadcn UI": Sparkles,
  "shadcn/ui": Sparkles,
  JWT: Sparkles,
  HTML: Sparkles,
};

/* =========================================================
   ANIMATIONS
========================================================= */

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ProjectDetailsClient({
  project,
}: ProjectDetailsClientProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Primary glow */}
        <div className="absolute left-1/2 top-[-180px] h-[550px] w-[750px] max-w-[90vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

        {/* Left glow */}
        <div className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

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

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {/* =====================================================
            BACK TO PROJECTS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />

            Back to projects
          </Link>
        </motion.div>

        {/* =====================================================
            HERO
        ===================================================== */}

        <motion.header
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 sm:mt-14"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-primary backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs">
              <Sparkles className="size-3.5" />

              {project.category}
            </span>

            <span className="text-xs text-muted-foreground sm:text-sm">
              Case Study
            </span>
          </div>

          <h1 className="mt-6 max-w-5xl text-3xl font-bold tracking-tight sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-4xl text-base leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            {project.description}
          </p>
        </motion.header>

        {/* =====================================================
            TECHNOLOGY STACK
        ===================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3"
        >
          {project.technologies.map((technology) => {
            const Icon = technologyIcons[technology];

            return (
              <div
                key={technology}
                className="inline-flex items-center gap-1.5 rounded-xl border bg-background/70 px-3 py-2 text-xs font-medium backdrop-blur-md transition-colors hover:bg-muted sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
              >
                {Icon ? (
                  <Icon
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-primary sm:size-4"
                  />
                ) : null}

                <span>{technology}</span>
              </div>
            );
          })}
        </motion.section>

        {/* =====================================================
            CTA BUTTONS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3"
        >
          {/* Live */}
          {project.liveUrl && project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live demo`}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:px-5 sm:py-3"
            >
              Live Demo

              <ExternalLink className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-primary/50 px-4 py-2.5 text-sm font-medium text-primary-foreground sm:px-5 sm:py-3">
              Live Demo

              <ExternalLink className="size-4" />
            </span>
          )}

          {/* GitHub */}
          {project.githubUrl && project.githubUrl !== "#" ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} client repository`}
              className="inline-flex items-center gap-2 rounded-xl border bg-background/70 px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-muted sm:px-5 sm:py-3"
            >
              <FaGithub className="size-4" />

              Client Code
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium text-muted-foreground sm:px-5 sm:py-3">
              <FaGithub className="size-4" />

              Client Code
            </span>
          )}

          {/* Server */}
          {project.serverUrl && project.serverUrl !== "#" && (
            <a
              href={project.serverUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} server repository`}
              className="inline-flex items-center gap-2 rounded-xl border bg-background/70 px-4 py-2.5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-muted sm:px-5 sm:py-3"
            >
              <Server className="size-4" />

              Server Code
            </a>
          )}
        </motion.div>

        {/* =====================================================
            PROJECT SCREENSHOTS
        ===================================================== */}

        {project.images?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={itemVariants}
            className="mt-16 sm:mt-20"
          >
            <div className="mb-6 sm:mb-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                Visual preview
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl lg:text-4xl">
                Project screenshots
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {project.images.map((image, index) => (
                <motion.a
                  key={image}
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative overflow-hidden rounded-2xl border bg-background/60 shadow-sm backdrop-blur-md ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                      index === 0
                        ? "max-h-[650px]"
                        : "max-h-[500px]"
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                    <div className="scale-90 rounded-full bg-background/90 p-3 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      <ExternalLink className="size-5" />
                    </div>
                  </div>

                  {/* Image number */}
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] text-white backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-3 sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.section>
        )}

        {/* Divider */}
        <div className="my-16 h-px bg-border sm:my-20" />

        {/* =====================================================
            OVERVIEW + PROJECT INFO
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
          {/* Overview */}
          <motion.section
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Brain className="size-5 text-primary" />
              </div>

              <h2 className="text-xl font-semibold sm:text-2xl">
                Project Overview
              </h2>
            </div>

            <p className="mt-6 text-base leading-8 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-9">
              {project.overview}
            </p>
          </motion.section>

          {/* Project Info */}
          <motion.aside
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={itemVariants}
            className="h-fit rounded-2xl border bg-background/60 p-5 backdrop-blur-md sm:p-6"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
              Project type
            </p>

            <p className="mt-2 text-lg font-semibold">
              {project.category}
            </p>

            <div className="my-5 h-px bg-border sm:my-6" />

            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
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
                    {Icon ? (
                      <Icon
                        aria-hidden="true"
                        className="size-4 shrink-0 text-primary"
                      />
                    ) : null}

                    <span>{technology}</span>
                  </div>
                );
              })}
            </div>
          </motion.aside>
        </div>

        {/* =====================================================
            FEATURES
        ===================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={itemVariants}
          className="mt-20 sm:mt-24"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
            What it does
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl lg:text-4xl">
            Key features
          </h2>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -4,
                }}
                className="group rounded-2xl border bg-background/60 p-5 backdrop-blur-md transition-shadow hover:shadow-lg sm:p-6"
              >
                <CheckCircle2 className="size-6 text-primary transition-transform group-hover:scale-110" />

                <h3 className="mt-4 text-sm font-semibold leading-6 sm:mt-5">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* =====================================================
            CHALLENGES
        ===================================================== */}

        {project.challenges && (
          <motion.section
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={itemVariants}
            className="mt-20 sm:mt-24"
          >
            <div className="rounded-3xl border bg-background/60 p-6 backdrop-blur-md sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Brain className="size-5 text-primary" />
                </div>

                <h2 className="text-xl font-semibold sm:text-2xl">
                  Challenges
                </h2>
              </div>

              <p className="mt-5 max-w-4xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
                {project.challenges}
              </p>
            </div>
          </motion.section>
        )}

        {/* =====================================================
            FUTURE IMPROVEMENTS
        ===================================================== */}

        {project.improvements && (
          <motion.section
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={itemVariants}
            className="mt-6 sm:mt-8"
          >
            <div className="rounded-3xl border bg-background/60 p-6 backdrop-blur-md sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Lightbulb className="size-5 text-primary" />
                </div>

                <h2 className="text-xl font-semibold sm:text-2xl">
                  Future Improvements
                </h2>
              </div>

              <p className="mt-5 max-w-4xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
                {project.improvements}
              </p>
            </div>
          </motion.section>
        )}

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="relative mt-20 overflow-hidden rounded-3xl border bg-background/60 p-6 text-center backdrop-blur-md sm:mt-24 sm:p-12"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <Sparkles className="mx-auto size-7 text-primary" />

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              Explore more projects
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              Check out the rest of my portfolio to see more web applications,
              experiments, and digital products.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-7 sm:gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 sm:px-5 sm:py-3"
              >
                View all projects

                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted sm:px-5 sm:py-3"
                >
                  <ExternalLink className="size-4" />

                  Visit project
                </a>
              )}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}