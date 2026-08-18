import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const fadeLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -25,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const fadeRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 25,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};