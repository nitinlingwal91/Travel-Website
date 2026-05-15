"use client";

import Link from "next/link";
import { useState } from "react";
import type { Route } from "next";
import Container from "../shared/Container";
import Button from "../shared/Button";

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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
          onClick={() => setOpen(false)}
        >
          Travel <span className="text-teal-700">Website</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-teal-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact">Plan Your Trip</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="text-2xl leading-none" aria-hidden="true">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`${open ? "block" : "hidden"} border-t border-slate-200 bg-white md:hidden`}
      >
        <Container className="flex flex-col items-center gap-6 py-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-slate-700 transition hover:text-teal-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-full max-w-sm items-center justify-center rounded-md bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Plan Your Trip
          </Link>
        </Container>
      </div>
    </header>
  );
}