"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees (default: 4) */
  tilt?: number;
  /** Disable 3D on mobile via media query (default: true) */
  desktopOnly?: boolean;
}

/**
 * Wrapper that adds a subtle 3D tilt effect on mouse hover.
 * Falls back to a plain div when `prefers-reduced-motion` is set,
 * or when on a touch device (handled via CSS media query at render time).
 */
export function AnimatedCard({
  children,
  className = "",
  tilt = 4,
  desktopOnly = true,
}: AnimatedCardProps) {
  const shouldReduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 32 };
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-tilt, tilt]), springConfig);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [tilt, -tilt]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      className={`${className} ${desktopOnly ? "max-md:![transform:none]" : ""}`}
    >
      {children}
    </motion.div>
  );
}
