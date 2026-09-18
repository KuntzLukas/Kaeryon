import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "lagewerk",
    name: "LAGEWERK",
    category: "Operational Command Software",
    description: "Digitale Führungsunterstützung für Feuerwehren, Einsatzleitungen und Katastrophenschutz.",
    longDescription: "Lagewerk verbindet Lageführung, taktische Darstellung, Kräfteübersicht, Meldungen und Führungsorganisation in einem gemeinsamen System.",
    href: "/lagewerk",
    status: "In Development",
    features: ["Digitale Lagekarte", "Taktische Zeichen", "Einsatzabschnitte", "Meldungen", "Kräfteübersicht", "Offlinefähigkeit"],
  },
];
