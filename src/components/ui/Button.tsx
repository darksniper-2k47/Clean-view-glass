import Link from "next/link";

type ButtonVariant = "gradient" | "ghost" | "text";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "gradient",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-headline font-bold tracking-wide transition-all duration-200 ease-out cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    gradient: "btn-gradient px-8 py-3.5 rounded-[0.375rem] text-sm uppercase tracking-wider",
    ghost:
      "bg-transparent text-primary px-8 py-3.5 rounded-[0.375rem] text-sm uppercase tracking-wider hover:bg-primary hover:text-on-primary",
    text: "text-primary text-sm uppercase tracking-wider hover:underline underline-offset-4",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
