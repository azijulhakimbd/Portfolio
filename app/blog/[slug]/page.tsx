import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Sparkles,
  Tag,
} from "lucide-react";

import { blogPosts, getBlogPost } from "@/lib/blog";

type BlogDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Md. Azijul Hakim",
    };
  }

  return {
    title: `${post.title} | Md. Azijul Hakim`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;

  const post = getBlogPost(slug);

  /* =====================================================
     NOT FOUND
  ====================================================== */

  if (!post) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
            <Sparkles className="text-emerald-400" size={26} />
          </div>

          <h1 className="mt-6 text-3xl font-bold">Post not found</h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            The article you are looking for may have been removed or the URL
            may be incorrect.
          </p>

          <Link
            href="/blog"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  /* =====================================================
     RELATED POSTS
  ====================================================== */

  const relatedPosts = blogPosts
    .filter(
      (item) =>
        item.slug !== post.slug &&
        item.tags.some((tag) => post.tags.includes(tag)),
    )
    .slice(0, 3);

  /* =====================================================
     PREVIOUS / NEXT
  ====================================================== */

  const currentIndex = blogPosts.findIndex(
    (item) => item.slug === post.slug,
  );

  const previousPost =
    currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  const nextPost =
    currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =================================================
          ARTICLE HEADER
      ================================================== */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
          {/* Back */}
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-emerald-400"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to blog
          </Link>

          {/* Header */}
          <header className="mt-10">
            {/* Category */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                {post.category}
              </span>

              {post.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-xs text-cyan-400">
                  <Sparkles size={12} />
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                {post.date}
              </span>

              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />

              <span className="flex items-center gap-2">
                <Clock3 size={16} />
                {post.readTime}
              </span>
            </div>

            {/* Tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <Tag size={11} />
                  {tag}
                </span>
              ))}
            </div>
          </header>
        </div>
      </section>

      {/* =================================================
          HERO IMAGE
      ================================================== */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-border bg-muted sm:rounded-3xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </section>

      {/* =================================================
          ARTICLE CONTENT
      ================================================== */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="space-y-12">
          {post.content.map((section, index) => (
            <section key={section.heading}>
              {/* Section number */}
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs text-emerald-500">
                  0{index + 1}
                </span>

                <div className="h-px w-8 bg-emerald-500/30" />
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {section.heading}
              </h2>

              <div className="mt-5 space-y-5">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${section.heading}-${paragraphIndex}`}
                    className="text-[15px] leading-8 text-muted-foreground sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* =================================================
            AUTHOR / NOTE
        ================================================== */}
        <div className="mt-16 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
              <Sparkles className="text-emerald-400" size={23} />
            </div>

            <div>
              <p className="text-sm font-semibold">Md. Azijul Hakim</p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Frontend AI Engineer · AI-focused frontend development,
                experimentation, and learning.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            PREVIOUS / NEXT
        ================================================== */}
        {(previousPost || nextPost) && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {/* Previous */}
            {previousPost ? (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="group rounded-2xl border border-border p-5 transition hover:border-emerald-500/30"
              >
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ArrowLeft size={14} />
                  Previous article
                </span>

                <h3 className="mt-3 line-clamp-2 text-sm font-semibold transition group-hover:text-emerald-400">
                  {previousPost.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}

            {/* Next */}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group rounded-2xl border border-border p-5 text-left transition hover:border-emerald-500/30 sm:text-right"
              >
                <span className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
                  Next article
                  <ArrowRight size={14} />
                </span>

                <h3 className="mt-3 line-clamp-2 text-sm font-semibold transition group-hover:text-emerald-400">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>
        )}
      </section>

      {/* =================================================
          RELATED ARTICLES
      ================================================== */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                Continue reading
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Related articles
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-emerald-500/30"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-medium text-emerald-400">
                      {related.category}
                    </span>

                    <h3 className="mt-2 line-clamp-2 font-semibold leading-6 transition group-hover:text-emerald-400">
                      {related.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{related.date}</span>

                      <span>·</span>

                      <span>{related.readTime}</span>

                      <ArrowUpRight
                        size={14}
                        className="ml-auto transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}