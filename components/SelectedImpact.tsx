"use client";

import { motion } from "framer-motion";
import { Server, GraduationCap, Lightbulb, Radio } from "lucide-react";
import { staggerContainer, VIEWPORT } from "@/components/motion/variants";
import { type Variants } from "framer-motion";

const impactCards = [
  {
    icon: Server,
    title: "University Systems",
    body: "Supported web-based systems for academic, administrative, HR, student, and institutional services at Cagayan State University.",
    stat: "11+",
    statLabel: "Systems",
  },
  {
    icon: GraduationCap,
    title: "ICT Education",
    body: "Teach ICT-focused courses for Education students, connecting digital literacy, pedagogy, troubleshooting, cybersecurity, and web fundamentals.",
    stat: "10+",
    statLabel: "Years Teaching",
  },
  {
    icon: Lightbulb,
    title: "EdTech Innovation",
    body: "Build and explore tools like Athena Classroom to simplify teacher workflows and make ICT more practical for the classroom.",
    stat: "LPT",
    statLabel: "Licensed Teacher",
  },
  {
    icon: Radio,
    title: "Digital Content",
    body: "Share ICT tips, productivity workflows, and practical technology knowledge through RobTech Journey.",
    stat: "RT",
    statLabel: "RobTech Journey",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function SelectedImpact() {
  return (
    <section id="impact" className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="label-tag mb-4">What I Contribute</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Selected Impact
          </h2>
          <p className="mt-8 text-[#666666] max-w-xl">
            A decade of work across ICT education, university systems, EdTech, and digital content creation.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {impactCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  borderColor: "#CCCCCC",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.07)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group bg-white border border-[#E5E5E5] rounded-2xl p-6 flex flex-col gap-4"
              >
                {/* Icon + stat */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-[#111111] leading-none">{card.stat}</p>
                    <p className="text-[10px] text-[#AAAAAA] mt-0.5 tracking-wide">{card.statLabel}</p>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <div className="h-px w-8 bg-[#111111] mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="text-sm font-bold text-[#111111] mb-2">{card.title}</h3>
                  <p className="text-xs text-[#666666] leading-relaxed">{card.body}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
