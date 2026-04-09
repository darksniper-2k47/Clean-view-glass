import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading label="Client Feedback" title="What Our Customers Say" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* TODO: Replace with real testimonials */}
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-surface-lowest p-8 rounded-[0.75rem] shadow-[var(--shadow-ghost)]"
          >
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-on-surface-variant italic mb-6 leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="font-headline font-bold text-sm uppercase tracking-wide text-on-surface">
              &mdash; {testimonial.name}, {testimonial.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
