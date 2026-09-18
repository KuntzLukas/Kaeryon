import type { ReactNode } from "react";
import { GridBackground } from "@/components/effects/GridBackground";
import { Container } from "./Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <GridBackground />
      <Container className="page-hero-inner">
        <div>
          <p className="eyebrow"><span />{eyebrow}</p>
          <h1 id="page-title">{title}</h1>
          <p>{description}</p>
        </div>
        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </Container>
    </section>
  );
}
