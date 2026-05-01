import type { Metadata } from "next";
import Image from "next/image";
import styles from "./private-training.module.css";

export const metadata: Metadata = {
  title: "Private Training",
  description:
    "Work with A2F Private Training for personalized coaching, body transformation, competition prep, accountability, and nutrition support in Rancho Cucamonga.",
  alternates: {
    canonical: "/private-training"
  },
  openGraph: {
    title: "A2F Private Training",
    description:
      "Personalized coaching, body transformation, competition prep, accountability, and nutrition support in Rancho Cucamonga.",
    url: "/private-training"
  }
};

const coachingPillars = [
  {
    title: "Personalized Training",
    text: "Coaching built around your body, your schedule, your current level, and your long-term goal.",
    icon: (
      <path
        d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-8 8c.5-3.6 3.7-6 8-6s7.5 2.4 8 6H4Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Accountability",
    text: "A clear plan, coaching feedback, and consistent check-ins keep progress moving.",
    icon: (
      <path
        d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-2.05-4.95L15 9h6V3l-2.6 2.6A9 9 0 0 0 12 3Z"
        fill="currentColor"
      />
    )
  },
  {
    title: "Nutrition Support",
    text: "Meal structure and body-composition guidance help your training show up in real results.",
    icon: (
      <path
        d="M7 3h2v7a3 3 0 0 1-2 2.83V21H5v-8.17A3 3 0 0 1 3 10V3h2v7h2V3Zm8 0c3 1.2 5 4.1 5 7.5 0 2.6-1.2 4.8-3 6.2V21h-2V3Z"
        fill="currentColor"
      />
    )
  }
];

const pathways = [
  "Body transformation",
  "Strength and conditioning",
  "Semi-private coaching",
  "Competition prep",
  "Online support",
  "Meal guidance"
];

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.icon} aria-hidden="true">
      <svg viewBox="0 0 24 24" role="presentation">
        {children}
      </svg>
    </span>
  );
}

export default function PrivateTrainingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A2F Private Training</p>
            <h1>Built around your body.</h1>
            <p>
              Private training at A2F is for people who want more than access to
              equipment. This is personalized coaching for getting fit, changing
              your body, and building the discipline to keep progressing.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.primaryButton} href="#contact">
                Start With Coaching
              </a>
              <a className={styles.secondaryButton} href="#approach">
                See The Approach
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/images/private-training.jpg"
              alt="Private coaching at A2F Gym"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.photo}
            />
            <div className={styles.heroBadge}>
              <span>Private gym</span>
              <strong>Personalized coaching, nutrition, and progress tracking</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className={styles.approachSection}>
        <div className={styles.approachIntro}>
          <p className={styles.eyebrow}>The Coaching Difference</p>
          <h2>Your plan should match your goal.</h2>
          <p>
            A2F Private Training connects training, accountability, and nutrition
            into one focused plan. Whether someone is getting started, rebuilding
            their body, or preparing for the stage, the coaching adapts to the
            level of support they need.
          </p>
        </div>
        <div className={styles.pillarGrid}>
          {coachingPillars.map((pillar) => (
            <article key={pillar.title} className={styles.pillarCard}>
              <Icon>{pillar.icon}</Icon>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.pathwaySection}>
        <div className={styles.pathwayImage}>
          <Image
            src="/images/hero-training.jpg"
            alt="A2F athletes training"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
            className={styles.photo}
          />
        </div>
        <div className={styles.pathwayCopy}>
          <p className={styles.eyebrow}>From Fitness To Prep</p>
          <h2>Coaching that can grow with you.</h2>
          <p>
            Some clients come in to lose body fat, feel stronger, and move
            better. Others are chasing a higher level of performance or a
            professional stage. A2F creates the path and keeps the standard high.
          </p>
          <div className={styles.pathwayTags}>
            {pathways.map((pathway) => (
              <span key={pathway}>{pathway}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.finalCta}>
        <div>
          <p className={styles.eyebrow}>Private Coaching</p>
          <h2>Ready for a plan built for you?</h2>
          <p>
            Tell A2F what you are working toward and the team will help determine
            the right coaching path, training structure, and next step.
          </p>
        </div>
        <div className={styles.ctaPanel}>
          <a className={styles.primaryButton} href="mailto:a2fgym@gmail.com">
            Request Coaching Info
          </a>
          <a className={styles.secondaryButtonDark} href="tel:19099217220">
            Call 1-909-921-7220
          </a>
          <span>Private Gym: 9542 Foothill Blvd, Rancho Cucamonga, CA 91730</span>
        </div>
      </section>
    </main>
  );
}
