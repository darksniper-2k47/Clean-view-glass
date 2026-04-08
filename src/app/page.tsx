import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SupplierLogos } from "@/components/home/SupplierLogos";
import { Testimonials } from "@/components/home/Testimonials";
import { GalleryTeaser } from "@/components/home/GalleryTeaser";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <SupplierLogos />
      <Testimonials />
      <GalleryTeaser />
      <CTABanner />
    </>
  );
}
