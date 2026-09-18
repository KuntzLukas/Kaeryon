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
        <h2>1. Verantwortlicher</h2>
        <address>
          <p>{siteConfig.owner}<br />{siteConfig.legalName}</p>
          <p>Drachenfelsstraße 4<br />66994 Dahn<br />Deutschland</p>
        </address>
        <p>E-Mail: <a href={"mailto:" + siteConfig.email} aria-label={"E-Mail an " + siteConfig.email + " schreiben"}>{siteConfig.email}</a></p>
      </section>
      <section>
        <h2>2. Hosting</h2>
        <p>Diese Website wird auf Serverinfrastruktur von IONOS betrieben.</p>
        <h3>Hosting-Anbieter</h3>
        <address>
          <p>IONOS SE<br />Elgendorfer Straße 57<br />56410 Montabaur<br />Deutschland</p>
        </address>
        <p>Beim Aufruf der Website können technisch notwendige Serverdaten verarbeitet werden. Dazu können insbesondere gehören:</p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene URL</li>
          <li>HTTP-Statuscode</li>
          <li>Browsertyp</li>
          <li>Betriebssystem</li>
          <li>Referrer</li>
          <li>übertragene Datenmenge</li>
        </ul>
        <h3>Zweck der Verarbeitung</h3>
        <ul>
          <li>Bereitstellung der Website</li>
          <li>Stabilität und Fehleranalyse</li>
          <li>IT-Sicherheit und Abwehr von Angriffen</li>
        </ul>
        <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.</p>
        <p>Unser berechtigtes Interesse liegt im sicheren, stabilen und technisch fehlerfreien Betrieb der Website.</p>
        <p>Server-Logdaten werden nur so lange gespeichert, wie dies für den sicheren und störungsfreien Betrieb sowie zur Aufklärung konkreter Sicherheitsvorfälle erforderlich ist.</p>
      </section>
      <section>
        <h2>3. SSL-/TLS-Verschlüsselung</h2>
        <p>Die Website verwendet SSL-/TLS-Verschlüsselung, um übertragene Daten zu schützen.</p>
      </section>
      <section>
        <h2>4. Kontaktaufnahme per E-Mail</h2>
        <p>Wenn Sie uns über <a href={"mailto:" + siteConfig.email} aria-label={"E-Mail an " + siteConfig.email + " schreiben"}>{siteConfig.email}</a> kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten. Dazu können gehören:</p>
        <ul>
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Unternehmen</li>
          <li>Inhalt der Nachricht</li>
        </ul>
        <p>Die Verarbeitung dient der Bearbeitung und Beantwortung Ihrer Anfrage.</p>
        <p>Bei geschäftlichen oder vorvertraglichen Anfragen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Bei sonstigen Anfragen erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Bearbeitung eingehender Anfragen.</p>
        <p>Die Daten werden gelöscht, wenn die Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
      </section>
      <section>
        <h2>5. Cookies und Tracking</h2>
        <p>KAERYON verwendet derzeit keine Analyse-, Werbe- oder Trackingdienste.</p>
        <p>Soweit technisch notwendige Speichermechanismen eingesetzt werden, dienen diese ausschließlich dem sicheren und funktionsfähigen Betrieb der Website.</p>
      </section>
      <section>
        <h2>6. Externe Inhalte</h2>
        <p>Auf dieser Website werden derzeit keine Inhalte wie Videos, Karten, externe Bilder, Tracking-Skripte oder CDN-Ressourcen von externen Servern eingebunden. Die verwendeten Schriftarten werden über Next.js lokal bereitgestellt; beim Besuch der Website wird daher keine Verbindung zu Google Fonts hergestellt.</p>
      </section>
      <section>
        <h2>7. Ihre Rechte</h2>
        <p>Im Rahmen der gesetzlichen Voraussetzungen haben Sie insbesondere folgende Rechte:</p>
        <ul>
          <li>Recht auf Auskunft</li>
          <li>Recht auf Berichtigung</li>
          <li>Recht auf Löschung</li>
          <li>Recht auf Einschränkung der Verarbeitung</li>
          <li>Recht auf Datenübertragbarkeit</li>
          <li>Recht auf Widerspruch</li>
          <li>Recht auf Widerruf einer Einwilligung, soweit eine Verarbeitung darauf basiert</li>
        </ul>
      </section>
      <section>
        <h2>8. Beschwerderecht</h2>
        <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist:</p>
        <address>
          <p>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz</p>
          <p>Hintere Bleiche 34<br />55116 Mainz</p>
        </address>
        <p>Website: <a href="https://www.datenschutz.rlp.de/" rel="external">datenschutz.rlp.de</a><br />E-Mail: <a href="mailto:poststelle@datenschutz.rlp.de" aria-label="E-Mail an poststelle@datenschutz.rlp.de schreiben">poststelle@datenschutz.rlp.de</a></p>
      </section>
      <section>
        <h2>9. Stand der Datenschutzerklärung</h2>
        <p>September 2026</p>
      </section>
    </LegalPage>
  );
}
