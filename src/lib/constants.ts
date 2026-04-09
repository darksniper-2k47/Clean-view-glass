export const BUSINESS = {
  name: "Clean View Glass",
  tagline: "Architectural Clarity in Every Pane",
  phone: "064 059 1843",
  phoneClean: "27640591843",
  email: "info@cleanviewglass.co.za",
  address: "51 Station Road, Belmont Park, Cape Town, South Africa",
  addressShort: "51 Station Road, Belmont Park",
  hours: {
    weekday: "Mon – Fri: 08:00 – 17:00",
    saturday: "Sat: 08:00 – 13:00",
  },
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.9760777553147!2d18.7058473!3d-33.8902519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc53f06e5e8e31%3A0x7d7a12b1a1a1a1a1!2s51%20Station%20Rd%2C%20Belmont%20Park%2C%20Cape%20Town%2C%207570!5e0!3m2!1sen!2sza!4v1715600000000!5m2!1sen!2sza",
  whatsappUrl: "https://wa.me/27640591843",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Residential Glass",
    description:
      "Custom-cut window glass, door panes, and safety glass for Cape Town homes. Cut to your exact measurements.",
    icon: "Home" as const,
  },
  {
    title: "Commercial Glass",
    description:
      "High-performance glass cut to size for offices, industrial spaces, and retail outlets.",
    icon: "Building2" as const,
  },
  {
    title: "Shopfront Glass",
    description:
      "Precision-cut glass panels for storefronts, office partitions, and display cases.",
    icon: "Store" as const,
  },
  {
    title: "Mirrors & Splashbacks",
    description:
      "Custom-cut mirrors and vibrant glass splashbacks sized to fit your kitchen or bathroom.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Glass Balustrades",
    description:
      "Frameless and semi-frameless balustrade glass cut to specification for balconies and staircases.",
    icon: "Fence" as const,
  },
  {
    title: "Emergency Glass",
    description:
      "Fast 24/7 glass cutting and replacement supply across the Western Cape.",
    icon: "Wrench" as const,
  },
] as const;

export const VALUES = [
  {
    title: "Premium",
    description:
      "Sourcing the highest grade materials for lasting beauty and structural superiority.",
    icon: "Gem" as const,
  },
  {
    title: "Honest",
    description:
      "Transparent pricing and clear, proactive communication at every stage of the project.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Precise",
    description:
      "Every cut executed down to the millimeter for a flawless fit, every time.",
    icon: "Ruler" as const,
  },
  {
    title: "Local",
    description:
      "Serving our community with local expertise, care, and reliable accountability.",
    icon: "MapPin" as const,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Exceptional service. They cut and supplied our shopfront glass same day. Highly professional team.",
    name: "Sarah Jenkins",
    title: "Retail Manager",
  },
  {
    quote:
      "The balustrade glass they cut for us was perfect. Exact measurements, flawless clarity and finish.",
    name: "Michael Venter",
    title: "Homeowner",
  },
  {
    quote:
      "Fast, reliable, and reasonably priced. Best glass company in Cape Town by far.",
    name: "David Abrahams",
    title: "Property Developer",
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/delivery-truck.jpg", alt: "Clean View Glass delivery and logistics" },
  { src: "/images/delivery-truck-wide.jpg", alt: "Clean View Glass workshop and premises" },
  { src: "/images/workshop-cutting.jpg", alt: "Precision glass cutting in our workshop" },
  { src: "/images/workshop-detail.jpg", alt: "Detailed glass craftsmanship" },
  { src: "/images/flame-polishing.jpg", alt: "Glass flame polishing technique" },
] as const;
