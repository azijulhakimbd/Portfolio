import Link from "next/link";
import { ArrowLeft, BrainCircuit, Sparkles } from "lucide-react";
import type { Metadata } from "next";

import AIWorkspaceClient from "@/components/3d/AIWorkspaceClient";

export const metadata: Metadata = {
  title: "AI Lab | Md. Azijul Hakim",
  description:
    "An interactive 3D AI engineering workspace built with Next.js, React Three Fiber, and TypeScript.",
};

export default function AILabPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020504] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-400/5 blur-[120px]" />

        <div className="absolute bottom-1/3 left-0 h-[300px] w-[300px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* =======================================================
            HEADER
        ======================================================= */}
        <header className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
            aria-label="Back to portfolio home"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />

            <span>Back to portfolio</span>
          </Link>

          {/* System Status */}
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 sm:flex">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
            />

            <span className="font-mono text-[10px] tracking-wider text-emerald-300">
              3D SYSTEM ONLINE
            </span>
          </div>
        </header>

        {/* =======================================================
            HERO
        ======================================================= */}
        <section
          className="mb-10 max-w-3xl"
          aria-labelledby="ai-lab-title"
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5">
            <BrainCircuit
              className="h-3.5 w-3.5 text-emerald-400"
              aria-hidden="true"
            />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">
              Frontend AI Engineering
            </span>
          </div>

          {/* Heading */}
          <h1
            id="ai-lab-title"
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Welcome to my{" "}
            <span className="text-emerald-400">AI Lab.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Explore an interactive 3D representation of my frontend and AI
            engineering workflow. Orbit the workspace, interact with the
            technology nodes, and customize the environment.
          </p>

          {/* Technology */}
          <div className="mt-5 flex items-center gap-2 text-xs text-white/30">
            <Sparkles
              className="h-3.5 w-3.5 text-emerald-400"
              aria-hidden="true"
            />

            <span>Built with React Three Fiber + Three.js</span>
          </div>
        </section>

        {/* =======================================================
            3D EXPERIENCE
        ======================================================= */}
        <section
          aria-label="Interactive 3D AI workspace"
          className="relative"
        >
          <AIWorkspaceClient />
        </section>

        {/* =======================================================
            ASSIGNMENT INFORMATION
        ======================================================= */}
        <section
          className="mt-10 grid gap-4 md:grid-cols-3"
          aria-label="AI Lab features"
        >
          <InfoCard
            title="Interactive"
            description="Click technology nodes, change materials, orbit the scene, and control animation."
          />

          <InfoCard
            title="Performance"
            description="The 3D experience is lazy-loaded with reduced-motion and low-power optimizations."
          />

          <InfoCard
            title="Responsive"
            description="The workspace adapts to desktop and mobile layouts while keeping controls accessible."
          />
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

interface InfoCardProps {
  title: string;
  description: string;
}

function InfoCard({ title, description }: InfoCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors duration-200 hover:border-emerald-500/20 hover:bg-white/[0.04]">
      <h2 className="text-sm font-semibold text-white">{title}</h2>

      <p className="mt-2 text-xs leading-6 text-white/40">{description}</p>
    </article>
  );
}