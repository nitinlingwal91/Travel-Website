import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";

const trips = [
  {
    title: "Kasol Kheerganga Backpacking",
    duration: "4N/5D",
    price: "₹7,999",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kedarkantha Winter Trek",
    duration: "5N/6D",
    price: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tirthan Jibhi Weekend Escape",
    duration: "3N/4D",
    price: "₹6,499",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FeaturedTrips() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="Featured trips"
            title="Handpicked adventures for every kind of traveler"
            description="Start with the experiences most loved by our community, from scenic weekend escapes to unforgettable mountain journeys."
          />

          <Button href="/trips" variant="secondary">
            View All Trips
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trips.map((trip) => (
            <div
              key={trip.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-teal-700">
                    {trip.duration}
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    From {trip.price}
                  </p>
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {trip.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Small-group travel, curated stays, and memorable routes
                  designed for travelers who want value and adventure together.
                </p>

                <div className="mt-6">
                  <Button href="/trips">Explore Trip</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}