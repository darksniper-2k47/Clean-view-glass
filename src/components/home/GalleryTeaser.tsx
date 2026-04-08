import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GalleryTeaser() {
  return (
    <section id="gallery" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading title="Recent Projects" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {GALLERY_IMAGES.map((image, i) => (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-[0.75rem] ${
              i === 4 ? "aspect-[3/4] md:row-span-2" : "aspect-square"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
              sizes={i === 4 ? "(max-width: 768px) 50vw, 33vw" : "(max-width: 768px) 50vw, 33vw"}
              quality={80}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
