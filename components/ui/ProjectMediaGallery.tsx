"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, ImageIcon, Play, X } from "lucide-react";

interface ProjectMediaGalleryProps {
  title: string;
  projectCategory?: string;
  screenshots?: string[];
  demoVideoUrl?: string;
  demoVideoType?: "youtube" | "loom" | "mp4" | "external";
}

export function ProjectMediaGallery({
  title,
  projectCategory,
  screenshots = [],
  demoVideoUrl,
  demoVideoType = "external",
}: ProjectMediaGalleryProps) {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const visibleScreenshots = screenshots.filter((src) => !failedImages.has(src));
  const hasMedia = visibleScreenshots.length > 0 || !!demoVideoUrl;
  const isCsuProject = projectCategory === "CSU Projects" || projectCategory === "CSU Project";

  const markFailed = (src: string) => {
    setFailedImages((current) => {
      const next = new Set(current);
      next.add(src);
      return next;
    });
    setLoadedImages((current) => {
      const next = new Set(current);
      next.delete(src);
      return next;
    });
  };

  const markLoaded = (src: string) => {
    setLoadedImages((current) => {
      const next = new Set(current);
      next.add(src);
      return next;
    });
  };

  return (
    <section className="mt-12">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#999999]">
            Screenshots / Demo
          </p>
          <h2 className="text-xl font-bold text-[#111111]">Product Preview</h2>
        </div>

        {demoVideoUrl && (
          <a
            href={demoVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#111111] bg-[#111111] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-black"
          >
            <Play size={13} />
            Watch Demo
            <ExternalLink size={12} />
          </a>
        )}
      </div>

      {!hasMedia && !isCsuProject && (
        <div className="flex aspect-[16/7] items-center justify-center rounded-2xl border border-[#E5E5E5] bg-[#F5F5F5]">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-[#DADADA] bg-white">
              <ImageIcon size={18} className="text-[#A3A3A3]" />
            </div>
            <p className="text-sm font-medium text-[#999999]">
              Screenshots coming soon
            </p>
          </div>
        </div>
      )}

      {visibleScreenshots.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visibleScreenshots.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImage(src)}
              className="group relative aspect-video overflow-hidden rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] text-left"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-[1.025] ${
                  loadedImages.has(src) ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 768px) 100vw, 460px"
                onLoad={() => markLoaded(src)}
                onError={() => markFailed(src)}
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#111111] shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      )}

      {demoVideoUrl && demoVideoType === "mp4" && (
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#E5E5E5] bg-black">
          <video src={demoVideoUrl} controls className="aspect-video w-full" />
        </div>
      )}

      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white p-2 text-[#111111]"
            aria-label="Close image preview"
          >
            <X size={16} />
          </button>
          <div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-[#111111]">
            <Image
              src={activeImage}
              alt={`${title} enlarged screenshot`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
