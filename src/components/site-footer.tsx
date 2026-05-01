import Image from "next/image";
import Link from "next/link";
import styles from "./site-chrome.module.css";

const footerMarquee = [
  "A2F Gym",
  "Private Training",
  "Public Gym",
  "Built for Results",
  "Rancho Cucamonga"
];

function FooterIcon({ type }: { type: "pin" | "phone" | "email" | "clock" }) {
  const icons = {
    pin: (
      <>
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
      </>
    ),
    phone: (
      <path
        d="M6.6 10.8c1.45 2.83 3.77 5.14 6.6 6.58l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.32.56 3.6.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.19 2.48.56 3.6a1 1 0 0 1-.24 1l-2.22 2.2Z"
        fill="currentColor"
      />
    ),
    email: (
      <path
        d="M4 6h16v12H4V6Zm8 7 8-5H4l8 5Zm0 2.2L6 11.45V16h12v-4.55l-6 3.75Z"
        fill="currentColor"
      />
    ),
    clock: (
      <path
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm1 4v4.58l3.2 1.92-1 1.7L11 12.7V7h2Z"
        fill="currentColor"
      />
    )
  };

  return (
    <span className={styles.footerIcon} aria-hidden="true">
      <svg viewBox="0 0 24 24" role="presentation">
        {icons[type]}
      </svg>
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <Image
            src="/images/a2f-gym-logo2.png"
            alt="A2F Gym"
            width={241}
            height={50}
          />
          <p>
            One A2F brand with two connected ways to get fit: independent
            training at the public gym and personalized coaching at the private
            gym in Rancho Cucamonga.
          </p>
        </div>

        <div className={styles.footerColumns}>
          <div>
            <h5>Explore</h5>
            <Link href="/about">About A2F</Link>
            <Link href="/private-training">Private Gym</Link>
            <Link href="/public-gym">Public Gym</Link>
            <Link href="/public-gym#memberships">Access Options</Link>
          </div>
          <div>
            <h5>Locations</h5>
            <div className={styles.footerInfoList}>
              <a
                className={styles.footerInfoItem}
                href="https://www.google.com/maps/search/?api=1&query=9542%20Foothill%20Blvd%2C%20Rancho%20Cucamonga%2C%20CA%2091730"
                target="_blank"
                rel="noreferrer"
              >
                <FooterIcon type="pin" />
                <span>
                  <strong>Private Gym</strong>
                  9542 Foothill Blvd, Rancho Cucamonga, CA 91730
                </span>
              </a>
              <a
                className={styles.footerInfoItem}
                href="https://www.google.com/maps/search/?api=1&query=11650%20Mission%20Park%20Dr%20Ste%20114%2C%20Rancho%20Cucamonga%2C%20CA%2091730"
                target="_blank"
                rel="noreferrer"
              >
                <FooterIcon type="pin" />
                <span>
                  <strong>Public Gym</strong>
                  11650 Mission Park Dr, Ste 114, Rancho Cucamonga, CA 91730
                </span>
              </a>
            </div>
          </div>
          <div>
            <h5>Contact</h5>
            <div className={styles.footerInfoList}>
              <a className={styles.footerInfoItem} href="tel:19099217220">
                <FooterIcon type="phone" />
                <span>
                  <strong>Call</strong>
                  1-909-921-7220
                </span>
              </a>
              <a className={styles.footerInfoItem} href="mailto:a2fgym@gmail.com">
                <FooterIcon type="email" />
                <span>
                  <strong>Email</strong>
                  a2fgym@gmail.com
                </span>
              </a>
              <div className={styles.footerInfoItem}>
                <FooterIcon type="clock" />
                <span>
                  <strong>Public Gym Hours</strong>
                  4:00 AM - 10:00 PM
                </span>
              </div>
            </div>
            <Link className={styles.footerCta} href="/book-consultation">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>Copyright A2F Gym. All rights reserved.</span>
        <div className={styles.footerBottomLinks}>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className={styles.footerMarquee} aria-hidden="true">
        <div className={styles.footerMarqueeTrack}>
          {[...footerMarquee, ...footerMarquee].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
