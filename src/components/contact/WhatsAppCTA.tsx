import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function WhatsAppCTA() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-headline font-bold mb-4 uppercase text-on-surface">
          Send Us a Message
        </h2>
        <p className="text-on-surface-variant leading-relaxed">
          Tap the button below to chat with us directly on WhatsApp. We
          typically respond within a few hours during business hours.
        </p>
      </div>

      <a
        href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent("Hi, I'd like to get a quote for glass installation.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-[0.375rem] font-headline font-bold text-lg transition-all duration-200 ease-out cursor-pointer shadow-[var(--shadow-ghost)]"
      >
        <MessageCircle size={24} />
        Message Us on WhatsApp
      </a>

      <p className="text-on-surface-variant text-sm">
        Or call us directly at{" "}
        <a
          href={`tel:${BUSINESS.phoneClean}`}
          className="text-primary font-semibold hover:underline cursor-pointer"
        >
          {BUSINESS.phone}
        </a>
      </p>
    </div>
  );
}
