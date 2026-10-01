import { useEffect, useRef, useState } from "react";

const LEVELS = [
  { id: "hero-level", label: "L01", name: "Overview" },
  { id: "lift-collection", label: "L02", name: "Catalogue" },
  { id: "specs-matrix", label: "L03", name: "Specs Matrix" },
  { id: "elevator-3d-simulator", label: "L04", name: "3D Simulator" },
  { id: "drive-tech", label: "L05", name: "Drive Tech" },
  { id: "workflow", label: "L06", name: "Workflow" },
  { id: "services-support", label: "L07", name: "Services" },
  { id: "safety-systems", label: "L08", name: "Safety Systems" },
  { id: "compliance", label: "L09", name: "Compliance" },
];

export function ElevatorPathAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentLevel, setCurrentLevel] = useState<string>("L01");
  const [totalHeight, setTotalHeight] = useState<number>(3500);
  const [carY, setCarY] = useState<number>(50);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let animFrame: number;

    const measureLayout = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      const mainH = parent ? parent.scrollHeight : 3500;
      setTotalHeight(mainH);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();
      const parentTop = parentRect.top;
      const parentHeight = parentRect.height;
      const winH = window.innerHeight;

      // Calculate progress of scroll strictly through <main>
      // 0 when top of main is at top of viewport, 1 when bottom of main is at bottom of viewport
      const totalScrollableDistance = parentHeight - winH;
      const currentScrolled = -parentTop;

      const progress =
        totalScrollableDistance > 0
          ? Math.min(Math.max(currentScrolled / totalScrollableDistance, 0), 1)
          : 0;

      const topBoundary = 50;
      const bottomBoundary = parentHeight - 50;
      const calculatedCarY = topBoundary + progress * (bottomBoundary - topBoundary);
      setCarY(calculatedCarY);

      // Determine active level based on section visibility
      let active = LEVELS[0].label;
      for (let i = 0; i < LEVELS.length; i++) {
        const el = document.getElementById(LEVELS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= winH * 0.55) {
            active = LEVELS[i].label;
          }
        }
      }
      setCurrentLevel(active);
    };

    const onScroll = () => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(handleScroll);
    };

    measureLayout();
    handleScroll();

    window.addEventListener("resize", () => {
      measureLayout();
      handleScroll();
    });
    window.addEventListener("scroll", onScroll, { passive: true });

    const timer = setTimeout(() => {
      measureLayout();
      handleScroll();
    }, 600);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Geometry dimensions
  const tubeWidth = 26;
  const tubeX = 20;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-3 md:right-6 xl:right-8 2xl:right-12 z-20 hidden w-20 sm:block overflow-visible select-none"
    >
      <svg
        className="h-full w-full overflow-visible"
        style={{ filter: "drop-shadow(0 2px 8px rgba(39, 74, 102, 0.1))" }}
      >
        <defs>
          {/* Glass Pipeline Linear Gradients */}
          <linearGradient id="glassTubeGradMain" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#274A66" stopOpacity="0.2" />
            <stop offset="25%" stopColor="#274A66" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.38" />
            <stop offset="75%" stopColor="#274A66" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#274A66" stopOpacity="0.2" />
          </linearGradient>

          {/* Capsule Elevator Glass Highlight */}
          <linearGradient id="cabinGlassMain" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#274A66" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#a8c5db" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#7ba3c2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#274A66" stopOpacity="0.4" />
          </linearGradient>

          {/* Steel Cap & Platform Metallic Gradient */}
          <linearGradient id="metallicSteelMain" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1e384d" />
            <stop offset="50%" stopColor="#3d688c" />
            <stop offset="100%" stopColor="#1e384d" />
          </linearGradient>

          {/* Vertical Traction Cable Gradient */}
          <linearGradient id="steelCableMain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#274A66" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#274A66" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#274A66" stopOpacity="0.18" />
          </linearGradient>

          {/* Active Cable Glow */}
          <linearGradient id="activeTraceMain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#274A66" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#274A66" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* ========================================================================= */}
        {/* 1. STRAIGHT GLASS ELEVATOR SHAFT / PIPELINE CASING (CONTAINED IN MAIN) */}
        {/* Starts exactly at top of main (below header), ends at bottom (above footer) */}
        {/* ========================================================================= */}

        {/* Outer Transparent Glass Cylinder Body */}
        <rect
          x={tubeX - tubeWidth / 2}
          y="0"
          width={tubeWidth}
          height={totalHeight}
          fill="url(#glassTubeGradMain)"
          stroke="#274A66"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

        {/* Glass Specular Reflection Highlight Line */}
        <line
          x1={tubeX - 5}
          y1="0"
          x2={tubeX - 5}
          y2={totalHeight}
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
        <line
          x1={tubeX + 7}
          y1="0"
          x2={tubeX + 7}
          y2={totalHeight}
          stroke="#274A66"
          strokeWidth="0.8"
          strokeOpacity="0.15"
        />

        {/* Full-Height Center Suspension Guide Cable */}
        <line
          x1={tubeX}
          y1="0"
          x2={tubeX}
          y2={totalHeight}
          stroke="url(#steelCableMain)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Active Illuminated Traction Cable (Top to Elevator Cabin) */}
        <line
          x1={tubeX}
          y1="0"
          x2={tubeX}
          y2={carY}
          stroke="url(#activeTraceMain)"
          strokeWidth="2"
        />

        {/* Top Machinery Overhead Cap (Starts cleanly at header border) */}
        <rect
          x={tubeX - tubeWidth / 2 - 2}
          y="0"
          width={tubeWidth + 4}
          height="6"
          fill="url(#metallicSteelMain)"
          rx="1"
        />

        {/* Bottom Pit Buffer Stop Base (Ends cleanly at footer border) */}
        <rect
          x={tubeX - tubeWidth / 2 - 2}
          y={totalHeight - 6}
          width={tubeWidth + 4}
          height="6"
          fill="url(#metallicSteelMain)"
          rx="1"
        />

        {/* ========================================================================= */}
        {/* 2. TRAVELING PANORAMIC GLASS CAPSULE ELEVATOR CABIN */}
        {/* Clean, smooth edges - NO protruding vertical lines/spikes on top or bottom */}
        {/* ========================================================================= */}
        <g transform={`translate(${tubeX}, ${carY})`}>
          {/* Top Mechanical Bonnet & Shroud (Isometric Dome) */}
          <path
            d="M -12 -12 L 12 -12 C 12 -16, -12 -16, -12 -12 Z"
            fill="url(#metallicSteelMain)"
            stroke="#1e384d"
            strokeWidth="0.8"
          />
          <rect x="-12" y="-12" width="24" height="3" fill="url(#metallicSteelMain)" rx="0.5" />

          {/* Rear Structural Mounting Spine */}
          <rect x="8" y="-9" width="4" height="22" fill="#1e384d" opacity="0.85" />

          {/* Panoramic Curved Glass Observation Enclosure */}
          <rect
            x="-12"
            y="-9"
            width="24"
            height="22"
            fill="url(#cabinGlassMain)"
            stroke="#274A66"
            strokeWidth="1.2"
            rx="2.5"
          />

          {/* Interior Cylindrical Curved Handrail Ring */}
          <path
            d="M -10 3 Q 0 7, 10 3"
            fill="none"
            stroke="#274A66"
            strokeWidth="1.2"
            strokeOpacity="0.8"
          />

          {/* Glass Diagonal Light Reflections */}
          <line
            x1="-6"
            y1="-6"
            x2="6"
            y2="10"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeOpacity="0.7"
          />
          <line
            x1="-3"
            y1="-6"
            x2="9"
            y2="10"
            stroke="#ffffff"
            strokeWidth="0.7"
            strokeOpacity="0.45"
          />

          {/* Lower Passenger Platform & Skirt (Smooth base - no protruding bottom spike) */}
          <rect
            x="-12"
            y="13"
            width="24"
            height="4"
            fill="url(#metallicSteelMain)"
            stroke="#1e384d"
            strokeWidth="0.8"
            rx="0.5"
          />

          {/* Live Floor Telemetry Badge (Tucked neatly to the left of the car) */}
          <g transform="translate(-38, -8)">
            <rect
              x="0"
              y="0"
              width="26"
              height="16"
              fill="#274A66"
              rx="2.5"
              stroke="#1e384d"
              strokeWidth="0.8"
            />
            {/* Ambient Pulse indicator */}
            <circle cx="6" cy="8" r="1.8" fill="#ffffff" className="pulse-indicator" />
            <text
              x="16"
              y="11.5"
              fill="#ffffff"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="bold"
              textAnchor="middle"
            >
              {currentLevel}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
