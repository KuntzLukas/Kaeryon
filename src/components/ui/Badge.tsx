import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = ComponentPropsWithoutRef<"span">;

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span className={cn("badge", className)} {...props}>
      <i aria-hidden="true" />
      {children}
    </span>
  );
}
