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

  return (
    <main ref={containerRef}>
      {/* 1. Lift Detail Hero */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-4 sm:py-6 lg:py-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-14 lg:px-12 xl:px-16">
          <div>
            <Link
              to="/lifts"
              className="gsap-hero-action mb-4 inline-block border-b border-primary pb-1 text-[12.5px] text-primary"
            >
              ← All lifts
            </Link>
            <h1 className="gsap-hero-title text-[clamp(28px,3.8vw,48px)] font-normal leading-[1.12] text-primary">
              {lift.name} in Ahmedabad & Baroda.
            </h1>
            <p className="gsap-hero-text mt-3.5 max-w-[540px] text-[14px] leading-relaxed text-gray-700 md:text-[15px]">
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
          <div className="gsap-hero-media flex aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10] max-h-[380px] lg:max-h-[420px] w-full items-center justify-center overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 shadow-xs">
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

      {/* 2. Explore Other Lifts */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden py-4 sm:py-6 lg:py-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-4 sm:mb-6 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
                Explore other lifts for Gujarat properties.
              </h2>
              <p className="mt-1 max-w-[620px] text-[14px] leading-relaxed text-gray-700">
                Custom-engineered vertical transit solutions for bungalows, hospitals, corporate towers and plants.
              </p>
            </div>
            <ArrowLink to="/lifts" className="shrink-0">
              View all lift categories
            </ArrowLink>
          </div>
          <div className="gsap-card-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lifts
              .filter((x) => x.slug !== lift.slug)
              .slice(0, 3)
              .map((x) => (
                <Link
                  key={x.slug}
                  to="/lifts/$slug"
                  params={{ slug: x.slug }}
                  className="gsap-card group flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-4 shadow-xs transition-all duration-300 hover:border-primary hover-lift"
                >
                  <div>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-primary/15 bg-primary/10 max-h-[160px]">
                      <img
                        src={x.image}
                        alt={`${x.name} in Ahmedabad & Baroda`}
                        width={640}
                        height={400}
                        className="editorial-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 flex items-center justify-between border-b border-primary/20 pb-2 text-primary">
                      <span className="text-[17px] font-normal text-primary">{x.name}</span>
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={18}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                    <p className="mt-1.5 text-[12.5px] text-gray-700 line-clamp-2">{x.use}</p>
                  </div>
                  <div className="mt-3 border-t border-primary/15 pt-2 text-[12px] font-medium text-primary">
                    View Specifications →
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

