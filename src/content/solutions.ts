import { Bot, Workflow, Code2, Database } from "lucide-react";
import type { Solution } from "@/types/solution";

export const solutions: Solution[] = [
  {
    title: "Automation",
    description: "Wiederkehrende Prozesse automatisieren und manuelle Arbeit reduzieren.",
    icon: Workflow,
    features: ["Workflow-Automation", "Dokumentenprozesse", "Datenverarbeitung"],
  },
  {
    title: "Individualsoftware",
    description: "Software entwickeln, wenn bestehende Standardlösungen nicht zum Prozess passen.",
    icon: Code2,
    features: ["Webanwendungen", "Interne Werkzeuge", "Individuelle Workflows"],
  },
  {
    title: "AI Solutions",
    description: "KI dort einsetzen, wo sie einen konkreten Mehrwert liefert.",
    icon: Bot,
    features: ["Dokumentenanalyse", "Assistenzsysteme", "Datenanreicherung"],
  },
  {
    title: "Daten & Schnittstellen",
    description: "Systeme verbinden und Daten zuverlässig zwischen Anwendungen austauschen.",
    icon: Database,
    features: ["APIs", "Systemintegrationen", "Datenimporte und -exporte"],
  },
];
