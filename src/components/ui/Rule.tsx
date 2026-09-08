import { cn } from "@/lib/utils";

export function Rule({ className }: { className?: string }) {
  return <hr className={cn("h-px w-full border-0 bg-line", className)} />;
}
