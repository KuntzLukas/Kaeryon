import { Check, Map, Radio, Users } from "lucide-react";
import { FadeIn } from "@/components/effects/FadeIn";
import { products } from "@/content/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function ProductsSection() {
  const product = products[0];

  return (
    <Section className="products-section" aria-labelledby="product-title">
      <div className="section-topline">
        <p className="section-index">04 / Produkte</p>
        <p className="section-label">Products by KAERYON</p>
      </div>
      <FadeIn className="product-panel">
        <div className="product-content">
          <div className="product-kicker">
            <Badge>{product.status}</Badge>
            <span>{product.category}</span>
          </div>
          <h2 id="product-title">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <ul className="feature-list">
            {product.features.map((feature) => (
              <li key={feature}><Check aria-hidden="true" size={15} />{feature}</li>
            ))}
          </ul>
          <Button href={product.href}>Lagewerk entdecken</Button>
        </div>
        <div className="product-console" aria-label="Abstrakte Darstellung der Lagewerk-Funktionen">
          <div className="console-header"><span>LAGEWERK / OPERATION</span><span>DEV BUILD</span></div>
          <div className="console-map">
            <span className="map-axis map-axis--x" /><span className="map-axis map-axis--y" />
            <div className="map-marker map-marker--one"><Map size={17} aria-hidden="true" /></div>
            <div className="map-marker map-marker--two"><Users size={17} aria-hidden="true" /></div>
            <div className="map-marker map-marker--three"><Radio size={17} aria-hidden="true" /></div>
            <div className="map-label map-label--one">EA Nord</div>
            <div className="map-label map-label--two">ELW 1</div>
          </div>
          <div className="console-stats">
            <span><b>08</b>Kräfte</span><span><b>03</b>Abschnitte</span><span><b>12</b>Meldungen</span>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
