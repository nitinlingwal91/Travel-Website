import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read travel guides, destination stories, practical tips, and planning advice from Mad For Trip.",
};

export default function BlogPage() {
  return (
    <PageHero
      eyebrow="Blog"
      title="Travel guides, tips, and destination stories"
      description="Read practical travel content to help you choose better trips, plan smarter, and discover new places with confidence."
    />
  );
}