import { FadeIn } from "@/components/effects/FadeIn";
import { HorizonGlow } from "@/components/effects/HorizonGlow";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function LagewerkCTA() {
  return (
    <Section className="lagewerk-cta" aria-labelledby="lagewerk-cta-title">
      <HorizonGlow className="lagewerk-cta__glow" />
      <div className="lagewerk-cta__terrain" aria-hidden="true" />
      <FadeIn className="lagewerk-cta__panel">
        <p className="section-index">05 / Kontakt</p>
        <div>
          <p className="section-label">Nächster Schritt</p>
          <h2 id="lagewerk-cta-title">Interesse an LAGEWERK?</h2>
          <p>
            Sie möchten LAGEWERK kennenlernen, Feedback geben oder über einen
            möglichen Pilotbetrieb sprechen?
          </p>
        </div>
        <Button href="/kontakt">Kontakt aufnehmen</Button>
      </FadeIn>
    </Section>
  );
}
