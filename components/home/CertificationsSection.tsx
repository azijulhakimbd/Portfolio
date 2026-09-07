"use client";

import {
  Award,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Brain,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  category: "AI" | "Web Development";
  verify?: string;
};

const certifications: Certification[] = [
  // ─────────────────────────────────────────────
  // ANTHROPIC — AI / CLAUDE
  // Exact certificates shown in your screenshots
  // ─────────────────────────────────────────────

  {
    title: "Claude on Google Cloud",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Claude in Amazon Bedrock",
    issuer: "Anthropic",
    year: "2026",
  category: "AI",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: Claude Platform 101",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: AI Fluency for nonprofits",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: AI Fluency for Builders",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: AI Fluency for Small Businesses",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: AI Fluency for students",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: Introduction to subagents",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: AI Capabilities and Limitations",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: Introduction to agent skills",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: Claude Code 101",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of completion: Introduction to Claude Cowork",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
  },
  {
    title: "Certificate of Completion: AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    year: "2026",
    category: "AI",
    verify: "https://verify.skilljar.com/c/k3gom4nuyhwa",
  },

  // Your previously added Anthropic credential
  {
    title: "Claude with Amazon Bedrock",
    issuer: "Anthropic Academy",
    year: "2026",
    category: "AI",
    verify: "https://verify.skilljar.com/c/694bp3p8pqsf",
  },

  // ─────────────────────────────────────────────
  // PROGRAMMING HERO
  // ─────────────────────────────────────────────

  {
    title: "Complete Web Development",
    issuer: "Programming Hero",
    year: "2025",
    category: "Web Development",
    verify:
      "https://drive.google.com/file/d/18vE170U7it__IYCN86jlo_a6Jx8uqlvU/view?usp=sharing",
  },
];

export default function CertificationsSection() {
  const aiCertificates = certifications.filter(
    (certificate) => certificate.category === "AI"
  );

  const webCertificates = certifications.filter(
    (certificate) => certificate.category === "Web Development"
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ───────────────── Background ───────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -left-40 top-[35%] size-[400px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 size-[400px] rounded-full bg-purple-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* ───────────────── Header ───────────────── */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-md sm:text-sm">
            <Sparkles className="size-4 text-primary" />
            Credentials & Learning
          </div>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Certifications
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                A collection of certifications and learning milestones in AI,
                Claude, software development, and modern web technologies.
              </p>
            </div>

            {/* Total */}
            <div className="w-fit rounded-2xl border bg-background/60 px-5 py-4 shadow-sm backdrop-blur-md">
              <p className="text-3xl font-bold text-primary">
                {certifications.length}
              </p>
              <p className="text-xs text-muted-foreground">
                Total Credentials
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-3 rounded-xl border bg-background/50 px-4 py-3 backdrop-blur-md">
              <Brain className="size-5 text-primary" />

              <div>
                <p className="font-semibold">{aiCertificates.length}</p>
                <p className="text-xs text-muted-foreground">
                  AI / Anthropic
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border bg-background/50 px-4 py-3 backdrop-blur-md">
              <Code2 className="size-5 text-primary" />

              <div>
                <p className="font-semibold">{webCertificates.length}</p>
                <p className="text-xs text-muted-foreground">
                  Web Development
                </p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* ───────────────── Anthropic ───────────────── */}
        <section className="mt-16">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Brain className="size-4" />
                AI & Claude
              </div>

              <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                Anthropic Learning
              </h2>
            </div>

            <span className="text-sm text-muted-foreground">
              {aiCertificates.length} credentials
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {aiCertificates.map((certificate, index) => (
              <CertificationCard
                key={`${certificate.title}-${index}`}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ───────────────── Programming Hero ───────────────── */}
        <section className="mt-16">
          <div className="mb-7">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Code2 className="size-4" />
              Software Engineering
            </div>

            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Web Development
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {webCertificates.map((certificate, index) => (
              <CertificationCard
                key={`${certificate.title}-${index}`}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ───────────────── Footer Decoration ───────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex items-center justify-center"
        >
          <div className="flex max-w-full items-center gap-3 text-xs text-muted-foreground sm:text-sm">
            <span className="h-px w-8 bg-border sm:w-12" />

            <Sparkles className="size-4 shrink-0 text-primary" />

            <span className="whitespace-nowrap">
              Always learning. Always building.
            </span>

            <Sparkles className="size-4 shrink-0 text-primary" />

            <span className="h-px w-8 bg-border sm:w-12" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}

/* ─────────────────────────────────────────────
   Certificate Card
───────────────────────────────────────────── */

function CertificationCard({
  certificate,
  index,
}: {
  certificate: Certification;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.04, 0.25),
      }}
      whileHover={{ y: -4 }}
      className="
        group relative overflow-hidden
        rounded-2xl border border-border/60
        bg-background/60 p-5
        shadow-sm backdrop-blur-md
        transition-all duration-300
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none absolute
          -right-16 -top-16 size-36
          rounded-full bg-primary/10
          opacity-0 blur-3xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative flex gap-4">
        {/* Award Icon */}
        <motion.div
          whileHover={{ rotate: 8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="
            flex size-11 shrink-0
            items-center justify-center
            rounded-xl bg-primary/10
            ring-1 ring-primary/10
          "
        >
          <Award className="size-5 text-primary" />
        </motion.div>

        <div className="min-w-0 flex-1">
          {/* Title + Year */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold leading-5 tracking-tight sm:text-base">
              {certificate.title}
            </h3>

            <span
              className="
                shrink-0 rounded-full
                border border-primary/20
                bg-primary/5
                px-2 py-1
                text-[9px] font-semibold
                uppercase tracking-wider
                text-primary
              "
            >
              {certificate.year}
            </span>
          </div>

          {/* Issuer */}
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            {certificate.issuer}
          </p>

          {/* Bottom */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <ShieldCheck className="size-3.5 text-primary" />
              {certificate.category}
            </span>

            {certificate.verify ? (
              <a
                href={certificate.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1.5
                  rounded-lg border
                  bg-background/70
                  px-3 py-1.5
                  text-xs font-medium
                  text-primary
                  transition-all
                  hover:bg-primary
                  hover:text-primary-foreground
                "
              >
                Verify
                <ExternalLink className="size-3.5" />
              </a>
            ) : (
              <span
                className="
                  rounded-lg border
                  border-border/50
                  px-3 py-1.5
                  text-[10px]
                  font-medium uppercase
                  tracking-wider
                  text-muted-foreground/60
                "
              >
                Credential
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}