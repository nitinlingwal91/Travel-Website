"use client";

import { useState } from "react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const trips = [
  {
    title: "Kasol Kheerganga Backpacking",
    duration: "4N / 5D",
    price: "₹7,999",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    location: "Himachal Pradesh",
  },
  {
    title: "Kedarkantha Winter Trek",
    duration: "5N / 6D",
    price: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    location: "Uttarakhand",
  },
  {
    title: "Tirthan Jibhi Weekend Escape",
    duration: "3N / 4D",
    price: "₹6,499",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    location: "Himachal Pradesh",
  },
  {
    title: "Manali Adventure Escape",
    duration: "4N / 5D",
    price: "₹7,499",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    location: "Kullu, Himachal",
  },
  {
    title: "Spiti Road Journey",
    duration: "6N / 7D",
    price: "₹12,999",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    location: "Spiti Valley",
  },
];

export default function FeaturedTrips() {
  const [activeIndex, setActiveIndex] = useState(2);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? trips.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === trips.length - 1 ? 0 : prev + 1));
  };

  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    const total = trips.length;

    if (diff < -Math.floor(total / 2)) return diff + total;
    if (diff > Math.floor(total / 2)) return diff - total;
    return diff;
  };

  return (
    <section className="overflow-hidden bg-[#f8f4ee] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
            Featured trips
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Journeys worth planning next.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Explore a curated set of trips designed for mountain lovers,
            backpackers, and slow-travel seekers across North India.
          </p>
        </div>

        <div className="relative mt-14 h-135 sm:h-155">
          {trips.map((trip, index) => {
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
              opacity = 0.6;
              zIndex = 20;
            } else if (position === 1) {
              translateX = "78%";
              scale = 0.82;
              opacity = 0.6;
              zIndex = 20;
            } else if (position === -2) {
              translateX = "-138%";
              scale = 0.68;
              opacity = 0.28;
              zIndex = 10;
            } else if (position === 2) {
              translateX = "138%";
              scale = 0.68;
              opacity = 0.28;
              zIndex = 10;
            } else {
              translateX = position < 0 ? "-180%" : "180%";
              scale = 0.6;
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={trip.title}
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
                  <div className="relative h-95 w-full sm:h-107.5 lg:h-117.5">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                    <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
                      {trip.location}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      {trip.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                        {trip.duration}
                      </span>
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                        From {trip.price}
                      </span>
                    </div>

                    {isActive && (
                      <Link
                        href={"/trips" as Route}
                        className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-white/90"
                      >
                        Explore trip
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
            aria-label="Previous trip"
            className="absolute left-2 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff8a00] text-white shadow-lg transition hover:scale-105 sm:left-6"
          >
            <span className="text-2xl leading-none">←</span>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next trip"
            className="absolute right-2 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff8a00] text-white shadow-lg transition hover:scale-105 sm:right-6"
          >
            <span className="text-2xl leading-none">→</span>
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {trips.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to trip ${index + 1}`}
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