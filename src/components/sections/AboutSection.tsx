import { FadeIn } from "@/components/effects/FadeIn";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section className="about-section" aria-labelledby="about-title">
      <div className="about-grid">
        <p className="section-index">05 / KAERYON</p>
        <FadeIn>
          <p className="section-label">Unternehmen</p>
          <h2 id="about-title" className="statement">
            Technologie für reale Herausforderungen.
          </h2>
          <div className="about-copy">
            <p>KAERYON entwickelt Software nicht um ihrer selbst willen.</p>
            <p>
              Unser Ziel ist es, komplexe Abläufe zu verstehen und daraus
              einfache, verlässliche digitale Werkzeuge zu entwickeln.
            </p>
            <p>Von Unternehmensprozessen bis zur operativen Einsatzführung.</p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
