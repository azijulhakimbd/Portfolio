import Link from "next/link";
import { ArrowUpRight, Brain, FlaskConical, Sparkles } from "lucide-react";

const experiments = [
  {
    slug: "ai-agent",
    title: "AI Agent",
    description:
      "Exploring tool-using AI agents that can reason about tasks and execute actions.",
    category: "Agents",
    icon: Brain,
  },
  {
    slug: "rag-search",
    title: "RAG Search",
    description:
      "Experimenting with retrieval-augmented generation and contextual AI responses.",
    category: "RAG",
    icon: Sparkles,
  },
  {
    slug: "ai-ui",
    title: "AI UI",
    description:
      "Exploring interfaces designed specifically for AI-powered applications.",
    category: "Generative UI",
    icon: FlaskConical,
  },
];

export default function AILabPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Experiments
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">AI Lab</h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A collection of experiments where I explore agents, LLMs, RAG,
          generative interfaces, AI SDKs, and emerging AI development
          techniques.
        </p>
      </header>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {experiments.map((experiment) => {
          const Icon = experiment.icon;

          return (
            <Link
              key={experiment.slug}
              href={`/ai-lab/${experiment.slug}`}
              className="group rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="size-9 text-primary" />

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {experiment.category}
              </p>

              <h2 className="mt-2 flex items-center gap-2 text-2xl font-semibold">
                {experiment.title}
                <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                {experiment.description}
              </p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}