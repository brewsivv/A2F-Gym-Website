import type { Metadata } from "next";
import { ConsultationForm } from "./consultation-form";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a consultation with A2F Gym for private coaching, public gym access, competition prep, nutrition support, or a tour in Rancho Cucamonga.",
  alternates: {
    canonical: "/book-consultation"
  },
  openGraph: {
    title: "Book a Consultation With A2F Gym",
    description:
      "Tell A2F where you want to start and get pointed toward the right training path.",
    url: "/book-consultation"
  }
};

export default function BookConsultationPage() {
  return (
    <main className="site-page">
      <section className="site-hero">
        <div className="site-container site-grid-2">
          <div>
            <p className="site-eyebrow">Book Consultation</p>
            <h1 className="site-display">Tell A2F where you want to start.</h1>
          </div>
          <div>
            <p className="site-lead">
              Answer a few quick questions so A2F can understand your goals,
              recommend the right location, and guide you toward public gym
              access, private coaching, prep, nutrition, or a tour.
            </p>
            <div className="site-button-row">
              <a className="site-button site-button-primary" href="#consultation-form">
                Start Form
              </a>
              <a className="site-button site-button-ghost" href="tel:19099217220">
                Call Instead
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="consultation-form">
        <div className="site-container">
          <ConsultationForm />
        </div>
      </section>
    </main>
  );
}
