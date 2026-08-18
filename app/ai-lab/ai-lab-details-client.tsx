"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Check,
  FlaskConical,
  Sparkles,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Experiment = {
  title: string;
  category: string;
  description: string;
  concepts: readonly string[];
  status: string;
  icon: "brain" | "sparkles" | "flask";
};

type Props = {
  experiment: Experiment;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const icons = {
  brain: Brain,
  sparkles: Sparkles,
  flask: FlaskConical,
};

export default function AILabDetailsClient({ experiment }: Props) {
  const Icon = icons[experiment.icon];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.65, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-220px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
        />

        <div className="absolute -left-40 top-[40%] size-[400px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute -right-40 bottom-[10%] size-[450px] rounded-full bg-purple-500/10 blur-[140px]" />

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
            href="/ai-lab"
            className="group inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl transition hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to AI Lab
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-14"
        >
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.05,
              }}
              className="flex size-16 items-center justify-center rounded-2xl border bg-background/60 text-primary shadow-sm backdrop-blur-xl"
            >
              <Icon className="size-8" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {experiment.category}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>

              {experiment.status}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            {experiment.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            {experiment.description}
          </motion.p>
        </motion.header>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-20 grid gap-6 lg:grid-cols-[1.5fr_1fr]"
        >
          {/* Concepts */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border bg-background/60 p-7 shadow-sm backdrop-blur-xl sm:p-9"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-[90px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="size-5" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Exploration
                  </p>

                  <h2 className="mt-1 text-xl font-semibold">
                    Concepts explored
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {experiment.concepts.map((concept) => (
                  <motion.div
                    key={concept}
                    whileHover={{ y: -3 }}
                    className="group flex items-center gap-3 rounded-2xl border bg-muted/30 p-4 transition-colors hover:bg-muted/60"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Check className="size-4" />
                    </div>

                    <span className="text-sm font-medium">{concept}</span>

                    <ArrowUpRight className="ml-auto size-4 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Research */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border bg-background/60 p-7 shadow-sm backdrop-blur-xl sm:p-9"
          >
            <div className="pointer-events-none absolute -bottom-20 -right-20 size-48 rounded-full bg-purple-500/10 blur-[90px]" />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                About this experiment
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Learning through building.
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                This experiment is part of my ongoing AI engineering research,
                where I prototype ideas, test emerging techniques, and explore
                how AI can become useful product experiences.
              </p>

              <div className="mt-7 border-t pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Experiment status
                  </span>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <span className="size-2 rounded-full bg-primary" />
                    {experiment.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{ duration: 0.7 }}
          className="relative mt-8 overflow-hidden rounded-3xl border bg-background/60 p-8 backdrop-blur-xl sm:p-10"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-primary/10 blur-[110px]" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <FlaskConical className="size-4" />
                AI Lab
              </div>

              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                Explore more experiments
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Discover more AI experiments, prototypes, and research ideas.
              </p>
            </div>

            <Link
              href="/ai-lab"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border bg-background/70 px-5 py-3 text-sm font-medium backdrop-blur-md transition hover:bg-muted"
            >
              View AI Lab

              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.section>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center justify-center gap-3 text-sm text-muted-foreground"
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