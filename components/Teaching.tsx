"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Monitor,
  Shield,
  Code,
  Lightbulb,
  Database,
} from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  VIEWPORT,
} from "@/components/motion/variants";
import { type Variants } from "framer-motion";

const courses = [
  "Teaching ICT",
  "Living in the IT Era",
  "Data Management",
  "Introduction to ICT Specializations I",
  "Introduction to ICT Specializations II",
  "Teaching Common Competencies in ICT",
];

const focusAreas = [
  {
    icon: Monitor,
    title: "Digital Literacy",
    description:
      "Building foundational digital competencies for education students entering today's technology-driven classrooms.",
  },
  {
    icon: BookOpen,
    title: "Pedagogical Use of ICT",
    description:
      "Integrating technology meaningfully into teaching practice — not just as tools, but as instruments for better learning outcomes.",
  },
  {
    icon: Code,
    title: "Basic Programming & Web Development",
    description:
      "Equipping education students with practical coding and web skills applicable to classroom content creation.",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Understanding data organization, spreadsheets, and digital record-keeping relevant to educational and institutional settings.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Awareness",
    description:
      "Teaching responsible digital citizenship, online safety, and security practices for educators and students.",
  },
  {
    icon: Lightbulb,
    title: "Emerging ICT Tools & Platforms",
    description:
      "Exploring current and emerging technology tools that educators can immediately integrate into their teaching practice.",
  },
];

const courseItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Teaching() {
  return (
    <section
      id="teaching"
      className="section-padding bg-[#111111] text-white grid-bg-dark relative overflow-hidden"
    >
      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-xs font-medium tracking-[0.15em] text-[#A3A3A3] uppercase mb-4">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Teaching &amp; Mentoring
          </h2>
          <div className="h-0.5 w-10 bg-white mt-5 mb-6 opacity-25" />
          <p className="text-[#A3A3A3] max-w-xl leading-relaxed">
            As an ICT Instructor at Cagayan State University, I teach Education
            students with a focus on ICT integration in education — equipping
            future teachers with the digital skills and pedagogical approaches
            they need for modern classrooms.
          </p>
        </motion.div>

        {/* Courses + Focus Areas — two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          {/* Courses Taught */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap size={15} className="text-[#A3A3A3]" />
              <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#A3A3A3]">
                Courses Taught
              </h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2.5"
            >
              {courses.map((course) => (
                <motion.li
                  key={course}
                  variants={courseItemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                  <span className="text-sm text-[#CCCCCC]">{course}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-l-2 border-white/15 pl-6 self-start"
          >
            <p className="text-base md:text-lg text-white/70 italic leading-relaxed font-light">
              &ldquo;I believe ICT education should be practical, relevant, and
              empowering — preparing education students not just to pass exams,
              but to use technology meaningfully in the classrooms they will
              lead.&rdquo;
            </p>
            <cite className="text-sm text-[#A3A3A3] mt-4 block not-italic">
              — Rowbie Lopez, MIT, LPT
            </cite>
          </motion.blockquote>
        </div>

        {/* Focus Areas grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#A3A3A3]">
              Focus Areas
            </h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.38, delay: index * 0.07 }}
                  className="group p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                      <Icon size={15} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {area.title}
                      </h4>
                      <p className="text-xs text-[#888888] leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl"
        >
          <GraduationCap size={16} className="text-white" />
          <div>
            <p className="text-xs font-semibold text-white">
              Licensed Professional Teacher (LPT)
            </p>
            <p className="text-[10px] text-[#666666]">
              Professional Regulation Commission, Philippines
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
