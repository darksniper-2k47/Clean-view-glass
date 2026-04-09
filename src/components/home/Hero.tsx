import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-[73px]">
      <Image
        src="/images/delivery-truck.jpg"
        alt="Clean View Glass delivery truck loaded with premium glass"
        fill
        className="object-cover"
        priority
        quality={80}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl mb-6 tracking-tight leading-tight">
          Premium Glass Solutions in Cape Town
        </h1>
        <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-body font-normal leading-relaxed">
          Premium glass cut to size for homes and
          businesses
        </p>
        <Button href="/contact" variant="gradient" className="text-lg px-10 py-4">
          Get a Free Quote
        </Button>
      </div>

      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors duration-200 cursor-pointer motion-safe:animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
}
