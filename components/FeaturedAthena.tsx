"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, CalendarCheck, FileQuestion, BookOpen,
  BarChart2, ClipboardList, LayoutDashboard, Smartphone,
  ChevronRight, Layers,
} from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT } from "@/components/motion/variants";
import { type Variants } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Class & Student Management",
    description: "Organize multiple classes with student records, sections, and basic class settings in one place.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Tracking",
    description: "Mark and monitor daily attendance digitally with summary views per class and per student.",
  },
  {
    icon: FileQuestion,
    title: "Quiz Management",
    description: "Create, assign, and manage quizzes with automated scoring and per-student result tracking.",
  },
  {
    icon: BarChart2,
    title: "Gradebook",
    description: "Track grades, compute averages, and monitor academic performance across all subjects.",
  },
  {
    icon: ClipboardList,
    title: "Lesson Planning",
    description: "Plan and organize lesson outlines, objectives, and teaching activities per class session.",
  },
  {
    icon: BookOpen,
    title: "Performance Insights",
    description: "View student performance summaries, identify learning gaps, and support data-informed decisions.",
  },
  {
    icon: LayoutDashboard,
    title: "Teacher Dashboard",
    description: "A central hub showing class overview, attendance status, upcoming tasks, and recent activity.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly",
    description: "Accessible on any device — designed for teachers whether in the classroom or on the go.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function FeaturedAthena() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="featured" className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <Layers size={13} className="text-[#A3A3A3]" />
            <span className="text-xs font-semibold tracking-[0.14em] text-[#A3A3A3] uppercase">
              Featured Build
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-tight section-underline">
            Athena Classroom
          </h2>

          <div className="flex flex-wrap gap-2 mt-7">
            <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 bg-[#111111] text-white rounded-full">
              In Development
            </span>
            <span className="text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 bg-white text-[#666666] border border-[#E5E5E5] rounded-full">
              EdTech
            </span>
            <span className="text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 bg-white text-[#666666] border border-[#E5E5E5] rounded-full">
              Personal Project
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 xl:gap-16 items-start">
          {/* ── LEFT: Description + CTAs ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55 }}
          >
            <p className="text-base md:text-lg text-[#444444] leading-relaxed mb-6 font-light">
              Athena Classroom is an EdTech platform that helps teachers manage classes, attendance,
              quizzes, gradebooks, lesson planning, and student performance in one organized workspace.
            </p>

            <p className="text-sm text-[#666666] leading-relaxed mb-8">
              Built from the perspective of a teacher and systems developer — focused on practical
              classroom needs, reducing administrative repetition, and supporting better learner
              monitoring.
            </p>

            {/* Key value callout */}
            <div className="border-l-2 border-[#111111] pl-5 mb-8">
              <p className="text-xs font-semibold text-[#111111] uppercase tracking-wide mb-1">
                Core Value
              </p>
              <p className="text-sm text-[#555555] leading-relaxed">
                Helping teachers save time, organize class records, monitor learners more effectively,
                and use technology as practical support for teaching.
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {["Next.js", "TypeScript", "Supabase", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-medium px-2.5 py-1 bg-white text-[#555555] border border-[#E5E5E5] rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.14 }}>
                <Link
                  href="/projects/athena-classroom"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white text-sm font-semibold rounded-lg hover:bg-black transition-colors"
                >
                  View Case Study
                  <ChevronRight size={14} />
                </Link>
              </motion.div>

              <motion.a
                href="#features-athena"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#features-athena")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.14 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#111111] border border-[#E5E5E5] rounded-lg hover:border-[#AAAAAA] hover:bg-white transition-colors"
              >
                Explore Features
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT: Interactive Feature Cards ── */}
          <div id="features-athena">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.4 }}
              className="text-[10px] font-semibold tracking-[0.14em] text-[#A3A3A3] uppercase mb-4"
            >
              Key Features — hover to learn more
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 gap-2.5"
            >
              {features.map((feature, i) => {
                const Icon = feature.icon;
                const isHovered = hovered === i;
                return (
                  <motion.div
                    key={feature.title}
                    variants={cardVariants}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="bg-white border border-[#E5E5E5] rounded-xl p-4 cursor-default hover:border-[#111111] transition-colors duration-200 overflow-hidden"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isHovered ? "bg-[#111111]" : "bg-[#F5F5F5]"
                      }`}>
                        <Icon size={13} className={isHovered ? "text-white" : "text-[#555555]"} />
                      </div>
                      <h4 className="text-xs font-semibold text-[#111111] leading-tight">{feature.title}</h4>
                    </div>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[11px] text-[#777777] leading-relaxed overflow-hidden"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
