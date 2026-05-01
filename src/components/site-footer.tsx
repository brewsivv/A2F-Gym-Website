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
            <span>Private Gym</span>
            <p>9542 Foothill Blvd, Rancho Cucamonga, CA 91730</p>
            <span>Public Gym</span>
            <p>11650 Mission Park Dr, Ste 114, Rancho Cucamonga, CA 91730</p>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="/book-consultation">Book Consultation</a>
            <a href="tel:19099217220">1-909-921-7220</a>
            <a href="mailto:a2fgym@gmail.com">a2fgym@gmail.com</a>
            <p>Public Gym Hours: 4:00 AM - 10:00 PM</p>
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
