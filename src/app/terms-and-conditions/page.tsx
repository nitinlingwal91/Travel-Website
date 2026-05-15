import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions for using the Mad For Trip website, travel inquiries, bookings, and related services.",
};

const sections = [
  {
    title: "1. Acceptance of terms",
    content: [
      "By accessing or using this website, you agree to these Terms and Conditions. If you do not agree with any part of these terms, please do not use the website or related services.",
    ],
  },
  {
    title: "2. Use of the website",
    content: [
      "You agree to use this website only for lawful purposes and in a way that does not harm the website, the business, or other users.",
      "You must not misuse the website by attempting unauthorized access, distributing harmful content, interfering with functionality, or submitting false information.",
    ],
  },
  {
    title: "3. Trip information and availability",
    content: [
      "We try to keep trip details, pricing, inclusions, exclusions, schedules, and destination information accurate and updated.",
      "However, trip availability, pricing, routes, accommodations, inclusions, and schedules may change based on operational requirements, seasonal conditions, third-party providers, or destination-specific factors.",
    ],
  },
  {
    title: "4. Inquiries and bookings",
    content: [
      "Submitting an inquiry through the website does not automatically confirm a booking.",
      "A trip is considered confirmed only after required communication, availability verification, and any applicable payment or booking process is completed.",
    ],
  },
  {
    title: "5. Payments",
    content: [
      "If payment is required for a booking, you agree to provide accurate payment and billing information.",
      "Prices, payment timelines, advance amounts, and booking conditions may vary by trip and will be shared during the booking process or on the relevant trip page.",
    ],
  },
  {
    title: "6. Cancellations and refunds",
    content: [
      "Cancellation and refund rules may vary depending on the trip, departure date, partner terms, and booking stage.",
      "Please review the relevant cancellation policy and trip-specific booking terms before making payment or requesting confirmation.",
    ],
  },
  {
    title: "7. Traveler responsibility",
    content: [
      "Travelers are responsible for reviewing trip details, physical difficulty, suitability, inclusions, exclusions, and any personal preparedness required for participation.",
      "You are also responsible for providing accurate personal information and complying with instructions, safety guidance, and destination-specific requirements.",
    ],
  },
  {
    title: "8. Intellectual property",
    content: [
      "All website content, including branding, text, design, graphics, and other original material, belongs to Mad For Trip unless stated otherwise.",
      "You may not copy, reproduce, distribute, or reuse website content for commercial purposes without written permission.",
    ],
  },
  {
    title: "9. Third-party services",
    content: [
      "Some trips or website features may involve third-party providers, destinations, operators, transport services, or external platforms.",
      "We are not responsible for external websites, third-party content, or separate services not directly controlled by us.",
    ],
  },
  {
    title: "10. Limitation of liability",
    content: [
      "We work to provide accurate information and a smooth experience, but we do not guarantee that the website will always be error-free, uninterrupted, or fully up to date.",
      "To the extent permitted by law, we are not liable for indirect, incidental, or consequential losses arising from website use, trip changes, third-party issues, or reliance on website content.",
    ],
  },
  {
    title: "11. Changes to these terms",
    content: [
      "We may update these Terms and Conditions from time to time to reflect service, legal, or operational changes.",
      "The latest version will always be available on this page with the updated effective date.",
    ],
  },
  {
    title: "12. Contact information",
    content: [
      "If you have questions about these Terms and Conditions, please contact us through the contact page on this website.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Legal"
          title="Terms and Conditions"
          description="These terms explain the rules, responsibilities, and conditions related to using the Mad For Trip website and associated travel services."
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