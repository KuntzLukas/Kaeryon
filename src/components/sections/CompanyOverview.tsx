import { companyPrinciples, focusAreas } from "@/content/company";
import { Section } from "@/components/ui/Section";

export function CompanyOverview() {
  return (
    <>
      <Section className="company-story" aria-labelledby="company-story-title">
        <div className="about-grid">
          <p className="section-index">01 / Haltung</p>
          <div>
            <h2 id="company-story-title" className="statement">Komplexität verstehen. Klarheit schaffen.</h2>
            <div className="story-copy">
              <p>KAERYON entwickelt spezialisierte digitale Werkzeuge für reale Probleme.</p>
              <p>Wir beginnen nicht mit einem Technologietrend, sondern mit dem Prozess, den Menschen und den Rahmenbedingungen. Daraus entsteht Software, die im Alltag tatsächlich trägt.</p>
            </div>
          </div>
        </div>
        <div className="principle-grid">
          {companyPrinciples.map((principle, index) => (
            <article key={principle.title}>
              <span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="focus-section" aria-labelledby="focus-title">
        <div className="section-topline">
          <p className="section-index">02 / Fokus</p>
          <h2 id="focus-title" className="statement">Für Umgebungen, in denen Software Arbeit wirklich erleichtern muss.</h2>
        </div>
        <ul className="focus-list">
          {focusAreas.map((area, index) => <li key={area}><span>0{index + 1}</span>{area}</li>)}
        </ul>
      </Section>
    </>
  );
}
