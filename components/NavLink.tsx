"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLink } from "@/lib/styles";

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
      className={navLink}
      aria-current={isActive ? "page" : undefined}
    >
      <span className={isActive ? "text-blue-600" : ""}>{label}</span>
    </Link>
  );
}
