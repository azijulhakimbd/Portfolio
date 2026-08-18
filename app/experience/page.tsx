const experiences = [
  {
    period: "2026 — Present",
    role: "Frontend AI Engineer",
    company: "Independent / AI Projects",
    description:
      "Building AI-focused web applications and experimenting with agents, LLMs, and modern frontend architecture.",
  },
  {
    period: "2025 — 2026",
    role: "Frontend Developer",
    company: "Web Development",
    description:
      "Developing responsive web applications using React, Next.js, TypeScript, Tailwind CSS, and modern UI systems.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <header>
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Career
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">Experience</h1>
      </header>

      <section className="mt-16 space-y-10">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="relative border-l pl-8"
          >
            <span className="absolute -left-2 top-1 size-4 rounded-full border-4 border-background bg-primary" />

            <p className="text-sm font-medium text-muted-foreground">
              {experience.period}
            </p>

            <h2 className="mt-2 text-2xl font-semibold">{experience.role}</h2>

            <p className="mt-1 font-medium">{experience.company}</p>

            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              {experience.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}