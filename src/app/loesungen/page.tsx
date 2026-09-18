import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SolutionsCatalog } from "@/components/sections/SolutionsCatalog";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Individuelle Softwarelösungen",
  description: "Individuelle Software, Prozessautomatisierung, KI-Lösungen sowie Daten- und Systemintegrationen von KAERYON.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Lösungen / 01"
        title="Software, die dort beginnt, wo Standard endet."
        description="Wir entwickeln Systeme rund um reale Abläufe - von fokussierten Automatisierungen bis zu umfassender Individualsoftware."
        aside={<><span>Fokus</span><strong>Prozess vor Technologie</strong></>}
      />
      <SolutionsCatalog />
      <ContactCTA />
    </>
  );
}
