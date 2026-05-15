import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";

const destinations = [
  {
    name: "Himachal Pradesh",
    description:
      "From Kasol and Jibhi to Manali and hidden valleys, Himachal is ideal for backpacking, short escapes, and scenic mountain travel.",
  },
  {
    name: "Uttarakhand",
    description:
      "Perfect for trekking routes, spiritual mountain landscapes, and adventure experiences that balance challenge with rewarding views.",
  },
  {
    name: "Kashmir",
    description:
      "Known for alpine beauty, cool weather, and unforgettable scenery, Kashmir is ideal for premium nature-led trips and memorable group travel.",
  },
];

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore handpicked destinations for backpacking, trekking, weekend travel, and group adventures across India.",
};

export default function DestinationsPage() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Destinations"
          title="Trips shaped by mountains, culture, and shared experiences"
          description="Browse destinations that match your travel style, whether you want backpacking energy, scenic relaxation, or a proper trekking challenge."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {destination.name}
              </h2>

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