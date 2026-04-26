"use client";

import { motion, type Variants } from "framer-motion";
import { Layers, Server, Wrench, Sparkles } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  VIEWPORT,
} from "@/components/motion/variants";

const techGroups = [
  {
    label: "Frontend",
    icon: Layers,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
    ],
  },
  {
    label: "Backend & Database",
    icon: Server,
    items: ["PHP", "Laravel", "MySQL", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    label: "Tools & Deployment",
    icon: Wrench,
    items: [
      "VS Code",
      "GitHub",
      "Cursor",
      "Claude Code",
      "Vercel",
      "Plesk",
      "cPanel",
    ],
  },
  {
    label: "AI & Productivity",
    icon: Sparkles,
    items: [
      "ChatGPT",
      "Claude",
      "GitHub Copilot",
      "Lovable",
      "Canva",
      "CapCut",
    ],
  },
];

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding bg-white">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="label-tag mb-4">Tools of the Trade</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Technology Stack
          </h2>
          <p className="mt-8 text-[#666666] max-w-xl">
            Technologies and tools I use across university systems, web
            development projects, AI workflows, and content creation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{
                  duration: 0.45,
                  delay: groupIndex * 0.08,
                  ease: "easeOut",
                }}
                className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-6"
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-6 rounded-md bg-[#111111] flex items-center justify-center shrink-0">
                    <GroupIcon size={13} className="text-white" />
                  </div>
                  <h3 className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#111111]">
                    {group.label}
                  </h3>
                  <div className="h-px flex-1 bg-[#E5E5E5]" />
                </div>

                {/* Staggered badges */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={badgeVariants}
                      whileHover={{
                        y: -2,
                        borderColor: "#999999",
                        color: "#111111",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
                      }}
                      transition={{ duration: 0.14 }}
                      className="px-3 py-1.5 bg-white border border-[#E5E5E5] rounded-lg text-xs font-medium text-[#444444] cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
