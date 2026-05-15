import Image from "next/image";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-50">
      <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Adventure trips across India
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Budget-friendly mountain trips, weekend escapes, and backpacking
            adventures.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore handpicked trekking, backpacking, and group travel
            experiences designed for young travelers who want memorable journeys
            without overpaying.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/trips">Explore Trips</Button>
            <Button href="/contact" variant="secondary">
              Plan Your Trip
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">50+</p>
              <p className="mt-1 text-sm text-slate-600">
                Curated departures and adventure experiences
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">4.8/5</p>
              <p className="mt-1 text-sm text-slate-600">
                Loved by travelers for value, support, and vibe
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-2xl font-bold text-slate-900">24/7</p>
              <p className="mt-1 text-sm text-slate-600">
                Trip assistance before, during, and after travel
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-teal-100 blur-3xl lg:block" />
          <div className="absolute -right-8 bottom-8 hidden h-40 w-40 rounded-full bg-amber-100 blur-3xl lg:block" />

          <div className="relative overflow-hidden rounded-4x1 border border-slate-200 bg-white shadow-xl">
            <div className="relative h-105 w-full sm:h-130">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Travelers exploring mountain landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6">
              <div className="max-w-md rounded-2xl bg-white/95 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-teal-700">
                  Popular right now
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  Kasol • Kheerganga • Manali Backpacking
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  4N/5D adventure with scenic stays, guided experiences, and
                  budget-friendly pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}