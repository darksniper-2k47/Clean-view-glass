import Link from "next/link";
import {
  Home,
  Building2,
  Store,
  LayoutGrid,
  Fence,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Home,
  Building2,
  Store,
  LayoutGrid,
  Fence,
  Wrench,
} as const;

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        label="What We Do"
        title="Glass Cut to Size"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Link
              key={service.title}
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="group p-10 bg-surface-lowest rounded-[0.75rem] shadow-[var(--shadow-ghost)] hover:shadow-[var(--shadow-ghost-lg)] transition-all duration-200 ease-out flex flex-col items-start cursor-pointer"
            >
              <Icon
                size={36}
                className="text-primary mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">
                {service.title}
              </h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed flex-1">
                {service.description}
              </p>
              <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-200 ease-out text-sm uppercase tracking-wider">
                Learn More <ArrowRight size={16} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
