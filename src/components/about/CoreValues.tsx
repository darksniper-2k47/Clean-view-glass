import { Gem, ShieldCheck, Ruler, MapPin } from "lucide-react";
import { VALUES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Gem,
  ShieldCheck,
  Ruler,
  MapPin,
} as const;

export function CoreValues() {
  return (
    <section className="py-24 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <SectionHeading title="Our Core Values" />
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed -mt-10 mb-16">
          The foundation of our business is built on these four pillars of
          excellence, guiding every cut and every order.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value) => {
            const Icon = iconMap[value.icon];
            return (
              <div
                key={value.title}
                className="bg-surface-lowest p-10 rounded-[0.75rem] shadow-[var(--shadow-ghost)] transition-all duration-200 ease-out hover:shadow-[var(--shadow-ghost-lg)] hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-[0.75rem] bg-primary/10 flex items-center justify-center mb-8 mx-auto group-hover:bg-primary transition-colors duration-200">
                  <Icon
                    size={32}
                    className="text-primary group-hover:text-white transition-colors duration-200"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-headline font-bold uppercase tracking-widest text-sm text-on-surface mb-4">
                  {value.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
