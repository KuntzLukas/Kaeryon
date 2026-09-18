import { FadeIn } from "@/components/effects/FadeIn";
import { Section } from "@/components/ui/Section";

export function IntroSection() {
  return (
    <Section className="intro-section" aria-labelledby="intro-title">
      <FadeIn className="intro-grid">
        <p className="section-index">01 / Ansatz</p>
        <div>
          <h2 id="intro-title" className="statement">
            Software sollte sich dem Problem anpassen.
            <span>Nicht das Problem der Software.</span>
          </h2>
          <p className="intro-copy">
            Viele Prozesse entstehen über Jahre hinweg aus Excel-Dateien,
            manuellen Abläufen und verschiedenen Systemen. KAERYON entwickelt
            Lösungen, die bestehende Prozesse vereinfachen, verbinden und automatisieren.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
