import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  DownloadSimple,
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  Sparkle,
} from "@phosphor-icons/react";

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    href: "https://github.com/azijulhakimbd",
    label: "GitHub",
    icon: GithubLogo,
  },
  {
    href: "https://www.linkedin.com/in/azijulhakimbd/",
    label: "LinkedIn",
    icon: LinkedinLogo,
  },
  {
    href: "https://www.facebook.com/azijulhakimbd",
    label: "Facebook",
    icon: FacebookLogo,
  },
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[calc(100svh-4rem)]
        overflow-hidden
        bg-background
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Main emerald glow */}

        <div
          className="
            absolute
            left-1/2
            top-[-10rem]
            h-[20rem]
            w-[20rem]
            -translate-x-1/2
            animate-[heroGlow_12s_ease-in-out_infinite]
            rounded-full
            bg-emerald-500/[0.08]
            blur-[90px]
            will-change-transform

            sm:top-[-12rem]
            sm:h-[30rem]
            sm:w-[30rem]
            sm:blur-[110px]

            lg:h-[40rem]
            lg:w-[40rem]
          "
        />

        {/* Left cyan glow */}

        <div
          className="
            absolute
            -left-40
            top-[38%]
            h-64
            w-64
            animate-[heroFloatLeft_10s_ease-in-out_infinite]
            rounded-full
            bg-cyan-400/[0.08]
            blur-[90px]
            will-change-transform

            sm:-left-32
            sm:h-80
            sm:w-80

            lg:h-96
            lg:w-96
          "
        />

        {/* Right emerald glow */}

        <div
          className="
            absolute
            -right-40
            top-[20%]
            h-64
            w-64
            animate-[heroFloatRight_12s_ease-in-out_infinite]
            rounded-full
            bg-emerald-400/[0.07]
            blur-[90px]
            will-change-transform

            sm:-right-32
            sm:h-80
            sm:w-80

            lg:h-96
            lg:w-96
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            sm:opacity-[0.022]
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize:
              "clamp(30px, 5vw, 44px) clamp(30px, 5vw, 44px)",
          }}
        />

        {/* Center fade */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_78%)]
          "
        />

        {/* Bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-background
            to-transparent

            sm:h-40
          "
        />
      </div>

      {/* =====================================================
          DESKTOP DECORATIVE NODES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          hidden
          lg:block
        "
      >
        {/* Left node */}

        <span
          className="
            absolute
            left-[7%]
            top-[32%]
            h-2
            w-2
            animate-pulse
            rounded-full
            bg-emerald-400
            shadow-[0_0_25px_rgba(52,211,153,0.8)]
          "
        />

        {/* Right node */}

        <span
          className="
            absolute
            right-[7%]
            top-[28%]
            h-2
            w-2
            animate-pulse
            rounded-full
            bg-emerald-400
            shadow-[0_0_25px_rgba(52,211,153,0.8)]
          "
        />

        {/* Left line */}

        <div
          className="
            absolute
            left-[7%]
            top-[32%]
            h-px
            w-[13%]
            rotate-[14deg]
            bg-gradient-to-r
            from-emerald-400/30
            to-transparent
          "
        />

        {/* Right line */}

        <div
          className="
            absolute
            right-[7%]
            top-[28%]
            h-px
            w-[13%]
            -rotate-[14deg]
            bg-gradient-to-l
            from-emerald-400/30
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          px-4
          py-10

          sm:px-6
          sm:py-14

          md:px-8
          md:py-16

          lg:min-h-[calc(100svh-4rem)]
          lg:px-10
          lg:py-20

          xl:px-12
          xl:py-24
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-6xl
            items-center
            gap-10

            sm:gap-12

            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-14

            xl:gap-20
          "
        >
          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              order-2
              w-full
              min-w-0
              animate-[heroContent_0.7s_ease-out_both]
              text-center

              lg:order-1
              lg:text-left
            "
          >
            {/* Availability */}

            <div
              className="
                mx-auto
                mb-5
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-border/70
                bg-card/50
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-muted-foreground
                shadow-sm

                sm:mb-6
                sm:px-4
                sm:py-2
                sm:text-xs

                lg:mx-0
              "
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="truncate">
                Available for frontend & AI projects
              </span>
            </div>

            {/* Eyebrow */}

            <div
              className="
                mb-4
                flex
                items-center
                justify-center
                gap-2
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-emerald-400

                sm:text-[10px]

                md:text-xs

                lg:justify-start
              "
            >
              <Sparkle
                size={14}
                weight="fill"
                aria-hidden="true"
                className="animate-[sparkle_3s_ease-in-out_infinite]"
              />

              <span>Frontend × AI Engineering</span>
            </div>

            {/* Heading */}

            <h1
              className="
                mx-auto
                w-full
                max-w-[22rem]
                font-mono
                text-[clamp(2.35rem,10vw,5.8rem)]
                font-bold
                leading-[1.02]
                tracking-[-0.055em]

                sm:max-w-2xl

                md:text-[clamp(3rem,7vw,5rem)]

                lg:mx-0
                lg:max-w-4xl
                lg:text-[clamp(3.4rem,5.2vw,5.8rem)]
              "
            >
              I build{" "}
              <span className="relative text-emerald-400">
                <span className="animate-[textGlow_3.5s_ease-in-out_infinite]">
                  intelligent
                </span>

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-0.5
                    left-0
                    h-1
                    w-full
                    rounded-full
                    bg-emerald-400/10
                    blur-md

                    sm:h-1.5
                  "
                />
              </span>{" "}
              <span className="text-foreground">
                digital experiences.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-5
                w-full
                max-w-[22rem]
                text-sm
                leading-6
                text-muted-foreground

                sm:mt-6
                sm:max-w-xl
                sm:text-base
                sm:leading-7

                md:text-lg
                md:leading-8

                lg:mx-0
                lg:max-w-2xl
              "
            >
              I&apos;m{" "}
              <span className="font-medium text-green-300">
                Md. Azijul Hakim
              </span>
              , a Frontend AI Engineer crafting fast, accessible, and
              thoughtful products with Next.js, TypeScript, and modern AI.
            </p>

            {/* CTA Buttons */}

            <div
              className="
                mx-auto
                mt-7
                grid
                w-full
                max-w-md
                grid-cols-1
                gap-3

                sm:mt-8
                sm:grid-cols-2

                lg:mx-0
                lg:max-w-2xl
                xl:max-w-fit
              "
            >
              {/* Explore */}

              <div className="w-full">
                <Link
                  href="/projects"
                  className="
                    group
                    flex
                    min-h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-emerald-500
                    px-5
                    font-mono
                    text-sm
                    font-semibold
                    text-black
                    shadow-[0_10px_35px_rgba(16,185,129,0.15)]
                    transition
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-emerald-400
                    hover:shadow-[0_15px_45px_rgba(16,185,129,0.28)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-emerald-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-background

                    xl:px-6
                  "
                >
                  Explore my work

                  <ArrowRight
                    size={17}
                    weight="bold"
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>

              {/* Contact */}

              <div className="w-full">
                <Link
                  href="/contact"
                  className="
                    group
                    flex
                    min-h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-border/80
                    bg-background/60
                    px-5
                    font-mono
                    text-sm
                    font-medium
                    transition
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-emerald-500/40
                    hover:bg-emerald-500/[0.05]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-emerald-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-background

                    xl:px-6
                  "
                >
                  Let&apos;s connect

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              </div>

              {/* Resume */}

              <div
                className="
                  w-full
                  sm:col-span-2
                  lg:col-span-2
                  xl:col-span-1
                "
              >
                <a
                  href="/resume/md-azijul-hakim-resume.pdf"
                  download
                  className="
                    group
                    flex
                    min-h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-emerald-500/30
                    bg-emerald-500/[0.05]
                    px-5
                    font-mono
                    text-sm
                    font-medium
                    text-emerald-400
                    transition
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-emerald-400/50
                    hover:bg-emerald-500/[0.1]
                    hover:text-emerald-300
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-emerald-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-background

                    xl:px-6
                  "
                >
                  Download Resume

                  <DownloadSimple
                    size={17}
                    weight="bold"
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-y-0.5
                    "
                  />
                </a>
              </div>
            </div>

            {/* Social Links */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-2.5

                lg:justify-start
              "
            >
              <span
                className="
                  mr-1
                  hidden
                  text-xs
                  text-muted-foreground/60

                  sm:inline
                "
              >
                Find me on
              </span>

              {socialLinks.map(({ href, label, icon: Icon }) => (
                <div key={href}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${label} profile`}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-border/70
                      bg-card/40
                      text-muted-foreground
                      transition
                      duration-200
                      hover:-translate-y-0.5
                      hover:border-emerald-500/40
                      hover:bg-emerald-500/[0.05]
                      hover:text-emerald-400
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-emerald-400

                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Icon
                      size={18}
                      weight="regular"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              PORTRAIT
          ================================================== */}

          <div
            className="
              order-1
              mx-auto
              w-full
              max-w-[15rem]
              min-w-0
              animate-[heroPortrait_0.8s_ease-out_0.1s_both]

              sm:max-w-[18rem]

              md:max-w-[21rem]

              lg:order-2
              lg:max-w-[24rem]

              xl:max-w-[27rem]
            "
          >
            <div className="relative mx-auto w-full">
              {/* Outer glow */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-6
                  animate-[portraitGlow_5s_ease-in-out_infinite]
                  rounded-full
                  bg-emerald-400/20
                  blur-[60px]
                  will-change-transform

                  sm:inset-8
                  sm:blur-[70px]
                "
              />

              {/* Portrait card */}

              <div
                className="
                  relative
                  rounded-[1.75rem]
                  border
                  border-emerald-400/20
                  bg-gradient-to-br
                  from-emerald-400/10
                  via-card/50
                  to-transparent
                  p-1.5
                  shadow-[0_25px_80px_rgba(0,0,0,0.22)]

                  transition-transform
                  duration-500
                  hover:-translate-y-2
                  hover:scale-[1.015]

                  sm:rounded-[2rem]
                  sm:p-2
                "
              >
                {/* Image */}

                <div
                  className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    rounded-[1.4rem]
                    bg-muted

                    sm:rounded-[1.5rem]
                  "
                >
                  <Image
                    src="/images/azijul-hakim.webp"
                    alt="Md. Azijul Hakim, Frontend AI Engineer"
                    fill
                    priority
                    quality={70}
                    sizes="
                      (max-width: 639px) 240px,
                      (max-width: 767px) 288px,
                      (max-width: 1023px) 336px,
                      (max-width: 1279px) 384px,
                      432px
                    "
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />

                  {/* Image gradient */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Image information */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-3.5
                      text-left

                      sm:p-5
                    "
                  >
                    <div
                      className="
                        mb-2
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-2
                        py-1
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-white/80

                        sm:gap-2
                        sm:px-2.5
                        sm:py-1.5
                        sm:text-[9px]
                      "
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                      Frontend × AI
                    </div>

                    <h2
                      className="
                        font-mono
                        text-base
                        font-bold
                        tracking-tight
                        text-white

                        sm:text-xl
                      "
                    >
                      Md. Azijul Hakim
                    </h2>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        text-white/60

                        sm:mt-1
                        sm:text-xs
                      "
                    >
                      Building intelligent interfaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Available badge */}

              <div
                className="
                  absolute
                  right-0
                  top-4
                  z-10
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-background/95
                  px-2.5
                  py-1.5
                  text-[7px]
                  font-semibold
                  tracking-wide
                  shadow-xl
                  animate-[badgeIn_0.6s_ease-out_0.5s_both]

                  sm:-right-2
                  sm:top-6
                  sm:gap-2
                  sm:px-3
                  sm:py-2
                  sm:text-[9px]

                  lg:-right-4
                "
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-full w-full rounded-full bg-emerald-400" />
                </span>

                AVAILABLE
              </div>

              {/* AI badge */}

              <div
                className="
                  absolute
                  bottom-6
                  left-0
                  z-10
                  hidden
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-border/70
                  bg-background/95
                  px-2.5
                  py-2
                  text-[8px]
                  text-muted-foreground
                  shadow-xl
                  animate-[badgeInLeft_0.6s_ease-out_0.7s_both]

                  sm:flex
                  sm:-left-3
                  sm:bottom-8
                  sm:px-3
                  sm:py-2.5
                  sm:text-[9px]

                  lg:-left-5
                "
              >
                <Sparkle
                  size={13}
                  weight="fill"
                  className="shrink-0 text-emerald-400"
                />

                <span>
                  AI-powered
                  <br />
                  interfaces
                </span>
              </div>

              {/* Decorative dot */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  right-0
                  top-1/2
                  hidden
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_20px_rgba(52,211,153,0.8)]

                  sm:block
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          REDUCED MOTION
      ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes heroGlow {
              0%, 100% {
                transform: translateX(-50%) scale(0.95);
                opacity: 0.5;
              }
              50% {
                transform: translateX(-50%) scale(1.05);
                opacity: 0.8;
              }
            }

            @keyframes heroFloatLeft {
              0%, 100% {
                transform: translate3d(0, 0, 0);
                opacity: 0.08;
              }
              50% {
                transform: translate3d(25px, -15px, 0);
                opacity: 0.18;
              }
            }

            @keyframes heroFloatRight {
              0%, 100% {
                transform: translate3d(0, 0, 0);
                opacity: 0.08;
              }
              50% {
                transform: translate3d(-25px, 20px, 0);
                opacity: 0.16;
              }
            }

            @keyframes heroContent {
              from {
                opacity: 0;
                transform: translateY(24px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes heroPortrait {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes portraitGlow {
              0%, 100% {
                transform: scale(1);
                opacity: 0.15;
              }
              50% {
                transform: scale(1.08);
                opacity: 0.35;
              }
            }

            @keyframes textGlow {
              0%, 100% {
                text-shadow: 0 0 0 rgba(52, 211, 153, 0);
              }
              50% {
                text-shadow: 0 0 28px rgba(52, 211, 153, 0.32);
              }
            }

            @keyframes sparkle {
              0%, 100% {
                transform: rotate(0deg);
              }
              50% {
                transform: rotate(10deg);
              }
              75% {
                transform: rotate(-10deg);
              }
            }

            @keyframes badgeIn {
              from {
                opacity: 0;
                transform: translateX(15px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes badgeInLeft {
              from {
                opacity: 0;
                transform: translateX(-15px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              *,
              *::before,
              *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                scroll-behavior: auto !important;
                transition-duration: 0.01ms !important;
              }
            }
          `,
        }}
      />
    </section>
  );
}