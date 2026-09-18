import Image from "next/image";
import {
  Clock3,
  Layers3,
  Map,
  MessageSquareText,
  Network,
  RadioTower,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { FadeIn } from "@/components/effects/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LagewerkCommandVisual } from "./lagewerk/LagewerkCommandVisual";

const features = [
  {
    code: "01 / MAP",
    title: "Digitale Lagekarte",
    description: "Informationen räumlich bündeln und ein gemeinsames operatives Lagebild schaffen.",
    icon: Map,
  },
  {
    code: "02 / SIGNS",
    title: "Taktische Zeichen",
    description: "Lageinformationen mit klaren, etablierten Symbolen strukturiert darstellen.",
    icon: ShieldCheck,
  },
  {
    code: "03 / COMMAND",
    title: "Einsatzabschnitte",
    description: "Abschnitte und Führungsstrukturen nachvollziehbar im Lagebild abbilden.",
    icon: Layers3,
  },
  {
    code: "04 / FORCES",
    title: "Kräfteübersicht",
    description: "Verfügbare Ressourcen und zugeordnete Kräfte im Überblick behalten.",
    icon: UsersRound,
  },
  {
    code: "05 / MESSAGES",
    title: "Meldungsmanagement",
    description: "Informationen geordnet erfassen, priorisieren und nachvollziehbar weitergeben.",
    icon: MessageSquareText,
  },
  {
    code: "06 / TIMELINE",
    title: "Einsatzverlauf",
    description: "Entwicklungen und Entscheidungen entlang des zeitlichen Verlaufs dokumentieren.",
    icon: Clock3,
  },
  {
    code: "07 / OFFLINE",
    title: "Offlinefähigkeit",
    description: "Für operative Arbeit auch unter eingeschränkten Verbindungen konzipiert.",
    icon: RadioTower,
  },
  {
    code: "08 / MULTI-USER",
    title: "Multi-User Zusammenarbeit",
    description: "Eine gemeinsame Lage als Grundlage koordinierter Zusammenarbeit nutzen.",
    icon: Network,
  },
];

const workflow = ["Meldung", "Lagebild", "Auftrag", "Kräfte", "Verlauf"];

export function LagewerkOverview() {
  return (
    <>
      <Section className="lagewerk-overview" aria-labelledby="lagewerk-overview-title">
        <div className="section-topline">
          <p className="section-index">01 / Plattform</p>
          <SectionHeading
            id="lagewerk-overview-title"
            eyebrow="Ein gemeinsames Lagebild"
            title="Informationen dort zusammenführen, wo Entscheidungen entstehen."
            description="LAGEWERK ist als modularer Arbeitsraum für operative Führung konzipiert – klar, gemeinsam nutzbar und auf anspruchsvolle Einsatzlagen ausgerichtet."
          />
        </div>

        <div className="lagewerk-features__intro">
          <div>
            <Badge>In Entwicklung</Badge>
            <h3>Geplanter Funktionsumfang</h3>
          </div>
          <p>
            LAGEWERK befindet sich aktuell in Entwicklung. Funktionsumfang und
            Verfügbarkeit können sich bis zur Veröffentlichung ändern.
          </p>
        </div>

        <div className="lagewerk-feature-grid">
          {features.map(({ code, title, description, icon: Icon }, index) => (
            <FadeIn key={title} delay={(index % 4) * 0.05}>
              <article className="lagewerk-feature-card">
                <div className="lagewerk-feature-card__topline">
                  <span>{code}</span>
                  <Icon aria-hidden="true" size={20} strokeWidth={1.6} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <i aria-hidden="true" />
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="lagewerk-workflow" aria-labelledby="lagewerk-workflow-title">
        <div className="section-topline">
          <p className="section-index">02 / Ablauf</p>
          <SectionHeading
            id="lagewerk-workflow-title"
            eyebrow="Operativer Workflow"
            title="Von der Meldung zur Lage."
            description="LAGEWERK ist als durchgängiger Arbeitsraum gedacht: Informationen werden eingeordnet, Aufgaben koordiniert und der Verlauf nachvollziehbar festgehalten."
          />
        </div>
        <FadeIn>
          <ol className="lagewerk-workflow__track">
            {workflow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < workflow.length - 1 ? <i aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </FadeIn>
      </Section>

      <Section className="lagewerk-why" aria-labelledby="lagewerk-why-title">
        <div className="lagewerk-why__grid">
          <div>
            <p className="section-index">03 / Warum LAGEWERK</p>
            <p className="section-label">Orientierung in komplexen Lagen</p>
            <h2 id="lagewerk-why-title">Führung braucht Übersicht.</h2>
          </div>
          <div className="lagewerk-why__content">
            <p>
              Wo viele Informationen, Kräfte und Entscheidungen zusammenkommen,
              braucht operative Führung ein verlässliches gemeinsames Lagebild.
            </p>
            <p>
              LAGEWERK soll Zusammenarbeit unterstützen, Entscheidungen
              nachvollziehbar machen und auch unter anspruchsvollen Bedingungen
              Übersicht bewahren – einschließlich eingeschränkter Konnektivität.
            </p>
            <dl>
              <div><dt>01</dt><dd>Gemeinsame Lage</dd></div>
              <div><dt>02</dt><dd>Nachvollziehbare Entscheidungen</dd></div>
              <div><dt>03</dt><dd>Koordinierte Zusammenarbeit</dd></div>
              <div><dt>04</dt><dd>Offline gedacht</dd></div>
            </dl>
          </div>
        </div>
        <FadeIn className="lagewerk-why__visual">
          <LagewerkCommandVisual />
        </FadeIn>
      </Section>

      <Section className="lagewerk-kaeryon" aria-labelledby="lagewerk-kaeryon-title">
        <FadeIn className="lagewerk-kaeryon__panel">
          <div className="lagewerk-kaeryon__mark">
            <Image
              src="/brand/Logo_Kaeryon.png"
              alt=""
              width={72}
              height={72}
              sizes="72px"
            />
            <span>Product / 01</span>
          </div>
          <div className="lagewerk-kaeryon__copy">
            <p className="section-label">Ein Produkt von KAERYON</p>
            <h2 id="lagewerk-kaeryon-title">Built by KAERYON.</h2>
            <p>
              LAGEWERK entsteht als spezialisiertes System für operative
              Führungsunterstützung und Einsatzkoordination.
            </p>
            <blockquote>
              Entwickelt mit derselben Philosophie wie alle KAERYON-Produkte:
              Software soll sich dem Problem anpassen, nicht das Problem der Software.
            </blockquote>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
