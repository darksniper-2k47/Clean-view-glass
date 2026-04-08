import Image from "next/image";

export function CompanyStory() {
  return (
    <section className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-on-surface font-headline font-bold text-4xl leading-tight">
              Architectural Integrity in Every Pane
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                Founded on the principles of precision and clarity, Clean View
                Glass has spent years perfecting the art of architectural glass
                installation. Our journey began with a simple mission: to bridge
                the gap between structural necessity and aesthetic brilliance.
              </p>
              <p>
                We specialize in high-end residential and commercial projects
                where &ldquo;good enough&rdquo; is never the standard. From
                frameless showers to complex curtain walls, our team handles
                every project with a level of detail that mirrors the
                transparency of the glass we install.
              </p>
              <p className="font-semibold text-primary italic border-l-4 border-primary pl-6 py-2">
                Our mission is uncompromising quality — ensuring that every view
                is perfectly framed and every structure is built to last.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[0.75rem] transform rotate-2" />
            <Image
              src="/images/delivery-truck-wide.jpg"
              alt="Clean View Glass workshop and premises in Cape Town"
              width={600}
              height={450}
              className="relative rounded-[0.75rem] shadow-[var(--shadow-ghost-lg)] w-full object-cover aspect-[4/3] z-10"
              quality={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
