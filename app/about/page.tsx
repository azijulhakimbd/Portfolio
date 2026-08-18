"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Code2,
  Cpu,
  Sparkles,
  Target,
} from "lucide-react";

const values = [
  {
    title: "Build",
    description:
      "I enjoy turning ideas into production-ready web applications with thoughtful architecture, scalable components, and clean interfaces.",
    icon: Code2,
  },
  {
    title: "Explore",
    description:
      "I continuously experiment with LLMs, agents, AI SDKs, RAG, tool calling, and emerging AI development patterns.",
    icon: Brain,
  },
  {
    title: "Impact",
    description:
      "My goal is to use technology to solve meaningful problems rather than building AI features simply because they are possible.",
    icon: Target,
  },
];

const stats = [
  {
    value: "AI",
    label: "Primary Focus",
  },
  {
    value: "Next.js",
    label: "Frontend Stack",
  },
  {
    value: "LLMs",
    label: "AI Exploration",
  },
  {
    value: "∞",
    label: "Learning",
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
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute -right-40 top-[65%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[120px]" />

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
        {/* Hero */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur-md">
              <Sparkles className="size-4 text-primary" />

              <span>About me</span>

              <span className="size-1.5 rounded-full bg-primary" />

              <span>AI × Frontend</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-5xl"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Frontend engineer
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                exploring the future of AI.
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground"
          >
            <p>
              I&apos;m{" "}
              <span className="font-medium text-foreground">
                Md. Azijul Hakim
              </span>
              , a frontend-focused developer with a growing specialization in
              artificial intelligence and AI-powered applications.
            </p>

            <p>
              My primary stack revolves around React, Next.js, TypeScript,
              Tailwind CSS, and modern component systems. Alongside frontend
              engineering, I work with AI SDKs, LLM APIs, agents, tools, and
              retrieval-based applications.
            </p>

            <p>
              I believe great AI products need both strong intelligence and
              excellent interfaces. That is where my work sits:{" "}
              <span className="font-medium text-foreground">
                between AI engineering and frontend product development.
              </span>
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Explore my work

              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/ai-lab"
              className="inline-flex items-center gap-2 rounded-xl border bg-background/70 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-muted"
            >
              <Brain className="size-4 text-primary" />
              Explore AI Lab
            </a>
          </motion.div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-24 grid grid-cols-2 overflow-hidden rounded-2xl border bg-background/60 backdrop-blur-md md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className={`relative p-6 sm:p-8 ${
                index > 0 ? "border-l" : ""
              } ${index >= 2 ? "border-t md:border-t-0" : ""}`}
            >
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-28 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
          {/* Left */}
          <div>
            <div className="inline-flex size-12 items-center justify-center rounded-xl border bg-background/70 shadow-sm backdrop-blur">
              <Cpu className="size-6 text-primary" />
            </div>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              My approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology should solve problems.
            </h2>
          </div>

          {/* Right */}
          <div className="rounded-3xl border bg-background/60 p-7 shadow-sm backdrop-blur-md sm:p-10">
            <p className="text-xl leading-9 text-muted-foreground">
              I&apos;m interested in the intersection of{" "}
              <span className="font-medium text-foreground">
                intelligent systems, product design, and frontend engineering.
              </span>
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              Instead of treating AI as an isolated technology, I focus on how
              it can become part of useful products — from intelligent search
              and retrieval systems to AI agents, automation, and interfaces
              that make complex technology feel simple.
            </p>
          </div>
        </motion.section>

        {/* Values */}
        <section className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              What drives me
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Build. Explore. Impact.
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Three principles that shape how I approach software and AI.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative overflow-hidden rounded-2xl border bg-background/60 p-7 shadow-sm backdrop-blur-md transition-shadow hover:shadow-xl"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {value.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Bottom Statement */}
        <motion.section
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-28 overflow-hidden rounded-3xl border bg-background/60 p-8 text-center backdrop-blur-md sm:p-12"
        >
          <div className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <Sparkles className="mx-auto size-7 text-primary" />

            <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
              Building interfaces for an increasingly intelligent web.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              I&apos;m constantly learning, experimenting, and building toward
              the next generation of AI-powered products.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}