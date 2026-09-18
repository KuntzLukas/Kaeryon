import { Check } from "lucide-react";
import { FadeIn } from "@/components/effects/FadeIn";
import { solutions } from "@/content/solutions";
import { Section } from "@/components/ui/Section";

const startingPoints = [
  ["Manuelle Abläufe", "Wiederkehrende Eingaben, Übertragungen und Prüfungen binden Zeit und erzeugen Fehlerquellen."],
  ["Getrennte Systeme", "Informationen liegen an mehreren Stellen und müssen mühsam zusammengeführt werden."],
  ["Spezielle Anforderungen", "Der Prozess ist fachlich sinnvoll, passt aber in keine Standardsoftware."],
];

export function SolutionsCatalog() {
  return (
    <>
      <Section className="catalog-section" aria-label="Leistungsbereiche">
        <div className="catalog-list">
          {solutions.map(({ title, description, features, icon: Icon }, index) => (
            <FadeIn key={title}>
              <article className="catalog-item">
                <div className="catalog-title">
                  <span>0{index + 1}</span>
                  <Icon aria-hidden="true" size={24} strokeWidth={1.5} />
                  <h2>{title}</h2>
                </div>
                <p>{description}</p>
                <ul>
                  {features.map((feature) => (
                    <li key={feature}><Check aria-hidden="true" size={14} />{feature}</li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>
      <Section className="starting-points" aria-labelledby="starting-title">
        <div className="section-topline">
          <p className="section-index">Ausgangslage</p>
          <h2 id="starting-title" className="statement">Wo individuelle Software sinnvoll wird.</h2>
        </div>
        <div className="starting-grid">
          {startingPoints.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
