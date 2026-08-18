import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";

type AILabPageProps = {
  params: Promise<{ slug: string }>;
};

const experiments: Record<
  string,
  {
    title: string;
    category: string;
    description: string;
    concepts: string[];
  }
> = {
  "ai-agent": {
    title: "AI Agent",
    category: "Agents",
    description:
      "An experiment exploring tool calling, reasoning workflows, and AI agents.",
    concepts: ["LLMs", "Tool Calling", "AI SDK", "Agent Workflows"],
  },
  "rag-search": {
    title: "RAG Search",
    category: "RAG",
    description:
      "An experiment exploring retrieval-augmented generation for contextual responses.",
    concepts: ["Embeddings", "Retrieval", "Context", "LLMs"],
  },
  "ai-ui": {
    title: "AI UI",
    category: "Generative UI",
    description:
      "An experiment focused on designing useful interfaces around AI interactions.",
    concepts: ["Streaming", "AI UX", "Generative UI", "React"],
  },
};

export default async function AILabDetailsPage({
  params,
}: AILabPageProps) {
  const { slug } = await params;
  const experiment = experiments[slug];

  if (!experiment) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Experiment not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <Link
        href="/ai-lab"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to AI Lab
      </Link>

      <header className="mt-12">
        <div className="inline-flex rounded-xl border p-3">
          <FlaskConical className="size-7 text-primary" />
        </div>

        <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
          {experiment.category}
        </p>

        <h1 className="mt-3 text-5xl font-bold">{experiment.title}</h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
          {experiment.description}
        </p>
      </header>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Concepts explored</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {experiment.concepts.map((concept) => (
            <span
              key={concept}
              className="rounded-full border px-4 py-2 text-sm"
            >
              {concept}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}