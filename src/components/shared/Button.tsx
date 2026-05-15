import Link from "next/link";

type ButtonProps = {
  href: string;
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
  const styles =
    variant === "primary"
      ? "bg-teal-700 text-white hover:bg-teal-800"
      : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}