"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src?: string;
  alt: string;
  /** When true, renders at full content width with a taller aspect ratio */
  full?: boolean;
}

export function ProjectImage({ src, alt, full }: Props) {
  const [hasError, setHasError] = useState(false);

  const containerClass = full
    ? "w-full aspect-[16/7] rounded-2xl overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]"
    : "w-full aspect-video rounded-xl overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5]";

  const placeholderClass = full
    ? "w-full aspect-[16/7] flex items-center justify-center bg-[#F5F5F5] rounded-2xl border border-[#E5E5E5]"
    : "w-full aspect-video flex items-center justify-center bg-[#F5F5F5] rounded-xl border border-[#E5E5E5]";

  if (!src || hasError) {
    return (
      <div className={placeholderClass}>
        <div className="text-center">
          <div className="w-10 h-10 rounded-xl bg-[#E5E5E5] flex items-center justify-center mx-auto mb-2.5">
            <div className="w-5 h-4 bg-[#CCCCCC] rounded-sm" />
          </div>
          <p className="text-[11px] text-[#BBBBBB] tracking-wide">
            Preview coming soon
          </p>
          <p className="text-[9px] text-[#D4D4D4] mt-1 tracking-wide">
            Image will be added
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${containerClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
        onError={() => setHasError(true)}
        sizes={
          full
            ? "(max-width: 1024px) 100vw, 960px"
            : "(max-width: 768px) 100vw, 260px"
        }
      />
    </div>
  );
}
