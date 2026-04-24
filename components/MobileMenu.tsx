"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/navigation";
import Link from "next/link";
import LanguageToggler from "./LanguageToggler";
import {
  mobileMenuButton,
  mobileMenuNavLink,
  primaryButton,
} from "@/lib/styles";
import { FaChevronRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

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
        className={mobileMenuButton}
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
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={mobileMenuNavLink}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    <span className={isActive ? "text-blue-600" : ""}>
                      {link.label}
                    </span>

                    <FaChevronRight
                      aria-hidden="true"
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isActive ? "rotate-180 text-blue-600" : "text-gray-400"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 border-t border-gray-200 px-4 pb-4 pt-4">
            <Link
              href="/contact"
              className={`${primaryButton} block py-4 text-center`}
              onClick={closeMenu}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
