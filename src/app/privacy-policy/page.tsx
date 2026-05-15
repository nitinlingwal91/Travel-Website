import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Mad For Trip, including how we collect, use, store, and protect your information.",
};

const sections = [
  {
    title: "1. Information we collect",
    content: [
      "We may collect personal information such as your name, email address, phone number, travel preferences, and any details you share when you contact us, submit an inquiry, or request a trip.",
      "We may also collect limited technical information such as browser type, device information, and basic usage data to improve website performance and user experience.",
    ],
  },
  {
    title: "2. How we use your information",
    content: [
      "We use your information to respond to inquiries, help you plan trips, share relevant travel details, process requests, and improve our services.",
      "We may also use your details to send important trip-related communication, customer support updates, or service information connected to your request.",
    ],
  },
  {
    title: "3. Sharing of information",
    content: [
      "We do not sell your personal information.",
      "We may share relevant details only when necessary with service providers, trip partners, or operational tools involved in delivering travel support, trip coordination, or website functionality.",
    ],
  },
  {
    title: "4. Cookies and analytics",
    content: [
      "Our website may use cookies or similar technologies to understand visitor behavior, improve performance, and enhance browsing experience.",
      "These tools may help us understand which pages are useful, how users navigate the website, and how we can improve content and usability.",
    ],
  },
  {
    title: "5. Data security",
    content: [
      "We take reasonable steps to protect your information from unauthorized access, misuse, or disclosure.",
      "However, no website or online system can guarantee absolute security, so users should share information responsibly.",
    ],
  },
  {
    title: "6. Your choices",
    content: [
      "You may contact us to update, correct, or request deletion of your personal information, subject to legal or operational requirements.",
      "You may also choose not to share optional information, though that may limit our ability to help with specific trip planning or support requests.",
    ],
  },
  {
    title: "7. Third-party links",
    content: [
      "Our website may contain links to external websites or platforms. We are not responsible for the privacy practices or content of those third-party services.",
    ],
  },
  {
    title: "8. Updates to this policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect service changes, legal updates, or operational improvements.",
      "Any revised version will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "9. Contact us",
    content: [
      "If you have questions about this Privacy Policy or how your information is used, please contact us through the contact page on this website.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Legal"
          title="Privacy Policy"
          description="This page explains how Mad For Trip collects, uses, and protects information shared through the website."
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