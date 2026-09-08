import { cn } from "@/lib/utils";

export function VerticalLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span aria-hidden className={cn("vertical-label select-none", className)}>
      {children}
    </span>
  );
}
