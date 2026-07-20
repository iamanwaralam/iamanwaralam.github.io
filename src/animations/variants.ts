import type { Variants, Easing } from 'framer-motion';

/** Signature premium easing used across the site (easeOutExpo-like). */
export const EASE_PREMIUM: Easing = [0.22, 1, 0.36, 1];

export const DURATION = {
  fast: 0.3,
  base: 0.5,
  slow: 0.7,
} as const;

/** Fade in with a subtle rise. The workhorse reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

/** Parent container that staggers its children's reveal. */
export const staggerContainer = (stagger = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Page transition wrapper for route changes. */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.fast, ease: EASE_PREMIUM },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: EASE_PREMIUM },
  },
};
