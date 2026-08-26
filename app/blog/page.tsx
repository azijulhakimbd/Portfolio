"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const posts = [
  {
    slug: "building-ai-agents",
    title: "Building AI Agents with Next.js",
    excerpt:
      "What I learned while building an AI agent with streaming responses and tool calling.",
    date: "August 2026",
    category: "AI Engineering",
  },
  {
    slug: "ai-sdk-nextjs",
    title: "AI SDK in Modern Next.js Applications",
    excerpt:
      "Exploring patterns for integrating AI models into modern App Router applications.",
    date: "August 2026",
    category: "Next.js",
  },
  {
    slug: "designing-ai-interfaces",
    title: "Designing Better AI Interfaces",
    excerpt:
      "Why AI products need thoughtful interaction design instead of simply adding a chat box.",
    date: "July 2026",
    category: "AI UX",
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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BlogPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="pointer-events-none absolute right-0 top-96 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Header */}
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm font-medium backdrop-blur"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          >
            <Sparkles className="size-4 text-emerald-500" />

            <span className="text-muted-foreground">
              Thoughts, experiments & lessons
            </span>
          </motion.div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Writing
            <span className="text-emerald-500">.</span>
          </h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? false : { opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Notes about frontend engineering, artificial intelligence,
            software architecture, and things I learn while building.
          </motion.p>
        </motion.header>

        {/* Blog cards */}
        <motion.section
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              variants={shouldReduceMotion ? undefined : cardVariants}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl border bg-background/70 p-6 backdrop-blur transition-colors duration-300 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                {/* Hover glow */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                          scale: 1.015,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  }}
                  className="relative h-full"
                >
                  {/* Category */}
                  <motion.p
                    className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground"
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            borderColor: "rgb(16 185 129 / 0.5)",
                            color: "rgb(16 185 129)",
                          }
                    }
                  >
                    {post.category}
                  </motion.p>

                  {/* Title */}
                  <h2 className="mt-5 flex items-start justify-between gap-4 text-2xl font-semibold tracking-tight">
                    <span className="transition-colors duration-300 group-hover:text-emerald-500">
                      {post.title}
                    </span>

                    <motion.span
                      initial={{ opacity: 0, x: -5, y: 5 }}
                      whileHover={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-emerald-500"
                    >
                      <ArrowUpRight className="size-5" />
                    </motion.span>
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-8 flex items-center justify-between border-t pt-5">
                    <p className="text-sm text-muted-foreground">
                      {post.date}
                    </p>

                    <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-emerald-500">
                      Read article →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.section>

        {/* Bottom CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t pt-10"
        >
          <p className="text-sm text-muted-foreground">
            More articles coming soon — documenting what I build, break, and
            learn along the way.
          </p>
        </motion.div>
      </div>
    </main>
  );
}