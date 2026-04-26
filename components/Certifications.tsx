"use client";

import { motion } from "framer-motion";
import { Award, Shield, Star, BookMarked, Clock } from "lucide-react";

const achievements = [
  {
    icon: BookMarked,
    title: "Licensed Professional Teacher",
    issuer: "Professional Regulation Commission",
    description:
      "Philippine government licensure certification for professional educators, demonstrating competence in teaching practice and pedagogy.",
    type: "License",
    highlight: true,
  },
  {
    icon: Award,
    title: "CSC Exam Passer – Professional",
    issuer: "Civil Service Commission of the Philippines",
    description:
      "Passed the Civil Service Examination at the Professional level, demonstrating professional competency and eligibility for first and second-level government positions.",
    type: "Civil Service",
    highlight: false,
  },
  {
    icon: Shield,
    title: "CSC Exam Passer – Sub-Professional",
    issuer: "Civil Service Commission of the Philippines",
    description:
      "Passed the Civil Service Examination at the Sub-Professional level, establishing baseline eligibility for government service positions.",
    type: "Civil Service",
    highlight: false,
  },
  {
    icon: Star,
    title: "Founder — RobTech Journey",
    issuer: "Independent Content Platform",
    description:
      "Founded and built an ICT-focused content platform sharing digital education, tech tools, programming concepts, and productivity knowledge.",
    type: "Platform",
    highlight: false,
  },
  {
    icon: Clock,
    title: "10+ Years in University ICT & Systems",
    issuer: "Cagayan State University",
    description:
      "More than a decade of combined experience in ICT education, university systems development, technical support, and digital transformation.",
    type: "Experience",
    highlight: false,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="label-tag mb-4">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Certifications &amp; Achievements
          </h2>
          <p className="mt-8 text-[#666666] max-w-xl">
            Professional credentials, training completions, and recognition
            milestones that reflect continuous learning and contribution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
                }}
                className={`group relative bg-white border rounded-2xl p-6 overflow-hidden transition-colors duration-200 ${
                  item.highlight
                    ? "border-[#111111]"
                    : "border-[#E5E5E5] hover:border-[#CCCCCC]"
                }`}
              >
                {/* Highlight label */}
                {item.highlight && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#111111] text-white text-[10px] font-semibold tracking-wide rounded-bl-xl">
                    Professional License
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      item.highlight
                        ? "bg-[#111111] text-white"
                        : "bg-[#F5F5F5] text-[#444444]"
                    }`}
                  >
                    <Icon size={17} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-[#111111] leading-snug pr-2">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F5F5F5] text-[#888888] border border-[#E5E5E5] whitespace-nowrap shrink-0">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-[#444444] mb-2">
                      {item.issuer}
                    </p>
                    <p className="text-xs text-[#777777] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent on highlight card */}
                {item.highlight && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111111]" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
