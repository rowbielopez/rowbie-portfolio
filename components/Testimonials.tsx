import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const featured = testimonials[0];
  if (!featured) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="mb-10 max-w-xl">
          <p className="label-tag mb-4">Endorsements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] section-underline">
            Trusted by People I Work With
          </h2>
          <p className="mt-8 text-[#666666]">
            A short note from people who have worked with me in teaching,
            systems development, or ICT-related projects.
          </p>
        </div>

        <figure className="max-w-3xl rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-6 md:p-8">
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#E5E5E5]">
            <Quote size={17} className="text-[#444444]" />
          </div>
          <blockquote className="text-lg leading-relaxed text-[#333333]">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 border-t border-[#E5E5E5] pt-4">
            <p className="text-sm font-bold text-[#111111]">{featured.role}</p>
            {featured.organization && featured.organization !== "To be updated" && (
              <p className="text-xs text-[#777777]">{featured.organization}</p>
            )}
            {featured.relationship && (
              <p className="mt-1 text-[10px] uppercase tracking-wide text-[#AAAAAA]">
                {featured.relationship}
              </p>
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
