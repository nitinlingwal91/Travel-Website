"use client";

import { useEffect, useId, useState } from "react";
import Container from "@/components/shared/Container";

const reasons = [
  {
    id: "pricing",
    label: "Transparent pricing",
    title: "Know what you are paying for before you commit.",
    description:
      "We keep inclusions, exclusions, and pricing clear so travelers can compare options without confusion or hidden surprises.",
    points: [
      "Clear inclusions and exclusions",
      "Simple trip cost breakdown",
      "No vague package wording",
    ],
    stat: "Clear booking details",
  },
  {
    id: "groups",
    label: "Smaller groups",
    title: "Better journeys start with better group size.",
    description:
      "Smaller departures create smoother coordination, a more personal atmosphere, and a better overall travel experience.",
    points: [
      "Less crowding",
      "More comfortable coordination",
      "Better group experience",
    ],
    stat: "Designed for smoother departures",
  },
  {
    id: "support",
    label: "Responsive support",
    title: "Help before, during, and after the trip.",
    description:
      "From first questions to on-trip concerns, our team stays available when travelers need quick and practical support.",
    points: [
      "Faster response times",
      "Planning help before departure",
      "On-trip assistance when needed",
    ],
    stat: "Support that stays available",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const baseId = useId();

  const activeReason = reasons[activeIndex];

  useEffect(() => {
    setIsVisible(false);
    const timer = window.setTimeout(() => setIsVisible(true), 40);
    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((index + 1) % reasons.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex((index - 1 + reasons.length) % reasons.length);
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(reasons.length - 1);
    }
  };

  return (
    <section className="bg-[#f6f1ea] py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
              Why choose us
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Travel planning should feel clearer, calmer, and more dependable.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              We focus on the things that reduce uncertainty for travelers:
              transparent information, smoother coordination, and support that
              stays available throughout the journey.
            </p>

            <div className="mt-8 rounded-[28px] border border-slate-300/60 bg-white/70 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                What matters most
              </p>

              <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {activeReason.stat}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Switch between the reasons to explore what makes the experience
                easier for travelers before they decide to book.
              </p>
            </div>
          </div>

          <div>
            <div
              role="tablist"
              aria-label="Why choose us reasons"
              className="flex flex-wrap gap-3"
            >
              {reasons.map((reason, index) => {
                const isActive = activeIndex === index;
                const tabId = `${baseId}-tab-${reason.id}`;
                const panelId = `${baseId}-panel-${reason.id}`;

                return (
                  <button
                    key={reason.id}
                    id={tabId}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={panelId}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-950 text-white"
                        : "border border-slate-300 bg-white/80 text-slate-700 hover:bg-white"
                    }`}
                  >
                    {reason.label}
                  </button>
                );
              })}
            </div>

            <div
              id={`${baseId}-panel-${activeReason.id}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${activeReason.id}`}
              tabIndex={0}
              className={`mt-6 rounded-[28px] border border-slate-300/60 bg-white/80 p-6 shadow-sm transition-all duration-300 ease-out motion-reduce:transition-none sm:p-7 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-1 opacity-0"
              }`}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Selected reason
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                {activeReason.title}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                {activeReason.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {activeReason.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-slate-200 bg-[#f8f4ee] px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}