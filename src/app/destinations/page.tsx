import type { Metadata } from "next";
import DestinationsPageClient from "./DestinationsPageClient";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore handpicked destinations for backpacking, trekking, weekend travel, and group adventures across India.",
};

export default function DestinationsPage() {
  return <DestinationsPageClient />;
}