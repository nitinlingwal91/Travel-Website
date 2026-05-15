import Container from "@/components/shared/Container";

export default function TripsHero() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Trips
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Find trips that match your budget, time, and travel style
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Explore backpacking routes, weekend escapes, and trekking experiences across India with clear trip details and strong support before you book.
          </p>
        </div>
      </Container>
    </section>
  );
}