import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyStory } from "@/components/about/CompanyStory";
import { CoreValues } from "@/components/about/CoreValues";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Clean View Glass — Cape Town's trusted glass cutting and supply experts. Premium materials, honest pricing, and precise craftsmanship since day one.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      {/* Team section removed — add back when owner photos are available */}
    </>
  );
}
