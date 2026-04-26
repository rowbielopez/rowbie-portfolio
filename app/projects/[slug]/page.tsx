import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Tag,
  User,
  Star,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { CaseStudyTabs } from "@/components/ui/CaseStudyTabs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

const statusStyles: Record<string, { bg: string; text: string }> = {
  Live: { bg: "bg-[#111111]", text: "text-white" },
  "Live / Prototype": { bg: "bg-[#111111]", text: "text-white" },
  Active: { bg: "bg-[#111111]", text: "text-white" },
  "In Development": { bg: "bg-[#F5F5F5]", text: "text-[#111111]" },
  Prototype: { bg: "bg-[#F5F5F5]", text: "text-[#666666]" },
  Concept: { bg: "bg-white border border-[#E5E5E5]", text: "text-[#A3A3A3]" },
  "Internal System": { bg: "bg-[#1F2937]", text: "text-white" },
  "Legacy / Internal": { bg: "bg-[#F5F5F5]", text: "text-[#A3A3A3]" },
  Implemented: { bg: "bg-[#111111]", text: "text-white" },
  "Research Project": { bg: "bg-[#F5F5F5]", text: "text-[#666666]" },
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const status = statusStyles[project.status] ?? {
    bg: "bg-[#F5F5F5]",
    text: "text-[#666666]",
  };
  const isInternal =
    project.url === "Internal / Restricted Access" ||
    project.url === "To be provided";

  return (
    <div className="min-h-screen bg-white">
      {/* Top accent */}
      <div
        className={`h-1 ${project.highlight ? "bg-[#111111]" : "bg-[#E5E5E5]"}`}
      />

      {/* Nav */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-5 flex items-center gap-3">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#111111] transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>

        {project.highlight && (
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 bg-[#111111] text-white rounded-full">
            <Star size={9} className="fill-white" />
            Featured
          </span>
        )}
      </div>

      {/* Hero */}
      <div className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-[10px] font-semibold tracking-wide uppercase text-[#666666] bg-white border border-[#E5E5E5] px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full ${status.bg} ${status.text}`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight mb-4 tracking-tight">
            {project.title}
          </h1>

          <div className="h-0.5 w-12 bg-[#111111] mb-6" />

          <p className="text-base md:text-lg text-[#555555] leading-relaxed max-w-2xl font-light mb-8">
            {project.shortDescription}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-5 text-sm text-[#777777]">
            <div className="flex items-center gap-1.5">
              <User size={13} className="text-[#AAAAAA]" />
              <span>{project.role}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={13} className="text-[#AAAAAA]" />
              <span>{project.year}</span>
            </div>
            {!isInternal ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#111111] font-medium hover:underline"
              >
                <ExternalLink size={13} />
                Visit Project
              </a>
            ) : (
              <div className="flex items-center gap-1.5">
                <Tag size={13} className="text-[#AAAAAA]" />
                <span className="text-[10px] font-medium px-2.5 py-1 bg-[#F5F5F5] border border-[#E5E5E5] rounded-full text-[#888888] tracking-wide">
                  {project.url === "Internal / Restricted Access" ? "Internal System" : "Link coming soon"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
          {/* Left: Case study tabs */}
          <div>
            <CaseStudyTabs project={project} />
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-5">
            {/* Tech stack */}
            <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-5">
              <h3 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.1em] mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium px-2.5 py-1 bg-white border border-[#E5E5E5] rounded-lg text-[#555555]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project details */}
            <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-5 space-y-3.5">
              <h3 className="text-[10px] font-bold text-[#111111] uppercase tracking-[0.1em]">
                Project Details
              </h3>
              {[
                { label: "Category", value: project.category },
                { label: "Status", value: project.status },
                { label: "Year", value: project.year },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[9px] text-[#BBBBBB] uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  <p className="text-xs text-[#444444] font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* Visual placeholder */}
            <div className="bg-[#F5F5F5] border border-[#E5E5E5] rounded-2xl p-5 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 rounded-lg bg-[#E5E5E5] flex items-center justify-center mx-auto mb-2">
                  <div className="w-4 h-3 bg-[#CCCCCC] rounded-sm" />
                </div>
                <p className="text-[10px] text-[#BBBBBB] tracking-wide">
                  Preview coming soon
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#111111] rounded-2xl p-5 text-white">
              <p className="text-xs font-bold mb-1.5">
                Interested in this work?
              </p>
              <p className="text-[11px] text-white/55 leading-relaxed mb-4">
                Reach out for collaborations, similar projects, or
                consultations.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#AAAAAA] transition-colors"
              >
                Get in Touch
                <ArrowLeft size={11} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="border-t border-[#E5E5E5] py-5">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft size={13} />
            All Projects
          </Link>
          <p className="text-xs text-[#BBBBBB]">Rowbie Lopez, MIT, LPT</p>
        </div>
      </div>
    </div>
  );
}
