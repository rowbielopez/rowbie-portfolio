"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Trailing cursor ring — desktop only (pointer: fine).
 * Uses CSS scale (GPU-accelerated) for size change.
 * Does NOT replace the native cursor.
 */
export function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const xSpring = useSpring(x, { damping: 26, stiffness: 220 });
  const ySpring = useSpring(y, { damping: 26, stiffness: 220 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mq.matches);
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      setHovering(!!el?.closest("a, button, [role='button']"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!mounted || !isPointerFine) return null;

  return (
    /* Base size: 28px. Centered via negative margin. Scale on hover. */
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9998] w-7 h-7 -ml-3.5 -mt-3.5 rounded-full border border-[#111111]/20"
      style={{ x: xSpring, y: ySpring }}
      animate={{
        scale: hovering ? 1.7 : 1,
        opacity: hovering ? 0.35 : 0.2,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    />
  );
}
