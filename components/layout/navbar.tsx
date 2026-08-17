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
  { label: "Experience", href: "/experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const ThemeIcon = () => {
    if (!mounted) {
      return <span className="block h-[18px] w-[18px]" />;
    }

    return isDark ? (
      <Sun size={18} weight="duotone" />
    ) : (
      <Moon size={18} weight="duotone" />
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className="
            relative flex h-14 items-center justify-between
            rounded-2xl border border-border/60
            bg-background/80 px-3
            shadow-lg shadow-black/[0.03]
            backdrop-blur-2xl
            supports-[backdrop-filter]:bg-background/60
          "
        >
          {/* Subtle top highlight */}
          <div
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
            className="
              group flex items-center gap-2.5
              rounded-xl px-2 py-1.5
            "
          >
            <div
              className="
                relative flex h-9 w-9 items-center justify-center
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
                  duration-300 group-hover:scale-110
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
              absolute left-1/2 hidden -translate-x-1/2
              items-center rounded-xl border border-border/50
              bg-muted/30 p-1 md:flex
            "
          >
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative rounded-lg px-3 py-1.5
                    font-mono text-[11px] font-medium
                    transition-all duration-200
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
                      className="
                        absolute bottom-0.5 left-1/2
                        h-0.5 w-3 -translate-x-1/2
                        rounded-full bg-emerald-400
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
              aria-label="GitHub"
              className="
                rounded-lg p-2
                text-muted-foreground
                transition-all
                hover:bg-muted
                hover:text-foreground
              "
            >
              <GithubLogo size={19} weight="regular" />
            </Link>

            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                rounded-lg p-2
                text-muted-foreground
                transition-all
                hover:bg-muted
                hover:text-foreground
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
                ml-1 h-9 rounded-xl
                border-border/60
                bg-background/40
                font-mono text-[11px]
                transition-all duration-300
                hover:border-emerald-500/40
                hover:bg-emerald-500/10
                hover:text-emerald-400
              "
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadSimple size={15} weight="duotone" />
                Resume
              </a>
            </Button>

            {/* AI Agent */}
            <Link
              href="#ai-agent"
              className="
                group ml-1 inline-flex items-center gap-2
                rounded-xl border border-emerald-500/30
                bg-emerald-500/10
                px-3 py-2
                font-mono text-[11px] font-medium
                text-emerald-400
                transition-all duration-300
                hover:border-emerald-400/50
                hover:bg-emerald-400/15
                hover:shadow-lg
                hover:shadow-emerald-500/10
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-emerald-400 opacity-50
                  "
                />

                <span
                  className="
                    relative inline-flex h-2 w-2
                    rounded-full bg-emerald-400
                  "
                />
              </span>

              AI Agent

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
              aria-label="Toggle theme"
              className="
                rounded-lg p-2
                text-muted-foreground
                transition-colors
                hover:bg-muted
                hover:text-foreground
              "
            >
              <ThemeIcon />
            </button>

            {/* Menu */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="
                rounded-lg p-2
                text-muted-foreground
                transition-colors
                hover:bg-muted
                hover:text-foreground
              "
            >
              {open ? <X size={21} /> : <List size={21} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            overflow-hidden transition-all duration-300 md:hidden
            ${
              open
                ? "mt-2 max-h-[600px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl border border-border/60
              bg-background/85 p-2
              shadow-xl
              backdrop-blur-2xl
              supports-[backdrop-filter]:bg-background/65
            "
          >
            {/* Navigation Items */}
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`
                    flex items-center justify-between
                    rounded-xl px-4 py-3
                    font-mono text-sm
                    transition-colors
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
                      className="
                        h-1.5 w-1.5
                        rounded-full bg-emerald-400
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
                mb-1 h-11 w-full justify-between
                rounded-xl
                border-border/60
                bg-background/40
                font-mono text-sm
                hover:border-emerald-500/40
                hover:bg-emerald-500/10
                hover:text-emerald-400
              "
            >
              <a
                href="/resume.pdf"
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

            {/* Mobile AI Agent */}
            <Link
              href="#ai-agent"
              onClick={closeMenu}
              className="
                flex items-center justify-between
                rounded-xl border border-emerald-500/25
                bg-emerald-500/10
                px-4 py-3
                font-mono text-sm
                text-emerald-400
              "
            >
              <span className="flex items-center gap-2">
                <Sparkle size={16} weight="fill" />
                Launch AI Agent
              </span>

              <ArrowUpRight size={16} />
            </Link>

            {/* Mobile GitHub */}
            <Link
              href="https://github.com/azijulhakimbd"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                mt-1 flex items-center gap-2
                rounded-xl px-4 py-3
                font-mono text-sm
                text-muted-foreground
                hover:bg-muted/50
                hover:text-foreground
              "
            >
              <GithubLogo size={18} />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}