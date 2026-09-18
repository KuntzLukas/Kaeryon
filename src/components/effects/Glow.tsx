import { cn } from "@/lib/utils";

export function Glow({ className }: { className?: string }) {
  return <div className={cn("ambient-glow", className)} aria-hidden="true" />;
}
