import { FadeIn } from "@/components/effects/FadeIn";
import { HorizonGlow } from "@/components/effects/HorizonGlow";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section className="about-section" aria-labelledby="about-title">
      <HorizonGlow className="about-horizon-glow" />
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
          <div className="about-principles" aria-label="KAERYON Prinzipien">
            <span>Clarity</span><span>Structure</span><span>Progress</span>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
