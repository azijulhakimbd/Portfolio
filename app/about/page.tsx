import { Brain, Code2, Target } from "lucide-react";

const values = [
  {
    title: "Build",
    description:
      "I enjoy turning ideas into production-ready web applications with thoughtful architecture and clean interfaces.",
    icon: Code2,
  },
  {
    title: "Explore",
    description:
      "I continuously experiment with LLMs, agents, AI SDKs, RAG, and emerging AI development patterns.",
    icon: Brain,
  },
  {
    title: "Impact",
    description:
      "My goal is to use technology to solve real problems rather than building AI features simply because they are possible.",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          About me
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Frontend engineer exploring the future of AI.
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
          <p>
            I&apos;m Md. Azijul Hakim, a frontend-focused developer with a
            growing specialization in artificial intelligence and AI-powered
            applications.
          </p>

          <p>
            My primary stack revolves around React, Next.js, TypeScript,
            Tailwind CSS, and modern component systems. Alongside frontend
            engineering, I work with AI SDKs, LLM APIs, agents, tools, and
            retrieval-based applications.
          </p>

          <p>
            I believe great AI products need both strong intelligence and
            excellent interfaces. That is where my work sits: between AI
            engineering and frontend product development.
          </p>
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-3">
        {values.map((value) => {
          const Icon = value.icon;

          return (
            <article key={value.title} className="rounded-2xl border p-6">
              <Icon className="size-8 text-primary" />

              <h2 className="mt-5 text-xl font-semibold">{value.title}</h2>

              <p className="mt-3 leading-7 text-muted-foreground">
                {value.description}
              </p>
            </article>
          );
        })}
      </section>
    </main>
  );
}