import { Check, Layers3, Map, RadioTower, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  "Lagekarte", "Taktische Zeichen", "Einsatzabschnitte", "Kräfteübersicht",
  "Meldungsmanagement", "Einsatzverlauf", "Offlinefähigkeit", "Multi-User Zusammenarbeit",
];

const modules = [
  { title: "Lage", detail: "Gemeinsames operatives Bild", icon: Map },
  { title: "Führung", detail: "Abschnitte und Strukturen", icon: Layers3 },
  { title: "Kräfte", detail: "Ressourcen im Überblick", icon: UsersRound },
  { title: "Meldungen", detail: "Informationen nachvollziehbar", icon: RadioTower },
];

export function LagewerkOverview() {
  return (
    <>
      <Section className="lagewerk-overview" aria-labelledby="lagewerk-overview-title">
        <div className="section-topline">
          <p className="section-index">01 / Plattform</p>
          <SectionHeading
            id="lagewerk-overview-title"
            eyebrow="Ein gemeinsames Lagebild"
            title="Informationen dort zusammenführen, wo Entscheidungen entstehen."
            description="Lagewerk ist als modularer Arbeitsraum für operative Führung konzipiert - klar, gemeinsam nutzbar und auf anspruchsvolle Einsatzlagen ausgerichtet."
          />
        </div>
        <div className="module-grid">
          {modules.map(({ title, detail, icon: Icon }, index) => (
            <article key={title}>
              <span>0{index + 1}</span><Icon aria-hidden="true" size={22} />
              <h3>{title}</h3><p>{detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="lagewerk-features" aria-labelledby="lagewerk-features-title">
        <div className="section-topline">
          <p className="section-index">02 / Funktionsumfang</p>
          <div>
            <Badge>In Development</Badge>
            <h2 id="lagewerk-features-title" className="statement">Geplanter Funktionsumfang</h2>
            <p className="development-note">Lagewerk befindet sich aktuell in Entwicklung. Funktionsumfang und Verfügbarkeit können sich bis zur Veröffentlichung ändern.</p>
          </div>
        </div>
        <ul className="large-feature-list">
          {features.map((feature, index) => (
            <li key={feature}><span>{String(index + 1).padStart(2, "0")}</span>{feature}<Check aria-hidden="true" size={18} /></li>
          ))}
        </ul>
      </Section>
    </>
  );
}
