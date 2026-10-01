import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { ArrowLink } from "@/components/site-shell";
import { services, images, pageHead } from "@/lib/site-data";
import { initPageAnimations } from "@/lib/gsap-animations";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const slug = params.slug;
    const service =
      services.find((s) => s.slug === slug) ||
      services.find((s) => slug.includes(s.slug.split("-")[0])) ||
      services[0];
    return service;
  },
  head: ({ loaderData, params }) => {
    const slug = params?.slug;
    const service =
      loaderData ||
      services.find((s) => s.slug === slug) ||
      services.find((s) => slug && slug.includes(s.slug.split("-")[0])) ||
      services[0];
    return pageHead(
      `${service.name} in Ahmedabad & Baroda | Premium Elevators`,
      `${service.description} Contact Premium Elevators for professional ${service.name.toLowerCase()} in Ahmedabad and Baroda.`,
      `/services/${service.slug}`,
    );
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const params = Route.useParams();
  const slug = params?.slug;
  const service =
    services.find((s) => s.slug === slug) ||
    services.find((s) => slug && slug.includes(s.slug.split("-")[0])) ||
    services[0];
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cleanup = initPageAnimations(containerRef.current);
    return cleanup;
  }, [service.slug]);

  return (
    <main ref={containerRef}>
      {/* 1. Service Detail Hero */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-4 sm:py-6 lg:py-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-14 lg:px-12 xl:px-16">
          <div>
            <Link
              to="/services"
              className="gsap-hero-action mb-4 inline-block border-b border-primary pb-1 text-[12.5px] text-primary"
            >
              ← All services
            </Link>
            <h1 className="gsap-hero-title text-[clamp(28px,3.8vw,48px)] font-normal leading-[1.12] text-primary">
              {service.name} in Ahmedabad & Baroda.
            </h1>
            <p className="gsap-hero-text mt-3.5 max-w-[540px] text-[14px] leading-relaxed text-gray-700 md:text-[15px]">
              {service.description}
            </p>

            {service.deliverables && (
              <div className="gsap-fade-item mt-5 rounded-2xl border border-primary/20 bg-background/50 p-4 shadow-xs">
                <div className="text-[13px] font-medium text-primary mb-2">
                  Scope of Engineering Deliverables:
                </div>
                <ul className="space-y-1 text-[13px] text-gray-700">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-primary font-normal">—</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-5">
              <div className="gsap-hero-action">
                <ArrowLink to="/contact">Discuss with our service team</ArrowLink>
              </div>
              <div className="gsap-hero-action">
                <ArrowLink to="/lifts">Explore lift models</ArrowLink>
              </div>
            </div>
          </div>
          <div className="gsap-hero-media flex aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10] max-h-[380px] lg:max-h-[420px] w-full items-center justify-center overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 shadow-xs">
            <img
              src={images.hero}
              alt={`${service.name} engineering in Ahmedabad and Baroda`}
              width="1536"
              height="1024"
              className="editorial-image h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 2. Other Engineering Services */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden py-4 sm:py-6 lg:py-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-4 sm:mb-6 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
                Explore other engineering services.
              </h2>
              <p className="mt-1 max-w-[620px] text-[14px] leading-relaxed text-gray-700">
                End-to-end vertical transit engineering, lifetime maintenance contracts and safety sign-offs.
              </p>
            </div>
            <ArrowLink to="/services" className="shrink-0">
              View all services
            </ArrowLink>
          </div>
          <div className="gsap-card-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="gsap-card group flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-primary hover-lift"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-primary/20 pb-2.5 text-primary">
                      <span className="text-[17px] font-normal text-primary">{s.name}</span>
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={18}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-700 line-clamp-3">{s.description}</p>
                  </div>
                  <div className="mt-4 border-t border-primary/15 pt-2.5 text-[12px] font-medium text-primary">
                    View Service Deliverables →
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

