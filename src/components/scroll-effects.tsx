"use client";

import { useEffect } from "react";

const revealSelector = [
  ".site-card",
  ".site-location-card",
  "[class*='pathCard']",
  "[class*='planCard']",
  "[class*='benefitItem']",
  "[class*='pillarCard']",
  "[class*='whyCard']"
].join(",");

const parallaxSelector = [
  ".site-media",
  "[class*='pathImageWrap']",
  "[class*='benefitImage']",
  "[class*='membershipVisual']",
  "[class*='pathwayImage']"
].join(",");

export function ScrollEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    revealItems.forEach((item, index) => {
      item.dataset.reveal = "";
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "";
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const parallaxItems = Array.from(
      document.querySelectorAll<HTMLElement>(parallaxSelector)
    );

    parallaxItems.forEach((item) => {
      item.dataset.parallax = "";
    });

    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const windowHeight = window.innerHeight || 1;

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();

        if (rect.bottom < 0 || rect.top > windowHeight) {
          return;
        }

        const progress = (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;
        const y = Math.max(-18, Math.min(18, progress * -28));
        item.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
      });
    };

    const requestParallax = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
