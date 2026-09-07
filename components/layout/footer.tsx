
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
    { label: "3D Experience", href: "/ai-lab" },
    {
      label: "Button with Brain",
      href: "https://motion-buttons.vercel.app/",
    },
    {
      label: "AI Info Directory",
      href: "https://hello-nalitabari.vercel.app/",
    },
  ],
};

const certificates = [
  {
    title: "Frontend AI Engineer",
    description: "Frontend AI Engineering · Verify Credential",
    href: "https://internship.flyrank.ai/verify/FR-D11-84CCB-CC778?first_name=Md",
  },
  {
    title: "AI Fluency Graduate",
    description: "AI Fluency · Verify Credential",
    href: "https://internship.flyrank.ai/verify/FR-D11-2A13B-84B0A?first_name=md",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background">
      {/* Top glow */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 h-px
          bg-gradient-to-r from-transparent
          via-emerald-400/60 to-transparent
        "
      />

      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-0
          h-72 w-72 -translate-x-1/2
          rounded-full bg-emerald-500/[0.045]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-32 -left-32
          h-64 w-64 rounded-full
          bg-emerald-500/[0.025]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-32 -right-32
          h-64 w-64 rounded-full
          bg-emerald-500/[0.025]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div
          className="
            grid gap-10 py-12
            sm:py-14
            md:grid-cols-12
            md:gap-8
            lg:py-16
          "
        >
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  relative flex h-11 w-11 shrink-0
                  items-center justify-center
                  overflow-hidden rounded-xl
                  border border-emerald-500/25
                  bg-emerald-500/10
                  text-emerald-400
                  transition-all duration-300
                  group-hover:border-emerald-400/50
                  group-hover:bg-emerald-400/15
                  group-hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]
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
                    duration-300
                    group-hover:scale-110
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
                mt-6 inline-flex max-w-full
                items-center gap-2
                rounded-full
                border border-emerald-500/20
                bg-emerald-500/5
                px-3 py-1.5
                font-mono text-[10px]
                leading-4 text-emerald-400
              "
            >
              <span className="relative flex h-2 w-2 shrink-0">
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

              <span>Open to AI & Frontend opportunities</span>
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
              {/* Email */}
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
                  className="shrink-0 text-emerald-400"
                />

                <span className="break-all">
                  info@azijul.pro.bd
                </span>

                <ArrowUpRight
                  size={11}
                  className="
                    shrink-0 opacity-0
                    transition-all
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

              {/* Location */}
              <div
                className="
                  flex items-start gap-3
                  font-mono text-xs
                  leading-5 text-muted-foreground
                "
              >
                <MapPin
                  size={16}
                  weight="duotone"
                  className="mt-0.5 shrink-0 text-emerald-400"
                />

                <span>
                  Sherpur, Mymensingh Division, Bangladesh.
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {/* GitHub */}
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
                  hover:-translate-y-0.5
                  hover:border-emerald-500/30
                  hover:bg-emerald-500/10
                  hover:text-emerald-400
                "
              >
                <GithubLogo size={18} />
              </Link>

              {/* LinkedIn */}
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
                  hover:-translate-y-0.5
                  hover:border-emerald-500/30
                  hover:bg-emerald-500/10
                  hover:text-emerald-400
                "
              >
                <LinkedinLogo size={18} />
              </Link>

              {/* AI Agent */}
              <Link
                href="/ai-agent"
                aria-label="AI Agent"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg
                  border border-emerald-500/25
                  bg-emerald-500/10
                  text-emerald-400
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:border-emerald-400/50
                  hover:bg-emerald-400/15
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]
                "
              >
                <Sparkle size={18} weight="fill" />
              </Link>
            </div>
          </div>
        </div>

        {/* FlyRank Credentials */}
        <div className="border-t border-border/50 py-8 sm:py-10">
          <div className="mx-auto max-w-4xl">
            {/* Section heading */}
            <div className="mb-5 flex flex-col items-center text-center">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-emerald-500/20
                  bg-emerald-500/5
                  px-3 py-1.5
                  font-mono text-[9px]
                  font-medium uppercase
                  tracking-[0.18em]
                  text-emerald-400
                "
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="
                      absolute h-full w-full
                      animate-ping rounded-full
                      bg-emerald-400/60
                    "
                  />

                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>

                FlyRank Verified
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                Professional credentials & certifications
              </p>
            </div>

            {/* Certificate cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {certificates.map((certificate) => (
                <a
                  key={certificate.href}
                  href={certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify ${certificate.title} certificate`}
                  className="
                    group relative overflow-hidden
                    rounded-2xl
                    border border-border/60
                    bg-muted/20
                    p-4
                    outline-none
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-emerald-500/30
                    hover:bg-emerald-500/[0.06]
                    hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)]
                    focus-visible:ring-2
                    focus-visible:ring-emerald-500/50
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-background
                  "
                >
                  {/* Hover glow */}
                  <div
                    className="
                      pointer-events-none absolute
                      -right-8 -top-8
                      h-24 w-24
                      rounded-full
                      bg-emerald-400/[0.08]
                      blur-2xl
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative flex items-center gap-3">
                    {/* Icon */}
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        border border-emerald-500/20
                        bg-emerald-500/10
                        text-emerald-400
                        transition-all duration-300
                        group-hover:scale-105
                        group-hover:border-emerald-400/40
                        group-hover:bg-emerald-400/15
                      "
                    >
                      <Sparkle
                        size={21}
                        weight="fill"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1 text-left">
                      <p
                        className="
                          truncate
                          font-mono text-xs
                          font-semibold
                          text-foreground
                          transition-colors
                          group-hover:text-emerald-400
                        "
                      >
                        {certificate.title}
                      </p>

                      <p
                        className="
                          mt-1
                          font-mono text-[9px]
                          leading-4
                          text-muted-foreground
                        "
                      >
                        {certificate.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className="
                        flex h-7 w-7 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-border/50
                        bg-background/40
                        text-muted-foreground
                        transition-all duration-300
                        group-hover:border-emerald-500/30
                        group-hover:text-emerald-400
                      "
                    >
                      <ArrowUpRight
                        size={13}
                        className="
                          transition-transform duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className="
                      absolute inset-x-4 bottom-0
                      h-px
                      origin-left scale-x-0
                      bg-gradient-to-r
                      from-emerald-400
                      to-transparent
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />
                </a>
              ))}
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
              flex flex-wrap items-center gap-2
              font-mono text-[10px]
              text-muted-foreground
            "
          >
            <span>Built with</span>

            <span className="text-foreground">
              Next.js
            </span>

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
