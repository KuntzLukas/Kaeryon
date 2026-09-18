import { cn } from "@/lib/utils";

export function HorizonGlow({ className }: { className?: string }) {
  return (
    <div className={cn("horizon-glow", className)} aria-hidden="true">
      <span />
    </div>
  );
}
