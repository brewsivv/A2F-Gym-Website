import type { Metadata } from "next";
import { ScrollEffects } from "@/components/scroll-effects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "A2F Gym | Private Training and Public Gym Access",
    template: "%s | A2F Gym"
  },
  description:
    "A2F Gym offers private training, semi-private coaching, competition prep, online support, and a new public gym membership experience in Rancho Cucamonga.",
  metadataBase: new URL("https://a2fgym.com"),
  applicationName: "A2F Gym",
  authors: [{ name: "A2F Gym" }],
  creator: "A2F Gym",
  publisher: "A2F Gym",
  keywords: [
    "A2F Gym",
    "Addicted 2 Fitness",
    "Rancho Cucamonga gym",
    "private training Rancho Cucamonga",
    "public gym Rancho Cucamonga",
    "competition prep",
    "personal training",
    "InBody analysis"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "A2F Gym",
    description:
      "Two locations. One results-driven brand. Explore private training and public gym memberships at A2F Gym.",
    url: "https://a2fgym.com",
    siteName: "A2F Gym",
    locale: "en_US",
    images: [
      {
        url: "/images/a2f-bodybuilding-gym-rancho-cucamonga-header.png",
        width: 1200,
        height: 630,
        alt: "A2F Gym Rancho Cucamonga"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "A2F Gym",
    description:
      "Explore private training and public gym access at A2F Gym.",
    images: ["/images/a2f-bodybuilding-gym-rancho-cucamonga-header.png"]
  }
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "A2F Gym",
  alternateName: "Addicted 2 Fitness",
  url: "https://a2fgym.com",
  telephone: "+1-909-921-7220",
  email: "a2fgym@gmail.com",
  image: "https://a2fgym.com/images/a2f-bodybuilding-gym-rancho-cucamonga-header.png",
  address: [
    {
      "@type": "PostalAddress",
      name: "A2F Private Gym",
      streetAddress: "9542 Foothill Blvd",
      addressLocality: "Rancho Cucamonga",
      addressRegion: "CA",
      postalCode: "91730",
      addressCountry: "US"
    },
    {
      "@type": "PostalAddress",
      name: "A2F Public Gym",
      streetAddress: "11650 Mission Park Dr, Ste 114",
      addressLocality: "Rancho Cucamonga",
      addressRegion: "CA",
      postalCode: "91730",
      addressCountry: "US"
    }
  ],
  areaServed: "Rancho Cucamonga, CA",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "04:00",
      closes: "22:00"
    }
  ],
  makesOffer: [
    { "@type": "Offer", name: "Private Training" },
    { "@type": "Offer", name: "Semi-Private Training" },
    { "@type": "Offer", name: "Competition Prep" },
    { "@type": "Offer", name: "Public Gym Access" },
    { "@type": "Offer", name: "Day Pass" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <ScrollEffects />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
