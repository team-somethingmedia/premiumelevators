import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    ignoreMobileResize: true,
    fastScrollEnd: true,
    preventOverlaps: true,
  });
}

/**
 * Initializes buttery-smooth GSAP scroll animations that work in complete harmony
 * with user scroll movement using responsive scroll-linked interpolation (scrub).
 * This eliminates abrupt pop-ins and creates a fluid, organic experience.
 */
export function initPageAnimations(container: HTMLElement | null): () => void {
  if (!container || typeof window === "undefined") {
    return () => {};
  }

  const mm = gsap.matchMedia();

  const ctx = gsap.context(() => {
    // Reduced motion preference
    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        [
          ".gsap-hero-title",
          ".gsap-hero-text",
          ".gsap-hero-action",
          ".gsap-hero-media",
          ".gsap-section-header",
          ".gsap-card",
          ".gsap-fade-item",
          ".gsap-table-row",
          ".gsap-parallax-img",
        ],
        { opacity: 1, y: 0, scale: 1, clearProps: "all" }
      );
    });

    // Desktop and Tablet (> 768px)
    mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
      // 1. Hero Entrance - Immediate, smooth, and lightweight
      const heroTitle = container.querySelector(".gsap-hero-title");
      const heroText = container.querySelector(".gsap-hero-text");
      const heroActions = container.querySelectorAll(".gsap-hero-action");
      const heroMedia = container.querySelector(".gsap-hero-media");

      const runHeroAnimation = () => {
        if (heroTitle || heroText || heroActions.length > 0 || heroMedia) {
          const heroTl = gsap.timeline({
            defaults: { ease: "power2.out", force3D: true },
          });

          if (heroTitle) {
            heroTl.fromTo(
              heroTitle,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, clearProps: "transform,opacity" }
            );
          }
          if (heroText) {
            heroTl.fromTo(
              heroText,
              { y: 14, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.65, clearProps: "transform,opacity" },
              "-=0.55"
            );
          }
          if (heroActions.length > 0) {
            heroTl.fromTo(
              heroActions,
              { y: 12, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, clearProps: "transform,opacity" },
              "-=0.5"
            );
          }
          if (heroMedia) {
            heroTl.fromTo(
              heroMedia,
              { opacity: 0, y: 16, scale: 0.98 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                ease: "power2.out",
                clearProps: "transform,opacity",
              },
              "-=0.55"
            );
          }
        }
      };

      // If preloader is active, wait for doors to open; otherwise run immediately
      const isPreloading =
        typeof sessionStorage !== "undefined" &&
        !sessionStorage.getItem("pe_preloader_seen_v2") &&
        document.querySelector("[role='status'][aria-label*='Loading']");

      if (isPreloading) {
        const onPreloaderComplete = () => {
          runHeroAnimation();
          window.removeEventListener("pe:preloader-complete", onPreloaderComplete);
        };
        window.addEventListener("pe:preloader-complete", onPreloaderComplete);
      } else {
        runHeroAnimation();
      }

      // 2. Section Headers — Scroll-linked fluid reveal directly in tune with scroll velocity
      const headers = container.querySelectorAll<HTMLElement>(".gsap-section-header");
      headers.forEach((header) => {
        gsap.fromTo(
          header,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: header,
              start: "top 95%",
              end: "top 72%",
              scrub: 0.6,
            },
          }
        );
      });

      // 3. Grid / Cards — Gentle cascaded scroll scrub that glides synchronously as user scrolls
      const cardContainers = container.querySelectorAll<HTMLElement>(".gsap-card-grid");
      cardContainers.forEach((grid) => {
        const cards = grid.querySelectorAll<HTMLElement>(".gsap-card");
        if (cards.length > 0) {
          cards.forEach((card, index) => {
            gsap.fromTo(
              card,
              { y: 24, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                force3D: true,
                scrollTrigger: {
                  trigger: grid,
                  start: `top ${94 - Math.min(index * 2, 8)}%`,
                  end: `top ${68 - Math.min(index * 2, 8)}%`,
                  scrub: 0.7,
                },
              }
            );
          });
        }
      });

      // 4. Individual Interactive & Content Elements
      const fadeItems = container.querySelectorAll<HTMLElement>(".gsap-fade-item");
      fadeItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              end: "top 70%",
              scrub: 0.6,
            },
          }
        );
      });

      // 5. Table Rows
      const tableRows = container.querySelectorAll<HTMLElement>(".gsap-table-row");
      tableRows.forEach((row, i) => {
        gsap.fromTo(
          row,
          { x: -14, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: row.parentElement || row,
              start: `top ${92 - Math.min(i * 1.5, 10)}%`,
              end: `top ${70 - Math.min(i * 1.5, 10)}%`,
              scrub: 0.5,
            },
          }
        );
      });

      // 6. Subtle Editorial Parallax for imagery
      const parallaxImages = container.querySelectorAll<HTMLElement>(".gsap-parallax-img");
      parallaxImages.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -3 },
          {
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement || img,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.0,
            },
          }
        );
      });
    });

    // Mobile (<= 768px) - Clean, immediate scroll triggers with zero sluggishness
    mm.add("(max-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const heroTitle = container.querySelector(".gsap-hero-title");
      const heroText = container.querySelector(".gsap-hero-text");
      const heroActions = container.querySelectorAll(".gsap-hero-action");
      const heroMedia = container.querySelector(".gsap-hero-media");

      const mobileHeroTl = gsap.timeline({
        defaults: { ease: "power2.out", force3D: true },
      });

      if (heroTitle) {
        mobileHeroTl.fromTo(
          heroTitle,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, clearProps: "transform,opacity" }
        );
      }
      if (heroText) {
        mobileHeroTl.fromTo(
          heroText,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, clearProps: "transform,opacity" },
          "-=0.4"
        );
      }
      if (heroActions.length > 0) {
        mobileHeroTl.fromTo(
          heroActions,
          { y: 8, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.04, clearProps: "transform,opacity" },
          "-=0.35"
        );
      }
      if (heroMedia) {
        mobileHeroTl.fromTo(
          heroMedia,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, clearProps: "transform,opacity" },
          "-=0.35"
        );
      }

      // Mobile Section Headers
      const headers = container.querySelectorAll<HTMLElement>(".gsap-section-header");
      headers.forEach((header) => {
        gsap.fromTo(
          header,
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: header,
              start: "top 95%",
              end: "top 75%",
              scrub: 0.5,
            },
          }
        );
      });

      // Mobile Cards
      const cardContainers = container.querySelectorAll<HTMLElement>(".gsap-card-grid");
      cardContainers.forEach((grid) => {
        const cards = grid.querySelectorAll<HTMLElement>(".gsap-card");
        if (cards.length > 0) {
          cards.forEach((card, index) => {
            gsap.fromTo(
              card,
              { y: 16, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                force3D: true,
                scrollTrigger: {
                  trigger: card,
                  start: "top 95%",
                  end: "top 75%",
                  scrub: 0.5,
                },
              }
            );
          });
        }
      });

      // Mobile Fade Items
      const fadeItems = container.querySelectorAll<HTMLElement>(".gsap-fade-item");
      fadeItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: item,
              start: "top 95%",
              end: "top 75%",
              scrub: 0.5,
            },
          }
        );
      });
    });
  }, container);

  // Refresh ScrollTrigger calculations after initial DOM layout
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

  return () => {
    ctx.revert();
    mm.revert();
  };
}
