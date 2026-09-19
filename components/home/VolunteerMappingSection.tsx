"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaRoad,
  FaStar,
  FaUsers,
  FaArrowUp,
  FaGlobeAsia,
} from "react-icons/fa";

type CountUpProps = {
  value: number;
  duration?: number;
  loading?: boolean;
};

function CountUp({
  value,
  duration = 1200,
  loading = false,
}: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (loading) {
      setCount(0);
      return;
    }

    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      start = Math.floor(easedProgress * value);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value, duration, loading]);

  return count.toLocaleString();
}

const contributions = [
  {
    title: "Road Mapper",
    subtitle: "Google Maps Contributor",
    icon: FaRoad,
    accent: "cyan",
    description:
      "Helping improve road coverage by mapping missing roads and correcting existing road data.",
    items: [
      "Map unmapped and rural roads",
      "Improve road geometry & connectivity",
      "Support local travel and accessibility",
      "Contribute quality geographic data",
    ],
  },
  {
    title: "Local Guides",
    subtitle: "Maps Community",
    icon: FaStar,
    accent: "fuchsia",
    description:
      "Sharing useful local knowledge through reviews, photos, ratings, and place updates.",
    items: [
      "Place reviews & ratings",
      "Location photos",
      "Updated business details",
      "Accessibility & local tips",
    ],
  },
  {
    title: "Crowdsource",
    subtitle: "Google Contributor",
    icon: FaUsers,
    accent: "emerald",
    description:
      "Providing human feedback that helps improve digital products, maps, and AI systems.",
    items: [
      "Image & object identification",
      "Translation evaluation",
      "Local data validation",
      "AI feedback & evaluation",
    ],
  },
];

export default function VolunteerMappingSection() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    km: 0,
    challenges: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        km: 3391,
        challenges: 3864,
      });

      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="volunteer"
      className="
        relative w-full overflow-hidden
        bg-white text-slate-900
        px-4 py-16
        transition-colors duration-300
        sm:px-6 sm:py-20
        lg:px-8 lg:py-24
        dark:bg-slate-950
        dark:text-white
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Cyan Glow */}
        <div
          className="
            absolute left-1/4 top-20
            h-72 w-72
            rounded-full
            bg-cyan-400/10
            blur-[120px]
            dark:bg-cyan-500/10
          "
        />

        {/* Fuchsia Glow */}
        <div
          className="
            absolute bottom-20 right-1/4
            h-72 w-72
            rounded-full
            bg-fuchsia-400/10
            blur-[120px]
            dark:bg-fuchsia-500/10
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          {/* Badge */}
          <div
            className="
              mb-4 inline-flex items-center gap-2
              rounded-full
              border border-emerald-500/20
              bg-emerald-50
              px-3 py-1.5
              font-mono text-[10px]
              uppercase tracking-[0.2em]
              text-emerald-600
              transition-colors
              dark:border-emerald-400/20
              dark:bg-emerald-400/5
              dark:text-emerald-300
              sm:text-xs
            "
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
            Community Impact
          </div>

          {/* Title */}
          <h2
            className="
              text-3xl font-bold tracking-tight
              text-slate-900
              dark:text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Volunteer{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-emerald-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-cyan-400 dark:via-emerald-400 dark:to-fuchsia-400">
              & Mapping
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-4
              max-w-2xl
              text-sm leading-7
              text-slate-600
              dark:text-slate-400
              sm:text-base
            "
          >
            Contributing time, local knowledge, and structured feedback to
            make maps, places, and digital experiences more useful for
            everyone.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN CARD
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="
            relative overflow-hidden
            rounded-3xl
            border border-slate-200
            bg-white/90
            shadow-xl shadow-slate-200/60
            backdrop-blur-xl
            transition-colors duration-300
            dark:border-white/10
            dark:bg-slate-950/80
            dark:shadow-2xl
            dark:shadow-black/20
          "
        >
          {/* Top Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent dark:via-cyan-400/60" />

          {/* =====================================================
              CARD HEADER
          ===================================================== */}
          <div
            className="
              border-b border-slate-200
              p-5
              dark:border-white/10
              sm:p-8
              lg:p-10
            "
          >
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              {/* Profile */}
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Icon */}
                <div
                  className="
                    relative flex
                    h-14 w-14 shrink-0
                    items-center justify-center
                    rounded-2xl
                    border border-cyan-500/20
                    bg-gradient-to-br
                    from-cyan-500/10
                    to-blue-600/10
                    shadow-lg shadow-cyan-500/10
                    dark:border-cyan-400/20
                    dark:from-cyan-500/20
                    dark:to-blue-600/20
                    sm:h-16 sm:w-16
                  "
                >
                  <FaMapMarkerAlt className="h-6 w-6 text-cyan-500 dark:text-cyan-300 sm:h-7 sm:w-7" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-950 dark:bg-emerald-400" />
                </div>

                <div>
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3
                      className="
                        text-xl font-bold
                        text-slate-900
                        dark:text-white
                        sm:text-2xl
                      "
                    >
                      Volunteer Mapper
                    </h3>

                    <span
                      className="
                        rounded-full
                        border border-emerald-500/20
                        bg-emerald-50
                        px-2 py-0.5
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-wider
                        text-emerald-600
                        dark:border-emerald-400/20
                        dark:bg-emerald-400/5
                        dark:text-emerald-300
                      "
                    >
                      Active Contributor
                    </span>
                  </div>

                  <p
                    className="
                      max-w-xl
                      text-sm leading-6
                      text-slate-600
                      dark:text-slate-400
                      sm:text-base
                    "
                  >
                    Using maps, local knowledge, and community-driven
                    contributions to help people navigate and discover
                    places with confidence.
                  </p>
                </div>
              </div>

              {/* Contribution Tags */}
              <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                {[
                  "Google Maps",
                  "Local Guides",
                  "Road Mapper",
                  "Crowdsource",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border border-slate-200
                      bg-slate-100
                      px-3 py-1.5
                      text-[10px]
                      font-medium
                      text-slate-600
                      transition-all duration-300
                      hover:border-cyan-400/40
                      hover:bg-cyan-400/10
                      hover:text-cyan-600
                      dark:border-white/10
                      dark:bg-white/[0.03]
                      dark:text-slate-300
                      dark:hover:text-cyan-300
                      sm:text-xs
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div className="p-5 sm:p-8 lg:p-10">
            {/* Intro + Stats */}
            <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
              {/* Intro */}
              <div>
                <div
                  className="
                    mb-3 flex items-center gap-2
                    text-xs font-medium
                    uppercase tracking-[0.18em]
                    text-slate-500
                  "
                >
                  <FaGlobeAsia className="text-cyan-500 dark:text-cyan-400" />
                  Global & Local Contribution
                </div>

                <p
                  className="
                    max-w-3xl
                    text-sm leading-7
                    text-slate-700
                    dark:text-slate-300
                    sm:text-base
                  "
                >
                  As a{" "}
                  <strong className="font-semibold text-cyan-600 dark:text-cyan-300">
                    Road Mapper
                  </strong>
                  ,{" "}
                  <strong className="font-semibold text-fuchsia-600 dark:text-fuchsia-300">
                    Local Guide
                  </strong>
                  , and{" "}
                  <strong className="font-semibold text-emerald-600 dark:text-emerald-300">
                    Crowdsource Contributor
                  </strong>
                  , I contribute reviews, photos, road data, and structured
                  feedback. These small contributions help improve local
                  discovery, navigation, accessibility, and data quality.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {/* KM */}
                <div
                  className="
                    rounded-2xl
                    border border-cyan-500/20
                    bg-cyan-50
                    p-4
                    transition-colors
                    dark:border-cyan-400/10
                    dark:bg-cyan-400/[0.04]
                  "
                >
                  <div className="mb-2 flex items-center justify-between">
                    <FaRoad className="text-cyan-500 dark:text-cyan-400" />
                    <FaArrowUp className="text-[10px] text-emerald-500 dark:text-emerald-400" />
                  </div>

                  <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-300 sm:text-3xl">
                    {loading ? (
                      "—"
                    ) : (
                      <>
                        <CountUp
                          value={stats.km}
                          loading={loading}
                        />
                        +
                      </>
                    )}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                    KM Mapped
                  </p>
                </div>

                {/* Challenges */}
                <div
                  className="
                    rounded-2xl
                    border border-fuchsia-500/20
                    bg-fuchsia-50
                    p-4
                    transition-colors
                    dark:border-fuchsia-400/10
                    dark:bg-fuchsia-400/[0.04]
                  "
                >
                  <div className="mb-2 flex items-center justify-between">
                    <FaMapMarkerAlt className="text-fuchsia-500 dark:text-fuchsia-400" />
                    <FaArrowUp className="text-[10px] text-emerald-500 dark:text-emerald-400" />
                  </div>

                  <p className="text-2xl font-bold text-fuchsia-600 dark:text-fuchsia-300 sm:text-3xl">
                    {loading ? (
                      "—"
                    ) : (
                      <>
                        <CountUp
                          value={stats.challenges}
                          loading={loading}
                        />
                        +
                      </>
                    )}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                    Challenges
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                CONTRIBUTION CARDS
            ================================================= */}
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {contributions.map((item, index) => {
                const Icon = item.icon;

                const accentClasses = {
                  cyan: {
                    border:
                      "border-cyan-500/20 hover:border-cyan-500/40 dark:border-cyan-400/15 dark:hover:border-cyan-400/40",
                    icon: "from-cyan-500 to-blue-600",
                    iconText: "text-cyan-600 dark:text-cyan-300",
                    title: "text-cyan-600 dark:text-cyan-300",
                    glow:
                      "group-hover:shadow-cyan-500/10",
                    bullet: "bg-cyan-500 dark:bg-cyan-400",
                  },

                  fuchsia: {
                    border:
                      "border-fuchsia-500/20 hover:border-fuchsia-500/40 dark:border-fuchsia-400/15 dark:hover:border-fuchsia-400/40",
                    icon: "from-fuchsia-500 to-purple-600",
                    iconText:
                      "text-fuchsia-600 dark:text-fuchsia-300",
                    title:
                      "text-fuchsia-600 dark:text-fuchsia-300",
                    glow:
                      "group-hover:shadow-fuchsia-500/10",
                    bullet:
                      "bg-fuchsia-500 dark:bg-fuchsia-400",
                  },

                  emerald: {
                    border:
                      "border-emerald-500/20 hover:border-emerald-500/40 dark:border-emerald-400/15 dark:hover:border-emerald-400/40",
                    icon: "from-emerald-500 to-teal-600",
                    iconText:
                      "text-emerald-600 dark:text-emerald-300",
                    title:
                      "text-emerald-600 dark:text-emerald-300",
                    glow:
                      "group-hover:shadow-emerald-500/10",
                    bullet:
                      "bg-emerald-500 dark:bg-emerald-400",
                  },
                };

                const colors =
                  accentClasses[
                    item.accent as keyof typeof accentClasses
                  ];

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className={`
                      group relative overflow-hidden
                      rounded-2xl
                      border
                      bg-slate-50
                      p-5
                      shadow-sm
                      transition-all duration-300
                      hover:bg-white
                      hover:shadow-xl
                      dark:bg-white/[0.02]
                      dark:hover:bg-white/[0.04]
                      ${colors.border}
                      ${colors.glow}
                    `}
                  >
                    {/* Card Glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute -right-10 -top-10
                        h-24 w-24
                        rounded-full
                        bg-slate-900/5
                        blur-2xl
                        transition
                        group-hover:bg-slate-900/10
                        dark:bg-white/5
                        dark:group-hover:bg-white/10
                      "
                    />

                    <div className="relative">
                      {/* Card Header */}
                      <div className="mb-5 flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className={`
                            flex h-11 w-11 shrink-0
                            items-center justify-center
                            rounded-xl
                            bg-gradient-to-br
                            ${colors.icon}
                            shadow-lg
                          `}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>

                        {/* Title */}
                        <div className="min-w-0">
                          <h4
                            className={`
                              text-base font-semibold
                              ${colors.title}
                            `}
                          >
                            {item.title}
                          </h4>

                          <p
                            className="
                              mt-0.5
                              text-[10px]
                              uppercase
                              tracking-wider
                              text-slate-500
                            "
                          >
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className="
                          text-sm leading-6
                          text-slate-600
                          dark:text-slate-400
                        "
                      >
                        {item.description}
                      </p>

                      {/* Items */}
                      <ul className="mt-5 space-y-2.5">
                        {item.items.map((point) => (
                          <li
                            key={point}
                            className="
                              flex items-start gap-2.5
                              text-xs leading-5
                              text-slate-700
                              dark:text-slate-300
                              sm:text-sm
                            "
                          >
                            <span
                              className={`
                                mt-2 h-1 w-1
                                shrink-0 rounded-full
                                ${colors.bullet}
                              `}
                            />

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* =================================================
                BOTTOM IMPACT BAR
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="
                mt-5
                rounded-2xl
                border border-slate-200
                bg-gradient-to-r
                from-slate-50
                via-cyan-50
                to-slate-50
                p-4
                transition-colors
                dark:border-white/10
                dark:from-white/[0.03]
                dark:via-cyan-400/[0.03]
                dark:to-white/[0.03]
                sm:p-5
              "
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Small contributions. Global impact.
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs leading-5
                      text-slate-500
                    "
                  >
                    Every mapped road, verified place, review, and feedback
                    helps create better digital experiences.
                  </p>
                </div>

                <div
                  className="
                    flex items-center gap-2
                    text-[10px]
                    uppercase tracking-wider
                    text-emerald-600
                    dark:text-emerald-300
                  "
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  Community Driven
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}