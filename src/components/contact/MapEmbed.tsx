import { BUSINESS } from "@/lib/constants";

export function MapEmbed() {
  return (
    <div className="w-full h-64 md:h-80 rounded-[0.75rem] overflow-hidden shadow-[var(--shadow-ghost)]">
      <iframe
        src={BUSINESS.mapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Clean View Glass location on Google Maps"
      />
    </div>
  );
}
