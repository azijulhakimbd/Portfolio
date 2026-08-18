import AILabDetailsClient from "../ai-lab-details-client";


type AILabDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const experiments = {
  "ai-agent": {
    title: "AI Agent",
    category: "Agents",
    description:
      "An experiment exploring tool calling, reasoning workflows, and AI agents that can interact with external capabilities.",
    concepts: ["LLMs", "Tool Calling", "AI SDK", "Agent Workflows"],
    status: "Researching",
    icon: "brain",
  },

  "rag-search": {
    title: "RAG Search",
    category: "RAG",
    description:
      "An experiment exploring retrieval-augmented generation for contextual responses using retrieval and language models.",
    concepts: ["Embeddings", "Retrieval", "Context", "LLMs"],
    status: "Experimenting",
    icon: "sparkles",
  },

  "ai-ui": {
    title: "AI UI",
    category: "Generative UI",
    description:
      "An experiment focused on designing useful interfaces around AI interactions, streaming responses, and generative experiences.",
    concepts: ["Streaming", "AI UX", "Generative UI", "React"],
    status: "Exploring",
    icon: "flask",
  },
} as const;

export default async function AILabDetailsPage({
  params,
}: AILabDetailsPageProps) {
  const { slug } = await params;

  const experiment = experiments[slug as keyof typeof experiments];

  if (!experiment) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Experiment not found</h1>

          <p className="mt-4 text-muted-foreground">
            The AI experiment you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return <AILabDetailsClient experiment={experiment} />;
}