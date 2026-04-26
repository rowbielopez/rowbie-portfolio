"use client";

import { motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/components/motion/variants";

const experiences = [
  {
    role: "ICT Instructor / Instructor III",
    organization: "Cagayan State University",
    period: "Present",
    type: "Full-time",
    description:
      "Teaches ICT and IT-related courses covering web development, programming, database management, digital literacy, systems development, and emerging technologies. Mentors students in software development, capstone projects, systems analysis, and research-based ICT outputs.",
    highlights: [
      "Web development and programming courses",
      "Database management and digital literacy",
      "Student mentoring for capstone and research projects",
      "Emerging technologies and AI tools integration",
    ],
  },
  {
    role: "University Senior Programmer / Project Development Leader",
    organization: "Cagayan State University — Management Information Systems Office",
    period: "Present",
    type: "Concurrent",
    description:
      "Leads and supports the development, enhancement, and maintenance of university information systems used across academic and administrative offices. Contributes to platforms such as E2E, HRIS, OFES, CSU websites, campus websites, student portals, queueing systems, appointment systems, alumni systems, and other web-based services.",
    highlights: [
      "Project development leadership at the MIS Office",
      "University systems: E2E, HRIS, OFES",
      "CSU websites, campus websites, student portals",
      "Queueing, appointment, and alumni systems",
    ],
  },
  {
    role: "Contract of Service Web Developer",
    organization: "Cagayan State University",
    period: "Past",
    type: "Contract",
    description:
      "Supported the development, maintenance, and enhancement of university websites, portals, and web-based information systems. Assisted in creating responsive web interfaces, database-driven features, system updates, troubleshooting, and technical support for academic and administrative digital services.",
    highlights: [
      "University website and portal development",
      "Responsive web interface implementation",
      "Database-driven feature development",
      "Technical support for academic digital services",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="label-tag mb-4">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Experience
          </h2>
          <p className="mt-8 text-[#666666] max-w-xl">
            Over a decade of service at Cagayan State University in ICT education and university
            systems development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line — draws in from top */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-[#E5E5E5] origin-top"
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                className="relative pl-12 md:pl-14"
              >
                {/* Timeline dot — pops in with scale */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: index * 0.12 + 0.15 }}
                  className="absolute left-[11px] md:left-[13px] top-5"
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 border-[#F5F5F5] ${
                      exp.period === "Present" ? "bg-[#111111]" : "bg-[#CCCCCC]"
                    }`}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ boxShadow: "0 8px 24px rgba(0,0,0,0.07)", borderColor: "#CCCCCC" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#E5E5E5] rounded-2xl p-6 md:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-[#111111] leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[#444444] font-medium mt-1">{exp.organization}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <span
                        className={`text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full ${
                          exp.period === "Present"
                            ? "bg-[#111111] text-white"
                            : "bg-[#F5F5F5] text-[#A3A3A3] border border-[#E5E5E5]"
                        }`}
                      >
                        {exp.period}
                      </span>
                      <span className="text-[10px] font-medium px-3 py-1 rounded-full bg-[#F5F5F5] text-[#666666] border border-[#E5E5E5]">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#555555] leading-relaxed mb-4">{exp.description}</p>

                  {/* Highlights — stagger in */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.highlights.map((h, hi) => (
                      <motion.div
                        key={h}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.12 + hi * 0.06 + 0.25 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1 h-1 rounded-full bg-[#111111] mt-2 shrink-0" />
                        <p className="text-xs text-[#666666]">{h}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
