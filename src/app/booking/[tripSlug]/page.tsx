import type { Metadata } from "next";
import type { Route } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";
import { prisma } from "@/lib/prisma";

type BookingPageProps = {
  params: Promise<{
    tripSlug: string;
  }>;
};

async function getTripBySlug(slug: string) {
  return prisma.trip.findUnique({
    where: { slug },
  });
}

export async function generateMetadata({
  params,
}: BookingPageProps): Promise<Metadata> {
  const { tripSlug } = await params;
  const trip = await getTripBySlug(tripSlug);

  if (!trip) {
    return {
      title: "Booking Not Found",
      description: "The booking page you are looking for does not exist.",
    };
  }

  return {
    title: `Book ${trip.title}`,
    description: `Start your booking inquiry for ${trip.title} with Mad For Trip.`,
  };
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { tripSlug } = await params;
  const trip = await getTripBySlug(tripSlug);

  if (!trip) {
    notFound();
  }

  const inquiryHref = `/inquiry?trip=${trip.slug}` as Route;
  const tripDetailsHref = `/trips/${trip.slug}` as Route;

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Booking"
          title={`Book ${trip.title}`}
          description="Review the selected trip and continue with your booking inquiry."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Trip summary
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-stone-50 p-4">
                <p className="text-sm text-slate-500">Trip</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {trip.title}
                </p>
              </div>

              <div className="rounded-2xl bg-stone-50 p-4">
                <p className="text-sm text-slate-500">Price</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {trip.price}
                </p>
              </div>

              <div className="rounded-2xl bg-stone-50 p-4">
                <p className="text-sm text-slate-500">Duration</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {trip.duration}
                </p>
              </div>

              <div className="rounded-2xl bg-stone-50 p-4">
                <p className="text-sm text-slate-500">Category</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {trip.category}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm leading-7 text-slate-600">
                {trip.shortDescription}
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Continue booking
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              To confirm availability, travel dates, and final trip details,
              continue through the inquiry flow with this trip pre-selected.
            </p>

            <div className="mt-8 space-y-4">
              <Button href={inquiryHref} className="w-full">
                Continue to Inquiry
              </Button>

              <Button
                href={tripDetailsHref}
                variant="secondary"
                className="w-full"
              >
                Back to Trip Details
              </Button>
            </div>

            <div className="mt-8 rounded-2xl bg-stone-50 p-5">
              <h3 className="text-base font-bold text-slate-900">
                Before you continue
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Check your preferred departure timing.</li>
                <li>Review inclusions and exclusions carefully.</li>
                <li>Keep your group size and budget in mind.</li>
                <li>Use the inquiry form for custom questions or requests.</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}