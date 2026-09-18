import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/effects/FadeIn";
import { solutions } from "@/content/solutions";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SolutionsSection() {
  return (
    <Section className="solutions-section" aria-labelledby="solutions-title">
      <div className="section-topline">
        <p className="section-index">02 / Leistungen</p>
        <SectionHeading
          id="solutions-title"
          eyebrow="Was wir entwickeln"
          title="Digitale Werkzeuge mit klarem Zweck."
          description="Von einzelnen Automatisierungen bis zu spezialisierten Softwaresystemen."
        />
      </div>
      <div className="solution-grid">
        {solutions.map(({ title, description, icon: Icon }, index) => (
          <FadeIn key={title} delay={index * 0.06}>
            <Card className="solution-card">
              <div className="card-topline">
                <span>0{index + 1}</span>
                <Icon aria-hidden="true" size={23} strokeWidth={1.5} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <Link href="/loesungen" aria-label={`${title} im Detail`}>
                Details <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
