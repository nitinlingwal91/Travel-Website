import Link from "next/link";
import type { Route } from "next";

type ButtonProps = {
  href: Route;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300";

  const styles =
    variant === "primary"
      ? "bg-[#d4a017] text-slate-950 hover:bg-[#e0b84b] shadow-[0_12px_30px_rgba(15,23,42,0.18)]"
      : "border border-[#d8cbb8] bg-[#f8f4ec] text-slate-900 hover:bg-[#f1e9dd]";

  return (
    <Link href={href} className={`${baseStyles} ${styles} ${className}`}>
      {children}
    </Link>
  );
}