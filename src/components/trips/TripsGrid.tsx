import Container from "@/components/shared/Container";
import TripCard from "@/components/trips/TripCard";

type TripsGridTrip = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  price: string;
  location: string;
  shortDescription: string;
  duration: string;
  difficulty: string;
};

type TripsGridProps = {
  trips: TripsGridTrip[];
};

export default function TripsGrid({ trips }: TripsGridProps) {
  return (
    <section className="pb-20">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Available trips
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Browse curated travel experiences
            </h2>
          </div>

          <p className="text-sm text-slate-600">{trips.length} trips found</p>
        </div>

        {trips.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trips.map((trip) => (
              <TripCard key={trip.slug} trip={trip} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">No trips found</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Try changing your filters to explore more destinations and trip
              styles.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}