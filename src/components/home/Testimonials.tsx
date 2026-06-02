import Link from "next/link";
import type { Route } from "next";
import Container from "@/components/shared/Container";

const testimonials = [
  {
    name: "Aman Sharma",
    trip: "Kasol Kheerganga Backpacking",
    review:
      "Everything felt smooth from the first inquiry to the final day of the trip. The group vibe was great, the stay was comfortable, and the whole experience felt worth every rupee.",
  },
  {
    name: "Neha Verma",
    trip: "Kedarkantha Winter Trek",
    review:
      "This was my first trek and I was honestly nervous, but the team explained everything clearly and kept the experience beginner-friendly. I would happily travel with them again.",
  },
  {
    name: "Rohit Bisht",
    trip: "Jibhi Tirthan Escape",
    review:
      "The itinerary felt well planned, not rushed. We had enough time to enjoy the place, take photos, and just relax. It was a very good balance of budget and experience.",
  },
];

export default function Testimonials() {
  const featured = testimonials[0];
  const secondary = testimonials.slice(1);

  return (
    <section className="bg-[#fbf8f3] py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
              Traveler stories
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Real words from people who actually took the trip.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Honest feedback helps new travelers understand the experience,
              support quality, and the overall feel of each journey.
            </p>
          </div>

          <Link
            href={"/reviews" as Route}
            className="inline-flex items-center self-start rounded-full border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-white"
          >
            View all reviews
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-4x1 border border-slate-300/60 bg-white/90 p-7 shadow-sm sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Featured story
            </p>

            <p className="mt-6 max-w-2xl text-2xl font-semibold leading-relaxed tracking-[-0.03em] text-slate-950 sm:text-3xl">
              “{featured.review}”
            </p>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-lg font-semibold text-slate-950">{featured.name}</p>
              <p className="mt-1 text-sm text-slate-600">{featured.trip}</p>
            </div>
          </article>

          <div className="grid gap-6">
            {secondary.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.trip}`}
                className="rounded-[28px] border border-slate-300/60 bg-white/80 p-6 shadow-sm"
              >
                <p className="text-lg font-semibold text-slate-950">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {testimonial.trip}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                  “{testimonial.review}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}