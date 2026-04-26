"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, BriefcaseBusiness, CalendarDays } from "lucide-react";
import { experienceItems } from "@/data/experience";
import { fadeUp, VIEWPORT } from "@/components/motion/variants";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="label-tag mb-4">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Work Experience
          </h2>
          <p className="mt-8 text-[#666666] max-w-xl">
            A focused view of my work across university systems development,
            ICT instruction, independent products, and early administrative
            service.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-[#E5E5E5] origin-top"
          />

          <div className="space-y-6">
            {experienceItems.map((item, index) => {
              const isCurrent = item.years.includes("Present");
              const isGrouped = item.roles && item.roles.length > 0;
              return (
                <motion.article
                  key={item.title ?? `${item.organization}-${item.years}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative pl-12 md:pl-14"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: index * 0.1 + 0.12,
                    }}
                    className="absolute left-[11px] md:left-[13px] top-5"
                  >
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-[#F5F5F5] ${
                        isCurrent ? "bg-[#111111]" : "bg-[#CCCCCC]"
                      }`}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
                      borderColor: "#CCCCCC",
                    }}
                    transition={{ duration: 0.2 }}
                    className="bg-white border border-[#E5E5E5] rounded-2xl p-6 md:p-8"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        {isGrouped ? (
                          <>
                            <h3 className="text-base md:text-lg font-bold text-[#111111] leading-snug">
                              {item.organization}
                            </h3>
                            <p className="text-sm text-[#555555] mt-1">
                              Concurrent teaching and systems development roles
                            </p>
                          </>
                        ) : (
                          <>
                            <h3 className="text-base md:text-lg font-bold text-[#111111] leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-sm text-[#444444] font-medium mt-1">
                              {item.organization}
                            </p>
                          </>
                        )}
                      </div>
                      <div className="inline-flex items-center gap-2 shrink-0 rounded-full border border-[#E5E5E5] bg-[#F5F5F5] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#555555]">
                        <CalendarDays size={11} />
                        {item.years}
                      </div>
                    </div>

                    {isGrouped ? (
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        {item.roles?.map((role, roleIndex) => {
                          const RoleIcon =
                            role.title.includes("Instructor")
                              ? BookOpenCheck
                              : BriefcaseBusiness;

                          return (
                            <motion.div
                              key={role.title}
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.28,
                                delay: index * 0.08 + roleIndex * 0.08,
                              }}
                              className="rounded-xl border border-[#EFEFEF] bg-[#FAFAFA] p-4 md:p-5"
                            >
                              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                                <div className="flex items-start gap-3">
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#E5E5E5] bg-white">
                                    <RoleIcon
                                      size={15}
                                      className="text-[#444444]"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-bold leading-snug text-[#111111]">
                                      {role.title}
                                    </h4>
                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#999999]">
                                      Concurrent Role
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <p className="mb-4 text-xs leading-relaxed text-[#555555]">
                                {role.description}
                              </p>

                              <div className="space-y-2">
                                {role.keyPoints.map((point, pointIndex) => (
                                  <motion.div
                                    key={point}
                                    initial={{ opacity: 0, y: 4 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      duration: 0.22,
                                      delay:
                                        index * 0.06 +
                                        roleIndex * 0.06 +
                                        pointIndex * 0.025,
                                    }}
                                    className="flex items-start gap-2"
                                  >
                                    <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#111111]" />
                                    <p className="text-xs leading-relaxed text-[#666666]">
                                      {point}
                                    </p>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <>
                        <p className="text-sm text-[#555555] leading-relaxed mb-5">
                          {item.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {item.keyPoints?.map((point, pointIndex) => (
                            <motion.div
                              key={point}
                              initial={{ opacity: 0, y: 4 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.25,
                                delay: index * 0.08 + pointIndex * 0.04,
                              }}
                              className="flex items-start gap-2.5 rounded-xl border border-[#EFEFEF] bg-[#FAFAFA] p-3"
                            >
                              <BriefcaseBusiness
                                size={12}
                                className="mt-0.5 shrink-0 text-[#555555]"
                              />
                              <p className="text-xs leading-relaxed text-[#666666]">
                                {point}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
