import { Braces, Database, Network, Workflow } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GridBackground } from "@/components/effects/GridBackground";

const inputs = [
  { label: "Prozess", icon: Workflow },
  { label: "Daten", icon: Database },
  { label: "Systeme", icon: Network },
];

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <GridBackground />
      <Container className="relative grid min-h-[calc(100svh-72px)] items-center gap-12 py-20 lg:grid-cols-[1.18fr_.82fr] lg:py-24">
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
            <Button href="/kontakt">Lösung besprechen</Button>
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
      </Container>
    </section>
  );
}
