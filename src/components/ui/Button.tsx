import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "onPlum";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-garnet text-bone hover:bg-garnet-deep shadow-[0_10px_30px_-14px_var(--garnet)]",
  outline:
    "border border-line-strong text-ink hover:border-garnet hover:text-garnet",
  ghost: "text-ink hover:text-garnet",
  onPlum:
    "bg-on-plum text-plum hover:bg-blush",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-[0.9375rem]",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  external?: boolean;
  download?: boolean;
  "aria-label"?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  external,
  download,
  ...rest
}: Props) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-pill font-medium",
    "transition-[background-color,color,border-color,transform] duration-300 ease-[var(--ease-out-expo)]",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          data-cursor="link"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(download ? { download: "" } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} data-cursor="link" {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      data-cursor="link"
      {...rest}
    >
      {children}
    </button>
  );
}
