import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { legalNavigation, mainNavigation } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-main">
        <div>
          <Link className="brand" href="/" aria-label="KAERYON Startseite">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span>KAERYON</span>
          </Link>
          <p className="footer-slogan">Purpose-built software for real-world problems.</p>
        </div>
        <div className="footer-links">
          <nav aria-label="Fußnavigation">
            <span>Navigation</span>
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
          <nav aria-label="Rechtliches">
            <span>Rechtliches</span>
            {legalNavigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>
      </Container>
      <Container className="footer-bottom">
        <span>© {new Date().getFullYear()} KAERYON</span>
        <span>Software · Automation · Systems</span>
      </Container>
    </footer>
  );
}
