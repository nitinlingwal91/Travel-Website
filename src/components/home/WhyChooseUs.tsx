import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

const reasons = [
  {
    title: "Transparent pricing",
    description:
      "No confusing package language. We keep trip inclusions, exclusions, and pricing details clear so travelers know exactly what they are paying for.",
  },
  {
    title: "Curated small-group experiences",
    description:
      "Our trips are designed for travelers who want adventure, community, and a smoother experience without the chaos of overcrowded group travel.",
  },
  {
    title: "Responsive travel support",
    description:
      "From planning your route to handling on-trip questions, our team stays available before departure and throughout the journey.",
  },
  {
    title: "Destination-first trip design",
    description:
      "Each itinerary is built around the actual destination experience, not just transport and hotel listings, so the trip feels memorable and practical.",
  },
];

const trustPoints = [
  "Verified traveler reviews and real trip feedback",
  "Clear cancellation and refund information",
  "Mobile-friendly inquiry and booking journey",
  "Fast support for trip planning and doubts",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-stone-50 py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Why choose us"
              title="Built for travelers who want confidence before they commit"
              description="A great travel website should reduce uncertainty, answer important questions clearly, and help visitors feel supported from the moment they land on the page."
            />

            <div className="mt-8 space-y-4">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                >
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                    ✓
                  </div>

                  <p className="text-sm leading-7 text-slate-700 sm:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-lg font-bold text-teal-700">
                  {reason.title.charAt(0)}
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}