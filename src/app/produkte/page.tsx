import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Produkte",
  description: "Spezialisierte Softwareprodukte von KAERYON für anspruchsvolle reale Einsatzbereiche.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Produkte / 02"
        title="Eigene Systeme. Für klar umrissene Aufgaben."
        description="KAERYON entwickelt neben individuellen Lösungen eigene Softwareprodukte für Arbeitsfelder mit besonderen Anforderungen."
        aside={<><span>Portfolio</span><strong>Products by KAERYON</strong></>}
      />
      <ProductsSection />
      <ContactCTA />
    </>
  );
}
