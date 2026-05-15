import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { prisma } from "@/lib/prisma";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getTripsByCategorySlug(slug: string) {
  const categoryName = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const trips = await prisma.trip.findMany({
    where: {
      category: {
        equals: categoryName,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    categoryName,
    trips,
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { categoryName, trips } = await getTripsByCategorySlug(slug);

  if (!trips.length) {
    return {
      title: "Category Not Found",
      description: "The category you are looking for does not exist.",
    };
  }

  return {
    title: `${categoryName} Trips`,
    description: `Explore ${categoryName.toLowerCase()} trips and travel options from Mad For Trip.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const { categoryName, trips } = await getTripsByCategorySlug(slug);

  if (!trips.length) {
    notFound();
  }

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Category"
          title={`${categoryName} Trips`}
          description={`Browse trips and travel experiences listed under ${categoryName.toLowerCase()}.`}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trips.map((trip) => (
            <article
              key={trip.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-teal-700">{trip.category}</p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                {trip.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {trip.shortDescription}
              </p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-900">
                  {trip.price}
                </span>

                <Link
                  href={`/trips/${trip.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  View Trip
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}