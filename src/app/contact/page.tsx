import type { Metadata } from "next";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { WhatsAppCTA } from "@/components/contact/WhatsAppCTA";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { MapEmbed } from "@/components/contact/MapEmbed";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Clean View Glass for a free quote on glass installation, glazing, balustrades, and more in Cape Town. WhatsApp us or visit our office.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeader />

      <section className="py-20 lg:py-32 bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <WhatsAppCTA />
            <ContactDetails />
          </div>

          <div className="mt-16">
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
