import Container from "@/components/shared/Container";
import { Trip } from "@/data/trips";

type TripItineraryProps = {
  trip: Trip;
};

export default function TripItinerary({ trip }: TripItineraryProps) {
  return (
    <section className="bg-white py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          Itinerary
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Day-wise trip plan
        </h2>

        <div className="mt-10 grid gap-5">
          {trip.itinerary.map((item) => (
            <div
              key={`${item.day}-${item.title}`}
              className="rounded-3x1 border border-slate-200 bg-stone-50 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                {item.day}
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}