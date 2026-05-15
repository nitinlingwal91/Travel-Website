import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Explore traveler reviews, feedback, and real experiences from trips planned with Mad For Trip.",
};

export default function ReviewsPage() {
  return (
    <PageHero
      eyebrow="Reviews"
      title="See what travelers say about their experience"
      description="Explore real traveler feedback about trip quality, support, planning, group experience, and overall value."
    />
  );
}