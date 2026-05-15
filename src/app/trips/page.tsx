import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import TripCard from "@/components/trips/TripCard";

export const metadata: Metadata = {
  title: "Trips",
  description:
    "Explore backpacking trips, trekking adventures, weekend escapes, and group tours across India.",
};

async function getTrips() {
  return prisma.trip.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function TripsPage() {
  const trips = await getTrips();

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Trips"
          title="Find the trip that matches your style"
          description="Browse upcoming adventures built for backpackers, trekkers, weekend explorers, and group travelers."
        />

        {trips.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              No trips available right now
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We are updating new itineraries and destinations. Please check
              back soon for fresh travel experiences.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}