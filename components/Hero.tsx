"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ChevronRight } from "lucide-react";

export default function Hero({ showCv = false }: { showCv?: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current || !spotlightRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlightRef.current.style.setProperty("--spot-x", `${x}%`);
    spotlightRef.current.style.setProperty("--spot-y", `${y}%`);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-white grid-bg"
    >
      {/* Mouse spotlight */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none hero-spotlight"
      />
      {/* Top rule under navbar */}
      <div className="absolute top-16 left-0 right-0 h-px bg-[#E5E5E5] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-14 xl:gap-20 items-center">
          {/* ── LEFT: Text ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04 }}
              className="mb-7 inline-flex items-center gap-2.5"
            >
              <span className="h-px w-6 bg-[#111111]" />
              <span className="text-xs font-medium tracking-[0.18em] text-[#A3A3A3] uppercase">
                Portfolio — Philippines
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold tracking-[-0.02em] text-[#111111] leading-[1.06] mb-5"
              style={{ fontSize: "clamp(2.2rem,5.5vw,4.2rem)" }}
            >
              Rowbie Lopez,{" "}
              <span
                className="font-semibold text-[#777777] tracking-normal align-middle"
                style={{ fontSize: "0.42em" }}
              >
                MIT, LPT
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-[11px] md:text-xs font-semibold text-[#888888] tracking-[0.08em] mb-4 uppercase"
            >
              ICT Educator&nbsp;&nbsp;·&nbsp;&nbsp;Web &amp; Systems
              Developer&nbsp;&nbsp;·&nbsp;&nbsp;Digital Transformation Advocate
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="text-base md:text-lg text-[#555555] leading-relaxed mb-9 max-w-md font-light"
            >
              Building digital solutions for education, institutions, and
              innovation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <motion.button
                onClick={() => scrollTo("#featured")}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors shadow-sm hover:shadow-md"
              >
                View Featured Work
                <ChevronRight size={14} />
              </motion.button>

              <motion.button
                onClick={() => scrollTo("#contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-5 py-3 text-[#111111] text-sm font-semibold rounded-lg border border-[#E5E5E5] hover:border-[#AAAAAA] hover:bg-[#FAFAFA] transition-colors"
              >
                <Mail size={14} />
                Contact Me
              </motion.button>

              {showCv && (
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2 px-5 py-3 text-[#111111] text-sm font-semibold rounded-lg border border-[#E5E5E5] hover:border-[#AAAAAA] hover:bg-[#FAFAFA] transition-colors"
                >
                  <Download size={14} />
                  Download CV
                </motion.a>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.54 }}
              className="pt-7 border-t border-[#E5E5E5] flex flex-wrap gap-8"
            >
              {[
                { value: "10+", label: "Years in ICT" },
                { value: "11+", label: "Systems Built" },
                { value: "LPT", label: "Licensed Teacher" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.07 }}
                  className="flex flex-col"
                >
                  <span className="text-xl font-bold tracking-tight text-[#111111]">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-[#A3A3A3] mt-0.5 tracking-wide">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="hidden lg:flex justify-center lg:justify-end self-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Image
                src="/rowbie.png"
                alt="Rowbie Lopez, MIT, LPT — ICT Educator and Web Systems Developer"
                width={420}
                height={560}
                className="object-contain w-[320px] xl:w-[420px] h-auto"
                priority
                quality={100}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#CCCCCC]"
      >
        <span className="text-[9px] tracking-[0.22em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
        >
          <ArrowDown size={11} />
        </motion.div>
      </motion.div>
    </section>
  );
}
