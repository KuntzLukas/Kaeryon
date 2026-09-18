import type { Metadata } from "next";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Sprechen Sie mit KAERYON über individuelle Software, Automatisierung oder ein spezialisiertes digitales System.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt / 05"
        title="Projekt besprechen"
        description="Sie haben einen Prozess, der unnötig Zeit kostet, oder eine Idee für eine individuelle Softwarelösung? Schreiben Sie uns kurz, worum es geht."
        aside={<><span>Direkter Kontakt</span><strong><a href={"mailto:" + siteConfig.email} aria-label={"E-Mail an " + siteConfig.email + " schreiben"}>{siteConfig.email}</a></strong></>}
      />
      <ContactPanel />
    </>
  );
}
