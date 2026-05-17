"use client";

import { useMemo, useState } from "react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";

type FilterType = "All" | "Nature" | "Adventure" | "Relaxation" | "Weekend";

type Destination = {
  name: string;
  filters: Exclude<FilterType, "All">[];
  description: string;
};

const destinations: Destination[] = [
  {
    name: "Himachal Pradesh",
    filters: ["Nature", "Adventure", "Weekend"],
    description:
      "From Kasol and Jibhi to Manali and hidden valleys, Himachal is ideal for backpacking, short escapes, and scenic mountain travel.",
  },
  {
    name: "Uttarakhand",
    filters: ["Adventure", "Nature"],
    description:
      "Perfect for trekking routes, spiritual mountain landscapes, and adventure experiences that balance challenge with rewarding views.",
  },
  {
    name: "Kashmir",
    filters: ["Nature", "Relaxation"],
    description:
      "Known for alpine beauty, cool weather, and unforgettable scenery, Kashmir is ideal for premium nature-led trips and memorable group travel.",
  },
];

const filterOptions: FilterType[] = [
  "All",
  "Nature",
  "Adventure",
  "Relaxation",
  "Weekend",
];

export default function DestinationsPageClient() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredDestinations = useMemo(() => {
    if (activeFilter === "All") return destinations;

    return destinations.filter((destination) =>
      destination.filters.includes(activeFilter as Exclude<FilterType, "All">)
    );
  }, [activeFilter]);

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Destinations"
          title="Trips shaped by mountains, culture, and shared experiences"
          description="Browse destinations that match your travel style, whether you want backpacking energy, scenic relaxation, or a proper trekking challenge."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "border-teal-700 bg-teal-700 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-teal-700 hover:text-teal-700"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <article
              key={destination.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {destination.name}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {destination.filters.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {destination.description}
              </p>

              <div className="mt-6">
                <Button href="/trips">View Trips</Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}