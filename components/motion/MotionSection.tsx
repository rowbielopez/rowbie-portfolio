"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, VIEWPORT } from "./variants";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  /** Loosen viewport margin for earlier triggers */
  eager?: boolean;
}

/**
 * Drop-in wrapper that fades children into view when they enter the viewport.
 * Respects `prefers-reduced-motion` — skips animation when set.
 */
export function MotionSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  eager = false,
}: MotionSectionProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={eager ? { once: true, margin: "-30px" } : VIEWPORT}
      variants={variants}
      transition={delay > 0 ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
