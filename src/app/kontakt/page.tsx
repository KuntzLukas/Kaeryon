import type { Metadata } from "next";
import { ContactPanel } from "@/components/sections/ContactPanel";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Sprechen Sie mit KAERYON über individuelle Software, Automatisierung oder ein spezialisiertes digitales System.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt / 05"
        title="Ein guter Start ist ein klares Problem."
        description="Sie müssen noch keine fertige technische Lösung im Kopf haben. Beschreiben Sie einfach den Prozess, die Hürde oder die Aufgabe."
        aside={<><span>Nächster Schritt</span><strong>Gemeinsam einordnen</strong></>}
      />
      <ContactPanel />
    </>
  );
}
