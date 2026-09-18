import { Crosshair, MapPin, RadioTower, UsersRound } from "lucide-react";

type LagewerkCommandVisualProps = {
  compact?: boolean;
};

export function LagewerkCommandVisual({ compact = false }: LagewerkCommandVisualProps) {
  return (
    <div
      className={compact ? "lagewerk-map lagewerk-map--compact" : "lagewerk-map"}
      aria-hidden="true"
    >
      <div className="lagewerk-map__header">
        <span>LW / Lagebild</span>
        <span className="lagewerk-map__status"><i />Synchronisiert</span>
      </div>

      <div className="lagewerk-map__stage">
        <span className="lagewerk-map__coordinate lagewerk-map__coordinate--top">N 49° 58.420</span>
        <span className="lagewerk-map__coordinate lagewerk-map__coordinate--side">E 008° 15.810</span>

        <svg className="lagewerk-map__connections" viewBox="0 0 600 420" preserveAspectRatio="none">
          <path d="M115 115 L275 80 L470 150 L395 320 L190 292 Z" />
          <path d="M275 80 L305 225 L190 292" />
          <path d="M305 225 L470 150" />
          <path className="lagewerk-map__route" d="M68 344 C168 316 214 358 305 225 S438 236 535 92" />
          <circle cx="305" cy="225" r="60" />
          <circle cx="305" cy="225" r="100" />
        </svg>

        <div className="lagewerk-map__sector">
          <span>EA 02</span>
        </div>

        <div className="lagewerk-map__marker lagewerk-map__marker--command">
          <Crosshair size={17} strokeWidth={1.6} />
          <span>ELW 01</span>
        </div>
        <div className="lagewerk-map__marker lagewerk-map__marker--team">
          <UsersRound size={16} strokeWidth={1.6} />
          <span>Kräfte 08</span>
        </div>
        <div className="lagewerk-map__marker lagewerk-map__marker--message">
          <RadioTower size={16} strokeWidth={1.6} />
          <span>Meldung 12</span>
        </div>
        <div className="lagewerk-map__marker lagewerk-map__marker--point">
          <MapPin size={16} strokeWidth={1.6} />
          <span>Abschnitt Nord</span>
        </div>

        <span className="lagewerk-map__bearing">042°</span>
        <span className="lagewerk-map__scale">100 m</span>
      </div>

      <div className="lagewerk-map__footer">
        <span><b>03</b> Abschnitte</span>
        <span><b>08</b> Kräfte</span>
        <span><b>12</b> Meldungen</span>
      </div>
    </div>
  );
}
