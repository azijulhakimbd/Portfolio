import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  House,
  MagnifyingGlass,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.07] blur-[120px]" />

        {/* Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      {/* Decorative Nodes */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute left-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-emerald-400/60 shadow-[0_0_15px_rgba(52,211,153,0.6)]" />

        <div className="absolute right-[18%] top-[25%] h-2 w-2 rounded-full bg-emerald-400/40 shadow-[0_0_20px_rgba(52,211,153,0.5)]" />

        <div className="absolute bottom-[25%] left-[22%] h-2 w-2 rounded-full bg-emerald-400/30" />

        <div className="absolute bottom-[30%] right-[23%] h-1.5 w-1.5 rounded-full bg-emerald-400/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/5">
          <Brain size={32} weight="duotone" />
        </div>

        {/* Status */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
          <Warning size={13} weight="fill" className="text-amber-400" />
          Route not found
        </div>

        {/* 404 */}
        <div className="relative">
          <h1 className="font-mono text-[clamp(7rem,22vw,14rem)] font-bold leading-none tracking-[-0.08em] text-foreground/10">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[clamp(4rem,14vw,9rem)] font-bold leading-none tracking-[-0.08em] text-emerald-400">
              404
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-2 font-mono text-2xl font-bold tracking-tight sm:text-3xl">
          This page doesn&apos;t exist.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
          The requested route could not be found. It may have been moved,
          deleted, or never existed in the first place.
        </p>

        {/* Terminal */}
        <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-xl border border-border/60 bg-card/50 text-left shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-1.5 border-b border-border/50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />

            <span className="ml-2 font-mono text-[10px] text-muted-foreground">
              system.log
            </span>
          </div>

          <div className="space-y-2 p-4 font-mono text-xs">
            <p className="text-muted-foreground">
              <span className="text-emerald-400">$</span> locate route
            </p>

            <p className="text-red-400">
              Error: resource_not_found
            </p>

            <p className="text-muted-foreground">
              <span className="text-emerald-400">$</span> status
            </p>

            <p className="flex items-center gap-2 text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              system operational
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="
              group inline-flex h-11 items-center gap-2
              rounded-xl bg-emerald-500 px-5
              font-mono text-xs font-semibold
              text-black
              transition-all duration-300
              hover:bg-emerald-400
              hover:shadow-lg hover:shadow-emerald-500/20
            "
          >
            <House size={16} weight="fill" />
            Back to home
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/projects"
            className="
              inline-flex h-11 items-center gap-2
              rounded-xl border border-border/70
              bg-background/50 px-5
              font-mono text-xs font-medium
              text-muted-foreground
              backdrop-blur
              transition-all duration-300
              hover:border-emerald-500/30
              hover:bg-muted
              hover:text-foreground
            "
          >
            <MagnifyingGlass size={16} />
            Explore projects
          </Link>
        </div>

        {/* Footer hint */}
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-emerald-400"
        >
          <ArrowLeft size={12} />
          Return to system
        </Link>
      </div>
    </main>
  );
}