"use client";

import { motion } from "framer-motion";
import { BookOpen, FolderOpen, Mail, Monitor, Sparkles } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/SocialIcons";
import { fadeUp, staggerContainer, VIEWPORT } from "@/components/motion/variants";

const services = [
  {
    icon: Monitor,
    title: "Web & Information Systems Development",
    description:
      "Building practical web-based systems, portals, dashboards, and database-driven platforms for institutional or organizational workflows.",
  },
  {
    icon: BookOpen,
    title: "ICT Training & Workshops",
    description:
      "Delivering ICT-focused training on digital literacy, educational technology, web fundamentals, cybersecurity awareness, and practical technology use.",
  },
  {
    icon: Sparkles,
    title: "EdTech Product Collaboration",
    description:
      "Designing and improving tools that support teachers, learners, classroom management, and education-focused digital workflows.",
  },
];

export default function ConversionCTA() {
  return (
    <section id="hire" className="section-padding bg-[#F5F5F5]">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          <p className="label-tag mb-4">Let&apos;s Work Together</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline leading-tight">
            Let&apos;s Work Together
          </h2>
          <p className="mt-7 text-[#666666] leading-relaxed">
            I am open to meaningful opportunities in web systems development,
            ICT training, and EdTech collaboration.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.article
              key={title}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 28px rgba(0,0,0,0.07)",
                borderColor: "#111111",
              }}
              className="group bg-white border border-[#E5E5E5] rounded-2xl p-5 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 bg-[#F5F5F5] border border-[#E5E5E5] group-hover:bg-[#111111] transition-colors">
                <Icon
                  size={15}
                  className="text-[#555555] group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#111111] mb-2">
                {title}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-[#111111] p-6 text-white"
        >
          <div>
            <p className="text-sm font-bold mb-1">
              Ready to discuss practical ICT work?
            </p>
            <p className="text-xs text-white/55">
              Reach out for systems work, training, collaborations, or aligned
              opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#111111] text-xs font-semibold rounded-lg hover:bg-[#F5F5F5] transition-colors"
            >
              <Mail size={12} />
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/rowbie-lopez-84608ab4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-xs font-semibold rounded-lg transition-colors border border-white/15 hover:bg-white/15"
            >
              <LinkedinIcon size={12} />
              Connect on LinkedIn
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-xs font-semibold rounded-lg transition-colors border border-white/15 hover:bg-white/15"
            >
              <FolderOpen size={12} />
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
