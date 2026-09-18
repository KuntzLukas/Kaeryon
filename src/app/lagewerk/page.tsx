import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { LagewerkOverview } from "@/components/sections/LagewerkOverview";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Lagewerk - Digitale Führungsunterstützung",
  description: "Lagewerk ist die in Entwicklung befindliche Plattform von KAERYON für Lageführung, Einsatzkoordination und operative Führungsunterstützung.",
};

export default function LagewerkPage() {
  return (
    <>
      <PageHero
        eyebrow="A product by KAERYON"
        title="LAGEWERK"
        description="Digitale Führungsunterstützung für Einsatzorganisationen. Eine Plattform für Lageführung, Einsatzkoordination und operative Führungsunterstützung."
        aside={
          <>
            <Badge>In Development</Badge>
            <strong>Operational Command Software</strong>
          </>
        }
      />
      <LagewerkOverview />
      <ContactCTA />
    </>
  );
}
