import { FadeIn } from "@/components/effects/FadeIn";
import { processSteps } from "@/content/process";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <Section className="process-section" aria-labelledby="process-title">
      <div className="section-topline">
        <p className="section-index">03 / Prozess</p>
        <SectionHeading
          id="process-title"
          eyebrow="Zusammenarbeit"
          title="Von der Herausforderung zur Lösung"
          description="Strukturiert, nachvollziehbar und nah an den Menschen, die mit dem System arbeiten."
        />
      </div>
      <ol className="process-list">
        {processSteps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.04}>
            <li>
              <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
