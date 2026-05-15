"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";

const faqs = [
  {
    question: "Are these trips suitable for beginners?",
    answer:
      "Yes, many of our trips are beginner-friendly. We clearly mention the difficulty level, trip style, and physical expectations so you can choose something that matches your comfort level.",
  },
  {
    question: "What is usually included in the package price?",
    answer:
      "Most packages include transport, stay, trip coordination, and selected experiences. The exact inclusions and exclusions are listed clearly on each trip detail page before you send an inquiry or book.",
  },
  {
    question: "What happens if my plan changes after booking?",
    answer:
      "Our cancellation and refund policy depends on the trip and departure timeline. We recommend checking the policy section on the specific trip page, and our support team can also guide you before confirmation.",
  },
  {
    question: "Can I join solo or do I need a group?",
    answer:
      "Solo travelers are welcome on many of our departures. Group trips are a great way to meet like-minded people while still enjoying a structured and supported travel experience.",
  },
];

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-stone-50 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Frequently asked questions"
              title="Clear answers before you plan your trip"
              description="Good travel FAQs reduce hesitation and help users move forward with confidence. These are some of the most common questions travelers ask before sending an inquiry."
            />

            <div className="mt-8">
              <Button href="/faq" variant="secondary">
                View All FAQs
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[3x1] border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded="true"
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                  >
                    <span className="text-base font-semibold text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      className="border-t border-slate-100 px-6 pb-6 pt-4"
                    >
                      <p className="text-sm leading-7 text-slate-600 sm:text-base">
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