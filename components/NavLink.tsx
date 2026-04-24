"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarLink, navbarActiveLink, focusRing } from "@/lib/styles";

type NavItemProps = {
  href: string;
  label: string;
};

export default function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${navbarLink} px-2`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className={isActive ? navbarActiveLink : ""}>{label}</span>
    </Link>
  );
}
