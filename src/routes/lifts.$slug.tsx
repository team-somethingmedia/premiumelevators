import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { ArrowLink } from "@/components/site-shell";
import { lifts, pageHead } from "@/lib/site-data";
import { initPageAnimations } from "@/lib/gsap-animations";

export const Route = createFileRoute("/lifts/$slug")({
  loader: ({ params }) => {
    const slug = params.slug;
    const lift =
      lifts.find((x) => x.slug === slug) ||
      lifts.find((x) => slug.includes(x.slug.split("-")[0])) ||
      lifts[0];
    return lift;
  },
  head: ({ loaderData, params }) => {
    const slug = params?.slug;
    const lift =
      loaderData ||
      lifts.find((x) => x.slug === slug) ||
      lifts.find((x) => slug && slug.includes(x.slug.split("-")[0])) ||
      lifts[0];
    return pageHead(
      `Best ${lift.name} in Ahmedabad & Baroda | Premium Elevators`,
      `Explore high-performance ${lift.name.toLowerCase()} in Ahmedabad and Baroda. ${lift.description} Contact Premium Elevators for dimensions, pricing and site survey.`,
      `/lifts/${lift.slug}`,
      "product",
    );
  },
  component: LiftDetail,
});

function LiftDetail() {
  const params = Route.useParams();
  const slug = params?.slug;
  const lift =
    lifts.find((x) => x.slug === slug) ||
    lifts.find((x) => slug && slug.includes(x.slug.split("-")[0])) ||
    lifts[0];
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cleanup = initPageAnimations(containerRef.current);
    return cleanup;
  }, [lift.slug]);

  const otherLifts = lifts.filter((x) => x.slug !== lift.slug).slice(0, 3);

  return (
    <main ref={containerRef}>
      {/* 1. Lift Detail Hero */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center border-b border-primary/20 py-8 sm:py-10 lg:py-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-14 lg:px-12 xl:px-16">
          <div>
            <Link
              to="/lifts"
              className="gsap-hero-action mb-4 inline-block border-b border-primary pb-1 text-[12.5px] text-primary"
            >
              ← All lifts
            </Link>
            <h1 className="gsap-hero-title text-[clamp(26px,3.8vw,48px)] font-normal leading-[1.12] text-primary">
              {lift.name} in Ahmedabad & Baroda.
            </h1>
            <p className="gsap-hero-text mt-3.5 max-w-[540px] text-[13.5px] leading-relaxed text-gray-700 sm:text-[14px] md:text-[15px]">
              {lift.description}
            </p>

            {lift.specs && (
              <div className="gsap-fade-item mt-5 grid gap-1.5 border-t border-primary/20 pt-3">
                {lift.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between border-b border-primary/10 py-1 text-[13px]"
                  >
                    <span className="font-normal text-primary">{s.label}</span>
                    <span className="text-gray-700">{s.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-5">
              <div className="gsap-hero-action">
                <ArrowLink to="/contact">Request pricing & site survey</ArrowLink>
              </div>
              <div className="gsap-hero-action">
                <ArrowLink to="/services">Installation & AMC support</ArrowLink>
              </div>
            </div>
          </div>
          <div className="gsap-hero-media flex aspect-[16/10] max-h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 shadow-xs sm:aspect-[4/3] sm:max-h-[340px] lg:aspect-[16/10] lg:max-h-[420px]">
            <img
              src={lift.image}
              alt={`${lift.name} installation example in Ahmedabad and Baroda`}
              width="1024"
              height="1024"
              className="editorial-image h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Engineering Architecture & Technical Reliability Matrix */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center border-b border-primary/20 py-8 sm:py-10 lg:py-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Engineering architecture & reliability.
            </h2>
            <ArrowLink to="/contact" className="shrink-0">
              Request shaft blueprints
            </ArrowLink>
          </div>

          <div className="gsap-card-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="gsap-card flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-5 shadow-xs">
              <div>
                <div className="text-[17px] font-normal text-primary">Permanent Magnet Drive</div>
                <div className="mt-3 space-y-2 text-[13px] text-gray-700">
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Motor Architecture</span>
                    <span className="font-medium text-primary">Gearless Synchronous</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Power Optimization</span>
                    <span className="font-medium text-primary">Up to 70% reduction</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Headroom Requirement</span>
                    <span className="font-medium text-primary">Machine-Room-Less</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-primary/15 pt-2 text-[12px] text-primary">
                IS 14665 Compliant
              </div>
            </div>

            <div className="gsap-card flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-5 shadow-xs">
              <div>
                <div className="text-[17px] font-normal text-primary">Ride Precision & Acoustics</div>
                <div className="mt-3 space-y-2 text-[13px] text-gray-700">
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Floor Leveling</span>
                    <span className="font-medium text-primary">±2 mm Micro-leveling</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Acoustic In-Flight</span>
                    <span className="font-medium text-primary">&lt; 45 dB whisper</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Drive Control</span>
                    <span className="font-medium text-primary">Regenerative VVVF</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-primary/15 pt-2 text-[12px] text-primary">
                Microprocessor Dispatch
              </div>
            </div>

            <div className="gsap-card flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-5 shadow-xs sm:col-span-2 lg:col-span-1">
              <div>
                <div className="text-[17px] font-normal text-primary">Fail-Safe Emergency Systems</div>
                <div className="mt-3 space-y-2 text-[13px] text-gray-700">
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Power Outage</span>
                    <span className="font-medium text-primary">Automatic Rescue (ARD)</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Door Safety</span>
                    <span className="font-medium text-primary">Multi-beam IR curtain</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Speed Protection</span>
                    <span className="font-medium text-primary">Bi-directional Governor</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-primary/15 pt-2 text-[12px] text-primary">
                24/7 Field SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Suggestions for More Lifts — Clean & Minimal (No eyebrows, No descriptions) */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center border-b border-primary/20 py-8 sm:py-10 lg:py-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Suggestions for more lifts.
            </h2>
            <ArrowLink to="/lifts" className="shrink-0">
              View all lifts
            </ArrowLink>
          </div>
          <div className="gsap-card-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherLifts.map((x) => (
              <Link
                key={x.slug}
                to="/lifts/$slug"
                params={{ slug: x.slug }}
                className="gsap-card group flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-4 shadow-xs transition-all duration-300 hover:border-primary hover-lift"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-primary/15 bg-primary/10">
                    <img
                      src={x.image}
                      alt={x.name}
                      width={640}
                      height={400}
                      className="editorial-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-primary/20 pt-3 text-primary">
                    <span className="text-[18px] font-normal text-primary">{x.name}</span>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

