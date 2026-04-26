"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink, ImageIcon, LockKeyhole } from "lucide-react";
import { isPublicUrl } from "@/data/projects";
import { cn } from "@/lib/utils";

type PreviewType = "screenshot" | "og" | "manual";

interface ProjectPreviewProps {
  title: string;
  url: string;
  image: string;
  category?: string;
  status?: string;
  previewEnabled: boolean;
  previewType: PreviewType;
  isInternal: boolean;
  variant?: "card" | "hero";
  className?: string;
}

function getHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function getScreenshotPreviewUrl(url: string): string | null {
  if (!isPublicUrl(url)) return null;

  const apiKey = process.env.NEXT_PUBLIC_SCREENSHOT_API_KEY;
  if (!apiKey) return null;

  // Add screenshot API integration here when a provider is selected.
  // Keep keys in environment variables and only use browser-safe public keys in this client component.
  return null;
}

export function ProjectPreview({
  title,
  url,
  image,
  category,
  status,
  previewEnabled,
  previewType,
  isInternal,
  variant = "card",
  className,
}: ProjectPreviewProps) {
  const [livePreviewFailed, setLivePreviewFailed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const safePublicUrl = !isInternal && previewEnabled && isPublicUrl(url);
  const hostname = useMemo(() => getHostname(url), [url]);
  const screenshotUrl =
    safePublicUrl && previewType === "screenshot" ? getScreenshotPreviewUrl(url) : null;
  const showOgCard =
    safePublicUrl && previewType === "og" && !livePreviewFailed;
  const showScreenshot =
    safePublicUrl && previewType === "screenshot" && !!screenshotUrl && !livePreviewFailed;
  const showLocalImage =
    (previewType === "manual" || !showScreenshot) && !!image && !imageFailed && !showOgCard;
  const isHero = variant === "hero";
  const isCsuProject = category === "CSU Projects" || category === "CSU Project";

  return (
    <div
      className={cn(
        "group/preview relative overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]",
        isHero ? "aspect-[16/7] rounded-2xl" : "aspect-video rounded-xl",
        className
      )}
    >
      {isInternal && (
        <div className="absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#111111] shadow-sm">
          <LockKeyhole size={10} />
          Internal / Restricted Access
        </div>
      )}

      {showScreenshot && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={screenshotUrl}
          alt={`${title} website preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/preview:scale-[1.025]"
          onError={() => setLivePreviewFailed(true)}
        />
      )}

      {showOgCard && (
        <div className="flex h-full w-full flex-col justify-between bg-white p-5 transition-transform duration-500 group-hover/preview:scale-[1.015]">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#888888]">
              Website Preview
            </span>
            <ExternalLink size={13} className="text-[#777777]" />
          </div>
          <div>
            <p className="mb-2 line-clamp-2 text-base font-bold leading-tight text-[#111111]">
              {title}
            </p>
            <p className="truncate text-xs text-[#777777]">{hostname}</p>
          </div>
          <div className="h-px w-12 bg-[#111111]" />
        </div>
      )}

      {showLocalImage && (
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover/preview:scale-[1.025]",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageFailed(true);
            setImageLoaded(false);
          }}
          sizes={
            isHero
              ? "(max-width: 1024px) 100vw, 960px"
              : "(max-width: 768px) 100vw, 360px"
          }
        />
      )}

      {!showScreenshot && !showOgCard && !showLocalImage && (
        <div className="flex h-full w-full items-center justify-center bg-[#F5F5F5] p-4">
          {isCsuProject ? (
            <div className="w-full max-w-xl rounded-xl border border-[#E5E5E5] bg-white p-5">
              <div className="mb-3 flex flex-wrap gap-2">
                {category && (
                  <span className="rounded-full border border-[#E5E5E5] bg-[#F8F8F8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#666666]">
                    {category}
                  </span>
                )}
                {status && (
                  <span className="rounded-full border border-[#E5E5E5] bg-[#F8F8F8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#666666]">
                    {status}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-[#111111]">{title}</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-[#DADADA] bg-white">
                <ImageIcon size={18} className="text-[#A3A3A3]" />
              </div>
              <p className="text-[11px] font-medium tracking-wide text-[#999999]">
                Project preview unavailable
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
