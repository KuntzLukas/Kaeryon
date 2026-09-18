import { FadeIn } from "@/components/effects/FadeIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function ContactCTA() {
  return (
    <Section className="contact-cta" aria-labelledby="contact-cta-title">
      <FadeIn className="contact-cta-grid">
        <p className="section-index">06 / Kontakt</p>
        <div>
          <p className="section-label">Startpunkt</p>
          <h2 id="contact-cta-title">Ein Prozess kostet unnötig Zeit?</h2>
          <p>
            Erzählen Sie uns, wie Sie heute arbeiten. Gemeinsam prüfen wir, ob
            Software oder Automatisierung den Ablauf sinnvoll verbessern kann.
          </p>
        </div>
        <div className="contact-cta-action">
          <Button href="/kontakt">Projekt besprechen</Button>
        </div>
      </FadeIn>
    </Section>
  );
}
