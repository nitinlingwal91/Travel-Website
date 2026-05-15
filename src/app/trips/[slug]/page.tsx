import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TripDetailHero from "@/components/trips/TripDetailHero";
import TripOverview from "@/components/trips/TripOverview";
import TripItinerary from "@/components/trips/TripItinerary";
import TripFaqs from "@/components/trips/TripFaqs";
import { prisma } from "@/lib/prisma";

type TripDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getTripBySlug(slug: string) {
  return prisma.trip.findUnique({
    where: { slug },
    include: {
      itineraryItems: {
        orderBy: { order: "asc" },
      },
      faqs: {
        orderBy: { order: "asc" },
      },
    },
  });
}

export async function generateMetadata({
  params,
}: TripDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const trip = await getTripBySlug(slug);

  if (!trip) {
    return {
      title: "Trip Not Found",
      description: "The trip you are looking for does not exist.",
    };
  }

  return {
    title: trip.title,
    description: trip.shortDescription,
    openGraph: {
      title: trip.title,
      description: trip.shortDescription,
      siteName: "travel website",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: trip.image,
          width: 1200,
          height: 630,
          alt: trip.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: trip.title,
      description: trip.shortDescription,
      images: [trip.image],
    },
  };
}

export default async function TripDetailPage({
  params,
}: TripDetailPageProps) {
  const { slug } = await params;
  const trip = await getTripBySlug(slug);

  if (!trip) {
    notFound();
  }

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.title,
    description: trip.shortDescription,
    image: [trip.image],
    itinerary: trip.itineraryItems.map((item) => ({
      "@type": "ListItem",
      position: item.order,
      name: `${item.day} - ${item.title}`,
    })),
    touristType: trip.category,
    provider: {
      "@type": "Organization",
      name: "travel website",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: trip.price.replace(/[^\d]/g, ""),
      availability: "https://schema.org/InStock",
    },
  };

  const formattedTrip = {
    ...trip,
    itinerary: trip.itineraryItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tripJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <TripDetailHero trip={formattedTrip} />
      <TripOverview trip={formattedTrip} />
      <TripItinerary trip={formattedTrip} />
      <TripFaqs trip={formattedTrip} />
    </>
  );
}