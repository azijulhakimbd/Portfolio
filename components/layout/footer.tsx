"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Sparkle,
} from "@phosphor-icons/react";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
  ],
  projects: [
    { label: "AI Agent", href: "/projects#ai-agent" },
    { label: "AI Search", href: "/projects#ai-search" },
    { label: "AI Portfolio", href: "/projects#portfolio" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 bg-background">
      {/* Top glow */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0
          h-px bg-gradient-to-r
          from-transparent
          via-emerald-400/50
          to-transparent
        "
      />

      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-0
          h-64 w-64 -translate-x-1/2
          rounded-full bg-emerald-500/[0.04]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-10 py-14 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  relative flex h-11 w-11
                  items-center justify-center
                  overflow-hidden rounded-xl
                  border border-emerald-500/25
                  bg-emerald-500/10
                  text-emerald-400
                  transition-all duration-300
                  group-hover:border-emerald-400/50
                  group-hover:bg-emerald-400/15
                "
              >
                <div
                  className="
                    absolute inset-0
                    bg-emerald-400/10
                    blur-xl
                  "
                />

                <Brain
                  size={24}
                  weight="duotone"
                  className="
                    relative transition-transform
                    duration-300 group-hover:scale-110
                  "
                />
              </div>

              <div>
                <p className="font-mono text-base font-bold tracking-tight">
                  MAH<span className="text-emerald-400">.</span>
                </p>

                <p
                  className="
                    mt-1 font-mono text-[9px]
                    uppercase tracking-[0.22em]
                    text-muted-foreground
                  "
                >
                  Frontend AI Engineer
                </p>
              </div>
            </Link>

            <p
              className="
                mt-6 max-w-md
                text-sm leading-6
                text-muted-foreground
              "
            >
              I build modern web applications and AI-powered
              experiences with Next.js, TypeScript, React,
              and intelligent agent workflows.
            </p>

            {/* Availability */}
            <div
              className="
                mt-6 inline-flex items-center gap-2
                rounded-full
                border border-emerald-500/20
                bg-emerald-500/5
                px-3 py-1.5
                font-mono text-[10px]
                text-emerald-400
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-emerald-400 opacity-50
                  "
                />

                <span
                  className="
                    relative inline-flex h-2 w-2
                    rounded-full bg-emerald-400
                  "
                />
              </span>

              Open to AI & Frontend opportunities
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3
              className="
                font-mono text-[10px]
                font-semibold uppercase
                tracking-[0.2em]
                text-foreground
              "
            >
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      font-mono text-xs
                      text-muted-foreground
                      transition-colors
                      hover:text-emerald-400
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI / Projects */}
          <div className="md:col-span-2">
            <h3
              className="
                font-mono text-[10px]
                font-semibold uppercase
                tracking-[0.2em]
                text-foreground
              "
            >
              AI Work
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.projects.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      group inline-flex items-center gap-1
                      font-mono text-xs
                      text-muted-foreground
                      transition-colors
                      hover:text-emerald-400
                    "
                  >
                    {item.label}

                    <ArrowUpRight
                      size={11}
                      className="
                        opacity-0
                        transition-all
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3
              className="
                font-mono text-[10px]
                font-semibold uppercase
                tracking-[0.2em]
                text-foreground
              "
            >
              Connect
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:info@azijul.pro.bd"
                className="
                  group flex items-center gap-3
                  font-mono text-xs
                  text-muted-foreground
                  transition-colors
                  hover:text-emerald-400
                "
              >
                <EnvelopeSimple
                  size={16}
                  weight="duotone"
                  className="text-emerald-400"
                />

                info@azijul.pro.bd

                <ArrowUpRight
                  size={11}
                  className="
                    opacity-0 transition-all
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

              <div
                className="
                  flex items-center gap-3
                  font-mono text-xs
                  text-muted-foreground
                "
              >
                <MapPin
                  size={16}
                  weight="duotone"
                  className="text-emerald-400"
                />

                Sherpur, Mymensingh Division, Bangladesh.
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              <Link
                href="https://github.com/azijulhakimbd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-border/60
                  bg-muted/20
                  text-muted-foreground
                  transition-all duration-200
                  hover:border-emerald-500/30
                  hover:bg-emerald-500/10
                  hover:text-emerald-400
                "
              >
                <GithubLogo size={18} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/azijulhakimbd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-border/60
                  bg-muted/20
                  text-muted-foreground
                  transition-all duration-200
                  hover:border-emerald-500/30
                  hover:bg-emerald-500/10
                  hover:text-emerald-400
                "
              >
                <LinkedinLogo size={18} />
              </Link>

              <Link
                href="#ai-agent"
                aria-label="AI Agent"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-emerald-500/25
                  bg-emerald-500/10
                  text-emerald-400
                  transition-all duration-200
                  hover:border-emerald-400/50
                  hover:bg-emerald-400/15
                "
              >
                <Sparkle size={18} weight="fill" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex flex-col gap-4
            border-t border-border/50
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              font-mono text-[10px]
              text-muted-foreground
            "
          >
            © {currentYear} Md. Azijul Hakim. All rights reserved.
          </p>

          <div
            className="
              flex items-center gap-2
              font-mono text-[10px]
              text-muted-foreground
            "
          >
            <span>Built with</span>

            <span className="text-foreground">Next.js</span>

            <span className="text-border">•</span>

            <span className="text-emerald-400">
              AI
            </span>

            <span className="text-border">•</span>

            <span className="text-foreground">
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}