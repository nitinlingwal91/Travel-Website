"use client";

import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import Container from "@/components/shared/Container";

const faqs = [
  {
    question: "Are these trips suitable for beginners?",
    answer:
      "Yes, many of our trips are beginner-friendly. We clearly mention the difficulty level, trip style, and physical expectations so you can choose something that matches your comfort level.",
  },
  {
    question: "What is usually included in the package price?",
    answer:
      "Most packages include transport, stay, trip coordination, and selected experiences. Exact inclusions and exclusions are listed clearly on each trip detail page before you send an inquiry or book.",
  },
  {
    question: "What happens if my plan changes after booking?",
    answer:
      "Our cancellation and refund policy depends on the trip and departure timeline. We recommend checking the policy section on the specific trip page, and our support team can also guide you before confirmation.",
  },
  {
    question: "Can I join solo or do I need a group?",
    answer:
      "Solo travelers are welcome on many departures. Group trips are a great way to meet like-minded people while still enjoying a structured and supported travel experience.",
  },
];

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-[#f6f1ea] py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Clear answers before you plan your trip.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              These are some of the most common questions travelers ask before
              sending an inquiry or confirming a booking.
            </p>

            <Link
              href={"/faq" as Route}
              className="mt-8 inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-white"
            >
              View all FAQs
            </Link>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[28px] border border-slate-300/60 bg-white/85 shadow-sm"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-button-${index}`}
                    >
                      <span className="text-base font-semibold text-slate-950 sm:text-lg">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg font-medium transition ${
                          isOpen
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-[#f8f4ee] text-slate-700"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      className="border-t border-slate-200 px-6 pb-6 pt-4 sm:px-7"
                    >
                      <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}