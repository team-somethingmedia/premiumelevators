import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface LevelItem {
  id: string;
  label: string;
  name: string;
}

export function ElevatorScrollHUD({ levels }: { levels: LevelItem[] }) {
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentProgress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
      setProgress(currentProgress);

      // Determine active level based on element positions
      let activeIdx = 0;
      levels.forEach((level, idx) => {
        const el = document.getElementById(level.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            activeIdx = idx;
          }
        }
      });
      setCurrentLevel(activeIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [levels]);

  const scrollToLevel = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile top progress line */}
      <div className="fixed top-[86px] left-0 right-0 z-20 h-[2px] bg-primary/10 lg:hidden pointer-events-none">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Desktop Vertical Elevator Shaft HUD */}
      <aside
        aria-label="Elevator floor shaft navigator"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center select-none"
      >
        {/* Elevator Car Indicator Badge */}
        <div className="mb-3 border border-primary bg-background px-2 py-1 text-[11px] text-primary shadow-sm">
          <span className="inline-block font-mono">{levels[currentLevel]?.label || "L01"}</span>
        </div>

        {/* Vertical Shaft Cable Track */}
        <div className="relative flex flex-col items-center py-2">
          {/* Background Rail */}
          <div className="absolute top-0 bottom-0 w-[1px] bg-primary/20" />

          {/* Active Car on Cable */}
          <div
            className="absolute w-2 h-3 border border-primary bg-primary -left-[3.5px] transition-all duration-200 ease-out pointer-events-none shadow-xs"
            style={{
              top: `${progress * 90}%`,
            }}
          />

          {/* Floor Stops */}
          <div className="relative z-10 flex flex-col gap-6">
            {levels.map((level, idx) => {
              const isActive = currentLevel === idx;
              return (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => scrollToLevel(level.id)}
                  title={`${level.label}: ${level.name}`}
                  className="group relative flex items-center justify-center p-1 focus:outline-none"
                >
                  <span
                    className={`block h-2 w-2 rounded-full border border-primary transition-all duration-300 ${
                      isActive
                        ? "bg-primary scale-125 pulse-indicator"
                        : "bg-background hover:bg-primary/50"
                    }`}
                  />
                  {/* Tooltip on hover */}
                  <span className="invisible absolute right-6 whitespace-nowrap border border-primary/30 bg-background px-2 py-0.5 text-[11px] text-primary opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 shadow-none">
                    {level.label} · {level.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 text-[9px] text-primary/60 uppercase tracking-widest font-mono">
          SHAFT
        </div>
      </aside>
    </>
  );
}
