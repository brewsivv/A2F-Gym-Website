import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about A2F Gym, a Rancho Cucamonga fitness brand connecting public gym access with personalized private coaching.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About A2F Gym",
    description:
      "A2F Gym connects public gym access with personalized private coaching in Rancho Cucamonga.",
    url: "/about"
  }
};

const values = [
  {
    label: "Training",
    title: "Results With Structure",
    text: "A2F is built for people who want more than random workouts. The brand creates an environment where training has direction."
  },
  {
    label: "Coaching",
    title: "Coaching When Needed",
    text: "Members can train independently at the public gym and step into private coaching when they want accountability or a custom plan."
  },
  {
    label: "Progress",
    title: "Fitness For Every Level",
    text: "From getting started to competition prep, A2F gives people a place to build strength, confidence, and discipline."
  }
];

export default function AboutPage() {
  return (
    <main className="site-page">
      <section className="site-hero">
        <div className="site-container site-grid-2">
          <div className="site-align-center">
            <p className="site-eyebrow">Addicted 2 Fitness</p>
            <h1 className="site-display">A2F is built for progress.</h1>
          </div>
          <div>
            <p className="site-lead">
              A2F Gym helps people get fit through a connected fitness
              experience: public gym access for consistency and private coaching
              for personalized transformation.
            </p>
            <div className="site-button-row">
              <a className="site-button site-button-primary" href="/locations">
                View Locations
              </a>
              <a className="site-button site-button-ghost" href="/contact">
                Contact A2F
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container site-grid-2 site-grid-center">
          <div className="site-media site-media-tall">
            <Image
              src="/images/owners.jpg"
              alt="A2F Gym owners"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div>
            <p className="site-eyebrow">The Brand</p>
            <h2 className="site-title">One mission. Multiple ways to train.</h2>
            <p className="site-copy">
              The current A2F private gym represents the personalized coaching
              side of the brand: direct support, accountability, nutrition, and
              serious transformation. The new public gym expands that standard
              by giving more people a place to start and stay consistent.
            </p>
            <p className="site-copy">
              Together, both locations create a simple path: start training,
              build momentum, and move into deeper coaching when your goals call
              for more.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section site-section-tight">
        <div className="site-container site-grid-3">
          {values.map((value) => (
            <article className="site-card" key={value.title}>
              <p className="site-eyebrow">{value.label}</p>
              <h3>{value.title}</h3>
              <p className="site-copy">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
