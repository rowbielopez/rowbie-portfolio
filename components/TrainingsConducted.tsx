"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mic2 } from "lucide-react";
import { trainingsConductedItems } from "@/data/trainingsConducted";
import { fadeUp, VIEWPORT } from "@/components/motion/variants";

export default function TrainingsConducted() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded
    ? trainingsConductedItems
    : trainingsConductedItems.slice(0, 4);

  return (
    <section id="trainings-conducted" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          <p className="label-tag mb-4">Capacity Building</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Trainings Conducted &amp; Resource Speaking
          </h2>
          <p className="mt-8 text-[#666666]">
            Selected sessions where I served as trainer, resource speaker, or
            facilitator in ICT-related programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence initial={false}>
            {visibleItems.map((item, index) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                whileHover={{ y: -3, borderColor: "#CCCCCC" }}
                className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-5 hover:bg-white"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center shrink-0">
                      <Mic2 size={15} className="text-[#444444]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#111111] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#555555] mt-1">
                        {item.focus}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#111111] text-white">
                    {item.role}
                  </span>
                </div>

                {item.date && (
                  <p className="text-[10px] font-medium uppercase tracking-wide text-[#999999] mb-3">
                    {item.date}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 bg-white text-[#666666] rounded border border-[#E5E5E5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {trainingsConductedItems.length > 4 && (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="inline-flex items-center gap-2 rounded-lg border border-[#E5E5E5] bg-white px-4 py-2 text-xs font-semibold text-[#111111] transition-colors hover:border-[#999999]"
            >
              {expanded ? "Show fewer" : "View more"}
              <ChevronDown
                size={13}
                className={`transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
