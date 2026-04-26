"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  FolderOpen,
  Globe2,
  BookOpen,
  Code2,
  Zap,
  Palette,
  Monitor,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons/SocialIcons";
import {
  fadeUp,
  staggerContainer,
  VIEWPORT,
} from "@/components/motion/variants";
import { type Variants } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Web-Based Information Systems",
    description:
      "University portals, HR systems, enrollment platforms, faculty evaluation systems, and institutional web services — from planning to deployment.",
  },
  {
    icon: BookOpen,
    title: "ICT Training and Workshops",
    description:
      "Practical ICT workshops and digital literacy training for educators, staff, and institutions — focused on real classroom and workplace application.",
  },
  {
    icon: Zap,
    title: "University Digital Transformation",
    description:
      "Planning and implementing digital systems to modernize university administrative and academic processes, aligned with institutional goals.",
  },
  {
    icon: Monitor,
    title: "EdTech Product Development",
    description:
      "Designing and building educational technology tools, classroom management platforms, and learning systems grounded in real teaching experience.",
  },
  {
    icon: Globe2,
    title: "UI/UX for Internal Systems",
    description:
      "Improving the user experience and interface of existing institutional information systems — making them cleaner, faster, and easier to use.",
  },
  {
    icon: Palette,
    title: "Content and Multimedia Support",
    description:
      "ICT-focused digital content, educational videos, graphics, and multimedia materials for institutional or training purposes.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ConversionCTA() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="hire" className="section-padding bg-white">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          <p className="label-tag mb-4">Let&apos;s Work Together</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline leading-tight">
            Let&apos;s Build Practical Digital Solutions
          </h2>
          <p className="mt-7 text-[#666666] leading-relaxed">
            I am open to meaningful opportunities in web systems development,
            ICT training, EdTech projects, and institutional digital
            transformation.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.07)",
                  borderColor: "#111111",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-5 cursor-default hover:bg-white"
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isHovered
                      ? "bg-[#111111]"
                      : "bg-white border border-[#E5E5E5]"
                  }`}
                >
                  <Icon
                    size={15}
                    className={isHovered ? "text-white" : "text-[#555555]"}
                  />
                </div>

                <h3 className="text-sm font-semibold text-[#111111] mb-2">
                  {service.title}
                </h3>

                <AnimatePresence mode="wait">
                  {isHovered ? (
                    <motion.p
                      key="desc"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                      className="text-xs text-[#666666] leading-relaxed"
                    >
                      {service.description}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="hint"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-xs text-[#BBBBBB]"
                    >
                      Hover to learn more
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-[#111111] rounded-2xl"
        >
          <div className="flex-1">
            <p className="text-sm font-bold text-white mb-1">
              Ready to connect?
            </p>
            <p className="text-xs text-[#888888]">
              I respond to collaboration inquiries, consultations, and project
              discussions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 4px 14px rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#111111] text-xs font-semibold rounded-lg hover:bg-[#F5F5F5] transition-colors"
            >
              <Mail size={12} />
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-xs font-semibold rounded-lg transition-colors border border-white/15"
            >
              <FolderOpen size={12} />
              View Projects
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/rowbielopez"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-xs font-semibold rounded-lg transition-colors border border-white/15"
            >
              <LinkedinIcon size={12} />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
