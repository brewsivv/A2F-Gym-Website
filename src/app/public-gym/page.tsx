import type { Metadata } from "next";
import Image from "next/image";
import styles from "./public-gym.module.css";

export const metadata: Metadata = {
  title: "Public Gym",
  description:
    "Train at A2F Public Gym in Rancho Cucamonga with focused equipment, structured support, progress tracking, and a path into private coaching.",
  alternates: {
    canonical: "/public-gym"
  },
  openGraph: {
    title: "A2F Public Gym",
    description:
      "A clean, focused public gym in Rancho Cucamonga built for consistency, confidence, and a path into deeper coaching.",
    url: "/public-gym"
  }
};

const benefits = [
  {
    title: "Know Your Body",
    text: "InBody composition tracking helps you see progress beyond the scale.",
    icon: (
      <path
        d="M12 3a7 7 0 0 0-7 7c0 5.25 7 11 7 11s7-5.75 7-11a7 7 0 0 0-7-7Zm0 2a5 5 0 0 1 5 5c0 2.61-2.92 6.25-5 8.37C9.92 16.25 7 12.61 7 10a5 5 0 0 1 5-5Zm0 2.5 1.12 2.27 2.5.36-1.81 1.76.43 2.49L12 13.2l-2.24 1.18.43-2.49-1.81-1.76 2.5-.36L12 7.5Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Train With Direction",
    text: "Workouts of the week give your sessions structure when you want guidance.",
    icon: (
      <path
        d="M4 5h16v3H4V5Zm0 5h10v3H4v-3Zm0 5h16v3H4v-3Zm13-5 3 2.5-3 2.5v-5Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Show Up Consistently",
    text: "Extended access makes it easier to fit training into real life.",
    icon: (
      <path
        d="M7 2h2v3h6V2h2v3h3v16H4V5h3V2Zm11 8H6v9h12v-9Zm-9 2h2v2H9v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2H9v-2Zm4 0h2v2h-2v-2Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Lift With Confidence",
    text: "A clean, capable floor built for strength, conditioning, and progress.",
    icon: (
      <path
        d="M3 10h3V7h2v10H6v-3H3v-4Zm5 1h8v2H8v-2Zm8-4h2v3h3v4h-3v3h-2V7Z"
        fill="currentColor"
      />
    )
  }
];

const plans = [
  {
    name: "Day Pass",
    badge: "Try A2F",
    price: "$25",
    term: "Per Visit",
    detail: "Full-day training access",
    note: "Perfect for first-time visits"
  },
  {
    name: "Flex Membership",
    badge: "Most flexible",
    price: "$125",
    term: "Per Month",
    detail: "$197 one-time setup",
    note: "No long-term contract"
  },
  {
    name: "12-Month Commitment",
    badge: "Best monthly rate",
    price: "$115",
    term: "Per Month",
    detail: "No annual fee",
    note: "Lower rate with commitment"
  },
  {
    name: "Paid in Full",
    badge: "Best value",
    price: "$1,200",
    term: "Per Year",
    detail: "No setup fee",
    note: "Equivalent to $100 per month"
  }
];

export default function PublicGymPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A2F Public Gym</p>
            <h1>Train with purpose.</h1>
            <p>
              A2F Public Gym gives you the environment to get fit, care for your
              body, and build a routine that lasts. Train independently with the
              energy of the A2F brand behind you, and step into private coaching
              when you want more direction.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.primaryButton} href="#memberships">
                See Access Options
              </a>
              <a className={styles.secondaryButton} href="/book-consultation">
                Plan Your Visit
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/public-gym.jpg"
              alt="A2F Public Gym training environment"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.heroImage}
            />
            <div className={styles.heroBadge}>
              <span>Public gym</span>
              <strong>Daily access, strong equipment, and a path into coaching</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.benefitFeature}>
          <div className={styles.benefitImage}>
            <Image
              src="/images/hero-training.jpg"
              alt="A2F training floor"
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.sectionImage}
            />
          </div>
          <div className={styles.benefitCopy}>
            <p className={styles.eyebrow}>The A2F Standard</p>
            <h2>Built to help you get fit.</h2>
            <p>
              The public gym is designed to help you show up, train well, and
              stay connected to a results-focused culture without overcomplicating
              the process.
            </p>
            <div className={styles.benefitList}>
              {benefits.map((benefit) => (
                <article key={benefit.title} className={styles.benefitItem}>
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      {benefit.icon}
                    </svg>
                  </span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="memberships" className={styles.pricingSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Access Options</p>
          <h2>Clear pricing. No confusion.</h2>
        </div>
        <div className={styles.planGrid}>
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`${styles.planCard} ${index === 3 ? styles.planFeatured : ""}`}
            >
              <span className={styles.planBadge}>{plan.badge}</span>
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <small>{plan.term}</small>
              <p>{plan.detail}</p>
              <em>{plan.note}</em>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.finalCta}>
        <div>
          <p className={styles.eyebrow}>Get Started</p>
          <h2>Feel the A2F difference.</h2>
          <p>
            Book a visit, ask about access, or talk with A2F about the best way
            to start training. We will help you choose the right next step.
          </p>
        </div>
        <div className={styles.ctaPanel}>
          <a className={styles.primaryButton} href="/book-consultation">
            Book Consultation
          </a>
          <a className={styles.secondaryButtonDark} href="tel:19099217220">
            Call 1-909-921-7220
          </a>
        </div>
      </section>
    </main>
  );
}
