import Container from "@/components/shared/Container";

const trustPoints = [
  {
    title: "Clear pricing",
    description:
      "Trip inclusions, exclusions, and costs are presented simply so travelers understand what they are booking.",
  },
  {
    title: "Smaller groups",
    description:
      "Our journeys are designed for better coordination, better experiences, and a more personal travel atmosphere.",
  },
  {
    title: "Responsive support",
    description:
      "From planning questions to on-trip help, our team stays available when travelers actually need assistance.",
  },
];

const highlights = [
  "Verified traveler feedback",
  "Carefully selected itineraries",
  "Quick response for trip queries",
  "Designed for mobile-first browsing",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f6f1ea] py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
              Why travel with us
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
              Built to make travel decisions feel easier, clearer, and more reliable.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Great travel planning starts with clarity. We focus on transparent
              information, thoughtful itineraries, and support that helps travelers
              feel confident before they book.
            </p>

            <div className="mt-8 space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-slate-300/70 bg-white/70 px-4 py-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-slate-700 sm:text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {trustPoints.map((point, index) => (
              <article
                key={point.title}
                className="rounded-[28px] border border-slate-300/60 bg-white/80 p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-900">
                      {point.title}
                    </h3>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Trusted
                  </span>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}