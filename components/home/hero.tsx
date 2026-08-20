"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GithubLogo,
  LinkedinLogo,
  Sparkle,
  TerminalWindow,
} from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-background">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main glow */}
        <div
          className="
            absolute left-1/2 top-[-12rem]
            h-[22rem] w-[22rem]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/[0.07]
            blur-[100px]
            sm:h-[30rem] sm:w-[30rem]
            sm:blur-[120px]
            lg:h-[38rem] lg:w-[38rem]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "clamp(32px, 4vw, 48px) clamp(32px, 4vw, 48px)",
          }}
        />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_72%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* =========================================================
          DESKTOP AI NODES
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        {/* Left node */}
        <div className="absolute left-[8%] top-[32%] xl:left-[12%]">
          <span className="block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
        </div>

        {/* Right node */}
        <div className="absolute right-[8%] top-[30%] xl:right-[12%]">
          <span className="block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
        </div>

        {/* Lower nodes */}
        <div className="absolute bottom-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-emerald-400/50" />
        <div className="absolute bottom-[22%] right-[17%] h-1.5 w-1.5 rounded-full bg-emerald-400/50" />

        {/* Connections */}
        <div className="absolute left-[8%] top-[32%] h-px w-[15%] rotate-[15deg] bg-gradient-to-r from-emerald-400/30 to-transparent xl:left-[12%]" />

        <div className="absolute right-[8%] top-[30%] h-px w-[15%] -rotate-[15deg] bg-gradient-to-l from-emerald-400/30 to-transparent xl:right-[12%]" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div
        className="
          mx-auto flex w-full max-w-7xl
          items-center
          px-4
          py-18
          sm:px-6 
          md:px-8 md:py-20
          lg:px-10 lg:py-24
          xl:px-12
        "
      >
        <div className="mx-auto w-full max-w-5xl text-center">
          {/* =====================================================
              AVAILABILITY
          ====================================================== */}
          <div
            className="
              mb-5 inline-flex max-w-full
              items-center gap-2
              rounded-full
              border border-border/70
              bg-card/50
              px-3 py-1.5
              text-[10px]
              font-medium
              text-muted-foreground
              shadow-sm
              backdrop-blur-md
              sm:mb-7 sm:px-4 sm:py-2 sm:text-xs
            "
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="truncate">
              Available for frontend & AI projects
            </span>
          </div>

          {/* =====================================================
              EYEBROW
          ====================================================== */}
          <div
            className="
              mb-4 flex
              items-center justify-center gap-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-emerald-400
              sm:mb-5 sm:text-[10px]
              md:text-xs
            "
          >
            <Sparkle size={13} weight="fill" />
            <span>Frontend × AI Engineering</span>
          </div>

          {/* =====================================================
              HEADING
          ====================================================== */}
          <h1
            className="
              mx-auto
              max-w-[18rem]
              font-mono
              font-bold
              leading-[1.04]
              tracking-[-0.045em]
              text-[clamp(2.35rem,9vw,5.5rem)]
              sm:max-w-[34rem]
              md:max-w-4xl
              lg:max-w-5xl
            "
          >
            I build{" "}
            <span className="relative inline-block text-emerald-400">
              intelligent
              <span
                className="
                  absolute
                  -bottom-0.5
                  left-0
                  h-1.5
                  w-full
                  rounded-full
                  bg-emerald-400/10
                  blur-md
                  sm:-bottom-1 sm:h-2
                "
              />
            </span>
            <br className="hidden sm:block" /> digital experiences.
          </h1>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}
          <p
            className="
              mx-auto
              mt-5
              max-w-[21rem]
              text-[14px]
              leading-6
              text-muted-foreground
              sm:mt-6
              sm:max-w-xl
              sm:text-[15px]
              sm:leading-7
              md:text-base
              md:leading-8
              lg:max-w-2xl
              lg:text-lg
            "
          >
            I&apos;m{" "}
            <span className="font-medium text-foreground">
              Md. Azijul Hakim
            </span>
            , a Frontend AI Engineer crafting fast, accessible, and
            thoughtful products with Next.js, TypeScript, and modern AI.
          </p>

          {/* =====================================================
              CTA
          ====================================================== */}
          <div
            className="
              mx-auto
              mt-7
              flex
              w-full
              max-w-md
              flex-col
              gap-3
              sm:mt-8
              sm:flex-row
              sm:max-w-none
              sm:justify-center
            "
          >
            <Link
              href="/projects"
              className="
                group
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-emerald-500
                px-6
                font-mono
                text-sm
                font-semibold
                text-black
                shadow-[0_8px_30px_rgba(16,185,129,0.12)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-emerald-400
                hover:shadow-[0_12px_40px_rgba(16,185,129,0.2)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
                sm:w-auto
              "
            >
              Explore my work

              <ArrowRight
                size={17}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                border border-border/80
                bg-background/60
                px-6
                font-mono
                text-sm
                font-medium
                backdrop-blur-md
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-emerald-500/40
                hover:bg-emerald-500/[0.05]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
                sm:w-auto
              "
            >
              Let&apos;s connect

              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* =====================================================
              SOCIAL LINKS
          ====================================================== */}
          <div className="mt-6 flex items-center justify-center gap-2.5 sm:mt-7">
            <Link
              href="https://github.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                border border-border/70
                bg-card/30
                text-muted-foreground
                transition-all
                hover:border-emerald-500/40
                hover:bg-emerald-500/[0.05]
                hover:text-emerald-400
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-400
              "
            >
              <GithubLogo size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/azijulhakimbd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                border border-border/70
                bg-card/30
                text-muted-foreground
                transition-all
                hover:border-emerald-500/40
                hover:bg-emerald-500/[0.05]
                hover:text-emerald-400
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-400
              "
            >
              <LinkedinLogo size={20} />
            </Link>
          </div>

          {/* =====================================================
              TERMINAL CARD
          ====================================================== */}
          <div
            className="
              mx-auto
              mt-9
              w-full
              max-w-[21rem]
              sm:mt-11
              sm:max-w-lg
              md:mt-12
            "
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border border-border/70
                bg-card/40
                text-left
                shadow-xl
                shadow-black/[0.03]
                backdrop-blur-xl
              "
            >
              {/* Terminal header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-border/60
                  px-3.5
                  py-2.5
                  sm:px-4 sm:py-3
                "
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[9px]
                    text-muted-foreground
                    sm:text-xs
                  "
                >
                  <TerminalWindow size={13} />
                  <span>azijul.dev</span>
                </div>
              </div>

              {/* Terminal body */}
              <div
                className="
                  space-y-3.5
                  p-3.5
                  font-mono
                  text-[11px]
                  sm:space-y-4
                  sm:p-5
                  sm:text-xs
                  md:text-sm
                "
              >
                <div>
                  <p className="text-muted-foreground">
                    <span className="text-emerald-400">$</span> whoami
                  </p>

                  <p className="mt-1 break-words text-foreground">
                    frontend-ai-engineer
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">
                    <span className="text-emerald-400">$</span> stack
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["Next.js", "TypeScript", "AI", "Tailwind"].map(
                      (item) => (
                        <span
                          key={item}
                          className="
                            rounded-md
                            border border-border/60
                            bg-background/50
                            px-2
                            py-1
                            text-[9px]
                            text-muted-foreground
                            sm:text-[10px]
                            md:text-xs
                          "
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-start
                    gap-2
                    border-t
                    border-border/50
                    pt-3
                    text-emerald-400
                  "
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" />

                  <span className="break-words">
                    building intelligent interfaces...
                  </span>
                </div>
              </div>

              {/* Subtle hover glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-px
                  -z-10
                  rounded-xl
                  bg-emerald-400/0
                  blur-xl
                  transition-all
                  duration-500
                  group-hover:bg-emerald-400/[0.04]
                "
              />
            </div>
          </div>

          {/* =====================================================
              SCROLL INDICATOR
          ====================================================== */}
          <div
            className="
              mt-9
              hidden
              items-center
              justify-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-muted-foreground/50
              sm:flex
            "
          >
            <span className="h-px w-7 bg-border sm:w-8" />
            Scroll to explore
            <span className="h-px w-7 bg-border sm:w-8" />
          </div>
        </div>
      </div>
    </section>
  );
}