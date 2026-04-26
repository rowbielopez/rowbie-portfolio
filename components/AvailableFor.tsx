"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  BookOpen,
  Building2,
  FlaskConical,
  Globe,
  Video,
} from "lucide-react";
import { staggerContainer, fadeUp, VIEWPORT } from "@/components/motion/variants";
import { type Variants } from "framer-motion";

const opportunities = [
  {
    icon: Monitor,
    title: "Full-Time Remote Web/System Development",
    summary: "Open to full-time remote roles in web and information systems development.",
    detail:
      "Available for senior developer, systems analyst, or project lead roles with organizations building meaningful web-based platforms, particularly in the education or public sector.",
  },
  {
    icon: BookOpen,
    title: "ICT Training and Workshops",
    summary: "Conducting practical ICT training for educators and institutions.",
    detail:
      "Available for in-person or online ICT workshops, digital literacy training, productivity seminars, and software application training for academic or government institutions.",
  },
  {
    icon: Building2,
    title: "University Digital Transformation Consulting",
    summary: "Helping universities modernize administrative and academic systems.",
    detail:
      "Available for consulting on university digital transformation strategies, information system design, workflow digitization, and institutional technology planning.",
  },
  {
    icon: FlaskConical,
    title: "EdTech Product Collaboration",
    summary: "Collaborating with EdTech teams building classroom or learning tools.",
    detail:
      "Open to co-founding or joining EdTech projects that build practical tools for teachers, students, and schools — especially tools grounded in real classroom experience.",
  },
  {
    icon: Globe,
    title: "Website and Internal System Improvement",
    summary: "Upgrading or redesigning existing institutional websites and portals.",
    detail:
      "Available for UI/UX improvements, system audits, performance upgrades, and modernization of legacy institutional platforms.",
  },
  {
    icon: Video,
    title: "Content and Multimedia Support",
    summary: "Producing ICT content, digital guides, and educational multimedia.",
    detail:
      "Available for educational content creation, ICT tutorial development, digital graphic design, and video production for institutional or training purposes.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AvailableFor() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="available" className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-12 max-w-xl"
        >
          <p className="label-tag mb-4">Open To</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Available For
          </h2>
          <p className="mt-8 text-[#666666]">
            I work at the intersection of ICT education, web systems, digital transformation,
            and practical technology implementation.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {opportunities.map((item, i) => {
            const Icon = item.icon;
            const isOpen = expanded === i;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={!isOpen ? { y: -3, borderColor: "#CCCCCC", boxShadow: "0 8px 24px rgba(0,0,0,0.06)" } : {}}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`group bg-white border rounded-2xl p-5 cursor-pointer transition-colors duration-200 ${
                  isOpen ? "border-[#111111]" : "border-[#E5E5E5]"
                }`}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                {/* Icon row */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#111111]" : "bg-[#F5F5F5]"
                    }`}
                  >
                    <Icon
                      size={15}
                      className={isOpen ? "text-white" : "text-[#555555]"}
                    />
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#AAAAAA] text-lg leading-none mt-0.5 select-none"
                  >
                    +
                  </motion.span>
                </div>

                <h3 className="text-sm font-semibold text-[#111111] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#888888] leading-relaxed mb-0">
                  {item.summary}
                </p>

                {/* Expandable detail */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-[#F0F0F0]">
                        <p className="text-xs text-[#555555] leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
