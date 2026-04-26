"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import { eligibilityItems } from "@/data/eligibilities";
import { fadeUp, VIEWPORT } from "@/components/motion/variants";

const icons = [BadgeCheck, ShieldCheck, CheckCircle2];

export default function ProfessionalEligibilities() {
  return (
    <section id="eligibilities" className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-10 max-w-2xl"
        >
          <p className="label-tag mb-4">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Professional Eligibilities
          </h2>
          <p className="mt-8 text-[#666666]">
            Government and professional eligibility credentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {eligibilityItems.map((item, index) => {
            const Icon = icons[index] ?? BadgeCheck;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -3, borderColor: "#CCCCCC" }}
                className="bg-white border border-[#E5E5E5] rounded-2xl p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#111111] flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-snug text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#555555] mt-1">
                      {item.issuingBody}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] text-[#666666]">
                    {item.date}
                  </span>
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] text-[#666666]">
                    {item.type}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
