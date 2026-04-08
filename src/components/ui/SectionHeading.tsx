interface SectionHeadingProps {
  label?: string;
  title: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  title,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface">
        {title}
      </h2>
      <div
        className={`w-20 h-1 bg-primary mt-6 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
