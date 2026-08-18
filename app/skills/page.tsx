const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "shadcn/ui", "Radix UI", "Framer Motion"],
  },
  {
    title: "AI Engineering",
    skills: [
      "LLMs",
      "OpenAI",
      "Claude",
      "AI SDK",
      "AI Agents",
      "RAG",
      "Tool Calling",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Cursor", "Claude Code", "Vercel"],
  },
];

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Toolkit
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">Skills</h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Technologies and tools I use to build modern web and AI-powered
          applications.
        </p>
      </header>

      <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border p-6">
            <h2 className="text-xl font-semibold">{group.title}</h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-muted px-3 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}