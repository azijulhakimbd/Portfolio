"use client";

import Link from "next/link";
import {
  ArrowRight,
  GithubLogo,
  LinkedinLogo,
  Sparkle,
} from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-background">
      {/* AI Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_75%)]" />
      </div>

      {/* AI Nodes */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
        <div className="absolute right-[18%] top-[32%] h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
        <div className="absolute bottom-[25%] left-[25%] h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        <div className="absolute bottom-[30%] right-[25%] h-1.5 w-1.5 rounded-full bg-emerald-400/70" />

        <div className="absolute left-[15%] top-[25%] h-px w-[18%] rotate-[18deg] bg-gradient-to-r from-emerald-400/40 to-transparent" />
        <div className="absolute right-[18%] top-[32%] h-px w-[18%] -rotate-[18deg] bg-gradient-to-l from-emerald-400/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 font-mono text-xs text-emerald-400 backdrop-blur-sm">
            <Sparkle size={14} weight="fill" />
            <span>FRONTEND × AI ENGINEERING</span>
          </div>

          {/* Heading */}
          <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building the{" "}
            <span className="relative">
              <span className="relative z-10 text-emerald-400">
                future
              </span>
              <span className="absolute -bottom-1 left-0 h-3 w-full bg-emerald-400/10 blur-sm" />
            </span>
            <br />
            of intelligent web experiences.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            I&apos;m <span className="font-medium text-foreground">Md. Azijul Hakim</span>,
            a Frontend AI Engineer focused on building fast, accessible,
            and intelligent products with Next.js, TypeScript, and modern AI
            technologies.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="group inline-flex h-11 items-center gap-2 rounded-md bg-emerald-500 px-6 font-mono text-sm font-medium text-black transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
            >
              View my work
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-md border border-border bg-background/50 px-6 font-mono text-sm font-medium backdrop-blur transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/5"
            >
              Let&apos;s connect
            </Link>
          </div>

          {/* Social links */}
          <div className="mt-10 flex justify-center gap-3">
            <Link
              href="https://github.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
            >
              <GithubLogo size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/azijulhakimbd/"
              aria-label="LinkedIn"
              className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
            >
              <LinkedinLogo size={20} />
            </Link>
          </div>

          {/* Terminal-style status */}
          <div className="mx-auto mt-16 max-w-md rounded-lg border border-border/60 bg-card/40 p-4 text-left font-mono text-xs backdrop-blur">
            <div className="mb-3 flex items-center gap-2 border-b border-border/50 pb-3">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              <span className="ml-2 text-muted-foreground">
                ~/azijul/portfolio
              </span>
            </div>

            <p className="text-muted-foreground">
              <span className="text-emerald-400">$</span>{" "}
              whoami
            </p>

            <p className="mt-1 text-foreground">
              frontend-ai-engineer
            </p>

            <p className="mt-3 text-muted-foreground">
              <span className="text-emerald-400">$</span>{" "}
              status
            </p>

            <p className="mt-1 flex items-center gap-2 text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              building intelligent interfaces...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}