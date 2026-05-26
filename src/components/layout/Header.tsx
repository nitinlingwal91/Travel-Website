"use client";

import Link from "next/link";
import { useState } from "react";
import type { Route } from "next";
import Container from "../shared/Container";

const navLinks: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Trips" },
  { href: "/destinations", label: "Destinations" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-[-0.04em] text-white"
          onClick={() => setOpen(false)}
        >
          Mad For Trip
        </Link>

        <nav className="hidden md:flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={"/contact" as Route}
          className="hidden md:inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          Plan Your Trip
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-sm md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="text-xl leading-none" aria-hidden="true">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`${
          open ? "block" : "hidden"
        } border-t border-white/10 bg-black/45 backdrop-blur-xl md:hidden`}
      >
        <Container className="flex flex-col items-start gap-5 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium text-white/90 transition hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={"/contact" as Route}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Plan Your Trip
          </Link>
        </Container>
      </div>
    </header>
  );
}