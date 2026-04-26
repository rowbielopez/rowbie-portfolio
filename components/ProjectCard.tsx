"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "@/components/ui/ProjectPreview";

const statusStyles: Record<string, { bg: string; text: string; border: string }> = {
  Live:              { bg: "bg-[#111111]", text: "text-white",       border: "border-transparent" },
  "Live / Prototype":{ bg: "bg-[#111111]", text: "text-white",       border: "border-transparent" },
  "Live / Institutional System": { bg: "bg-[#111111]", text: "text-white", border: "border-transparent" },
  Active:            { bg: "bg-[#111111]", text: "text-white",       border: "border-transparent" },
  "In Development":  { bg: "bg-[#F5F5F5]", text: "text-[#111111]",  border: "border-[#E5E5E5]" },
  Prototype:         { bg: "bg-[#F5F5F5]", text: "text-[#666666]",  border: "border-[#E5E5E5]" },
  Concept:           { bg: "bg-white",     text: "text-[#A3A3A3]",  border: "border-[#E5E5E5]" },
  "Internal System": { bg: "bg-[#1F2937]", text: "text-white",       border: "border-transparent" },
  "Legacy / Internal":{ bg: "bg-[#F5F5F5]",text: "text-[#A3A3A3]", border: "border-[#E5E5E5]" },
  Implemented:       { bg: "bg-[#111111]", text: "text-white",       border: "border-transparent" },
  "Research Project":{ bg: "bg-[#F5F5F5]", text: "text-[#666666]",  border: "border-[#E5E5E5]" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const shouldReduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const isHighlight = project.highlight === true;
  const technologies = project.technologies ?? [];
  const role = project.role ?? "Project Contributor";

  /* 3D tilt motion values */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 220, damping: 32 };
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-3.5, 3.5]), springCfg);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [3.5, -3.5]), springCfg);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleMouseLeave = () => { rawX.set(0); rawY.set(0); };

  const status = statusStyles[project.status] ?? { bg: "bg-[#F5F5F5]", text: "text-[#666666]", border: "border-[#E5E5E5]" };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={shouldReduce ? { boxShadow: isHighlight ? "0 2px 12px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.05)" } : {
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        boxShadow: isHighlight ? "0 2px 12px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.05)",
      }}
      whileHover={shouldReduce ? {} : { y: -4, boxShadow: "0 12px 28px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`group flex flex-col bg-white rounded-2xl overflow-hidden h-full max-md:![transform:none] ${
        isHighlight
          ? "border-2 border-[#111111]"
          : "border border-[#E5E5E5]"
      }`}
    >
      {/* Top accent bar */}
      {isHighlight ? (
        /* Featured project — solid black bar with "Featured Project" label */
        <div className="h-7 bg-[#111111] flex items-center justify-between px-4">
          <div className="flex items-center gap-1.5">
            <Star size={10} className="text-white fill-white" />
            <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white">
              Featured Project
            </span>
          </div>
          <span className="text-[9px] text-white/50 tracking-wide">Flagship</span>
        </div>
      ) : (
        <div className="h-0.5 bg-[#E5E5E5] group-hover:bg-[#111111] transition-colors duration-250" />
      )}

      <div className="px-5 pt-5">
        <ProjectPreview
          title={project.title}
          url={project.url}
          image={project.image}
          category={project.category}
          status={project.status}
          previewEnabled={project.previewEnabled}
          previewType={project.previewType}
          isInternal={project.isInternal}
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Badges row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5">
            <span className="text-[10px] font-medium tracking-[0.06em] uppercase text-[#666666] bg-[#F5F5F5] border border-[#E5E5E5] px-2.5 py-0.5 rounded-full">
              {project.category}
            </span>
            <span className={`text-[10px] font-medium tracking-[0.06em] uppercase px-2.5 py-0.5 rounded-full border ${status.bg} ${status.text} ${status.border}`}>
              {project.status}
            </span>
          </div>
          <span className="text-[10px] text-[#AAAAAA] whitespace-nowrap shrink-0 font-medium">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className={`text-sm font-bold leading-snug mb-3 transition-colors ${
          isHighlight ? "text-[#111111]" : "text-[#111111] group-hover:text-black"
        }`}>
          {project.title}
        </h3>

        {/* Thin animated divider */}
        <div className={`h-px mb-3 transition-all duration-300 ${
          isHighlight ? "w-12 bg-[#111111]" : "w-8 bg-[#E5E5E5] group-hover:w-12 group-hover:bg-[#111111]"
        }`} />

        {/* Description */}
        <p className="text-sm text-[#666666] leading-relaxed flex-1 mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.slice(0, 4).map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ y: -1, borderColor: "#999999" }}
              transition={{ duration: 0.12 }}
              className="text-[10px] font-medium px-2 py-0.5 bg-[#F5F5F5] text-[#666666] rounded border border-[#E5E5E5] cursor-default"
            >
              {tech}
            </motion.span>
          ))}
          {technologies.length > 4 && (
            <span className="text-[10px] font-medium px-2 py-0.5 bg-[#F5F5F5] text-[#AAAAAA] rounded border border-[#E5E5E5]">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F0F0F0]">
          <p className="text-[10px] text-[#AAAAAA] truncate max-w-[120px]">
            {role.split("/")[0].trim()}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111]"
          >
            View details
            <motion.span
              className="inline-flex"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.15 }}
            >
              <ArrowRight size={12} />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
