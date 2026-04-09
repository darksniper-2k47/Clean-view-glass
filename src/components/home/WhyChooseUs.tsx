import { BadgeCheck, Zap, MapPin } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Quality Craftsmanship",
    description:
      "Industry-leading standards and premium materials in every cut we make.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "We respect your time. Efficient scheduling and rapid execution for every project.",
  },
  {
    icon: MapPin,
    title: "Cape Town Based",
    description:
      "Deep roots in the community, providing local expertise and localized service.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-surface-lowest flex items-center justify-center mb-8 text-primary shadow-[var(--shadow-ghost)]">
                <reason.icon size={36} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                {reason.title}
              </h4>
              <p className="text-on-surface-variant leading-relaxed font-medium">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
