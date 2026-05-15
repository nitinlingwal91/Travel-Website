import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";
import InfoItem from "@/components/shared/InfoItem";
import { Trip } from "@/data/trips";

type TripDetailHeroProps = {
  trip: Trip;
};

export default function TripDetailHero({ trip }: TripDetailHeroProps) {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge>{trip.category}</Badge>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {trip.title}
            </h1>

            <p className="mt-3 text-base font-semibold text-teal-700 sm:text-lg">
              {trip.location}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {trip.overview}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/inquiry">Plan This Trip</Button>
              <Button href="/contact" variant="secondary">
                Ask a Question
              </Button>
            </div>

            <div className="mt-6 rounded-[1.25rem] border border-teal-100 bg-teal-50 p-4">
              <p className="text-sm leading-7 text-slate-700">
                Best for travelers who want a clear plan, transparent trip details, and support before confirming their route.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <InfoItem label="Duration" value={trip.duration} />
              <InfoItem label="Price" value={trip.price} />
              <InfoItem label="Difficulty" value={trip.difficulty} />
              <InfoItem label="Group size" value={trip.groupSize} />
            </div>
          </div>

          <div className="overflow-hidden 4x1 border border-slate-200 bg-white shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={trip.image}
              alt={trip.title}
              className="h-105 w-full object-cover sm:h-130"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}