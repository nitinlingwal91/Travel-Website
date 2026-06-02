import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

export default function FinalCta() {
  return (
    <section className="bg-[#f6f1ea] py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-4x1 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/60 via-slate-950/35 to-slate-950/60" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-slate-950/45" />

          <div className="relative px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/70 sm:text-sm">
                Ready for your next trip
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Start planning a trip that feels exciting, clear, and worth it.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                Explore curated mountain getaways, backpacking routes, and
                destination-led escapes designed for travelers who want strong
                experiences without unnecessary confusion.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href="/trips"
                  className="bg-white text-slate-950 shadow-none hover:bg-white/90"
                >
                  Explore Trips
                </Button>

                <Button
                  href="/contact"
                  variant="secondary"
                  className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  Send Inquiry
                </Button>
              </div>

              <p className="mt-6 text-sm text-white/65">
                Need help first? Tell us your budget, trip duration, and preferred
                destination, and we’ll help you shortlist the right option.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}