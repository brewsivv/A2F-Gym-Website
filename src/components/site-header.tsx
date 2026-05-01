"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./site-chrome.module.css";

const navItems = [
  { label: "Locations", href: "/locations" },
  { label: "Private Training", href: "/private-training" },
  { label: "Public Gym", href: "/public-gym" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        <button
          className={styles.menuButton}
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <button
            className={styles.mobileBackdrop}
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
          <div className={styles.mobilePanel}>
            <div className={styles.mobilePanelTop}>
              <Image
                src="/images/a2f-gym-logo2.png"
                alt="A2F Gym"
                width={241}
                height={50}
              />
              <button
                className={styles.closeButton}
                type="button"
                onClick={closeMenu}
              >
                Close
              </button>
            </div>
            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              {navItems.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className={styles.mobileActions}>
              <Link
                className={styles.mobilePrimary}
                href="/book-consultation"
                onClick={closeMenu}
              >
                Book Consultation
              </Link>
              <a className={styles.mobileSecondary} href="tel:19099217220">
                Call 1-909-921-7220
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
