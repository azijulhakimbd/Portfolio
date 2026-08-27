import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogPostContent from "../blog-post-content";



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

export default async function BlogDetailsPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Post not found</h1>

        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to blog
        </Link>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[40%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Back button */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur transition-all duration-300 hover:border-emerald-500/40 hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to blog
        </Link>

        <BlogPostContent
          title={post.title}
          category={post.category}
          date={post.date}
          content={post.content}
        />

        {/* Bottom navigation */}
        <div className="mt-16 border-t pt-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-500"
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            More articles
          </Link>
        </div>
      </div>
    </main>
  );
}