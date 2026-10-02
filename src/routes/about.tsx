import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ArrowUp01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ArrowLink } from "@/components/site-shell";
import { HoistwayAscent3D } from "@/components/hoistway-ascent-3d";
import { initPageAnimations } from "@/lib/gsap-animations";
import {
  images,
  illustrations3d,
  pageHead,
  address,
  hoAddress,
  email,
  otherEmail,
  phone,
  companyVision,
  companyJourney,
  founderLeadership,
} from "@/lib/site-data";

const PILLAR_ILLUSTRATIONS = [
  illustrations3d.safetyShield,
  illustrations3d.workbench,
  illustrations3d.toolbox,
];

const MILESTONE_IMAGES = [images.home, images.motor, images.hospital, images.capsule];

const MILESTONE_STATS = [
  {
    year: "2012",
    highlight: "Foundation in Ahmedabad",
    metric: "Initial 50 residential home lifts installed",
  },
  {
    year: "2016",
    highlight: "Silent MRL Launch",
    metric: "Pioneered shallow-pit gearless lifts in Gujarat",
  },
  {
    year: "2020",
    highlight: "Healthcare & Freight",
    metric: "Installed over 120 hospital & industrial lifts",
  },
  {
    year: "2024",
    highlight: "Panoramic Smart Fleet",
    metric: "500+ active lifts under lifetime AMC support",
  },
];

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Premium Elevators | Lift Manufacturer in Ahmedabad & Baroda",
      "Learn about Premium Elevators, leading elevator engineers delivering custom home lifts, commercial passenger elevators, hospital stretchers and industrial freight lifts across Ahmedabad and Baroda, Gujarat.",
      "/about",
    ),
  component: About,
});

export function About() {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activePhase, setActivePhase] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cleanup = initPageAnimations(containerRef.current);
    return cleanup;
  }, []);

  return (
    <main ref={containerRef} className="relative">
      {/* 1. Intro Section */}
      <section
        id="about-hero"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center border-b border-primary/20 py-8 sm:py-10 lg:py-6"
      >
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-14 lg:px-12 xl:px-16">
          <div className="flex flex-col justify-center">
            <h1 className="gsap-hero-title text-[clamp(26px,3.8vw,50px)] font-normal leading-[1.12] text-primary">
              About Premium Elevators.
            </h1>
            <p className="gsap-hero-text mt-3.5 max-w-[540px] text-[13.5px] leading-relaxed text-gray-700 sm:text-[14.5px] md:text-[15.5px]">
              Specialized vertical mobility engineering company serving residential developers,
              architectural consultants, healthcare facilities and industrial plants across Gujarat.
            </p>
            <p className="gsap-hero-text mt-2 max-w-[540px] text-[13px] leading-relaxed text-gray-700 sm:text-[13.5px]">
              We design, manufacture, install and maintain gearless MRL lifts, hydraulic home elevators,
              hospital stretchers and panoramic glass capsules strictly to IS 14665 standards.
            </p>

            <div className="gsap-hero-action mt-4 grid max-w-[540px] grid-cols-3 gap-2 border-y border-primary/20 py-2.5 sm:mt-5 sm:gap-3 sm:py-3">
              <div>
                <span className="block text-[16px] font-medium text-primary sm:text-[18px] md:text-[20px]">500+</span>
                <span className="text-[10.5px] text-gray-700 sm:text-[11.5px]">Lifts Installed</span>
              </div>
              <div>
                <span className="block text-[16px] font-medium text-primary sm:text-[18px] md:text-[20px]">24/7</span>
                <span className="text-[10.5px] text-gray-700 sm:text-[11.5px]">Breakdown SLA</span>
              </div>
              <div>
                <span className="block text-[16px] font-medium text-primary sm:text-[18px] md:text-[20px]">100%</span>
                <span className="text-[10.5px] text-gray-700 sm:text-[11.5px]">IS 14665 Standard</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 sm:mt-6 sm:gap-5">
              <div className="gsap-hero-action">
                <ArrowLink to="/lifts">Explore our lift systems</ArrowLink>
              </div>
              <div className="gsap-hero-action">
                <ArrowLink to="/contact">Contact engineering team</ArrowLink>
              </div>
            </div>
          </div>

          <div className="gsap-hero-media flex aspect-[16/10] max-h-[260px] w-full items-center justify-center overflow-hidden rounded-2xl border border-primary/25 bg-primary/10 shadow-xs sm:aspect-[4/3] sm:max-h-[340px] lg:aspect-[16/10] lg:max-h-[420px]">
            <img
              src={images.hero}
              alt="Premium Elevators architectural installation in Gujarat"
              width="1536"
              height="1024"
              className="editorial-image h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Vision & Engineering Principles */}
      <section
        id="about-vision"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center border-b border-primary/20 py-8 sm:py-10 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-4 flex flex-col justify-between gap-2 sm:mb-6 sm:flex-row sm:items-center">
            <h2 className="text-[clamp(22px,3.2vw,38px)] leading-[1.15] text-primary">
              Engineering vision & core principles.
            </h2>
            <ArrowLink to="/services" className="shrink-0">
              Explore service standards
            </ArrowLink>
          </div>

          <div className="gsap-card-grid grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {companyVision.pillars.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setActivePillar(idx)}
                  onMouseEnter={() => setActivePillar(idx)}
                  className={`gsap-card group flex cursor-pointer flex-col justify-between rounded-2xl border bg-background p-4 transition-all duration-300 hover-lift sm:p-5 ${
                    isSelected
                      ? "border-primary bg-primary/[0.04] shadow-sm ring-1 ring-primary"
                      : "border-primary/25"
                  }`}
                >
                  <div>
                    <div className="flex aspect-[16/9] max-h-[140px] w-full items-center justify-center overflow-hidden rounded-xl border border-primary/15 bg-primary/5 p-2.5">
                      <img
                        src={PILLAR_ILLUSTRATIONS[idx]}
                        alt={pillar.title}
                        width={240}
                        height={180}
                        className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-3 flex items-center justify-between border-b border-primary/20 pb-2 text-[12px] text-primary sm:text-[12.5px]">
                      <span className="font-medium text-primary">
                        Pillar {idx + 1}
                      </span>
                      <span className="font-medium text-gray-700">
                        IS 14665 Standard
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-[16px] font-normal leading-snug text-primary sm:text-[17px]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-relaxed text-gray-700 sm:text-[13px]">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-3.5 flex items-center justify-between border-t border-primary/20 pt-2.5 text-[12px] text-primary sm:text-[12.5px]">
                    <span className="font-medium">Engineering Focus</span>
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Elevator Hoistway Journey Simulator */}
      <section
        id="about-journey"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center border-b border-primary/20 py-8 sm:py-10 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-4 flex flex-col justify-between gap-2 sm:mb-5 sm:flex-row sm:items-center">
            <h2 className="text-[clamp(22px,3.2vw,38px)] leading-[1.15] text-primary">
              Our engineering journey across Gujarat.
            </h2>
            <ArrowLink to="/contact" className="shrink-0">
              Plan your lift with us
            </ArrowLink>
          </div>

          <div className="gsap-fade-item grid items-stretch gap-5 lg:grid-cols-[1fr_1.3fr]">
            <HoistwayAscent3D activePhase={activePhase} onPhaseChange={setActivePhase} />

            <div className="flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-4 shadow-xs sm:p-5">
              <div>
                <div className="flex items-center justify-between border-b border-primary/15 pb-2.5 text-[12.5px] text-primary sm:text-[13px]">
                  <span className="font-medium text-primary">
                    Phase {activePhase + 1} of 4: {companyJourney[activePhase].milestone}
                  </span>
                  <span className="text-[12px] font-medium text-primary">
                    {MILESTONE_STATS[activePhase].year}
                  </span>
                </div>

                <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
                  <div className="h-24 w-full shrink-0 overflow-hidden rounded-xl border border-primary/30 bg-primary/10 sm:h-28 sm:w-36">
                    <img
                      src={MILESTONE_IMAGES[activePhase]}
                      alt={companyJourney[activePhase].phase}
                      width={300}
                      height={200}
                      className="editorial-image h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-normal leading-[1.2] text-primary sm:text-[18px]">
                      {companyJourney[activePhase].phase}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-gray-700 sm:text-[13px]">
                      {companyJourney[activePhase].description}
                    </p>
                    <div className="mt-1.5 text-[12px] font-medium text-primary sm:text-[12.5px]">
                      Output: <span className="font-normal text-gray-700">{MILESTONE_STATS[activePhase].metric}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive 4-Phase Selector Strip */}
                <div className="mt-3.5 grid grid-cols-2 gap-1.5 border-t border-primary/15 pt-2.5 sm:grid-cols-4 sm:gap-2 sm:pt-3">
                  {companyJourney.map((step, idx) => (
                    <button
                      key={step.phase}
                      type="button"
                      onClick={() => setActivePhase(idx)}
                      className={`flex cursor-pointer flex-col items-start rounded-xl border p-2 text-left transition-all ${
                        activePhase === idx
                          ? "border-primary bg-primary/10 ring-1 ring-primary"
                          : "border-primary/15 hover:border-primary/40 hover:bg-primary/5"
                      }`}
                    >
                      <span className="text-[11px] font-semibold text-primary">{MILESTONE_STATS[idx].year}</span>
                      <span className="w-full truncate text-[10.5px] text-gray-700 sm:text-[11px]">{step.phase}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 border-t border-primary/20 pt-2.5 sm:pt-3">
                <span className="text-[11.5px] text-gray-700 sm:text-[12px]">
                  Real-time Hoistway Kinematics Simulation
                </span>
                <ArrowLink to="/contact">Plan your lift with us</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Owner & Leadership Perspective */}
      <section
        id="about-leadership"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center border-b border-primary/20 py-8 sm:py-10 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="grid items-stretch gap-6 lg:grid-cols-[360px_1fr] lg:gap-8 xl:grid-cols-[400px_1fr] xl:gap-10">
            {/* Founder Image Showcase Card */}
            <div className="gsap-fade-item flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/25 bg-background p-3.5 shadow-xs sm:p-4">
              <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-xl border border-primary/20 bg-primary/10 sm:aspect-[4/3.8] lg:aspect-[4/4.4]">
                <img
                  src={founderLeadership.image}
                  alt={`${founderLeadership.name} - ${founderLeadership.role}`}
                  width={600}
                  height={700}
                  className="editorial-image h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-3.5 sm:p-4 text-background">
                  <div className="text-[16px] font-medium leading-snug sm:text-[17px]">
                    {founderLeadership.name}
                  </div>
                  <div className="text-[11.5px] text-background/80 sm:text-[12px]">
                    {founderLeadership.role}
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-primary/15 pt-2.5 text-[11.5px] text-primary">
                <span className="font-medium text-gray-700">{founderLeadership.experience}</span>
                <span className="rounded-full border border-primary/25 bg-primary/5 px-2 py-0.5 text-[10.5px] font-medium text-primary">
                  BIS / IS 14665 Lead
                </span>
              </div>
            </div>

            {/* Leadership Statement & Core Commitments */}
            <div className="gsap-fade-item flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-4 shadow-xs sm:p-5 md:p-6">
              <div>
                <div className="flex items-center justify-between border-b border-primary/20 pb-2.5">
                  <h2 className="text-[clamp(20px,2.6vw,32px)] leading-[1.15] text-primary font-normal">
                    Engineering integrity & founder responsibility.
                  </h2>
                </div>

                <blockquote className="mt-3 rounded-xl border-l-2 border-primary bg-primary/[0.03] py-2.5 pl-3.5 text-[13px] italic leading-relaxed text-primary sm:text-[14px]">
                  "{founderLeadership.quote}"
                </blockquote>

                <p className="mt-2.5 text-[12.5px] leading-relaxed text-gray-700 sm:text-[13px]">
                  {founderLeadership.statement}
                </p>

                <div className="mt-3.5 border-t border-primary/15 pt-3">
                  <div className="mb-2 text-[12px] font-medium uppercase tracking-wider text-primary">
                    Core Leadership Commitments
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {founderLeadership.commitments.map((commitment, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 rounded-lg border border-primary/10 bg-primary/[0.02] p-2 text-[12px] text-gray-700 sm:text-[12.5px]"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary bg-background text-[10px] text-primary font-medium">
                          {i + 1}
                        </span>
                        <span className="leading-snug">{commitment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-primary/20 pt-2.5 sm:pt-3">
                <ArrowLink to="/contact">Speak with engineering director</ArrowLink>
                <ArrowLink to="/lifts">Explore lift models</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Offices & Principles */}
      <section
        id="about-offices"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center py-8 sm:py-10 lg:py-6"
      >
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-fade-item">
            <h2 className="text-[clamp(22px,3.2vw,38px)] leading-[1.15] text-primary">
              Engineering principles & local commitment.
            </h2>
            <p className="mt-3 text-[13.5px] leading-relaxed text-gray-700 sm:text-[14px] md:text-[14.5px]">
              Our engineering methodology prioritizes passenger safety, energy efficiency through
              regenerative VVVF drives, smooth vibration-free acceleration and shallow-pit compact
              footprint designs tailored for contemporary Gujarat architecture.
            </p>
            <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
              <div className="flex items-center gap-2.5 text-[13px] text-primary sm:text-[13.5px]">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="shrink-0 text-primary" />
                <span>Dedicated field engineers stationed across Ahmedabad & Baroda</span>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-primary sm:text-[13.5px]">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} className="shrink-0 text-primary" />
                <span>Zero-subcontracting policy on mechanical erection & testing</span>
              </div>
            </div>
          </div>

          <div className="gsap-card-grid space-y-3">
            <div className="gsap-card rounded-2xl border border-primary/25 bg-background p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-primary/20 pb-2 text-[14.5px] font-medium text-primary sm:text-[15px]">
                <span>Ahmedabad Corporate Office</span>
                <span className="text-[11px] font-medium text-gray-700 sm:text-[11.5px]">
                  Head Office
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-gray-700 sm:text-[12.5px]">{hoAddress}</p>
              <div className="mt-2 text-[11.5px] text-primary sm:text-[12px]">Contact: {phone}</div>
            </div>

            <div className="gsap-card rounded-2xl border border-primary/25 bg-background p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-primary/20 pb-2 text-[14.5px] font-medium text-primary sm:text-[15px]">
                <span>Baroda Regional Operations</span>
                <span className="text-[11px] font-medium text-gray-700 sm:text-[11.5px]">
                  Regional Hub
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-gray-700 sm:text-[12.5px]">{address}</p>
              <div className="mt-2 text-[11.5px] text-primary sm:text-[12px]">Dispatch: {phone}</div>
            </div>

            <div className="gsap-card rounded-2xl border border-primary/25 bg-background p-4 shadow-xs">
              <div className="text-[13.5px] font-medium text-primary sm:text-[14px]">
                Direct Engineering Inquiries
              </div>
              <p className="mt-1 text-[12px] text-gray-700 sm:text-[12.5px]">
                {email} · {otherEmail}
              </p>
              <div className="mt-2 border-t border-primary/15 pt-2">
                <ArrowLink to="/services">View engineering services</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
