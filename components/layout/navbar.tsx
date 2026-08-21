
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Brain,
  DownloadSimple,
  GithubLogo,
  List,
  Moon,
  Sparkle,
  Sun,
  X,
} from "@phosphor-icons/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "AI Lab", href: "/ai-lab" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const ThemeIcon = () => {
    if (!mounted) {
      return <span className="block h-5 w-5" />;
    }

    return isDark ? (
      <Sun size={19} weight="duotone" />
    ) : (
      <Moon size={19} weight="duotone" />
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <nav
          aria-label="Primary navigation"
          className="
            relative flex min-h-14 items-center justify-between
            rounded-2xl border border-border/60
            bg-background/85 px-2.5 sm:px-3
            shadow-lg shadow-black/[0.03]
            backdrop-blur-2xl
            supports-[backdrop-filter]:bg-background/60
          "
        >
          {/* Top highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-x-6 top-0 h-px
              bg-gradient-to-r from-transparent
              via-emerald-400/50 to-transparent
            "
          />

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="MAH AI Engineer — Home"
            className="
              group flex min-h-11 items-center gap-2.5
              rounded-xl px-2 py-1.5
              outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-400/70
              focus-visible:ring-offset-2
              focus-visible:ring-offset-background
            "
          >
            <div
              className="
                relative flex h-9 w-9 shrink-0
                items-center justify-center
                overflow-hidden rounded-xl
                border border-emerald-500/25
                bg-emerald-500/10
                text-emerald-400
                transition-all duration-300
                group-hover:border-emerald-400/50
                group-hover:bg-emerald-400/15
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute inset-0
                  bg-emerald-400/10
                  blur-xl
                  transition-opacity
                  group-hover:opacity-100
                "
              />

              <Brain
                size={21}
                weight="duotone"
                className="
                  relative transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </div>

            <div className="hidden leading-none sm:block">
              <p className="font-mono text-sm font-bold tracking-tight">
                MAH<span className="text-emerald-400">.</span>
              </p>

              <p
                className="
                  mt-1 font-mono text-[9px]
                  uppercase tracking-[0.2em]
                  text-muted-foreground
                "
              >
                AI Engineer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className="
              absolute left-1/2 hidden
              -translate-x-1/2
              items-center
              rounded-xl border border-border/50
              bg-muted/30 p-1
              md:flex
            "
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative rounded-lg
                    px-2.5 py-2
                    font-mono text-[11px] font-medium
                    outline-none
                    transition-all duration-200
                    focus-visible:ring-2
                    focus-visible:ring-emerald-400/70
                    ${
                      active
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-background/70 hover:text-foreground"
                    }
                  `}
                >
                  {item.label}

                  {active && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute bottom-0.5 left-1/2
                        h-0.5 w-3
                        -translate-x-1/2
                        rounded-full
                        bg-emerald-400
                      "
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-1 md:flex">
            {/* GitHub */}
            <Link
              href="https://github.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in a new tab"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-lg
                text-muted-foreground
                outline-none
                transition-all
                hover:bg-muted
                hover:text-foreground
                focus-visible:ring-2
                focus-visible:ring-emerald-400/70
              "
            >
              <GithubLogo size={19} weight="regular" />
            </Link>

            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                mounted
                  ? `Switch to ${isDark ? "light" : "dark"} mode`
                  : "Toggle theme"
              }
              className="
                flex h-10 w-10 items-center justify-center
                rounded-lg
                text-muted-foreground
                outline-none
                transition-all
                hover:bg-muted
                hover:text-foreground
                focus-visible:ring-2
                focus-visible:ring-emerald-400/70
              "
            >
              <ThemeIcon />
            </button>

            {/* Resume */}
            <Button
              asChild
              size="sm"
              variant="outline"
              className="
                ml-1 h-10 rounded-xl
                border-border/60
                bg-background/40
                px-3
                font-mono text-[11px]
                transition-all duration-300
                hover:border-emerald-500/40
                hover:bg-emerald-500/10
                hover:text-emerald-400
              "
            >
              <a
                href="/resume/md-azijul-hakim-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume in a new tab"
              >
                <DownloadSimple size={15} weight="duotone" />
                Resume
              </a>
            </Button>

            {/* AI Lab */}
            <Link
              href="/ai-lab"
              className="
                group ml-1 inline-flex min-h-10
                items-center gap-2
                rounded-xl
                border border-emerald-500/30
                bg-emerald-500/10
                px-3
                font-mono text-[11px] font-medium
                text-emerald-400
                outline-none
                transition-all duration-300
                hover:border-emerald-400/50
                hover:bg-emerald-500/15
                hover:shadow-lg
                hover:shadow-emerald-500/10
                focus-visible:ring-2
                focus-visible:ring-emerald-400/70
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  aria-hidden="true"
                  className="
                    absolute inline-flex
                    h-full w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-50
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    relative inline-flex
                    h-2 w-2
                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              AI Lab

              <ArrowUpRight
                size={13}
                className="
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1 md:hidden">
            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                mounted
                  ? `Switch to ${isDark ? "light" : "dark"} mode`
                  : "Toggle theme"
              }
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl
                text-muted-foreground
                outline-none
                transition-colors
                hover:bg-muted
                hover:text-foreground
                focus-visible:ring-2
                focus-visible:ring-emerald-400/70
              "
            >
              <ThemeIcon />
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl
                text-muted-foreground
                outline-none
                transition-colors
                hover:bg-muted
                hover:text-foreground
                focus-visible:ring-2
                focus-visible:ring-emerald-400/70
              "
            >
              {open ? <X size={21} /> : <List size={21} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!open}
          className={`
            overflow-hidden transition-all duration-300 md:hidden
            ${
              open
                ? "mt-2 max-h-[700px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl border border-border/60
              bg-background/90 p-2
              shadow-xl
              backdrop-blur-2xl
              supports-[backdrop-filter]:bg-background/65
            "
          >
            {/* Mobile Navigation Items */}
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  tabIndex={open ? 0 : -1}
                  className={`
                    flex min-h-12
                    items-center justify-between
                    rounded-xl px-4 py-3
                    font-mono text-sm
                    outline-none
                    transition-colors
                    focus-visible:ring-2
                    focus-visible:ring-inset
                    focus-visible:ring-emerald-400/70
                    ${
                      active
                        ? "bg-muted/70 text-foreground"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }
                  `}
                >
                  <span>{item.label}</span>

                  {active && (
                    <span
                      aria-hidden="true"
                      className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-emerald-400
                      "
                    />
                  )}
                </Link>
              );
            })}

            <div className="my-2 h-px bg-border/50" />

            {/* Mobile Resume */}
            <Button
              asChild
              variant="outline"
              className="
                mb-1 h-12 w-full
                justify-between
                rounded-xl
                border-border/60
                bg-background/40
                px-4
                font-mono text-sm
                hover:border-emerald-500/40
                hover:bg-emerald-500/10
                hover:text-emerald-400
              "
            >
              <a
                href="/resume/md-azijul-hakim-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <span className="flex items-center gap-2">
                  <DownloadSimple size={17} weight="duotone" />
                  Resume
                </span>

                <ArrowUpRight size={16} />
              </a>
            </Button>

            {/* Mobile AI Lab */}
            <Link
              href="/ai-lab"
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              className="
                flex min-h-12
                items-center justify-between
                rounded-xl
                border border-emerald-500/25
                bg-emerald-500/10
                px-4 py-3
                font-mono text-sm
                text-emerald-400
                outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-400/70
              "
            >
              <span className="flex items-center gap-2">
                <Sparkle size={16} weight="fill" />
                Explore AI Lab
              </span>

              <ArrowUpRight size={16} />
            </Link>

            {/* Mobile GitHub */}
            <Link
              href="https://github.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              aria-label="Open GitHub profile in a new tab"
              className="
                mt-1 flex min-h-12
                items-center gap-2
                rounded-xl
                px-4 py-3
                font-mono text-sm
                text-muted-foreground
                outline-none
                hover:bg-muted/50
                hover:text-foreground
                focus-visible:ring-2
                focus-visible:ring-emerald-400/70
              "
            >
              <GithubLogo size={18} />
              GitHub
              <ArrowUpRight
                size={14}
                className="ml-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
