"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const contactLinks = [
  {
    icon: "mail" as const,
    label: "Email",
    value: "lopezrowbie@gmail.com",
    href: "mailto:lopezrowbie@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    value: "linkedin.com/in/rowbielopez",
    href: "https://linkedin.com/in/rowbielopez",
    description: "Professional network",
  },
  {
    icon: "globe" as const,
    label: "RobTech Journey",
    value: "robtechjourney.com",
    href: "https://robtechjourney.com",
    description: "ICT content platform",
  },
  {
    icon: "github" as const,
    label: "GitHub",
    value: "github.com/rowbielopez",
    href: "https://github.com/rowbielopez",
    description: "Code and projects",
  },
  {
    icon: "map" as const,
    label: "Location",
    value: "Philippines",
    href: null,
    description: "Cagayan Valley Region",
  },
];

function IconComponent({
  type,
  size = 16,
  className = "",
}: {
  type: string;
  size?: number;
  className?: string;
}) {
  switch (type) {
    case "mail":
      return <Mail size={size} className={className} />;
    case "linkedin":
      return <LinkedinIcon size={size} className={className} />;
    case "globe":
      return <Globe size={size} className={className} />;
    case "github":
      return <GithubIcon size={size} className={className} />;
    case "map":
      return <MapPin size={size} className={className} />;
    default:
      return null;
  }
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#111111] text-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-[0.15em] text-[#A3A3A3] uppercase mb-4">
              Let&apos;s Connect
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Get in Touch
            </h2>
            <div className="h-0.5 w-10 bg-white/20 mt-5 mb-6" />
            <p className="text-[#A3A3A3] leading-relaxed mb-6">
              Whether you&apos;re a fellow educator, university stakeholder,
              collaborator, or looking to discuss digital transformation, ICT
              projects, or EdTech — I&apos;d be glad to connect.
            </p>
            <p className="text-[#666666] text-sm leading-relaxed">
              Based in the Philippines and open to conversations about
              university systems development, teaching collaborations,
              AI-assisted development, and meaningful ICT projects.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "University projects",
                "EdTech collaborations",
                "Speaking engagements",
                "ICT consultations",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/8 text-[#CCCCCC] text-xs font-medium rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2.5"
          >
            {contactLinks.map(({ icon, label, value, href, description }) => (
              <div key={label}>
                {href ? (
                  <motion.a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.15 }}
                    className="group flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                        <IconComponent
                          type={icon}
                          size={15}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] text-[#666666]">
                          {description}
                        </p>
                        <p className="text-sm font-medium text-white">
                          {value}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-[#555555] group-hover:text-white group-hover:translate-x-1 transition-transform"
                    />
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl opacity-60">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <IconComponent
                        type={icon}
                        size={15}
                        className="text-[#666666]"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#555555]">
                        {description}
                      </p>
                      <p className="text-sm font-medium text-[#888888]">
                        {value}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
