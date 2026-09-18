import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="site-header">
      <Container className="flex h-[72px] items-center justify-between">
        <Link className="brand" href="/" aria-label="KAERYON Startseite">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>KAERYON</span>
        </Link>
        <div className="flex items-center gap-8">
          <Navigation />
          <Button className="hidden xl:inline-flex" href="/kontakt">
            Projekt besprechen
          </Button>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
