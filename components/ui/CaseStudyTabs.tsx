"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

const tabs = ["Overview", "Features", "Impact", "Process"] as const;
type Tab = typeof tabs[number];

export function CaseStudyTabs({ project }: Props) {
  const [active, setActive] = useState<Tab>("Overview");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1 mb-8 border-b border-[#E5E5E5] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors ${
              active === tab ? "text-[#111111]" : "text-[#999999] hover:text-[#555555]"
            }`}
          >
            {tab}
            {active === tab && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111111]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22 }}
        >
          {active === "Overview" && <OverviewTab project={project} />}
          {active === "Features" && <FeaturesTab project={project} />}
          {active === "Impact" && <ImpactTab project={project} />}
          {active === "Process" && <ProcessTab project={project} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function OverviewTab({ project }: Props) {
  const fallbackDescription = project.fullDescription ?? project.shortDescription ?? "";

  return (
    <div className="space-y-8">
      {project.projectContext && (
        <div className="rounded-2xl border border-[#111111] bg-white p-5">
          <h3 className="text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-3">
            Project Context
          </h3>
          <p className="text-sm text-[#444444] leading-relaxed">
            {project.projectContext}
          </p>
        </div>
      )}
      {project.problem && (
        <div>
          <h3 className="text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-3">
            Problem
          </h3>
          <p className="text-sm text-[#555555] leading-relaxed">{project.problem}</p>
        </div>
      )}
      {project.solution && (
        <div>
          <h3 className="text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-3">
            Solution
          </h3>
          <p className="text-sm text-[#555555] leading-relaxed">{project.solution}</p>
        </div>
      )}
      {!project.problem && !project.solution && fallbackDescription && (
        <p className="text-sm text-[#555555] leading-relaxed">{fallbackDescription}</p>
      )}
      {project.targetUsers && (
        <div className="p-4 bg-[#F5F5F5] rounded-xl border border-[#E5E5E5]">
          <p className="text-[10px] text-[#AAAAAA] uppercase tracking-wide mb-1">Target Users</p>
          <p className="text-sm text-[#444444]">{project.targetUsers}</p>
        </div>
      )}
    </div>
  );
}

function FeaturesTab({ project }: Props) {
  const items = project.features ?? project.highlights ?? [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((h) => (
        <div
          key={h}
          className="flex items-start gap-3 p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl hover:border-[#AAAAAA] hover:bg-white transition-colors"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />
          <p className="text-sm text-[#444444]">{h}</p>
        </div>
      ))}
    </div>
  );
}

function ImpactTab({ project }: Props) {
  const items = project.impactStatements ?? project.impact ?? project.highlights ?? [];
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: i * 0.05 }}
          className="flex items-start gap-3 p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl"
        >
          <span className="text-xs font-bold text-[#CCCCCC] tabular-nums w-5 shrink-0 mt-0.5">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="text-sm text-[#444444]">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}

function ProcessTab({ project }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-3">My Role</h3>
        <p className="text-sm text-[#555555] leading-relaxed">{project.role}</p>
      </div>

      {project.lessons && (
        <div className="border-l-2 border-[#111111] pl-5">
          <h3 className="text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-2">
            Lessons Learned
          </h3>
          <p className="text-sm text-[#555555] italic leading-relaxed">{project.lessons}</p>
        </div>
      )}

      {!!project.architectureDecisions?.length && (
        <div>
          <h3 className="text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-3">
            Architecture Decisions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.architectureDecisions.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-4"
              >
                <p className="text-sm text-[#444444] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!!project.keyChallenges?.length && (
        <div>
          <h3 className="text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-3">
            Key Challenges
          </h3>
          <div className="space-y-2">
            {project.keyChallenges.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E5E5] bg-white p-4"
              >
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]" />
                <p className="text-sm text-[#444444]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-3">
          Status
        </h3>
        <span className="text-xs font-semibold px-3 py-1.5 bg-[#111111] text-white rounded-full">
          {project.status}
        </span>
      </div>

      {!!project.whatsNext?.length && (
        <div>
          <h3 className="text-xs font-bold text-[#111111] uppercase tracking-[0.1em] mb-3">
            What&apos;s Next
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.whatsNext.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-4"
              >
                <p className="text-sm text-[#444444]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
