"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Thin black progress bar that draws left-to-right on initial page load
 * then fades out. Total duration ≈ 900ms. Entirely non-blocking.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* Only show once per session — use sessionStorage flag */
    if (
      typeof sessionStorage !== "undefined" &&
      sessionStorage.getItem("rl-loaded")
    )
      return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("rl-loaded", "1");
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <motion.div
            className="h-[2px] bg-[#111111] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
