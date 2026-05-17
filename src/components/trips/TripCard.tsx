import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import Button from "@/components/shared/Button";
import Badge from "@/components/shared/Badge";

type TripCardProps = {
  trip: {
    id: string;
    slug: string;
    title: string;
    image: string;
    category: string;
    price: string;
    location: string;
    shortDescription: string;
    duration: string;
    difficulty: string;
  };
};

export default function TripCard({ trip }: TripCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
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
          <Badge>{trip.category}</Badge>
          <p className="text-sm font-semibold text-slate-900">
            From {trip.price}
          </p>
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
          {trip.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-teal-700">
          {trip.location}
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {trip.shortDescription}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
          <div className="rounded-xl bg-stone-50 px-4 py-3">
            <p className="font-semibold text-slate-900">{trip.duration}</p>
            <p>Duration</p>
          </div>

          <div className="rounded-xl bg-stone-50 px-4 py-3">
            <p className="font-semibold text-slate-900">{trip.difficulty}</p>
            <p>Difficulty</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={`/trips/${trip.slug}` as Route}>View Details</Button>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Send Inquiry
          </Link>
        </div>
      </div>
    </article>
  );
}