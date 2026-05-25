"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Route } from "next";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    alt: "Travelers exploring mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    alt: "Mountain road trip view",
  },
  {
    src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=80",
    alt: "Backpacking adventure in the mountains",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const exploreHref = "/trips" as Route;
  const contactHref = "/contact" as Route;

  return (
    <section className="relative min-h-100svh overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/35 to-slate-950/80" />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/55 via-transparent to-slate-950/55" />

      <Container className="relative z-10 flex min-h-100svh items-center justify-center py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f3d27a] backdrop-blur-md sm:text-sm">
            Adventure trips across India
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Travel more. Spend wisely. Explore mountains with the right people.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Discover budget-friendly backpacking journeys, weekend escapes, trekking
            adventures, and curated group trips designed for unforgettable experiences.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              href={exploreHref}
              className="bg-[#d4a017] text-slate-950 hover:bg-[#e0b84b]"
            >
              Explore Trips
            </Button>

            <Button
              href={contactHref}
              variant="secondary"
              className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Plan Your Trip
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["Kasol", "Manali", "Jibhi", "Kedarkantha", "Spiti", "Sissu"].map((place) => (
              <span
                key={place}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
              >
                {place}
              </span>
            ))}
          </div>

          <div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Curated departures and adventure experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md">
              <p className="text-3xl font-bold text-white">4.8/5</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Loved for support, value, and travel community.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur-md">
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Assistance before, during, and after every trip.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-10 bg-[#d4a017]" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}