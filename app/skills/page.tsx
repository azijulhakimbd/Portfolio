"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  GitBranch,
  Sparkles,
  Wrench,
} from "lucide-react";

import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaRobot,
  FaTools,
} from "react-icons/fa";

import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
};

type SkillGroup = {
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Building modern, responsive, and scalable user interfaces.",
    icon: Code2,
    skills: [
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
      },
      {
        name: "JavaScript",
        icon: FaJs,
      },
      {
        name: "TypeScript",
        icon: FaCodeIcon,
      },
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Next.js",
        icon: FaCodeIcon,
      },
    ],
  },

  {
    title: "UI & Styling",
    description:
      "Creating polished interfaces, design systems, and interactive experiences.",
    icon: Sparkles,
    skills: [
      {
        name: "Tailwind CSS",
        icon: FaCss3Alt,
      },
      {
        name: "shadcn/ui",
        icon: FaTools,
      },
      {
        name: "Radix UI",
        icon: FaTools,
      },
      {
        name: "Framer Motion",
        icon: FaTools,
      },
    ],
  },

  {
    title: "AI Engineering",
    description:
      "Building intelligent applications around LLMs, agents, and AI workflows.",
    icon: Brain,
    skills: [
      {
        name: "LLMs",
        icon: FaRobot,
      },
      {
        name: "OpenAI",
        icon: FaRobot,
      },
      {
        name: "Claude",
        icon: FaRobot,
      },
      {
        name: "AI SDK",
        icon: FaRobot,
      },
      {
        name: "AI Agents",
        icon: FaRobot,
      },
      {
        name: "RAG",
        icon: FaRobot,
      },
      {
        name: "Tool Calling",
        icon: Wrench,
      },
    ],
  },

  {
    title: "Backend",
    description:
      "Developing APIs, databases, and reliable backend architectures.",
    icon: Database,
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: FaCodeIcon,
      },
      {
        name: "MongoDB",
        icon: FaDatabase,
      },
      {
        name: "PostgreSQL",
        icon: FaDatabase,
      },
      {
        name: "Prisma",
        icon: FaDatabase,
      },
    ],
  },

  {
    title: "Tools",
    description:
      "Tools and platforms I use throughout my development workflow.",
    icon: GitBranch,
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "VS Code",
        icon: FaCodeIcon,
      },
      {
        name: "Cursor",
        icon: FaCodeIcon,
      },
      {
        name: "Claude Code",
        icon: FaRobot,
      },
      {
        name: "Vercel",
        icon: FaCodeIcon,
      },
    ],
  },
];

/*
 * Generic code icon for technologies that don't have
 * a reliable Font Awesome icon in every react-icons version.
 */
function FaCodeIcon(props: React.ComponentProps<IconType>) {
  return <FaTools {...props} />;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* =====================================================
          AI BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main glow */}
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        {/* Blue glow */}
        <div className="absolute -left-40 top-[35%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Purple glow */}
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
        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.header
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur-md">
            <Sparkles className="size-4 text-primary" />

            <span>Toolkit</span>

            <span className="size-1.5 rounded-full bg-primary" />

            <span>AI × Web</span>
          </div>

          <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl">
            Skills
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Technologies and tools I use to build modern web applications,
            intelligent products, and AI-powered experiences.
          </p>
        </motion.header>

        {/* =====================================================
            SKILL GRID
        ====================================================== */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <motion.article
                key={group.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group relative overflow-hidden rounded-3xl border bg-background/60 p-7 shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Category icon */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex size-12 items-center justify-center rounded-xl bg-primary/10"
                  >
                    <GroupIcon className="size-6 text-primary" />
                  </motion.div>

                  {/* Category */}
                  <h2 className="mt-6 text-xl font-semibold tracking-tight">
                    {group.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill, index) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.span
                          key={skill.name}
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            delay: 0.25 + index * 0.04,
                            duration: 0.3,
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                          }}
                          className="inline-flex items-center gap-2 rounded-xl border bg-muted/50 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          <SkillIcon className="size-4 text-foreground" />

                          {skill.name}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.section>

        {/* =====================================================
            AI FOCUS
        ====================================================== */}
        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mt-24 overflow-hidden rounded-3xl border bg-background/60 p-8 backdrop-blur-md sm:p-12"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            {/* Left */}
            <div>
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex size-12 items-center justify-center rounded-xl bg-primary/10"
              >
                <Brain className="size-6 text-primary" />
              </motion.div>

              <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Current focus
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Building with AI.
              </h2>
            </div>

            {/* Right */}
            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                My current focus is the intersection of{" "}
                <span className="font-medium text-foreground">
                  AI engineering and frontend product development.
                </span>
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "LLM Applications",
                  "AI Agents",
                  "RAG",
                  "Tool Calling",
                  "AI Interfaces",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    className="rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16 flex items-center justify-center gap-3 text-sm text-muted-foreground"
        >
          <span className="h-px w-12 bg-border" />

          <Sparkles className="size-4 text-primary" />

          <span>Always learning. Always building.</span>

          <Sparkles className="size-4 text-primary" />

          <span className="h-px w-12 bg-border" />
        </motion.div>
      </div>
    </main>
  );
}