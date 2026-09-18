import { ArrowUpRight, Clock3, Mail, MessageSquareText } from "lucide-react";
import { Section } from "@/components/ui/Section";
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
          <h2 id="contact-panel-title">Erzählen Sie uns von Ihrer Herausforderung.</h2>
          <p>Eine kurze Beschreibung des heutigen Ablaufs genügt für den Anfang. Wir melden uns persönlich und klären gemeinsam, ob und wie Software sinnvoll helfen kann.</p>
          <a className="email-link" href={`mailto:${siteConfig.email}`}>
            <span><Mail aria-hidden="true" size={19} />{siteConfig.email}</span>
            <ArrowUpRight aria-hidden="true" size={20} />
          </a>
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
