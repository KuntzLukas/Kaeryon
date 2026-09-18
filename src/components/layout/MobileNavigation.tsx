"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "@/content/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="menu-button"
        aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open ? (
        <div id="mobile-navigation" className="mobile-panel">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {mainNavigation.map((item, index) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    <span aria-hidden="true">0{index + 1}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link className="mobile-cta" href="/kontakt" onClick={() => setOpen(false)}>Projekt besprechen</Link>
        </div>
      ) : null}
    </div>
  );
}
