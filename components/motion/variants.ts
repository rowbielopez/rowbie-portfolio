import type { Variants } from "framer-motion";

/** Shared viewport config — trigger when element is 60px inside viewport */
export const VIEWPORT = { once: true, margin: "-60px" } as const;

/** Looser viewport — trigger earlier for above-fold elements */
export const VIEWPORT_LOOSE = { once: true, margin: "-30px" } as const;

// ─────────────────────────────────────────────────
//  Fade variants
// ─────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45 } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// ─────────────────────────────────────────────────
//  Slide variants
// ─────────────────────────────────────────────────

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─────────────────────────────────────────────────
//  Scale variants
// ─────────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─────────────────────────────────────────────────
//  Stagger containers
// ─────────────────────────────────────────────────

/** Standard stagger — 80ms between children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

/** Fast stagger — 50ms between children (badges, pills) */
export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

/** Slow stagger — 120ms between children (timeline, big cards) */
export const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

// ─────────────────────────────────────────────────
//  Mobile menu
// ─────────────────────────────────────────────────

export const menuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18, delay: 0.1 } },
};

export const menuItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.28, ease: "easeOut" } },
  exit: { opacity: 0, x: -8, transition: { duration: 0.15 } },
};

export const menuStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};
