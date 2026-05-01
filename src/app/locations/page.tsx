import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find both A2F Gym locations in Rancho Cucamonga: the private coaching gym on Foothill Blvd and the public gym on Mission Park Dr.",
  alternates: {
    canonical: "/locations"
  },
  openGraph: {
    title: "A2F Gym Locations",
    description:
      "Find A2F Private Gym and A2F Public Gym in Rancho Cucamonga.",
    url: "/locations"
  }
};

const locations = [
  {
    name: "A2F Private Gym",
    address: "9542 Foothill Blvd, Rancho Cucamonga, CA 91730",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=9542%20Foothill%20Blvd%2C%20Rancho%20Cucamonga%2C%20CA%2091730",
    image: "/images/private-training.jpg",
    label: "Personalized coaching",
    copy: "The private gym is built for one-on-one coaching, semi-private training, nutrition support, transformation goals, and competition prep.",
    cta: "Explore Private Training",
    href: "/private-training"
  },
  {
    name: "A2F Public Gym",
    address: "11650 Mission Park Dr, Ste 114, Rancho Cucamonga, CA 91730",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11650%20Mission%20Park%20Dr%20Ste%20114%2C%20Rancho%20Cucamonga%2C%20CA%2091730",
    image: "/images/public-gym.jpg",
    label: "Independent training",
    copy: "The public gym gives members a clean, focused place to train, build consistency, and connect into deeper coaching when they want more.",
    cta: "Explore Public Gym",
    href: "/public-gym"
  }
];

export default function LocationsPage() {
  return (
    <main className="site-page">
      <section className="site-hero">
        <div className="site-container site-grid-2">
          <div>
            <p className="site-eyebrow">Rancho Cucamonga</p>
            <h1 className="site-display">Two locations. One A2F standard.</h1>
          </div>
          <div>
            <p className="site-lead">
              A2F connects independent gym access with personalized coaching so
              people can start, stay consistent, and level up without leaving the
              brand.
            </p>
            <div className="site-button-row">
              <a className="site-button site-button-primary" href="/contact">
                Contact A2F
              </a>
              <a className="site-button site-button-ghost" href="/public-gym#memberships">
                View Access Options
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container site-location-grid">
          {locations.map((location) => (
            <article className="site-location-card" key={location.name}>
              <div className="site-media">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                />
              </div>
              <div className="site-location-content">
                <p className="site-eyebrow">{location.label}</p>
                <h2 className="site-location-title">{location.name}</h2>
                <p className="site-copy">{location.copy}</p>
                <a
                  className="site-location-address"
                  href={location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  {location.address}
                </a>
                <div className="site-button-row">
                  <a className="site-button site-button-primary" href={location.href}>
                    {location.cta}
                  </a>
                  <a
                    className="site-button site-button-soft"
                    href={location.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open In Maps
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
