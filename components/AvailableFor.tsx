"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { BookOpen, FlaskConical, Monitor } from "lucide-react";
import {
  staggerContainer,
  fadeUp,
  VIEWPORT,
} from "@/components/motion/variants";

const opportunities = [
  {
    icon: Monitor,
    title: "Web & Information Systems Development",
    summary:
      "Building practical web-based systems, portals, dashboards, and database-driven platforms.",
    detail:
      "Focused on institutional and organizational workflows, including internal tools, reporting dashboards, data-backed portals, and system improvements that make operations easier to manage.",
  },
  {
    icon: BookOpen,
    title: "ICT Training & Workshops",
    summary:
      "Delivering practical ICT training for educators, students, teams, and institutions.",
    detail:
      "Training topics include digital literacy, educational technology, web fundamentals, cybersecurity awareness, productivity tools, and practical technology use.",
  },
  {
    icon: FlaskConical,
    title: "EdTech Product Collaboration",
    summary:
      "Designing and improving education-focused tools grounded in real classroom needs.",
    detail:
      "Open to collaborations around classroom management, learner support, teacher workflows, and digital products that help make education work better in practice.",
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
            I focus on practical systems, ICT capability-building, and EdTech
            tools that support real institutional and classroom workflows.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {opportunities.map((item, i) => {
            const Icon = item.icon;
            const isOpen = expanded === i;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -3,
                  borderColor: "#CCCCCC",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`group bg-white border rounded-2xl p-5 cursor-pointer transition-colors duration-200 ${
                  isOpen ? "border-[#111111]" : "border-[#E5E5E5]"
                }`}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
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
                <p className="text-xs text-[#888888] leading-relaxed">
                  {item.summary}
                </p>

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
