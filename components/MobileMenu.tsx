"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/navigation";
import Link from "next/link";
import LanguageToggler from "./LanguageToggler";
import {
  mobileMenuActiveLink,
  mobileMenuButton,
  mobileMenuLink,
  navbarCTA,
  mobileMenuBottomCTA,
} from "@/lib/styles";
import { FaChevronRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { buildLocalizedPath, isActivePath } from "@/lib/nav-utils";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = useTranslations("navigation");

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: PointerEvent) {
      if (!menuRef.current) return;

      const target = event.target as Node;
      if (!menuRef.current.contains(target)) {
        closeMenu();
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="flex items-center gap-10 md:hidden">
      <LanguageToggler />
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`${mobileMenuButton} inline-flex items-center justify-center w-10 h-10 rounded-full`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? (
          <MdClose aria-hidden="true" className="h-6 w-6" />
        ) : (
          <FaBars aria-hidden="true" className="h-6 w-6" />
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 border-b bg-white shadow-md"
        >
          <ul className="flex flex-col gap-2 p-4">
            {NAV_LINKS.map((link) => {
              const target = buildLocalizedPath(locale, link.href);
              const isActive = isActivePath(pathname, target);

              return (
                <li key={link.href}>
                  <Link
                    href={target}
                    className={`${mobileMenuLink} flex items-center justify-between w-full px-4 py-3 border-b`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    <span className={isActive ? mobileMenuActiveLink : ""}>
                      {t(link.key)}
                    </span>

                    <FaChevronRight
                      aria-hidden="true"
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isActive
                          ? `rotate-180 ${mobileMenuActiveLink}`
                          : `${mobileMenuLink}`
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`mt-4 border-t px-4 pb-4 pt-4 ${mobileMenuBottomCTA}`}
          >
            <Link
              href="/contact"
              className={`${navbarCTA} block py-4 text-center`}
              onClick={closeMenu}
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
