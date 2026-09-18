import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise für die KAERYON Website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Datenschutz" updated="September 2026">
      <section>
        <h2>1. Datenschutz auf einen Blick</h2>
        <p>Diese Hinweise erläutern, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
      </section>
      <section>
        <h2>2. Verantwortliche Stelle</h2>
        <p>{siteConfig.legalName}</p>
        <p>E-Mail: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
        <p className="legal-notice">Die vollständige Anschrift der verantwortlichen Stelle wird vor der öffentlichen Veröffentlichung ergänzt.</p>
      </section>
      <section>
        <h2>3. Server-Protokolldaten</h2>
        <p>Beim Aufruf der Website kann der Hosting-Anbieter technisch notwendige Informationen verarbeiten, darunter IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite, Browsertyp und Betriebssystem. Die Verarbeitung dient der sicheren und stabilen Bereitstellung der Website.</p>
      </section>
      <section>
        <h2>4. Kontaktaufnahme per E-Mail</h2>
        <p>Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage. Die Daten werden nicht ohne Ihre Einwilligung weitergegeben, soweit keine gesetzliche Verpflichtung besteht.</p>
      </section>
      <section>
        <h2>5. Cookies und Analyse</h2>
        <p>Diese Website setzt derzeit keine nicht technisch notwendigen Cookies und keine Analyse- oder Trackingdienste ein.</p>
      </section>
      <section>
        <h2>6. Ihre Rechte</h2>
        <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.</p>
      </section>
      <section>
        <h2>7. Aktualität</h2>
        <p>Diese Datenschutzerklärung wird angepasst, wenn sich Funktionen der Website oder rechtliche Anforderungen ändern.</p>
      </section>
    </LegalPage>
  );
}
