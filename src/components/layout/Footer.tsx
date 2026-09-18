import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { legalNavigation, mainNavigation } from "@/content/navigation";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-main">
        <div>
          <Brand />
          <p className="footer-slogan">Purpose-built software for real-world problems.</p>
          <a className="footer-email" href={"mailto:" + siteConfig.email} aria-label={"E-Mail an " + siteConfig.email + " schreiben"}>
            {siteConfig.email}
          </a>
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
        <span>© 2026 KAERYON</span>
        <span>Software · Automation · Systems</span>
      </Container>
    </footer>
  );
}
