"use client";

import { useId, useState } from "react";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";

const whyChooseUsItems = [
  {
    title: "Transparent pricing",
    description:
      "Know what is included, what is optional, and what to expect before you commit.",
  },
  {
    title: "Smaller groups",
    description:
      "Better coordination, better comfort, and a more personal travel experience.",
  },
  {
    title: "Responsive support",
    description:
      "Get help before departure, during the trip, and after your journey ends.",
  },
];

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

const faqs = [
  {
    question: "Are these trips suitable for beginners?",
    answer:
      "Yes, many of our trips are beginner-friendly. We clearly mention the difficulty level, trip style, and physical expectations so you can choose something that matches your comfort level.",
  },
  {
    question: "What is usually included in the package price?",
    answer:
      "Most packages include transport, stay, trip coordination, and selected experiences. Exact inclusions and exclusions are listed clearly on each trip detail page before inquiry or booking.",
  },
  {
    question: "What happens if my plan changes after booking?",
    answer:
      "Cancellation and refund terms depend on the trip and departure timeline. You can check the policy on the specific trip page, and our support team can guide you before confirmation.",
  },
  {
    question: "Can I join solo or do I need a group?",
    answer:
      "Solo travelers are welcome on many departures. Group trips are a great way to meet like-minded people while still enjoying a structured and supported experience.",
  },
];

const slides = [
  { key: "why", label: "Why Choose Us" },
  { key: "stories", label: "Traveler Stories" },
  { key: "faq", label: "FAQs" },
] as const;

export default function TrustInfoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const carouselId = useId();

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
      aria-roledescription="carousel"
      aria-label="Trust information"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-slate-950/62" />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/45 via-slate-950/35 to-slate-950/78" />
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/55 via-transparent to-slate-950/55" />

      <Container className="relative z-10 flex min-h-screen items-center py-24 sm:py-28">
        <div className="flex min-h-screen w-full flex-col justify-center">
          <div className="border-b border-white/10 pb-6">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/65 sm:text-sm">
                Before you book
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Everything travelers usually want to know before they choose.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Explore why people choose us, hear real traveler stories, and
                get clear answers before planning your next trip.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Trust content sections"
              className="mt-6 flex flex-wrap gap-2"
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.key}
                  id={`${carouselId}-tab-${slide.key}`}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls={`${carouselId}-panel-${slide.key}`}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeIndex === index
                      ? "bg-white text-slate-950"
                      : "border border-white/15 bg-white/10 text-white/80 hover:bg-white/15"
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden pt-8 sm:pt-10">
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <section
                id={`${carouselId}-panel-why`}
                role="tabpanel"
                aria-labelledby={`${carouselId}-tab-why`}
                className="w-full shrink-0 py-4"
              >
                <div className="grid gap-6 md:grid-cols-3">
                  {whyChooseUsItems.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                    >
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/55">
                        Why choose us
                      </p>
                      <h3 className="mt-4 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section
                id={`${carouselId}-panel-stories`}
                role="tabpanel"
                aria-labelledby={`${carouselId}-tab-stories`}
                className="w-full shrink-0 py-4"
              >
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <article className="rounded-[30px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/55">
                      Featured story
                    </p>
                    <p className="mt-6 text-2xl font-semibold leading-relaxed tracking-[-0.03em] text-white sm:text-3xl">
                      “{testimonials[0].review}”
                    </p>
                    <div className="mt-8 border-t border-white/10 pt-5">
                      <p className="text-lg font-semibold text-white">
                        {testimonials[0].name}
                      </p>
                      <p className="mt-1 text-sm text-white/65">
                        {testimonials[0].trip}
                      </p>
                    </div>
                  </article>

                  <div className="grid gap-6">
                    {testimonials.slice(1).map((item) => (
                      <article
                        key={`${item.name}-${item.trip}`}
                        className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                      >
                        <p className="text-lg font-semibold text-white">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-white/65">{item.trip}</p>
                        <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                          “{item.review}”
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    href="/reviews"
                    variant="secondary"
                    className="border border-white/25 bg-white/10 text-white hover:bg-white/20"
                  >
                    View all reviews
                  </Button>
                </div>
              </section>

              <section
                id={`${carouselId}-panel-faq`}
                role="tabpanel"
                aria-labelledby={`${carouselId}-tab-faq`}
                className="w-full shrink-0 py-4"
              >
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div className="max-w-xl">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/65 sm:text-sm">
                      Frequently asked questions
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                      Clear answers before you plan your trip.
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                      These are some of the most common questions travelers ask
                      before sending an inquiry or confirming a booking.
                    </p>

                    <div className="mt-8">
                      <Button
                        href="/faq"
                        variant="secondary"
                        className="border border-white/25 bg-white/10 text-white hover:bg-white/20"
                      >
                        View all FAQs
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaqIndex === index;

                      return (
                        <div
                          key={faq.question}
                          className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-sm"
                        >
                          <h4>
                            <button
                              type="button"
                              onClick={() =>
                                setOpenFaqIndex((current) =>
                                  current === index ? null : index
                                )
                              }
                              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                              aria-expanded={isOpen}
                              aria-controls={`carousel-faq-panel-${index}`}
                              id={`carousel-faq-button-${index}`}
                            >
                              <span className="text-base font-semibold text-white sm:text-lg">
                                {faq.question}
                              </span>

                              <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg transition ${
                                  isOpen
                                    ? "border-white bg-white text-slate-950"
                                    : "border-white/15 bg-white/10 text-white"
                                }`}
                                aria-hidden="true"
                              >
                                {isOpen ? "−" : "+"}
                              </span>
                            </button>
                          </h4>

                          {isOpen && (
                            <div
                              id={`carousel-faq-panel-${index}`}
                              role="region"
                              aria-labelledby={`carousel-faq-button-${index}`}
                              className="border-t border-white/10 px-6 pb-6 pt-4"
                            >
                              <p className="text-sm leading-7 text-white/75 sm:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="pt-6">
            <div className="flex items-center justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${slide.label}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? "w-10 bg-white" : "w-2.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}