"use client";

import Image from "next/image";

const suppliers = [
  {
    name: "National Glass",
    logo: "/images/suppliers/national-glass.png",
    invertOnLight: true,
  },
  {
    name: "Compass Glass",
    logo: "/images/suppliers/compass-glass.jpg",
    invertOnLight: false,
  },
];

export function SupplierLogos() {
  // Double the array for seamless infinite scroll
  const scrollItems = [...suppliers, ...suppliers, ...suppliers, ...suppliers];

  return (
    <section className="py-16 bg-surface-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-center text-on-surface-variant font-headline font-bold text-sm uppercase tracking-[0.2em]">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-lowest to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-lowest to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-scroll motion-reduce:animate-none motion-reduce:justify-center motion-reduce:flex-wrap motion-reduce:gap-12">
          {scrollItems.map((supplier, i) => (
            <div
              key={`${supplier.name}-${i}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center h-16"
            >
              <Image
                src={supplier.logo}
                alt={`${supplier.name} logo`}
                width={160}
                height={64}
                className={`h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200 ${
                  supplier.invertOnLight ? "invert" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
