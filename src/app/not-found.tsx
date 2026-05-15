import Link from "next/link";
import Container from "@/components/shared/Container";

export default function NotFound() {
  return (
    <section className="bg-stone-50 py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-4x1 border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            The page you are looking for does not exist
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            The trip, destination, or page may have been removed, renamed, or never existed in the first place.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Go to Home
            </Link>

            <Link
              href="/trips"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              Explore Trips
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}