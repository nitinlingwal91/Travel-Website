import Container from "@/components/shared/Container";
import { Trip } from "@/data/trips";

type TripOverviewProps = {
  trip: Trip;
};

export default function TripOverview({ trip }: TripOverviewProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Overview
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              What makes this trip worth it
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {trip.overview}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {trip.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-slate-200 bg-stone-50 px-5 py-4 text-sm leading-7 text-slate-700"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3x1 border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Inclusions</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                {trip.inclusions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3x1 border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Exclusions</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                {trip.exclusions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}