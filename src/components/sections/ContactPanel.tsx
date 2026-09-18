import { ArrowUpRight, Clock3, Mail, MessageSquareText } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const conversationPoints = [
  "Was heute unnötig Zeit kostet",
  "Welche Systeme bereits im Einsatz sind",
  "Wer täglich mit dem Prozess arbeitet",
  "Was eine gute Lösung konkret leisten muss",
];

export function ContactPanel() {
  return (
    <Section className="contact-panel-section" aria-labelledby="contact-panel-title">
      <div className="contact-panel">
        <div className="contact-main">
          <p className="section-label">Direkter Kontakt</p>
          <h2 id="contact-panel-title">Schreiben Sie uns kurz, worum es geht.</h2>
          <p>Eine kurze Beschreibung des heutigen Ablaufs genügt für den Anfang. Wir melden uns persönlich und klären gemeinsam, ob und wie Software sinnvoll helfen kann.</p>
          <a className="email-link" href={"mailto:" + siteConfig.email} aria-label={"E-Mail an " + siteConfig.email + " schreiben"}>
            <span><Mail aria-hidden="true" size={19} />{siteConfig.email}</span>
            <ArrowUpRight aria-hidden="true" size={20} />
          </a>
          <Button className="contact-email-button" href={"mailto:" + siteConfig.email} aria-label={"E-Mail an " + siteConfig.email + " schreiben"}>
            E-Mail schreiben
          </Button>
        </div>
        <aside className="contact-aside" aria-label="Hinweise für das Erstgespräch">
          <div className="aside-heading">
            <MessageSquareText aria-hidden="true" size={21} />
            <h3>Hilfreich für den Einstieg</h3>
          </div>
          <ul>
            {conversationPoints.map((point, index) => (
              <li key={point}><span>0{index + 1}</span>{point}</li>
            ))}
          </ul>
          <p><Clock3 aria-hidden="true" size={16} />Unverbindliche erste Einordnung</p>
        </aside>
      </div>
    </Section>
  );
}
