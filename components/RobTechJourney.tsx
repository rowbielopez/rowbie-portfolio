"use client";

import { motion } from "framer-motion";
import { Play, BookOpen, Shield, Cpu, Zap, ExternalLink } from "lucide-react";

const contentPillars = [
  { icon: Cpu, label: "Technology Tips" },
  { icon: BookOpen, label: "Programming Concepts" },
  { icon: Zap, label: "Productivity Workflows" },
  { icon: Shield, label: "Cybersecurity Basics" },
  { icon: Play, label: "Digital Tools" },
];

export default function RobTechJourney() {
  return (
    <section
      id="robtech"
      className="section-padding bg-[#111111] text-white relative overflow-hidden grid-bg-dark"
    >
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-[0.15em] text-[#A3A3A3] uppercase mb-4">
              Digital Advocacy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
              RobTech Journey
            </h2>
            <div className="h-px w-10 bg-white/20 mb-6 mt-5" />
            <p className="text-[#A3A3A3] leading-relaxed mb-6">
              RobTech Journey is my ICT content platform and digital advocacy
              initiative — built to make practical technology knowledge
              accessible to Filipino students, teachers, and professionals.
            </p>
            <p className="text-[#777777] text-sm leading-relaxed mb-8">
              Through short-form content, tutorials, and digital guides, I share
              technology tips, programming concepts, productivity workflows,
              cybersecurity basics, and insights from my work in ICT education
              and systems development.
            </p>

            {/* Content pillars */}
            <div className="flex flex-wrap gap-2 mb-8">
              {contentPillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-[#AAAAAA] hover:border-white/25 hover:text-white transition-colors"
                >
                  <Icon size={11} className="text-[#A3A3A3]" />
                  {label}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.a
                href="https://robtechjourney.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#111111] text-sm font-semibold rounded-lg hover:bg-[#F5F5F5] transition-colors"
              >
                <ExternalLink size={14} />
                Visit RobTech Journey
              </motion.a>
              <span className="text-xs text-[#555555]">URL to be provided</span>
            </div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
              {/* Top rule */}
              <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

              {/* Platform header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <span className="text-[#111111] font-bold text-sm tracking-tight">
                    RT
                  </span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">
                    RobTech Journey
                  </p>
                  <p className="text-xs text-[#777777]">ICT Content Platform</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    Active
                  </span>
                </div>
              </div>

              {/* Topics list */}
              <div className="space-y-3">
                {[
                  "Technology tips for Filipino educators",
                  "AI tools and digital productivity",
                  "Programming concepts for beginners",
                  "Cybersecurity awareness for students",
                  "ICT integration in education",
                ].map((topic, i) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    className="flex items-center gap-3 text-xs text-[#888888]"
                  >
                    <div className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                    {topic}
                  </motion.div>
                ))}
              </div>

              {/* Bottom rule */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
            </div>

            {/* Floating label */}
            <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-white text-[#111111] text-[10px] font-bold tracking-wide rounded-lg shadow-md">
              Content Creator
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
