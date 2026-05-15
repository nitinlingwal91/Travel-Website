"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import { Trip } from "@/data/trips";

type TripFaqsProps = {
  trip: Trip;
};

export default function TripFaqs({ trip }: TripFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-stone-50 py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          FAQs
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Common questions before you book
        </h2>

        <div className="mt-10 space-y-4">
          {trip.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3x1 border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}