"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type BlogPostContentProps = {
  title: string;
  category: string;
  date: string;
  content: string[];
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const paragraphVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BlogPostContent({
  title,
  category,
  date,
  content,
}: BlogPostContentProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <article>
      {/* Category */}
      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
        animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="text-sm font-medium uppercase tracking-widest text-emerald-500"
      >
        {category}
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
      >
        {title}
      </motion.h1>

      {/* Date */}
      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? false : { opacity: 1 }}
        transition={{
          delay: 0.25,
          duration: 0.5,
        }}
        className="mt-5 text-sm text-muted-foreground"
      >
        {date}
      </motion.p>

      {/* Article content */}
      <motion.div
        variants={shouldReduceMotion ? undefined : contentVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={shouldReduceMotion ? undefined : "visible"}
        className="mt-12 space-y-7"
      >
        {content.map((paragraph, index) => (
          <motion.p
            key={`${paragraph}-${index}`}
            variants={
              shouldReduceMotion ? undefined : paragraphVariants
            }
            transition={{
              delay: index * 0.08,
            }}
            className="text-lg leading-8 text-muted-foreground"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </article>
  );
}