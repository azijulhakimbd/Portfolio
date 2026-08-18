"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  FlaskConical,
  Sparkles,
  Activity,
  CircleDot,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const experiments = [
  {
    slug: "ai-agent",
    title: "AI Agent",
    description:
      "Exploring tool-using AI agents that can reason about tasks and execute actions.",
    category: "Agents",
    icon: Brain,
    number: "01",
    tags: ["LLM", "Tools", "Agents"],
  },
  {
    slug: "rag-search",
    title: "RAG Search",
    description:
      "Experimenting with retrieval-augmented generation and contextual AI responses.",
    category: "RAG",
    icon: Sparkles,
    number: "02",
    tags: ["RAG", "Embeddings", "Search"],
  },
  {
    slug: "ai-ui",
    title: "AI UI",
    description:
      "Exploring interfaces designed specifically for AI-powered applications.",
    category: "Generative UI",
    icon: FlaskConical,
    number: "03",
    tags: ["AI UI", "UX", "Generative"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function AILabPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-220px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
        />

        {/* Left glow */}
        <div className="absolute -left-40 top-[35%] size-[400px] rounded-full bg-blue-500/10 blur-[130px]" />

        {/* Right glow */}
        <div className="absolute -right-40 bottom-[10%] size-[450px] rounded-full bg-purple-500/10 blur-[140px]" />

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
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur-xl"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>

            <span>AI Lab</span>

            <span className="text-border">•</span>

            <span>Experiments in progress</span>
          </motion.div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Exploring the
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
              future of AI.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            A collection of experiments where I explore agents, LLMs, RAG,
            generative interfaces, AI SDKs, and emerging AI development
            techniques.
          </p>

          {/* Small metadata */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 backdrop-blur-md">
              <Activity className="size-4 text-primary" />
              Active research
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 backdrop-blur-md">
              <CircleDot className="size-4 text-primary" />
              {experiments.length} experiments
            </span>
          </div>
        </motion.header>

        {/* =====================================================
            EXPERIMENT GRID
        ====================================================== */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 grid gap-6 lg:grid-cols-3"
        >
          {experiments.map((experiment) => {
            const Icon = experiment.icon;

            return (
              <motion.div
                key={experiment.slug}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <Link
                  href={`/ai-lab/${experiment.slug}`}
                  className="group relative block h-full overflow-hidden rounded-3xl border bg-background/60 p-7 shadow-sm backdrop-blur-xl transition-shadow duration-500 hover:shadow-2xl"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-primary/10 opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Animated border glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-primary/20"
                  />

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{ duration: 0.2 }}
                        className="flex size-14 items-center justify-center rounded-2xl border bg-primary/10 text-primary"
                      >
                        <Icon className="size-7" />
                      </motion.div>

                      <span className="font-mono text-xs text-muted-foreground/50">
                        {experiment.number}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="mt-7">
                      <span className="inline-flex rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {experiment.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 flex items-center gap-2 text-2xl font-semibold tracking-tight">
                      {experiment.title}

                      <ArrowUpRight className="size-5 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </h2>

                    {/* Description */}
                    <p className="mt-4 min-h-[84px] leading-7 text-muted-foreground">
                      {experiment.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {experiment.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border bg-muted/30 px-2.5 py-1.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom */}
                    <div className="mt-8 flex items-center justify-between border-t pt-5">
                      <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                        Explore experiment
                      </span>

                      <motion.div
                        whileHover={{
                          x: 4,
                          y: -4,
                        }}
                        className="flex size-9 items-center justify-center rounded-full border bg-background/70"
                      >
                        <ArrowUpRight className="size-4" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.section>

        {/* =====================================================
            AI RESEARCH SECTION
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
          className="relative mt-24 overflow-hidden rounded-3xl border bg-background/60 p-8 backdrop-blur-xl sm:p-12"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/10 blur-[120px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Brain className="size-5" />
                </div>

                <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Research direction
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                From experiments to{" "}
                <span className="text-primary">real products.</span>
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                The goal of this lab is to turn small AI experiments into
                useful, production-ready experiences that combine intelligent
                systems with thoughtful frontend interfaces.
              </p>
            </div>

            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden shrink-0 lg:block"
            >
              <div className="flex size-32 items-center justify-center rounded-3xl border bg-primary/5">
                <Brain className="size-14 text-primary/70" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-3 text-sm text-muted-foreground"
        >
          <span className="h-px w-12 bg-border" />

          <Sparkles className="size-4 text-primary" />

          <span>Experiment. Learn. Build.</span>

          <Sparkles className="size-4 text-primary" />

          <span className="h-px w-12 bg-border" />
        </motion.div>
      </div>
    </main>
  );
}