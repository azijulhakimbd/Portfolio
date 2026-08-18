"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  {
    label: "Email",
    value: "info@azijul.pro.bd",
    href: "mailto:info@azijul.pro.bd",
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/azijulhakimbd",
    href: "https://github.com/azijulhakimbd",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/azijulhakimbd",
    href: "https://linkedin.com/in/azijulhakimbd",
    icon: FaLinkedin,
    external: true,
  },
];

const interests = [
  "Frontend AI engineering opportunities",
  "AI-powered product development",
  "AI agents and tool-based workflows",
  "LLM applications and RAG",
  "Open-source collaboration",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
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

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* =====================================================
          AI BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Main glow */}
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        {/* Left glow */}
        <div className="absolute -left-40 top-[35%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Right glow */}
        <div className="absolute -right-40 bottom-[5%] h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[120px]" />

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
            HERO
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur-md">
            <MessageCircle className="size-4 text-primary" />

            <span>Contact</span>

            <span className="size-1.5 rounded-full bg-primary" />

            <span>Let&apos;s connect</span>
          </div>

          <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s build something useful.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Whether you have an AI product idea, a frontend project, or simply
            want to connect, feel free to reach out.
          </p>

          {/* Availability */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.35,
              duration: 0.4,
            }}
            className="mt-7 inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>

            <span className="text-muted-foreground">
              Open to interesting opportunities
            </span>
          </motion.div>
        </motion.header>

        {/* =====================================================
            CONTACT CARDS
        ====================================================== */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.label}
                variants={cardVariants}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                whileHover={{
                  y: -7,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group relative overflow-hidden rounded-3xl border bg-background/60 p-7 shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className="flex size-12 items-center justify-center rounded-xl bg-primary/10"
                  >
                    <Icon className="size-6 text-primary" />
                  </motion.div>

                  {/* Label */}
                  <p className="mt-7 text-sm text-muted-foreground">
                    {link.label}
                  </p>

                  {/* Value */}
                  <p className="mt-2 break-all font-medium">
                    {link.value}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                    <span>
                      {link.external ? "Visit profile" : "Send email"}
                    </span>

                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.section>

        {/* =====================================================
            MAIN CTA
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
          className="relative mt-16 overflow-hidden rounded-3xl border bg-background/60 p-8 backdrop-blur-md sm:p-12"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-[110px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
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
                className="flex size-14 items-center justify-center rounded-2xl bg-primary/10"
              >
                <Sparkles className="size-7 text-primary" />
              </motion.div>

              <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Start a conversation
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Have an idea?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                I&apos;m always interested in discussing AI products,
                frontend engineering, creative experiments, and opportunities
                to build something meaningful.
              </p>

              <motion.a
                href="mailto:info@azijul.pro.bd"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                <FaEnvelope className="size-4" />

                Get in touch

                <ArrowUpRight className="size-4" />
              </motion.a>
            </div>

            {/* Right */}
            <div className="rounded-2xl border bg-muted/30 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Currently interested in
              </p>

              <ul className="mt-5 space-y-4">
                {interests.map((interest, index) => (
                  <motion.li
                    key={interest}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.35,
                    }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />

                    <span>{interest}</span>
                  </motion.li>
                ))}
              </ul>
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

          <span>Let&apos;s create something meaningful.</span>

          <Sparkles className="size-4 text-primary" />

          <span className="h-px w-12 bg-border" />
        </motion.div>
      </div>
    </main>
  );
}