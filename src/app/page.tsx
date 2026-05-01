import Image from "next/image";
import styles from "./page.module.css";

const privateHighlights = [
  {
    title: "Personalized coaching",
    text: "Training, nutrition, and accountability tailored to your goals.",
    icon: (
      <path
        d="M12 13c2.761 0 5-2.239 5-5S14.761 3 12 3 7 5.239 7 8s2.239 5 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Structured progress",
    text: "From fat loss to stage prep, every phase is built with purpose.",
    icon: (
      <path
        d="M5 18h3V9H5v9Zm5 0h3V5h-3v13Zm5 0h3v-7h-3v7Z"
        fill="currentColor"
      />
    )
  }
];

const publicHighlights = [
  {
    title: "Train with purpose",
    text: "A focused floor, strong equipment, and the space to build consistency.",
    icon: (
      <path
        d="M4 8h4v8H4V8Zm12 0h4v8h-4V8ZM9 11h6v2H9v-2Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Built for momentum",
    text: "Start taking care of your body now, then grow into coaching when ready.",
    icon: (
      <path
        d="M12 4 4 8l8 4 8-4-8-4Zm0 9-8-4v7l8 4 8-4V9l-8 4Z"
        fill="currentColor"
      />
    )
  }
];

const membershipPlans = [
  {
    name: "Flex Membership",
    badge: "Most flexible",
    price: "$125",
    term: "Per Month",
    detailsLabel: "Setup fee",
    details: "$197 one-time",
    note: "No long-term contract",
    accent: "light"
  },
  {
    name: "12-Month Commitment",
    badge: "Best monthly rate",
    price: "$115",
    term: "Per Month",
    detailsLabel: "Annual fee",
    details: "None",
    note: "Lower monthly rate with commitment",
    accent: "light"
  },
  {
    name: "Paid in Full",
    badge: "Best value",
    price: "$1,200",
    term: "Per Year",
    detailsLabel: "Setup fee",
    details: "None",
    note: "Equivalent to $100 per month",
    accent: "dark"
  }
];

const privateGymMapUrl =
  "https://www.google.com/maps/search/?api=1&query=9542%20Foothill%20Blvd%2C%20Rancho%20Cucamonga%2C%20CA%2091730";

const publicGymMapUrl =
  "https://www.google.com/maps/search/?api=1&query=11650%20Mission%20Park%20Dr%20Ste%20114%2C%20Rancho%20Cucamonga%2C%20CA%2091730";

const resultHighlights = [
  {
    title: "Structured training",
    text: "A2F gives people a clear path forward every time they train.",
    icon: (
      <path
        d="M4 6h16v3H4V6Zm0 5h10v3H4v-3Zm0 5h16v3H4v-3Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Real accountability",
    text: "Coaching support and tracking tools help keep momentum strong.",
    icon: (
      <path
        d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-2.05-4.95L15 9h6V3l-2.62 2.62A8.96 8.96 0 0 0 12 3Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Modern environment",
    text: "Clean, focused spaces built for serious training without noise.",
    icon: (
      <path
        d="M5 5h14v14H5V5Zm2 2v10h10V7H7Zm2 2h6v2H9V9Zm0 4h4v2H9v-2Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "One brand, two paths",
    text: "Independent training and private coaching under one clear A2F identity.",
    icon: (
      <path
        d="M7 4h10v4H7V4Zm-2 6h6v10H5V10Zm8 0h6v10h-6V10Z"
        fill="currentColor"
      />
    )
  }
];

function FeatureIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.featureIcon} aria-hidden="true">
      <svg viewBox="0 0 24 24" role="presentation">
        {children}
      </svg>
    </span>
  );
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Addicted 2 Fitness</p>
            <h1>A2F Gym</h1>
            <p className={styles.heroText}>
              Addicted 2 Fitness is built for people who want to feel stronger,
              move better, and take care of their body with intention. Train
              independently at the public gym, or level up with private coaching
              when you want a more personalized path.
            </p>
            <div className={styles.heroChoiceGrid}>
              <article className={styles.heroChoiceCard}>
                <span>Coached transformation</span>
                <strong>Hands-on support for performance, body change, and prep.</strong>
              </article>
              <article className={styles.heroChoiceCard}>
                <span>Independent training</span>
                <strong>A clean, focused place to build habits and stay consistent.</strong>
              </article>
            </div>
            <div className={styles.heroActions}>
              <a className={styles.secondaryButton} href="#public-gym">
                Start at the Public Gym
              </a>
              <a className={styles.primaryButton} href="/private-training">
                Explore Private Coaching
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.mainPhotoCard}>
              <Image
                src="/images/hero-training.jpg"
                alt="Athletes training inside A2F Gym"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.photo}
                priority
              />
            </div>
            <div className={styles.floatingStat}>
              <span>Personalized path</span>
              <strong>Coaching when your goals call for more direction</strong>
            </div>
            <div className={styles.floatingPanel}>
              <span>Start simple</span>
              <strong>Train consistently, then level up when you are ready</strong>
            </div>
          </div>
          <div className={styles.mobileChoiceGrid}>
            <article className={styles.heroChoiceCard}>
              <span>Coached transformation</span>
              <strong>Hands-on support for performance, body change, and prep.</strong>
            </article>
            <article className={styles.heroChoiceCard}>
              <span>Independent training</span>
              <strong>A clean, focused place to build habits and stay consistent.</strong>
            </article>
          </div>
          <div className={styles.mobileHeroActions}>
            <a className={styles.secondaryButton} href="#public-gym">
              Start at the Public Gym
            </a>
            <a className={styles.primaryButton} href="/private-training">
              Explore Private Coaching
            </a>
          </div>
        </div>
      </section>

      <section id="locations" className={styles.pathSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>One A2F Journey</p>
          <h2>Two locations. One fitness mission.</h2>
        </div>

        <div className={styles.pathGrid}>
          <article id="private-training" className={styles.pathCard}>
            <div className={styles.pathImageWrap}>
              <Image
                src="/images/private-training.jpg"
                alt="Private training at A2F Gym"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.photo}
              />
            </div>
            <div className={styles.pathContent}>
              <div className={styles.pathHeader}>
                <span className={styles.pathLabel}>Private Gym</span>
                <strong>Personalized Coaching</strong>
              </div>
              <h3>A2F Private Training.</h3>
              <p>
                Built for clients who want direct coaching, personalized
                programming, and a training plan matched to their current level
                and long-term goals.
              </p>
              <a
                className={styles.locationMeta}
                href={privateGymMapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.locationIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                9542 Foothill Blvd, Rancho Cucamonga, CA 91730
              </a>
              <div className={styles.featureStack}>
                {privateHighlights.map((item) => (
                  <article key={item.title} className={styles.featureCard}>
                    <FeatureIcon>{item.icon}</FeatureIcon>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <a className={styles.pathButton} href="/private-training">
                Explore Private Coaching
              </a>
            </div>
          </article>

          <article id="public-gym" className={`${styles.pathCard} ${styles.pathCardLight}`}>
            <div className={styles.pathImageWrap}>
              <Image
                src="/images/public-gym.jpg"
                alt="Public gym at A2F"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.photo}
              />
            </div>
            <div className={styles.pathContent}>
              <div className={styles.pathHeader}>
                <span className={styles.pathLabel}>Public Gym</span>
                <strong>Open Gym Access</strong>
              </div>
              <h3>Train with intention.</h3>
              <p>
                Designed for people who want a clean, motivating place to move,
                lift, and build a stronger routine without losing the connection
                to coaching, accountability, and the A2F standard.
              </p>
              <a
                className={styles.locationMeta}
                href={publicGymMapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.locationIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                11650 Mission Park Dr, Ste 114, Rancho Cucamonga, CA 91730
              </a>
              <div className={styles.featureStack}>
                {publicHighlights.map((item) => (
                  <article key={item.title} className={styles.featureCard}>
                    <FeatureIcon>{item.icon}</FeatureIcon>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <a className={styles.pathButton} href="/public-gym">
                Start Training
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Why A2F</p>
          <h2>Built for results.</h2>
        </div>
        <div className={styles.whyGrid}>
          {resultHighlights.map((item) => (
            <article key={item.title} className={styles.whyCard}>
              <FeatureIcon>{item.icon}</FeatureIcon>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="memberships" className={styles.membershipSection}>
        <div className={styles.membershipVisual}>
          <Image
            src="/images/public-gym.jpg"
            alt="A2F Gym interior and equipment"
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className={styles.photo}
          />
        </div>
        <div className={styles.membershipContent}>
          <p className={styles.eyebrow}>Begin Here</p>
          <h2>Start training your way.</h2>
          <div className={styles.planGrid}>
            {membershipPlans.map((plan, index) => (
              <article
                key={plan.name}
                className={`${styles.planCard} ${index === 2 ? styles.planFeatured : ""}`}
              >
                <div className={styles.planTop}>
                  <span className={styles.planBadge}>{plan.badge}</span>
                  <h3>{plan.name}</h3>
                </div>
                <div className={styles.planPriceBlock}>
                  <strong>{plan.price}</strong>
                  <span className={styles.planTerm}>{plan.term}</span>
                </div>
                <div className={styles.planMeta}>
                  <p className={styles.planMetaLabel}>{plan.detailsLabel}</p>
                  <p className={styles.planMetaValue}>{plan.details}</p>
                </div>
                <small>{plan.note}</small>
                <a className={styles.planLink} href="/public-gym">
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactIntro}>
          <p className={styles.eyebrow}>Get Started</p>
          <h2>Start with the right location.</h2>
          <p>
            Reach out for a tour, day pass, training access, or personalized
            coaching and we will help guide you into the right A2F experience.
          </p>
          <div className={styles.contactLocations}>
            <div className={styles.contactLocationCard}>
              <strong>Private Gym</strong>
              <span>9542 Foothill Blvd, Rancho Cucamonga, CA 91730</span>
            </div>
            <div className={styles.contactLocationCard}>
              <strong>Public Gym</strong>
              <span>11650 Mission Park Dr, Ste 114, Rancho Cucamonga, CA 91730</span>
            </div>
          </div>
        </div>
        <div className={styles.contactPanel}>
          <p className={styles.formEyebrow}>Quick inquiry</p>
          <h3>Tell us where you want to start.</h3>
          <form className={styles.inquiryForm}>
            <label>
              I am interested in
              <select name="interest" defaultValue="">
                <option value="" disabled>
                  Select a path
                </option>
                <option>Public gym access</option>
                <option>Private coaching</option>
                <option>Day pass</option>
                <option>Tour both locations</option>
              </select>
            </label>
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              Phone or email
              <input name="contact" type="text" placeholder="How should we reach you?" />
            </label>
            <label>
              What are you looking for?
              <textarea name="message" placeholder="Training access, coaching, prep, tour, or questions..." />
            </label>
            <button type="button">Send Inquiry</button>
          </form>
          <a className={styles.callLink} href="tel:19099217220">
            Call 1-909-921-7220
          </a>
        </div>
      </section>
    </main>
  );
}
