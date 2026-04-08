export function AboutHero() {
  return (
    <section className="relative h-80 flex items-center bg-gradient-to-br from-primary to-primary-container overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white,transparent)]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <h1 className="text-white font-headline font-extrabold text-5xl md:text-6xl tracking-tight">
          About Clean View Glass
        </h1>
        <div className="mt-6 h-1.5 w-32 bg-primary-fixed-dim" />
      </div>
    </section>
  );
}
