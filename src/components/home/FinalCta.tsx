import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function FinalCta() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-4x1 bg-slate-950 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-teal-600/20 blur-3xl" />
          <div className="absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
                Ready for your next trip?
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Start planning a trip that feels exciting, clear, and worth it.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Explore curated mountain getaways, backpacking routes, and
                weekend escapes built for travelers who want strong experiences
                without unnecessary confusion or inflated pricing.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/trips">Explore Trips</Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  Send Inquiry
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
              <h3 className="text-xl font-bold text-white">Why start here?</h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
                    ✓
                  </span>
                  <p className="text-sm leading-7 text-slate-300">
                    Compare trips by destination, duration, and budget.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
                    ✓
                  </span>
                  <p className="text-sm leading-7 text-slate-300">
                    Get clarity on itinerary, inclusions, and support before you
                    commit.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
                    ✓
                  </span>
                  <p className="text-sm leading-7 text-slate-300">
                    Choose between browsing on your own or asking for a custom
                    recommendation.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-sm text-slate-300">Prefer help first?</p>
                <p className="mt-1 text-base font-semibold text-white">
                  Tell us your budget, duration, and destination interest —
                  we’ll guide you to the right trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}