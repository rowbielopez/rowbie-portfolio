"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { fadeUp, staggerContainer, scaleIn, VIEWPORT } from "@/components/motion/variants";

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-10"
        >
          <p className="label-tag mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline mb-6">
            Projects
          </h2>
          <p className="mt-8 text-[#666666] max-w-xl">
            University information systems built at CSU and personal platforms built independently — all focused on digital solutions for education and institutions.
          </p>
        </motion.div>

        {/* Category filter — sliding pill animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-1.5 text-xs font-medium rounded-full border transition-colors duration-150 ${
                activeCategory === cat
                  ? "text-white border-transparent"
                  : "text-[#666666] border-[#E5E5E5] hover:border-[#999999] hover:text-[#111111]"
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-[#111111] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-[#AAAAAA]"
          >
            <p className="text-sm">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
