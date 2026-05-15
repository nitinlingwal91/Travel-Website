"use client";

import { useMemo, useState } from "react";
import TripsFilters from "@/components/trips/TripsFilters";
import TripsGrid from "@/components/trips/TripsGrid";

type Trip = {
  id: string;
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  difficulty: string;
  groupSize: string;
  category: string;
  image: string;
  shortDescription: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    id: string;
    day: string;
    title: string;
    description: string;
    order: number;
  }[];
  faqs: {
    id: string;
    question: string;
    answer: string;
    order: number;
  }[];
};

type TripsClientPageProps = {
  trips: Trip[];
};

export default function TripsClientPage({
  trips,
}: TripsClientPageProps) {
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [budget, setBudget] = useState("");

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesDestination =
        destination === "" || trip.location === destination;

      const matchesCategory =
        category === "" || trip.category === category;

      const matchesDifficulty =
        difficulty === "" || trip.difficulty === difficulty;

      const numericPrice = Number(trip.price.replace(/[^\d]/g, ""));

      const matchesBudget =
        budget === "" ||
        (budget === "under-7000" && numericPrice < 7000) ||
        (budget === "7000-9000" &&
          numericPrice >= 7000 &&
          numericPrice <= 9000) ||
        (budget === "9000-plus" && numericPrice > 9000);

      return (
        matchesDestination &&
        matchesCategory &&
        matchesDifficulty &&
        matchesBudget
      );
    });
  }, [trips, destination, category, difficulty, budget]);

  function resetFilters() {
    setDestination("");
    setCategory("");
    setDifficulty("");
    setBudget("");
  }

  return (
    <>
      <TripsFilters
        destination={destination}
        category={category}
        difficulty={difficulty}
        budget={budget}
        onDestinationChange={setDestination}
        onCategoryChange={setCategory}
        onDifficultyChange={setDifficulty}
        onBudgetChange={setBudget}
        onReset={resetFilters}
      />

      <TripsGrid trips={filteredTrips} />
    </>
  );
}