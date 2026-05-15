import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";

const destinations = [
  {
    name: "Kasol & Parvati Valley",
    slug: "kasol-parvati-valley",
    trips: "12 trips",
    description:
      "A backpacker favorite with riverside cafés, scenic trails, village stays, and easy access to Kheerganga adventures.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Manali",
    slug: "manali",
    trips: "18 trips",
    description:
      "Perfect for snow lovers, weekend travelers, and mountain road trips with a mix of sightseeing and adventure.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Jibhi & Tirthan",
    slug: "jibhi-tirthan",
    trips: "8 trips",
    description:
      "Peaceful valleys, wooden cottages, waterfalls, and slow-travel escapes ideal for short rejuvenating getaways.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kedarkantha",
    slug: "kedarkantha",
    trips: "6 trips",
    description:
      "One of the most loved beginner-friendly Himalayan treks with snowy trails, summit views, and forest camps.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="Popular destinations"
            title="Choose your next mountain escape"
            description="Explore the destinations travelers keep coming back to, from backpacking hubs to scenic Himalayan getaways."
          />

          <Button href="/destinations" variant="secondary">
            View All Destinations
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {destinations.map((destination) => (
            <article
              key={destination.slug}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid md:grid-cols-[1.2fr_1fr]">
                <div className="relative overflow-hidden min-h-72">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                      {destination.trips}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                      {destination.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                      {destination.description}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Button href={`/destinations/${destination.slug}`}>
                      Explore Destination
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}