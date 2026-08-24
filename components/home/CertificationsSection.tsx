
"use client";

import { Award, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Claude with Amazon Bedrock",
    issuer: "Anthropic Academy",
    year: "2026",
    verify: "https://verify.skilljar.com/c/694bp3p8pqsf",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    year: "2026",
    verify: "https://verify.skilljar.com/c/k3gom4nuyhwa",
  },
  {
    title: "Complete Web Development",
    issuer: "Programming Hero",
    year: "2025",
    verify:
      "https://drive.google.com/file/d/18vE170U7it__IYCN86jlo_a6Jx8uqlvU/view?usp=sharing",
  },
];

export default function CertificationsSection() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* AI Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -left-40 top-[35%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />

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

      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
            <Sparkles className="size-4 text-primary" />
            Credentials & Learning
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Certifications
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            A collection of certifications and learning milestones focused on
            AI, software development, and modern web technologies.
          </p>
        </motion.header>

        {/* Certifications */}
        <section className="mt-16 space-y-5">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border bg-background/60 p-6 shadow-sm backdrop-blur-md transition-shadow hover:shadow-xl"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10"
                  >
                    <Award className="size-6 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {certificate.title}
                    </h2>

                    <p className="mt-1 text-muted-foreground">
                      {certificate.issuer} · {certificate.year}
                    </p>
                  </div>
                </div>

                {/* Verify */}
                <a
                  href={certificate.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-lg border bg-background/70 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Verify
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Bottom AI decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex items-center justify-center"
        >
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-px w-12 bg-border" />
            <Sparkles className="size-4 text-primary" />
            <span>Always learning. Always building.</span>
            <Sparkles className="size-4 text-primary" />
            <span className="h-px w-12 bg-border" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
