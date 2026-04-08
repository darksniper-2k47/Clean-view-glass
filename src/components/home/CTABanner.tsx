import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-container relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-8">
          Ready to Transform Your Space?
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto font-medium">
          Contact our expert team today for a consultation and a transparent
          quote on your next glass project.
        </p>
        <Button
          href="/contact"
          className="bg-white text-primary hover:bg-surface-low px-12 py-4 text-lg shadow-[var(--shadow-ghost-lg)]"
        >
          Get a Free Quote
        </Button>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full -ml-48 -mb-48" />
    </section>
  );
}
