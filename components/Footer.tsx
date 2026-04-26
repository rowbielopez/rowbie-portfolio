import { Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Teaching", href: "#teaching" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    type: "mail" as const,
    href: "mailto:lopezrowbie@gmail.com",
    label: "Email",
  },
  {
    type: "linkedin" as const,
    href: "https://www.linkedin.com/in/rowbie-lopez-84608ab4",
    label: "LinkedIn",
  },
  {
    type: "github" as const,
    href: "https://github.com/rowbielopez",
    label: "GitHub",
  },
  {
    type: "globe" as const,
    href: "https://www.facebook.com/RobsTechJourney",
    label: "RobTech Journey",
  },
];

function SocialIcon({ type, size = 12 }: { type: string; size?: number }) {
  switch (type) {
    case "mail":
      return <Mail size={size} />;
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "github":
      return <GithubIcon size={size} />;
    case "globe":
      return <Globe size={size} />;
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-bold text-sm text-white tracking-tight">
                Rowbie Lopez, MIT, LPT
              </span>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed mb-3">
              ICT Educator&nbsp;·&nbsp;Web &amp; Systems
              Developer&nbsp;·&nbsp;Digital Transformation Advocate
            </p>
            <p className="text-xs text-[#444444]">
              Cagayan State University, Philippines
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-[#444444] uppercase mb-4">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[#666666] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] text-[#444444] uppercase mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map(({ type, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="inline-flex items-center gap-2 text-xs text-[#666666] hover:text-white transition-colors"
                >
                  <SocialIcon type={type} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#333333]" suppressHydrationWarning>
            © {new Date().getFullYear()} Rowbie Lopez. All rights reserved.
          </p>
          <p className="text-[10px] text-[#333333]">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
