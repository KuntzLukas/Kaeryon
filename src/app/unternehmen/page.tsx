import type { Metadata } from "next";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Unternehmen",
  description: "KAERYON entwickelt spezialisierte digitale Werkzeuge für reale Herausforderungen in Unternehmen, Organisationen und Einsatzumgebungen.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Unternehmen / 04"
        title="Technologie für reale Herausforderungen."
        description="KAERYON steht für präzise entwickelte Software, klare Zusammenarbeit und digitale Systeme, die sich an der Wirklichkeit orientieren."
        aside={<><span>Positionierung</span><strong>Purpose-built software</strong></>}
      />
      <CompanyOverview />
      <ContactCTA />
    </>
  );
}
