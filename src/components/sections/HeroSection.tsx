import { Braces, Database, Network, Workflow } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AtmosphericBackground } from "@/components/effects/AtmosphericBackground";
import { HorizonGlow } from "@/components/effects/HorizonGlow";

const inputs = [
  { label: "Prozess", icon: Workflow },
  { label: "Daten", icon: Database },
  { label: "Systeme", icon: Network },
];

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <AtmosphericBackground local className="hero-atmosphere" />
      <HorizonGlow className="hero-horizon-glow" />
      <Container className="hero-inner">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span />Software · Automation · Systems</p>
            <h1 id="hero-title">
              Software für Probleme,
              <em>die Standardlösungen nicht lösen.</em>
            </h1>
            <p className="hero-description">
              Wir entwickeln individuelle Software, Automatisierungen und
              spezialisierte digitale Systeme für reale Arbeitsabläufe.
            </p>
            <div className="hero-actions">
              <Button href="/kontakt">Projekt besprechen</Button>
              <Button href="/produkte" variant="secondary">Produkte entdecken</Button>
            </div>
          </div>
          <div className="system-visual" aria-label="Schematische Darstellung einer individuellen Softwarelösung">
            <div className="visual-meta">
              <span>System architecture</span><span>KAERYON / 01</span>
            </div>
            <div className="visual-stage">
              <div className="input-stack">
                {inputs.map(({ label, icon: Icon }, index) => (
                  <div className="system-node" key={label}>
                    <span>0{index + 1}</span><Icon aria-hidden="true" size={18} />{label}
                  </div>
                ))}
              </div>
              <div className="signal-lines" aria-hidden="true"><i /><i /><i /></div>
              <div className="solution-core">
                <div className="core-pulse" />
                <Braces aria-hidden="true" size={28} />
                <strong>Purpose-built</strong>
                <span>Digital system</span>
              </div>
            </div>
            <div className="visual-footer">
              <span><i className="status-dot" />System ready</span>
              <span>Built around the problem</span>
            </div>
          </div>
        </div>
        <div className="hero-principles" aria-label="KAERYON Prinzipien">
          <span>Systems for what&apos;s next</span>
          <i aria-hidden="true" />
          <strong>Understand</strong>
          <b aria-hidden="true" />
          <strong>Build</strong>
          <b aria-hidden="true" />
          <strong>Improve</strong>
          <i aria-hidden="true" />
          <span>A more capable tomorrow</span>
        </div>
      </Container>
    </section>
  );
}
