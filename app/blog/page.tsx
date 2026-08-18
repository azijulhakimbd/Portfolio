import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    slug: "building-ai-agents",
    title: "Building AI Agents with Next.js",
    excerpt:
      "What I learned while building an AI agent with streaming responses and tool calling.",
    date: "August 2026",
    category: "AI Engineering",
  },
  {
    slug: "ai-sdk-nextjs",
    title: "AI SDK in Modern Next.js Applications",
    excerpt:
      "Exploring patterns for integrating AI models into modern App Router applications.",
    date: "August 2026",
    category: "Next.js",
  },
  {
    slug: "designing-ai-interfaces",
    title: "Designing Better AI Interfaces",
    excerpt:
      "Why AI products need thoughtful interaction design instead of simply adding a chat box.",
    date: "July 2026",
    category: "AI UX",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Writing
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">Blog</h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Notes about frontend engineering, artificial intelligence, software
          architecture, and things I learn while building.
        </p>
      </header>

      <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {post.category}
            </p>

            <h2 className="mt-4 flex items-start justify-between gap-4 text-2xl font-semibold">
              {post.title}
              <ArrowUpRight className="size-5 shrink-0 opacity-0 transition group-hover:opacity-100" />
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              {post.excerpt}
            </p>

            <p className="mt-8 text-sm text-muted-foreground">{post.date}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}