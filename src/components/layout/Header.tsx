"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Brand } from "./Brand";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <Container className="flex h-[72px] items-center justify-between">
        <Brand />
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
