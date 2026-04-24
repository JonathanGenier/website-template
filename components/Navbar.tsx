import Link from "next/link";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import LanguageToggler from "./LanguageToggler";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/navigation";
import { navbarCTA, focusRing } from "@/lib/styles";

export default function Navbar() {
  return (
    <header>
      <nav className="relative border-b" aria-labelledby="main-nav-heading">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Logo variant="light" />

            <ul className="hidden items-center gap-4 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <LanguageToggler />
              <Link href="/contact" className={`${navbarCTA} px-4 py-2`}>
                Get a Free Quote
              </Link>
            </div>

            <MobileMenu />
          </div>
        </Container>
      </nav>
    </header>
  );
}
