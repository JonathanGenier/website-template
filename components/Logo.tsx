import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className }: LogoProps) {
  const src =
    variant === "light"
      ? "/maple-digital-logo-light.svg"
      : "/maple-digital-logo-dark.svg";

  return (
    <Link href="/" aria-label="Maple Digital home">
      <img
        src={src}
        alt="Maple Digital logo"
        className={`h-15 w-auto ${className ?? ""}`}
      />
    </Link>
  );
}
