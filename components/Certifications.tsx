"use client";

import { motion } from "framer-motion";
import { Award, Clock3 } from "lucide-react";
import { certificationItems } from "@/data/certifications";
import { fadeUp, staggerContainer, VIEWPORT } from "@/components/motion/variants";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          <p className="label-tag mb-4">Professional Growth</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Certifications &amp; Relevant Trainings
          </h2>
          <p className="mt-8 text-[#666666]">
            Selected trainings that support my work in ICT education, web
            systems development, cybersecurity, and digital transformation.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {certificationItems.map((item, index) => (
            <motion.article
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: index * 0.03 },
                },
              }}
              whileHover={{
                y: -3,
                boxShadow: "0 10px 28px rgba(0,0,0,0.07)",
                borderColor: "#CCCCCC",
              }}
              className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-5 transition-colors hover:bg-white"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E5E5] flex items-center justify-center shrink-0">
                  <Award size={15} className="text-[#444444]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111111] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#555555] mt-1">
                    {item.provider}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] text-[#666666] mb-4">
                <span className="rounded-full border border-[#E5E5E5] bg-white px-2.5 py-1">
                  {item.date}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-[#E5E5E5] bg-white px-2.5 py-1">
                  <Clock3 size={10} />
                  {item.duration}
                </span>
              </div>

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
        </motion.div>
      </div>
    </section>
  );
}
