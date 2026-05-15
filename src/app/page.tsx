import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedTrips from "@/components/home/FeaturedTrips";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FaqPreview from "@/components/home/FaqPreview";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Affordable Trips Across India",
  description:
    "Discover affordable backpacking trips, treks, weekend getaways, and curated travel experiences across India with Mad For Trip.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mad For Trip",
  url: "https://yourdomain.com",
  description:
    "Affordable backpacking trips, treks, weekend getaways, and curated travel experiences across India.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://yourdomain.com/trips?search={search_term_string}",
    },
    "query-input": {
      "@type": "PropertyValueSpecification",
      valueRequired: true,
      valueName: "search_term_string",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />
      <FeaturedTrips />
      <PopularDestinations />
      <WhyChooseUs />
      <Testimonials />
      <FaqPreview />
      <FinalCta />
    </>
  );
}