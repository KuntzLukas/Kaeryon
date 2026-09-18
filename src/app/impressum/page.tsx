import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der KAERYON Website.",
};

export default function ImprintPage() {
  return (
    <LegalPage title="Impressum" updated="September 2026">
      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>{siteConfig.legalName}</p>
        <address>
          <p>Inhaber:<br />{siteConfig.owner}</p>
          <p>Drachenfelsstraße 4<br />66994 Dahn<br />Deutschland</p>
        </address>
        <h3>Kontakt</h3>
        <p>E-Mail: <a href={"mailto:" + siteConfig.email} aria-label={"E-Mail an " + siteConfig.email + " schreiben"}>{siteConfig.email}</a></p>
        <p className="legal-explanation">KAERYON ist die Geschäftsbezeichnung des Einzelunternehmens Lukas Kuntz.</p>
      </section>
    </LegalPage>
  );
}
