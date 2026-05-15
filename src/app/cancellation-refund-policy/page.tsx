import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Cancellation and Refund Policy",
  description:
    "Read the cancellation and refund policy for Mad For Trip, including booking changes, cancellations, refunds, credits, and rescheduling terms.",
};

const sections = [
  {
    title: "1. Policy overview",
    content: [
      "This Cancellation and Refund Policy explains how cancellations, rescheduling requests, credits, and refunds are handled for trips and related services offered through Mad For Trip.",
      "By making a booking or payment, you agree to the cancellation terms shared on the relevant trip page, during communication, or in the booking process.",
    ],
  },
  {
    title: "2. How to request cancellation",
    content: [
      "All cancellation requests should be made in writing through the contact method shared during the booking or through the contact page on this website.",
      "A cancellation request is considered received only after it is acknowledged by our team.",
    ],
  },
  {
    title: "3. Cancellation charges",
    content: [
      "Cancellation charges may vary depending on the trip, departure timeline, accommodation commitments, transport bookings, seasonal conditions, and third-party vendor terms.",
      "Any applicable deductions, partial refunds, or non-refundable amounts will be communicated based on the specific booking and cancellation timing.",
    ],
  },
  {
    title: "4. Refund eligibility",
    content: [
      "Refund eligibility depends on the type of trip, notice period, payment stage, and any non-recoverable costs already committed on your behalf.",
      "Some bookings, deposits, convenience charges, processing charges, or partner-related costs may be non-refundable.",
    ],
  },
  {
    title: "5. Rescheduling and trip credits",
    content: [
      "In some cases, we may allow a booking to be rescheduled or converted into trip credit instead of issuing a direct refund.",
      "Rescheduling or credit options depend on availability, trip type, partner conditions, and how close the cancellation is to the departure date.",
    ],
  },
  {
    title: "6. No-show policy",
    content: [
      "If a traveler does not join the trip, misses departure, fails to provide required information on time, or is unavailable without valid coordination, the booking may be treated as a no-show.",
      "No-shows are usually not eligible for a refund unless explicitly stated otherwise for a specific trip.",
    ],
  },
  {
    title: "7. Company cancellation or operational changes",
    content: [
      "If a trip is cancelled, postponed, or significantly changed due to operational reasons, minimum group size, weather conditions, route restrictions, safety concerns, or third-party issues, we may offer an alternative departure, trip credit, partial adjustment, or refund depending on the situation.",
      "Any such resolution will be communicated based on the nature of the change and the costs already committed.",
    ],
  },
  {
    title: "8. Force majeure",
    content: [
      "Refunds or changes may be affected by circumstances beyond reasonable control, including weather disruption, natural events, government restrictions, route closures, strikes, political issues, health emergencies, or transport disruption.",
      "In such cases, we will try to offer a fair resolution, but full refunds may not always be possible where third-party costs are already non-recoverable.",
    ],
  },
  {
    title: "9. Refund timelines",
    content: [
      "If a refund is approved, it will be processed through the original payment method or another agreed method within a reasonable processing period.",
      "Actual refund timing may depend on banks, payment gateways, financial institutions, or third-party providers.",
    ],
  },
  {
    title: "10. Policy updates",
    content: [
      "We may update this policy from time to time to reflect business, operational, legal, or service changes.",
      "The latest version of the policy will always be available on this page with the updated effective date.",
    ],
  },
  {
    title: "11. Contact support",
    content: [
      "If you need help understanding cancellation terms for a specific trip, please contact us before booking or before submitting a cancellation request.",
    ],
  },
];

export default function CancellationRefundPolicyPage() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Legal"
          title="Cancellation and Refund Policy"
          description="This page explains how cancellations, rescheduling, credits, and refunds are handled for Mad For Trip bookings and trip inquiries."
        />

        <div className="mt-12 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm text-slate-500">Effective date: May 13, 2026</p>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h2>

                <div className="mt-3 space-y-3">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-slate-600 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}