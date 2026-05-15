import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Travel Website",
    template: "%s | Travel Website",
  },
  description:
    "Affordable trips, treks, backpacking routes, and curated travel experiences across India.",
  applicationName: "Travel Website",
  keywords: [
    "India travel website",
    "budget trips India",
    "backpacking trips",
    "trekking tours",
    "weekend getaways",
    "group trips India",
  ],
  openGraph: {
    title: "Travel Website",
    description:
      "Affordable backpacking trips, treks, weekend getaways, and curated travel experiences across India.",
    url: baseUrl,
    siteName: "Travel Website",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Website",
    description:
      "Affordable backpacking trips, treks, weekend getaways, and curated travel experiences across India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Travel Website",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Affordable backpacking trips, treks, weekend getaways, and curated travel experiences across India.",
    email: "hello@travel-website.com",
    telephone: "+91-0000000000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}