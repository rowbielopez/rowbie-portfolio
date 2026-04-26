"use client";

import { motion, type Variants } from "framer-motion";
import { BookOpen, Database, Code2, Zap, Palette, Video } from "lucide-react";
import { AnimatedCard } from "@/components/motion/AnimatedCard";
import { staggerContainer, VIEWPORT } from "@/components/motion/variants";

const expertise = [
  {
    icon: BookOpen,
    title: "ICT Education",
    description:
      "Teaching web development, programming, database management, digital literacy, and emerging technologies at the university level.",
  },
  {
    icon: Database,
    title: "Information Systems Development",
    description:
      "Planning, building, and leading development of university-wide information systems covering HR, enrollment, evaluation, and more.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web development using PHP/Laravel on legacy systems and modern stacks like Next.js, TypeScript, and Supabase.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Leading initiatives to modernize institutional processes through digital tools, web platforms, and workflow automation.",
  },
  {
    icon: Palette,
    title: "Multimedia (Graphics & Video)",
    description:
      "Creating digital graphics, video content, and multimedia materials for educational, institutional, and content creation purposes.",
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "Producing ICT-focused digital content through RobTech Journey — covering tech tips, productivity, programming, and digital tools.",
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function CoreExpertise() {
  return (
    <section id="expertise" className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={headerVariants}
          className="mb-14"
        >
          <p className="label-tag mb-4">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Core Expertise
          </h2>
          <p className="mt-8 text-[#666666] max-w-xl">
            Over a decade of hands-on experience across ICT education, systems development, and
            digital transformation in the Philippine academic sector.
          </p>
        </motion.div>

        {/* Cards: stagger entrance + 3D tilt on each */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={cardVariants}>
                {/* AnimatedCard handles 3D tilt + subtle lift */}
                <AnimatedCard tilt={3} className="h-full">
                  <div className="group bg-white border border-[#E5E5E5] rounded-2xl p-6 h-full card-hover">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <Icon size={18} className="text-white" />
                    </div>

                    {/* Thin accent bar */}
                    <div className="h-px w-8 bg-[#111111] mb-4 group-hover:w-12 transition-all duration-300" />

                    <h3 className="text-sm font-semibold text-[#111111] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
