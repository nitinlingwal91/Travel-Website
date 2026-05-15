import type { Metadata } from "next";
import InquiryPageClient from "./InquiryPageClient";

export const metadata: Metadata = {
  title: "Trip Inquiry",
  description:
    "Submit your trip inquiry with destination, budget, dates, and preferences to get the most suitable travel option.",
};

export default function InquiryPage() {
  return <InquiryPageClient />;
}