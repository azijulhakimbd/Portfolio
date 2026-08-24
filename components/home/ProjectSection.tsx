"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiStripe,
  SiJsonwebtokens,
  SiJavascript,
} from "react-icons/si";

import type { IconType } from "react-icons";

import {
  containerVariants,
  cardVariants,
  fadeUpVariants,
  scaleInVariants,
} from "@/lib/animations";

/* =========================================================
   TECHNOLOGY ICONS
========================================================= */

const technologyIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,

  MongoDB: SiMongodb,
  "MongoDB(Mongoose ORM)": SiMongodb,

  "Express.js": SiExpress,
  "Express JS": SiExpress,

  "Node.js": SiNodedotjs,
  Node: SiNodedotjs,

  Firebase: SiFirebase,
  Stripe: SiStripe,
  JWT: SiJsonwebtokens,
  JavaScript: SiJavascript,
};

/* =========================================================
   PROJECT TYPE
========================================================= */

type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  server?: string;
  live: string;
  category: string;
  image: string;
};

/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [
  {
    slug: "easystay",
    title: "EasyStay — Short-Term Rental Marketplace",
    description:
      "A modern accommodation booking platform connecting property owners and travelers in Bangladesh. It provides property listing, advanced search, real-time booking, secure Stripe payments, and management tools.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB(Mongoose ORM)",
      "JWT",
      "Next Auth",
      "Stripe",
      "Shadcn UI",
    ],
    github:
      "https://github.com/azijulhakimbd/Easy-Stay",
    live:
      "https://easy-stay-liart.vercel.app/",
    category: "Full-Stack Application",
    image:
      "https://i.postimg.cc/BQ4SXZF7/Easy-Stay-Hero.png",
  },

  {
    slug: "petsera",
    title: "Petsera — Pet Adoption & Donation Platform",
    description:
      "A secure MERN-based pet adoption and donation platform connecting animal lovers with pets in need while supporting online donations, campaigns, dashboards, and comprehensive administration.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
      "Stripe",
      "Node",
    ],
    github:
      "https://github.com/azijulhakimbd/Petsera-Client-Side",
    server:
      "https://github.com/azijulhakimbd/Petsera-Server-Side",
    live:
      "https://petsera.netlify.app/",
    category: "MERN Application",
    image:
      "https://i.postimg.cc/GtMWnNR9/Pets-era.jpg",
  },

  {
    slug: "restaurant-management",
    title: "Restaurant Management System",
    description:
      "A comprehensive restaurant management application where customers can browse food, place orders, and manage order history while administrators manage food items, users, and orders.",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "JWT",
      "Express JS",
      "Node",
    ],
    github:
      "https://github.com/azijulhakimbd/MA-Restaurant-Client",
    server:
      "https://github.com/azijulhakimbd/MA-Restaurant-Server",
    live:
      "https://ma-restaurant.netlify.app/",
    category: "Web Application",
    image:
      "https://i.postimg.cc/1XWRBX8J/MA-Banner.jpg",
  },

  {
    slug: "hobbyhub",
    title: "HobbyHub — Local Hobby Group Organizer",
    description:
      "A community platform for discovering, joining, and creating local hobby groups. Users can connect with like-minded people, follow group activities, and organize events.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "JWT",
      "Node",
    ],
    github:
      "https://github.com/azijulhakimbd/HobbyHub-Client",
    server:
      "https://github.com/azijulhakimbd/HobbyHub-Server",
    live:
      "https://b11-a10-papiya.netlify.app/",
    category: "Community Platform",
    image:
      "https://i.postimg.cc/yxwZ8zkz/hobbyhub-03.png",
  },
];

/* =========================================================
   TECHNOLOGY ICON
========================================================= */

function TechnologyIcon({
  technology,
}: {
  technology: string;
}) {
  const Icon = technologyIcons[technology];

  if (!Icon) {
    return (
      <Sparkles
        aria-hidden="true"
        className="size-3.5 shrink-0 text-primary"
      />
    );
  }

  return (
    <Icon
      aria-hidden="true"
      className="size-3.5 shrink-0 text-foreground"
    />
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className="
        group relative flex min-h-[500px] flex-col
        overflow-hidden rounded-3xl border
        bg-background/60 shadow-sm
        backdrop-blur-md
        transition-shadow duration-300
        hover:shadow-2xl
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="relative h-52 overflow-hidden sm:h-64">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          priority={index === 0}
          sizes="
            (max-width: 639px) 100vw,
            (max-width: 1023px) 50vw,
            600px
          "
          className="
            object-cover
            transition-transform duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Project number */}
        <span
          className="
            absolute left-4 top-4
            rounded-full border border-white/20
            bg-black/30 px-3 py-1.5
            font-mono text-xs text-white
            backdrop-blur-md
            sm:left-5 sm:top-5
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Category */}
        <span
          className="
            absolute bottom-4 left-4
            max-w-[calc(100%-2rem)]
            rounded-full border border-white/20
            bg-black/30 px-3 py-1.5
            text-xs font-medium text-white
            backdrop-blur-md
            sm:bottom-5 sm:left-5
          "
        >
          {project.category}
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative flex flex-1 flex-col p-5 sm:p-7">
        {/* Hover glow */}
        <div
          className="
            pointer-events-none absolute
            -right-20 -top-20 size-48
            rounded-full bg-primary/10
            opacity-0 blur-3xl
            transition-opacity duration-500
            group-hover:opacity-100
          "
        />

        <div className="relative flex flex-1 flex-col">
          {/* Title */}
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {project.title}
          </h2>

          {/* Description */}
          <p
            className="
              mt-3 text-sm leading-6
              text-muted-foreground
              sm:mt-4 sm:text-base sm:leading-7
            "
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
            {project.technologies.map((technology) => (
              <span
                key={`${project.slug}-${technology}`}
                className="
                  inline-flex items-center gap-1.5
                  rounded-full border
                  bg-muted/50 px-2.5 py-1.5
                  text-[11px] font-medium
                  text-muted-foreground
                  transition-colors duration-300
                  group-hover:bg-muted
                  sm:gap-2 sm:px-3 sm:text-xs
                "
              >
                <TechnologyIcon technology={technology} />

                <span>{technology}</span>
              </span>
            ))}
          </div>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div
            className="
              relative mt-auto
              flex flex-wrap items-center
              gap-2 border-t pt-5
              sm:mt-8 sm:gap-3
            "
          >
            {/* Project Details */}
            <Link
              href={`/projects/${project.slug}`}
              className="
                group/link inline-flex
                items-center gap-2
                rounded-lg bg-primary
                px-3.5 py-2.5
                text-sm font-medium
                text-primary-foreground
                transition-all duration-300
                hover:-translate-y-0.5
                hover:opacity-90
                sm:px-4
              "
            >
              <span>View project</span>

              <ArrowUpRight
                aria-hidden="true"
                className="
                  size-4
                  transition-transform duration-300
                  group-hover/link:-translate-y-0.5
                  group-hover/link:translate-x-0.5
                "
              />
            </Link>

            {/* Live */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live website`}
              title="Open live website"
              className="
                inline-flex items-center gap-2
                rounded-lg px-2.5 py-2.5
                text-sm text-muted-foreground
                transition-colors
                hover:text-foreground
                sm:px-3
              "
            >
              <ExternalLink
                aria-hidden="true"
                className="size-4"
              />

              <span>Live</span>
            </a>

            {/* GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} GitHub repository`}
              title="GitHub repository"
              className="
                inline-flex items-center gap-2
                rounded-lg px-2.5 py-2.5
                text-sm text-muted-foreground
                transition-colors
                hover:text-foreground
                sm:px-3
              "
            >
              <FaGithub
                aria-hidden="true"
                className="size-4"
              />

              <span>GitHub</span>
            </a>

            {/* Server */}
            {project.server && (
              <a
                href={project.server}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} server repository`}
                title="Server repository"
                className="
                  inline-flex items-center gap-2
                  rounded-lg px-2.5 py-2.5
                  text-sm text-muted-foreground
                  transition-colors
                  hover:text-foreground
                  sm:px-3
                "
              >
                <FaGithub
                  aria-hidden="true"
                  className="size-4"
                />

                <span>Server</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECTS PAGE
========================================================= */

export default function ProjectsSection() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none absolute
          inset-0 -z-10 overflow-hidden
        "
      >
        {/* Primary glow */}
        <div
          className="
            absolute left-1/2 top-[-180px]
            h-[500px] w-[750px]
            max-w-[90vw]
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-[120px]
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute -left-40 top-[40%]
            h-[400px] w-[400px]
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute -right-40 bottom-[10%]
            h-[450px] w-[450px]
            rounded-full
            bg-purple-500/10
            blur-[120px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div
        className="
          mx-auto max-w-7xl
          px-4 py-16
          sm:px-6 sm:py-20
          lg:px-8 lg:py-28
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.header
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <div
            className="
              inline-flex max-w-full
              flex-wrap items-center gap-2
              rounded-full border
              bg-background/70
              px-3 py-2
              text-xs text-muted-foreground
              shadow-sm backdrop-blur-md
              sm:px-4 sm:text-sm
            "
          >
            <Sparkles
              aria-hidden="true"
              className="size-4 shrink-0 text-primary"
            />

            <span>Selected work</span>

            <span className="size-1.5 shrink-0 rounded-full bg-primary" />

            <span>Full-Stack × Frontend</span>
          </div>

          {/* Heading */}
          <h1
            className="
              mt-6 text-4xl
              font-bold tracking-tight
              sm:mt-7 sm:text-5xl
              md:text-6xl
            "
          >
            Projects
          </h1>

          {/* Description */}
          <p
            className="
              mt-5 max-w-2xl
              text-base leading-7
              text-muted-foreground
              sm:mt-6 sm:text-lg sm:leading-8
            "
          >
            A selection of web applications and digital products built with
            modern frontend, backend, authentication, database, and payment
            technologies.
          </p>
        </motion.header>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            mt-12 grid gap-6
            sm:mt-16
            md:grid-cols-2
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </motion.section>

        {/* =================================================
            CTA
        ================================================= */}

        <motion.section
          variants={scaleInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            relative mt-16
            overflow-hidden rounded-3xl
            border bg-background/60
            p-6 text-center
            backdrop-blur-md
            sm:mt-24 sm:p-12
          "
        >
          {/* CTA glow */}
          <div
            className="
              pointer-events-none absolute
              left-1/2 top-0
              h-32 w-64
              -translate-x-1/2
              rounded-full
              bg-primary/10
              blur-3xl
            "
          />

          <div className="relative">
            <Sparkles
              aria-hidden="true"
              className="mx-auto size-6 text-primary"
            />

            <h2
              className="
                mt-5 text-2xl
                font-bold tracking-tight
                sm:text-3xl
              "
            >
              More projects are coming.
            </h2>

            <p
              className="
                mx-auto mt-4 max-w-xl
                text-sm leading-6
                text-muted-foreground
                sm:text-base sm:leading-7
              "
            >
              I&apos;m continuously building and experimenting with modern web
              technologies, scalable applications, and useful digital
              products.
            </p>

            <Link
              href="/ai-lab"
              className="
                group mt-6
                inline-flex items-center gap-2
                rounded-xl border
                bg-background
                px-5 py-3
                text-sm font-medium
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-muted
                sm:mt-7
              "
            >
              <span>Explore AI Lab</span>

              <ArrowUpRight
                aria-hidden="true"
                className="
                  size-4
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}