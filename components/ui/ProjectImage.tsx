"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src?: string;
  alt: string;
}

export function ProjectImage({ src, alt }: Props) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="w-full aspect-video flex items-center justify-center bg-[#F5F5F5] rounded-xl border border-[#E5E5E5]">
        <div className="text-center">
          <div className="w-8 h-8 rounded-lg bg-[#E5E5E5] flex items-center justify-center mx-auto mb-2">
            <div className="w-4 h-3 bg-[#CCCCCC] rounded-sm" />
          </div>
          <p className="text-[10px] text-[#BBBBBB] tracking-wide">
            Preview coming soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-[#E5E5E5]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        onError={() => setHasError(true)}
        sizes="(max-width: 768px) 100vw, 260px"
      />
    </div>
  );
}
