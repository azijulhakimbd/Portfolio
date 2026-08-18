import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

const posts: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    content: string[];
  }
> = {
  "building-ai-agents": {
    title: "Building AI Agents with Next.js",
    category: "AI Engineering",
    date: "August 2026",
    content: [
      "AI agents are an exciting evolution of traditional chat interfaces. Instead of only generating text, an agent can decide when it needs a tool and use that tool to accomplish a task.",
      "Next.js provides a strong foundation for building these applications because the App Router makes it easy to combine server-side functionality with interactive client components.",
      "The most important lesson is that the model should not be treated as the entire application. Good agent architecture requires clear tools, validation, error handling, and a predictable user experience.",
    ],
  },
  "ai-sdk-nextjs": {
    title: "AI SDK in Modern Next.js Applications",
    category: "Next.js",
    date: "August 2026",
    content: [
      "Modern AI applications need more than an API call. They need streaming, structured messages, tool calls, state management, and a user interface that communicates model activity clearly.",
      "The combination of Next.js and an AI SDK makes these patterns much easier to implement while keeping the application type-safe.",
    ],
  },
  "designing-ai-interfaces": {
    title: "Designing Better AI Interfaces",
    category: "AI UX",
    date: "July 2026",
    content: [
      "A good AI interface should make the user's goal easier, not simply place a chatbot in the middle of an existing product.",
      "Useful AI interfaces communicate progress, tool usage, errors, and results in a way users can understand.",
    ],
  },
};

export default async function BlogDetailsPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Post not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      <article className="mt-12">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          {post.category}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          {post.title}
        </h1>

        <p className="mt-5 text-sm text-muted-foreground">{post.date}</p>

        <div className="mt-12 space-y-7">
          {post.content.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-8 text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}