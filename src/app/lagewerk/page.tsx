import type { Metadata } from "next";
import { LagewerkOverview } from "@/components/sections/LagewerkOverview";
import { LagewerkCTA } from "@/components/sections/lagewerk/LagewerkCTA";
import { LagewerkHero } from "@/components/sections/lagewerk/LagewerkHero";
import "./lagewerk.css";

export const metadata: Metadata = {
  title: "Lagewerk - Digitale Führungsunterstützung",
  description: "Lagewerk ist die in Entwicklung befindliche Plattform von KAERYON für Lageführung, Einsatzkoordination und operative Führungsunterstützung.",
};

export default function LagewerkPage() {
  return (
    <div className="lagewerk-page">
      <LagewerkHero />
      <LagewerkOverview />
      <LagewerkCTA />
    </div>
  );
}
