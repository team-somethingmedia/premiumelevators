import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { services, pageHead } from "@/lib/site-data";
import { initPageAnimations } from "@/lib/gsap-animations";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead(
      "Elevator Services in Ahmedabad & Baroda | Installation, Maintenance, Modernization & 24/7 Breakdown",
      "Comprehensive lift and elevator engineering services in Ahmedabad and Baroda: Turnkey Installation, Annual Maintenance Contracts (AMC), Modernization, Safety Audits, Spares and 24/7 Emergency Support.",
      "/services",
    ),
  component: Services,
});

function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cleanup = initPageAnimations(containerRef.current);
    return cleanup;
  }, []);

  return (
    <main
      ref={containerRef}
      className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden py-4 sm:py-6 lg:py-6"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-4 sm:mb-5 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
          <h1 className="gsap-hero-title text-[clamp(24px,3.2vw,38px)] leading-[1.12] text-primary">
            Elevator services for Ahmedabad & Baroda.
          </h1>
          <span className="text-[13px] text-gray-700">Full Lifecycle Vertical Mobility Engineering</span>
        </div>
        <div className="gsap-card-grid rounded-2xl border border-primary/20 bg-background/40 p-2 sm:p-4 shadow-xs divide-y divide-primary/20">
          {services.map((s, i) => (
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              key={s.slug}
              className="gsap-card group grid grid-cols-[36px_1fr_24px] items-center gap-3 py-3.5 px-3 md:px-5 text-primary md:grid-cols-[60px_1fr_24px] md:py-4 rounded-xl transition-all duration-300 hover:bg-primary/5 hover-lift"
            >
              <span className="text-[13.5px] text-gray-700 font-normal">0{i + 1}</span>
              <div>
                <h2 className="text-[clamp(16px,2vw,22px)] leading-snug text-primary font-normal">
                  {s.name}
                </h2>
                <p className="mt-1 text-[13px] leading-relaxed text-gray-700 line-clamp-1">{s.description}</p>
              </div>
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

