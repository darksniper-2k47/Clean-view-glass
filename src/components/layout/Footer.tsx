import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-on-surface w-full pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="col-span-1">
          <span className="text-xl font-extrabold font-headline uppercase tracking-tight block mb-6 text-primary-container">
            Clean View Glass
          </span>
          <p className="text-white/50 text-sm leading-relaxed">
            {BUSINESS.tagline}. Leading the industry with premium glass
            solutions in the Western Cape.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-primary font-bold mb-8 text-xs uppercase tracking-[0.2em]">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-primary font-bold mb-8 text-xs uppercase tracking-[0.2em]">
            Legal
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/contact"
                className="text-white/50 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <span className="text-white/50 text-sm">Privacy Policy</span>
            </li>
            <li>
              <span className="text-white/50 text-sm">Terms of Service</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-primary font-bold mb-8 text-xs uppercase tracking-[0.2em]">
            Contact
          </h4>
          <div className="space-y-4">
            <p className="text-white/50 text-sm flex items-start gap-3">
              <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
              <span>{BUSINESS.addressShort}</span>
            </p>
            <p className="text-white/50 text-sm flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <a
                href={`tel:${BUSINESS.phoneClean}`}
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {BUSINESS.phone}
              </a>
            </p>
            <p className="text-white/50 text-sm flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <a
                href={`mailto:${BUSINESS.email}`}
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {BUSINESS.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-white/30 text-xs">
          &copy; {new Date().getFullYear()} {BUSINESS.name}. All Rights
          Reserved. {BUSINESS.tagline}.
        </p>
      </div>
    </footer>
  );
}
