import Link from "next/link";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import NavItem from "./NavItem";
import LanguageToggler from "./LanguageToggler";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/navigation";
import { navbarCTA } from "@/lib/styles";
import { getTranslations } from "next-intl/server";

export default async function Navbar({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "navigation" });

  return (
    <header>
      <nav className="relative border-b" aria-labelledby="main-nav-heading">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Logo variant="light" />

            <ul className="hidden items-center gap-4 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavItem href={`${link.href}`} translationKey={link.key} />
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <LanguageToggler />
              <Link
                href={`/${locale}/contact`}
                className={`${navbarCTA} px-4 py-2`}
              >
                {t("cta")}
              </Link>
            </div>

            <MobileMenu />
          </div>
        </Container>
      </nav>
    </header>
  );
}
