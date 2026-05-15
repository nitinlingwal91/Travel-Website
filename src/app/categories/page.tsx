import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse trip categories like backpacking, trekking, weekend escapes, and group trips at Mad For Trip.",
};

const categories = [
  {
    name: "Backpacking",
    slug: "backpacking",
    description:
      "Budget-friendly trips built for flexible travelers who want scenic routes, social energy, and memorable mountain experiences.",
  },
  {
    name: "Trekking",
    slug: "trekking",
    description:
      "Explore guided trekking experiences with mountain trails, rewarding views, and routes suited to different difficulty levels.",
  },
  {
    name: "Weekend Escape",
    slug: "weekend-escape",
    description:
      "Short trips designed for quick breaks, relaxed planning, and refreshing travel without long leave requirements.",
  },
  {
    name: "Group Trip",
    slug: "group-trip",
    description:
      "Travel with like-minded people through curated departures that balance fun, support, and smooth coordination.",
  },
  {
    name: "Custom Trip",
    slug: "custom-trip",
    description:
      "Get flexible recommendations and personalized planning based on your destination interest, duration, and budget.",
  },
];

export default function CategoriesPage() {
  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Categories"
          title="Find trips by travel style"
          description="Browse categories that match how you like to travel, whether you want backpacking energy, a trekking challenge, a short weekend plan, or a custom recommendation."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.slug}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {category.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {category.description}
              </p>

              <div className="mt-6">
                <Link
                  href={`/categories/${category.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  Explore Category
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}