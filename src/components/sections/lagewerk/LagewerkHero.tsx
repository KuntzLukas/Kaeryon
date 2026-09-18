import { AtmosphericBackground } from "@/components/effects/AtmosphericBackground";
import { FadeIn } from "@/components/effects/FadeIn";
import { HorizonGlow } from "@/components/effects/HorizonGlow";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LagewerkCommandVisual } from "./LagewerkCommandVisual";

export function LagewerkHero() {
  return (
    <section className="lagewerk-hero" aria-labelledby="lagewerk-title">
      <AtmosphericBackground local className="lagewerk-hero__atmosphere" />
      <HorizonGlow className="lagewerk-hero__glow" />
      <div className="lagewerk-hero__cartography" aria-hidden="true" />

      <Container className="lagewerk-hero__inner">
        <div className="lagewerk-hero__layout">
          <FadeIn className="lagewerk-hero__copy">
            <p className="eyebrow"><span />Produkt · Führungsunterstützung</p>
            <div className="lagewerk-identity">
              <div>
                <h1 id="lagewerk-title">LAGEWERK</h1>
                <p>by KAERYON</p>
              </div>
              <Badge>In Entwicklung</Badge>
            </div>
            <p className="lagewerk-hero__statement">
              Digitale Führungsunterstützung
              <span>für Einsatzorganisationen.</span>
            </p>
            <p className="lagewerk-hero__description">
              Eine Plattform für Lageführung, Einsatzkoordination und operative
              Führungsunterstützung.
            </p>
            <div className="lagewerk-hero__meta" aria-label="Produkteigenschaften">
              <span>Operational Command System</span>
              <span>Gemeinsames Lagebild</span>
              <span>Offline gedacht</span>
            </div>
          </FadeIn>

          <FadeIn className="lagewerk-hero__visual" delay={0.12}>
            <LagewerkCommandVisual compact />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
