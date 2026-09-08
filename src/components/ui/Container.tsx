import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  bleed = false,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        bleed ? "max-w-[1440px]" : "max-w-[1240px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
