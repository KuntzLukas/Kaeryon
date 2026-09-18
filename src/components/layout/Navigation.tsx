import Link from "next/link";
import { mainNavigation } from "@/content/navigation";

export function Navigation() {
  return (
    <nav aria-label="Hauptnavigation" className="hidden lg:block">
      <ul className="flex items-center gap-7">
        {mainNavigation.map((item) => (
          <li key={item.href}>
            <Link className="nav-link" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
