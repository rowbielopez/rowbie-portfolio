"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { menuOverlay, menuItem, menuStagger } from "@/components/motion/variants";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Teaching", href: "#teaching" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -4, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md border-b border-[#E5E5E5]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-bold text-sm tracking-tight text-[#111111] group-hover:text-black transition-colors">
              Rowbie Lopez
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-3.5 py-1.5 text-sm text-[#666666] hover:text-[#111111] rounded-md transition-colors group"
              >
                {link.label}
                {/* Underline reveal on hover */}
                <span className="absolute bottom-0.5 left-3.5 right-3.5 h-px bg-[#111111] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}
            <motion.button
              onClick={() => handleNavClick("#contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="ml-3 px-4 py-1.5 bg-[#111111] text-white text-sm font-medium rounded-md hover:bg-black transition-colors"
            >
              Get in Touch
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-[#111111] hover:bg-[#F5F5F5] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.12 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile menu overlay — AnimatePresence for enter/exit */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white flex flex-col"
            style={{ paddingTop: "4rem" }}
          >
            <motion.nav
              variants={menuStagger}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col px-6 py-8 gap-1"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  variants={menuItem}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5F5F5] rounded-lg transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                variants={menuItem}
                onClick={() => handleNavClick("#contact")}
                className="mt-4 px-4 py-3 bg-[#111111] text-white font-medium rounded-lg hover:bg-black transition-colors text-center"
              >
                Get in Touch
              </motion.button>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="mt-auto px-6 py-8 border-t border-[#E5E5E5]"
            >
              <p className="text-xs text-[#A3A3A3]">ICT Educator • Web & Systems Developer</p>
              <p className="text-xs text-[#A3A3A3] mt-1">Philippines</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
