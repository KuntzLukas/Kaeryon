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
        <p className="legal-notice">Die vollständige Anbieteranschrift und Rechtsform werden vor der öffentlichen Veröffentlichung ergänzt.</p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>E-Mail: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
      </section>
      <section>
        <h2>Verantwortlich für den Inhalt</h2>
        <p>{siteConfig.legalName}</p>
      </section>
      <section>
        <h2>Haftung für Links</h2>
        <p>Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte kein Einfluss besteht. Für diese fremden Inhalte wird keine Gewähr übernommen. Verantwortlich ist stets der jeweilige Anbieter.</p>
      </section>
    </LegalPage>
  );
}
