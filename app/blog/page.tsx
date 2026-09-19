import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Sparkles,
  Tag,
} from "lucide-react";

import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Md. Azijul Hakim",
  description:
    "Articles, experiments, and notes about AI engineering, frontend development, Next.js, Claude, and modern web development.",
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />

          <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-400">
              <Sparkles size={14} />
              Knowledge & Experiments
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Thoughts on{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                AI & Engineering
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Notes from my journey in frontend engineering, AI development,
              Claude, Next.js, and building intelligent digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG CONTENT
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
              Latest writing
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Explore my articles
            </h2>
          </div>

          <div className="hidden rounded-full border border-border px-4 py-2 text-xs text-muted-foreground sm:block">
            {blogPosts.length} articles
          </div>
        </div>

        {/* =================================================
            FEATURED POST
        ================================================== */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group mb-12 block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Image */}
              <div className="relative aspect-[16/10] min-h-[300px] overflow-hidden lg:aspect-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Featured badge */}
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/40 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
                  <Sparkles size={13} />
                  Featured
                </div>

                {/* Category */}
                <div className="absolute bottom-6 left-6 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                  {featuredPost.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {featuredPost.date}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {featuredPost.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted/30 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                  Read article
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* =================================================
            POSTS GRID
        ================================================== */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.date}</span>

                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />

                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-semibold leading-7 transition-colors group-hover:text-emerald-400">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/30 px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read */}
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-xs text-muted-foreground">
                    Read article
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10">
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <Sparkles className="mx-auto text-emerald-400" size={26} />

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            Building, learning, and sharing.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            I write about things I build, technologies I explore, and lessons
            I learn while growing as a frontend AI engineer.
          </p>
        </div>
      </section>
    </main>
  );
}