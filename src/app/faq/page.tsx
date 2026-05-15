import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about bookings, custom trips, payments, group departures, and travel planning support at Mad For Trip.",
};

export default async function FaqPage() {
  const faqs = await prisma.faqItem.findMany({
    where: {
      isActive: true,
    },
    orderBy: [{ category: "asc" }, { order: "asc" }],
  });

  const groupedFaqs = faqs.reduce<Record<string, typeof faqs>>((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <SectionTitle
          eyebrow="FAQ"
          title="Answers before you plan"
          description="Everything travelers usually ask before booking, joining a group departure, or requesting a custom trip."
        />

        <div className="mt-12 space-y-10">
          {Object.entries(groupedFaqs).map(([category, items]) => (
            <div
              key={category}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900">{category}</h2>

              <div className="mt-6 divide-y divide-slate-200">
                {items.map((faq) => (
                  <div key={faq.id} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}