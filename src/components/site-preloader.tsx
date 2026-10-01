import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "@/assets/logo.png";

export function SitePreloader({ onComplete }: { onComplete?: () => void }) {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);
  const floorNameRef = useRef<HTMLSpanElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if user already saw the preloader in this session
    const hasSeen = sessionStorage.getItem("pe_preloader_seen_v2");
    if (hasSeen) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    const floors = [
      "BASEMENT B2",
      "BASEMENT B1",
      "GROUND LEVEL",
      "LEVEL 01 • RESIDENTIAL",
      "LEVEL 02 • COMMERCIAL",
      "LEVEL 03 • HEALTHCARE",
      "LEVEL 04 • INDUSTRIAL",
      "LEVEL 05 • PANORAMIC",
      "PENTHOUSE • VELOCITY",
      "SYSTEM READY",
    ];

    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("pe_preloader_seen_v2", "true");
          setIsDone(true);
          onComplete?.();
          window.dispatchEvent(new CustomEvent("pe:preloader-complete"));
        },
      });

      // 1. Initial State
      gsap.set(centerContentRef.current, { opacity: 0, y: 16, scale: 0.96 });
      gsap.set([leftDoorRef.current, rightDoorRef.current], { xPercent: 0 });
      gsap.set(progressLineRef.current, { scaleY: 0, transformOrigin: "bottom center" });

      // Arrow pulse
      gsap.to(arrowRef.current, {
        y: -4,
        opacity: 0.4,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "power1.inOut",
      });

      // 2. Entrance of Center Content
      tl.to(centerContentRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      // 3. Counter and Floor Sequence
      tl.to(
        counter,
        {
          val: 100,
          duration: 1.6,
          ease: "power2.inOut",
          onUpdate: () => {
            const currentFloorIndex = Math.min(
              Math.floor((counter.val / 100) * floors.length),
              floors.length - 1
            );
            if (percentTextRef.current) {
              percentTextRef.current.textContent = `${Math.round(counter.val)}%`;
            }
            if (floorNameRef.current) {
              floorNameRef.current.textContent = floors[currentFloorIndex];
            }
            if (progressLineRef.current) {
              gsap.set(progressLineRef.current, { scaleY: counter.val / 100 });
            }
          },
        },
        "-=0.2"
      );

      // Brief lock at 100%
      tl.to({}, { duration: 0.25 });

      // 4. Fade out center badge
      tl.to(centerContentRef.current, {
        opacity: 0,
        scale: 1.06,
        duration: 0.45,
        ease: "power3.in",
      });

      // 5. Precision Elevator Doors Split Open (Left & Right)
      tl.to(
        leftDoorRef.current,
        {
          xPercent: -100,
          duration: 0.85,
          ease: "power4.inOut",
        },
        "-=0.1"
      );

      tl.to(
        rightDoorRef.current,
        {
          xPercent: 100,
          duration: 0.85,
          ease: "power4.inOut",
        },
        "<"
      );

      // Hide whole container
      tl.set(containerRef.current, { display: "none" });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-label="Loading Premium Elevators experience"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden select-none"
    >
      {/* Left Bi-Parting Door Panel */}
      <div
        ref={leftDoorRef}
        className="absolute left-0 top-0 h-full w-1/2 bg-[#274A66] border-r border-[#ececec]/20 shadow-2xl flex items-center justify-end"
      >
        <div className="h-full w-full opacity-10 bg-[linear-gradient(to_right,#ececec_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Right Bi-Parting Door Panel */}
      <div
        ref={rightDoorRef}
        className="absolute right-0 top-0 h-full w-1/2 bg-[#274A66] border-l border-[#ececec]/20 shadow-2xl flex items-center justify-start"
      >
        <div className="h-full w-full opacity-10 bg-[linear-gradient(to_right,#ececec_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Center Floor Indicator HUD */}
      <div
        ref={centerContentRef}
        className="relative z-20 flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Converted Monochrome Logo Mark */}
        <div className="relative mb-6 flex items-center justify-center">
          <img
            src={logo}
            alt="Premium Elevators"
            width="200"
            height="64"
            className="h-12 w-auto object-contain brightness-0 invert opacity-90 drop-shadow-md sm:h-14"
          />
        </div>

        {/* Elevator Floor & Speed Ascent Indicator */}
        <div className="flex items-center gap-3 rounded-full border border-[#ececec]/30 bg-[#274A66]/80 px-5 py-1.5 backdrop-blur-md">
          <span ref={arrowRef} className="text-[#ececec] text-sm font-bold tracking-widest">
            ▲
          </span>
          <span
            ref={floorNameRef}
            className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#ececec]/90 font-medium"
          >
            BASEMENT B2
          </span>
        </div>

        {/* Digital Percentage Display */}
        <div className="mt-4 flex items-baseline gap-1">
          <span
            ref={percentTextRef}
            className="font-mono text-4xl sm:text-5xl font-light tracking-tight text-[#ececec]"
          >
            0%
          </span>
        </div>

        {/* Vertical Shaft Track Indicator */}
        <div className="relative mt-5 h-16 w-1 rounded-full bg-[#ececec]/20 overflow-hidden">
          <div
            ref={progressLineRef}
            className="absolute bottom-0 left-0 w-full h-full bg-[#ececec] rounded-full shadow-[0_0_8px_#ececec]"
          />
        </div>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#ececec]/60">
          Precision Vertical Engineering • Gujarat
        </p>

        {/* Discreet skip button for instant power-user access */}
        <button
          onClick={() => {
            sessionStorage.setItem("pe_preloader_seen_v2", "true");
            setIsDone(true);
            onComplete?.();
            window.dispatchEvent(new CustomEvent("pe:preloader-complete"));
          }}
          className="mt-6 text-[11px] text-[#ececec]/50 hover:text-[#ececec] transition-colors underline underline-offset-4 tracking-wider uppercase font-mono"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
}
