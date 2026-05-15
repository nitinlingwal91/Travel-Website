import Link from "next/link";
import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-white">travel website</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Budget trips, backpacking adventures, weekend escapes, and mountain
            journeys across India.
          </p>
        </div>

        <nav aria-label="Explore">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/trips">Trips</Link>
            </li>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Legal
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/cancellation-refund-policy">
                Cancellation Policy
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}