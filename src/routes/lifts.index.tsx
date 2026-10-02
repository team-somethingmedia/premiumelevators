import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { lifts, pageHead } from "@/lib/site-data";
import { initPageAnimations } from "@/lib/gsap-animations";

export const Route = createFileRoute("/lifts/")({
  head: () =>
    pageHead(
      "Lifts & Elevators in Ahmedabad & Baroda | Home, Passenger, Goods & Hospital Lifts",
      "Explore our comprehensive lift collection in Ahmedabad and Baroda: Home Lifts, Passenger Lifts, Hospital Stretchers, Industrial Goods Elevators, Capsule Glass Lifts, Hydraulic Lifts, Structure Elevators, Dumbwaiters and Car Lifts.",
      "/lifts",
    ),
  component: Lifts,
});

function Lifts() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cleanup = initPageAnimations(containerRef.current);
    return cleanup;
  }, []);

  const primaryLifts = lifts.slice(0, 6);
  const specializedLifts = lifts.slice(6);

  return (
    <main ref={containerRef}>
      {/* 1. Primary Architectural & Commercial Lifts */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-4 sm:py-6 lg:py-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="mb-3 sm:mb-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h1 className="gsap-hero-title text-[clamp(24px,3.2vw,38px)] font-normal leading-[1.12] text-primary">
              Lifts for Ahmedabad & Baroda.
            </h1>
            <span className="text-[12.5px] text-gray-700">6 Core Systems</span>
          </div>

          <div className="gsap-card-grid grid gap-2.5 sm:gap-3.5 md:grid-cols-2 lg:grid-cols-3">
            {primaryLifts.map((lift) => (
              <Link
                key={lift.slug}
                to="/lifts/$slug"
                params={{ slug: lift.slug }}
                className="gsap-card group flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-3 sm:p-3.5 shadow-xs transition-all duration-300 hover:border-primary hover-lift"
              >
                <div>
                  <div className="aspect-[16/9] max-h-[110px] overflow-hidden rounded-xl border border-primary/15 bg-primary/10">
                    <img
                      className="editorial-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      src={lift.image}
                      alt={`${lift.name} architectural installation in Gujarat`}
                      loading="lazy"
                      width="1024"
                      height="1024"
                    />
                  </div>
                  <div className="flex items-center justify-between border-b border-primary/20 py-2 text-primary">
                    <h2 className="text-[16px] font-normal text-primary">{lift.name}</h2>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-gray-700 line-clamp-1">{lift.use}</p>
                </div>
                {lift.specs && (
                  <div className="mt-2 flex flex-wrap gap-1 border-t border-primary/15 pt-1.5">
                    {lift.specs.slice(0, 2).map((s) => (
                      <span
                        key={s.label}
                        className="rounded-full border border-primary/15 bg-primary/5 px-2 py-0.5 text-[10.5px] text-primary"
                      >
                        <span className="text-gray-700">{s.label}:</span> {s.value}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Specialized & Retrofit Transit Systems */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden py-4 sm:py-6 lg:py-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="mb-4 sm:mb-5 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h2 className="text-[clamp(24px,3.2vw,38px)] font-normal leading-[1.12] text-primary">
              Specialized & retrofit lift systems.
            </h2>
            <span className="text-[12.5px] text-gray-700">3 Specialized Systems</span>
          </div>

          <div className="gsap-card-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specializedLifts.map((lift) => (
              <Link
                key={lift.slug}
                to="/lifts/$slug"
                params={{ slug: lift.slug }}
                className="gsap-card group flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-primary hover-lift"
              >
                <div>
                  <div className="aspect-[16/10] max-h-[160px] overflow-hidden rounded-xl border border-primary/15 bg-primary/10">
                    <img
                      className="editorial-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      src={lift.image}
                      alt={`${lift.name} in Gujarat`}
                      loading="lazy"
                      width="1024"
                      height="1024"
                    />
                  </div>
                  <div className="flex items-center justify-between border-b border-primary/20 py-2.5 text-primary">
                    <h3 className="text-[17px] font-normal text-primary">{lift.name}</h3>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-gray-700 line-clamp-2">{lift.use}</p>
                </div>
                {lift.specs && (
                  <div className="mt-3 flex flex-wrap gap-1.5 border-t border-primary/15 pt-2">
                    {lift.specs.slice(0, 2).map((s) => (
                      <span
                        key={s.label}
                        className="rounded-full border border-primary/15 bg-primary/5 px-2 py-0.5 text-[11px] text-primary"
                      >
                        <span className="text-gray-700">{s.label}:</span> {s.value}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-primary/15 pt-3.5">
            <span className="text-[13px] text-gray-700">
              Need custom shaft dimensions or site survey?
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-[13px] text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Request engineering site survey →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

