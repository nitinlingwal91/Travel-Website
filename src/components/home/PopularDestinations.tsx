"use client";

import { useState } from "react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const destinations = [
  {
    name: "Kasol & Parvati Valley",
    slug: "kasol-parvati-valley",
    trips: "12 curated trips",
    description:
      "Riverside cafés, village stays, scenic trails, and one of the most loved backpacking circuits in Himachal.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    location: "Himachal Pradesh",
  },
  {
    name: "Manali",
    slug: "manali",
    trips: "18 curated trips",
    description:
      "A mountain classic for snow days, road journeys, cafés, and flexible weekend itineraries.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    location: "Kullu, Himachal",
  },
  {
    name: "Jibhi & Tirthan",
    slug: "jibhi-tirthan",
    trips: "8 curated trips",
    description:
      "Quiet valleys, wooden cottages, waterfalls, and slower mountain escapes away from crowded circuits.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    location: "Tirthan Valley",
  },
  {
    name: "Kedarkantha",
    slug: "kedarkantha",
    trips: "6 curated trips",
    description:
      "Snow trails, forest camps, and one of the most approachable Himalayan summit experiences.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    location: "Uttarakhand",
  },
  {
    name: "Spiti Valley",
    slug: "spiti-valley",
    trips: "10 curated trips",
    description:
      "High-altitude roads, dramatic landscapes, remote villages, and unforgettable desert-mountain scenery.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    location: "Himachal Pradesh",
  },
];

export default function PopularDestinations() {
  const [activeIndex, setActiveIndex] = useState(2);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    const total = destinations.length;

    if (diff < -Math.floor(total / 2)) return diff + total;
    if (diff > Math.floor(total / 2)) return diff - total;
    return diff;
  };

  return (
    <section className="overflow-hidden bg-[#f3eee7] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
            Popular destinations
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Places travelers keep returning to.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Explore scenic mountain regions, slower valleys, and destination-led
            escapes designed for memorable travel across North India.
          </p>
        </div>

        <div className="relative mt-14 h-140 sm:h-160">
          {destinations.map((destination, index) => {
            const position = getPosition(index);
            const isActive = position === 0;

            let translateX = "0%";
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (position === 0) {
              translateX = "0%";
              scale = 1;
              opacity = 1;
              zIndex = 30;
            } else if (position === -1) {
              translateX = "-78%";
              scale = 0.82;
              opacity = 0.58;
              zIndex = 20;
            } else if (position === 1) {
              translateX = "78%";
              scale = 0.82;
              opacity = 0.58;
              zIndex = 20;
            } else if (position === -2) {
              translateX = "-138%";
              scale = 0.68;
              opacity = 0.24;
              zIndex = 10;
            } else if (position === 2) {
              translateX = "138%";
              scale = 0.68;
              opacity = 0.24;
              zIndex = 10;
            } else {
              translateX = position < 0 ? "-180%" : "180%";
              scale = 0.6;
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={destination.slug}
                className="absolute left-1/2 top-0 w-65 -translate-x-1/2 transition-all duration-700 ease-out sm:w-[320px] lg:w-90"
                style={{
                  transform: `translateX(${translateX}) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <article
                  className={`overflow-hidden rounded-[30px] border bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-700 ${
                    isActive
                      ? "border-white/70"
                      : "border-slate-200/70 grayscale"
                  }`}
                >
                  <div className="relative h-100 w-full sm:h-112.5 lg:h-122.5">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/18 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
                      {destination.location}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      {destination.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/80">
                      {destination.description}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                        {destination.trips}
                      </span>
                    </div>

                    {isActive && (
                      <Link
                        href={"/destinations" as Route}
                        className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-white/90"
                      >
                        Explore destination
                      </Link>
                    )}
                  </div>
                </article>
              </div>
            );
          })}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous destination"
            className="absolute left-2 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff8a00] text-white shadow-lg transition hover:scale-105 sm:left-6"
          >
            <span className="text-2xl leading-none">←</span>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next destination"
            className="absolute right-2 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff8a00] text-white shadow-lg transition hover:scale-105 sm:right-6"
          >
            <span className="text-2xl leading-none">→</span>
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to destination ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-slate-900" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}