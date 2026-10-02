import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { ArrowLink } from "@/components/site-shell";
import { services, lifts, images, pageHead } from "@/lib/site-data";
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

  const liftSuggestions = lifts.slice(0, 3);

  return (
    <main ref={containerRef}>
      {/* 1. Service Detail Hero */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center border-b border-primary/20 py-8 sm:py-10 lg:py-6">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-14 lg:px-12 xl:px-16">
          <div>
            <Link
              to="/services"
              className="gsap-hero-action mb-4 inline-block border-b border-primary pb-1 text-[12.5px] text-primary"
            >
              ← All services
            </Link>
            <h1 className="gsap-hero-title text-[clamp(26px,3.8vw,48px)] font-normal leading-[1.12] text-primary">
              {service.name} in Ahmedabad & Baroda.
            </h1>
            <p className="gsap-hero-text mt-3.5 max-w-[540px] text-[13.5px] leading-relaxed text-gray-700 sm:text-[14px] md:text-[15px]">
              {service.description}
            </p>

            {service.deliverables && (
              <div className="gsap-fade-item mt-5 rounded-2xl border border-primary/20 bg-background/50 p-4 shadow-xs">
                <div className="mb-2 text-[13px] font-medium text-primary">
                  Scope of Engineering Deliverables:
                </div>
                <ul className="space-y-1.5 text-[13px] text-gray-700">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 leading-relaxed">
                      <span className="font-normal text-primary">—</span> {d}
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
          <div className="gsap-hero-media flex aspect-[16/10] max-h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 shadow-xs sm:aspect-[4/3] sm:max-h-[340px] lg:aspect-[16/10] lg:max-h-[420px]">
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

      {/* 2. Quality Assurance & Engineering Standards Matrix */}
      <section className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center border-b border-primary/20 py-8 sm:py-10 lg:py-6">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Service assurance & standards.
            </h2>
            <ArrowLink to="/contact" className="shrink-0">
              Request service agreement
            </ArrowLink>
          </div>

          <div className="gsap-card-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="gsap-card flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-5 shadow-xs">
              <div>
                <div className="text-[17px] font-normal text-primary">Certified Engineering Protocol</div>
                <div className="mt-3 space-y-2 text-[13px] text-gray-700">
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Technical Standard</span>
                    <span className="font-medium text-primary">IS 14665 Compliant</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Field Technicians</span>
                    <span className="font-medium text-primary">Directly Employed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Laser Alignment</span>
                    <span className="font-medium text-primary">Millimeter-precise</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-primary/15 pt-2 text-[12px] text-primary">
                Zero Subcontracting
              </div>
            </div>

            <div className="gsap-card flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-5 shadow-xs">
              <div>
                <div className="text-[17px] font-normal text-primary">Rapid Response & Spares</div>
                <div className="mt-3 space-y-2 text-[13px] text-gray-700">
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Breakdown SLA</span>
                    <span className="font-medium text-primary">24/7 Rapid Hotline</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Local Hubs</span>
                    <span className="font-medium text-primary">Ahmedabad & Baroda</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Component Inventory</span>
                    <span className="font-medium text-primary">Genuine OEM Parts</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-primary/15 pt-2 text-[12px] text-primary">
                Local Inventory Stocked
              </div>
            </div>

            <div className="gsap-card flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-5 shadow-xs sm:col-span-2 lg:col-span-1">
              <div>
                <div className="text-[17px] font-normal text-primary">Statutory Licensing & AMC</div>
                <div className="mt-3 space-y-2 text-[13px] text-gray-700">
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Government Liaison</span>
                    <span className="font-medium text-primary">Gujarat Lift Authority</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-1.5">
                    <span>Safety Validation</span>
                    <span className="font-medium text-primary">Multi-point Inspection</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reporting</span>
                    <span className="font-medium text-primary">Digital Maintenance Logs</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-primary/15 pt-2 text-[12px] text-primary">
                Lifetime Compliance
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
            {liftSuggestions.map((x) => (
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

