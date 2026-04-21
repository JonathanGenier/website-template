"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageToggler() {
  const pathname = usePathname();

  const currentLang = pathname.startsWith("/fr") ? "fr" : "en";

  const targetLang = currentLang === "en" ? "fr" : "en";

  const newPath =
    targetLang === "fr"
      ? `/fr${pathname.replace(/^\/en/, "")}`
      : `/en${pathname.replace(/^\/fr/, "")}`;

  return (
    <Link
      href={newPath}
      className="text-sm hover:text-zinc-900 transition-colors underline"
    >
      {/* Mobile (< md) */}
      <span className="lg:hidden">{targetLang.toUpperCase()}</span>

      {/* Desktop (>= md) */}
      <span className="hidden lg:inline">
        {targetLang === "fr" ? "Français" : "English"}
      </span>
    </Link>
  );
}
