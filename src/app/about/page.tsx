import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import InfoItem from "@/components/shared/InfoItem";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our travel philosophy, group trip approach, and how we design affordable adventures across India.",
};

export default function AboutPage() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="About us"
          title="Affordable trips built for real travelers"
          description="We design group trips, backpacking routes, weekend escapes, and trekking experiences for travelers who want memorable journeys without inflated prices."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              What we believe
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Mad For Trip was built for travelers who want strong experiences,
              clear coordination, and better value. We focus on routes that feel
              exciting, practical, and worth taking with the right group.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              From mountain escapes to social backpacking routes and
              beginner-friendly treks, our goal is to make travel more accessible
              without making it feel ordinary.
            </p>
          </div>

          <div className="grid gap-4">
            <InfoItem label="Focus" value="Adventure and budget travel" />
            <InfoItem
              label="Trip style"
              value="Backpacking, trekking, and weekend escapes"
            />
            <InfoItem
              label="Approach"
              value="Transparent, supportive, and traveler-first"
            />
            <InfoItem
              label="Audience"
              value="Young travelers, explorers, and group adventurers"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}