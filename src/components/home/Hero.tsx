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
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
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

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/25 to-black/40" />
      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/35" />

      <Container className="relative z-10 flex min-h-screen items-end py-12 sm:py-16 lg:py-20">
        <div className="grid w-full gap-10 pt-28 sm:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-36">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-white/70 sm:text-sm">
              Curated journeys across India
            </p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tighter text-white sm:text-5xl lg:text-7xl">
              Discover mountains, slow travel, and meaningful group escapes.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Thoughtfully designed trips for travelers who want better routes,
              better stays, and a better kind of travel experience.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                href={exploreHref}
                className="rounded-full bg-white px-6 py-3 text-slate-950 hover:bg-white/90"
              >
                Explore Trips
              </Button>

              <Button
                href={contactHref}
                variant="secondary"
                className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-white hover:bg-white/20"
              >
                Plan Your Trip
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Himachal", "Uttarakhand", "Kashmir", "Spiti", "Weekend Escapes"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.08em] text-white/85 backdrop-blur-sm sm:text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="lg:ml-auto lg:w-full lg:max-w-md">
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">
                Why travelers choose us
              </p>

              <div className="mt-6 space-y-5">
                <div className="border-b border-white/10 pb-5">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    50+
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Curated departures, backpacking journeys, and mountain getaways.
                  </p>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    4.8/5
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Highly rated for value, trip planning support, and group experience.
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    24/7
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Help before departure, during the trip, and after you return.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-8">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "w-10 bg-white" : "w-2 bg-white/45"
            }`}
          />
        ))}
      </div>
    </section>
  );
}