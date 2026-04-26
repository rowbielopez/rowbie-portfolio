"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MapPin, GraduationCap, Building2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo + Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            {/* Photo */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#F5F5F5]">
                <Image
                  src="/me2.png"
                  alt="Rowbie Lopez — ICT Educator and Web Systems Developer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 384px"
                  quality={100}
                />
              </div>

              {/* Licensed badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 shadow-sm">
                <p className="text-[10px] text-[#A3A3A3] uppercase tracking-wide">
                  Licensed
                </p>
                <p className="text-sm font-semibold text-[#111111]">
                  Professional Teacher
                </p>
              </div>
            </div>

            {/* Quick info chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                { icon: MapPin, text: "Philippines" },
                { icon: Building2, text: "Cagayan State University" },
                { icon: GraduationCap, text: "ICT & Information Systems" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F5F5] border border-[#E5E5E5] rounded-full text-xs text-[#666666]"
                >
                  <Icon size={11} className="text-[#111111]" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="label-tag mb-4">About</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-tight mb-2 section-underline">
                Who I Am
              </h2>
            </div>

            <div className="space-y-4 text-[#555555] leading-relaxed mt-4">
              <p>
                ICT Instructor and Web/Information Systems Developer at{" "}
                <strong className="text-[#111111]">Cagayan State University</strong>{" "}
                — dual role as{" "}
                <strong className="text-[#111111]">Instructor III</strong> and{" "}
                <strong className="text-[#111111]">University Senior Programmer</strong>{" "}
                at the MIS Office. Over a decade of experience spanning ICT education,
                university systems development, and digital transformation.
              </p>
            </div>

            {/* Quick fact chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Instructor III — CSU",
                "Senior Programmer — MIS Office",
                "E2E · HRIS · OFES Systems",
                "ICT Education — 10+ Years",
                "Licensed Professional Teacher",
                "RobTech Journey Founder",
              ].map((fact) => (
                <span
                  key={fact}
                  className="text-[11px] font-medium px-3 py-1.5 bg-[#F5F5F5] border border-[#E5E5E5] rounded-full text-[#555555]"
                >
                  {fact}
                </span>
              ))}
            </div>

            {/* Key values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              {[
                { value: "Education", desc: "Empowering through ICT" },
                { value: "Development", desc: "University digital systems" },
                { value: "Service", desc: "Institutional digital growth" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl"
                >
                  <p className="text-sm font-bold text-[#111111] mb-0.5">
                    {item.value}
                  </p>
                  <p className="text-xs text-[#A3A3A3]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
