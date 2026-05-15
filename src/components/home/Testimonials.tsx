import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";

const testimonials = [
  {
    name: "Aman Sharma",
    trip: "Kasol Kheerganga Backpacking",
    rating: "5.0",
    review:
      "Everything felt smooth from the first inquiry to the final day of the trip. The group vibe was great, the stay was comfortable, and the whole experience felt worth every rupee.",
  },
  {
    name: "Neha Verma",
    trip: "Kedarkantha Winter Trek",
    rating: "4.9",
    review:
      "This was my first trek and I was honestly nervous, but the team explained everything clearly and kept the experience beginner-friendly. I would happily travel with them again.",
  },
  {
    name: "Rohit Bisht",
    trip: "Jibhi Tirthan Escape",
    rating: "5.0",
    review:
      "The itinerary felt well planned, not rushed. We had enough time to enjoy the place, take photos, and just relax. It was a very good balance of budget and experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="Traveler stories"
            title="Real feedback from people who actually took the trip"
            description="Social proof matters in travel. These reviews help new travelers understand the experience, the support quality, and the kind of value they can expect."
          />

          <Button href="/reviews" variant="secondary">
            View All Reviews
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.trip}`}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-stone-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-slate-600">{testimonial.trip}</p>
                  </div>
                </div>

                <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                  ★ {testimonial.rating}
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base">
                “{testimonial.review}”
              </p>

              <div className="mt-6 flex items-center gap-1 text-amber-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-slate-200 bg-slate-900 px-6 py-8 text-white shadow-lg sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold">4.8/5</p>
              <p className="mt-2 text-sm text-slate-300">
                Average traveler satisfaction across featured departures
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">2,000+</p>
              <p className="mt-2 text-sm text-slate-300">
                Happy travelers explored destinations with us
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">90%</p>
              <p className="mt-2 text-sm text-slate-300">
                Travelers say they would recommend the experience to friends
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}