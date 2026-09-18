import type { ReactNode } from "react";
import { Container } from "./Container";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="legal-page">
      <Container>
        <header>
          <p className="section-label">Rechtliches</p>
          <h1>{title}</h1>
          <p>Stand: {updated}</p>
        </header>
        <div className="legal-content">{children}</div>
      </Container>
    </article>
  );
}
