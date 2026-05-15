import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mad For Trip for trip planning, booking help, custom itineraries, and travel support.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}