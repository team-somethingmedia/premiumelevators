import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      autoRaf: false, // Driven by GSAP ticker for perfect sync with GSAP ScrollTrigger and 3D scenes
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.2,
      infinite: false,
      anchors: true,
      allowNestedScroll: true,
      autoToggle: true,
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);
    (window as any).lenis = lenis;

    // Synchronize Lenis with GSAP's ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis raf from GSAP ticker with smooth lag absorption
    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
      if (typeof window !== "undefined") {
        delete (window as any).lenis;
      }
    };
  }, []);

  // Handle route change / page resize
  useEffect(() => {
    if (!lenisRef.current) return;

    // Small delay to allow DOM render on new route
    const timer = setTimeout(() => {
      lenisRef.current?.resize();
      ScrollTrigger.refresh();
      if (hash) {
        const target = document.getElementById(hash.replace("#", ""));
        if (target) {
          lenisRef.current?.scrollTo(target, { offset: -20 });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}
