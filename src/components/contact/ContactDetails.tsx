import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const details = [
  {
    icon: MapPin,
    label: "Our Workshop",
    content: BUSINESS.address,
  },
  {
    icon: Phone,
    label: "Phone Number",
    content: BUSINESS.phone,
    href: `tel:${BUSINESS.phoneClean}`,
  },
  {
    icon: Mail,
    label: "Email Address",
    content: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
  },
  {
    icon: Clock,
    label: "Business Hours",
    content: `${BUSINESS.hours.weekday}\n${BUSINESS.hours.saturday}`,
  },
];

export function ContactDetails() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-headline font-bold mb-4 uppercase text-on-surface">
          Get in Touch
        </h2>
        <p className="text-on-surface-variant">
          We are committed to providing exceptional service and high-quality
          architectural glass solutions for all our clients.
        </p>
      </div>

      <div className="space-y-8">
        {details.map((detail) => (
          <div key={detail.label} className="flex gap-6 items-start">
            <div className="w-12 h-12 shrink-0 rounded-[0.375rem] bg-primary/10 flex items-center justify-center text-primary">
              <detail.icon size={22} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-headline font-bold text-on-surface uppercase text-sm tracking-wider mb-1">
                {detail.label}
              </h4>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {detail.content}
                </a>
              ) : (
                <p className="text-on-surface-variant whitespace-pre-line">
                  {detail.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
