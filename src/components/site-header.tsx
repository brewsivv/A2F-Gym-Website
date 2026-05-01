import Image from "next/image";
import Link from "next/link";
import styles from "./site-chrome.module.css";

const navItems = [
  { label: "Locations", href: "/locations" },
  { label: "Private Training", href: "/private-training" },
  { label: "Public Gym", href: "/public-gym" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <Link className={styles.logoLink} href="/" aria-label="A2F Gym home">
          <Image
            src="/images/a2f-gym-logo2.png"
            alt="A2F Gym"
            width={241}
            height={50}
            priority
          />
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className={styles.headerCta} href="/book-consultation">
          Book Consultation
        </Link>
      </div>
    </header>
  );
}
