import { cn } from "@/lib/utils";

type AtmosphericBackgroundProps = {
  className?: string;
  local?: boolean;
};

export function AtmosphericBackground({ className, local = false }: AtmosphericBackgroundProps) {
  return (
    <div
      className={cn("atmospheric-background", local && "atmospheric-background--local", className)}
      aria-hidden="true"
    >
      <div className="atmospheric-grid" />
      <div className="atmospheric-haze" />
      <div className="mountain-layer mountain-layer--far" />
      <div className="mountain-layer mountain-layer--mid" />
      <div className="mountain-layer mountain-layer--near" />
      <div className="atmospheric-horizon" />
      <div className="atmospheric-beacon" />
    </div>
  );
}
