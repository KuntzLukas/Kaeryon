import type { ComponentPropsWithoutRef } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  containerClassName?: string;
};

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section className={cn("section", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
