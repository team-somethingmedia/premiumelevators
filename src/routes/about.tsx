import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ArrowUp01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { ArrowLink } from "@/components/site-shell";
import { HoistwayAscent3D } from "@/components/hoistway-ascent-3d";
import {
  images,
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

  return (
    <main className="relative">
      {/* 1. Intro Section */}
      <section
        id="about-hero"
        className="section-frame mx-auto grid max-w-[1560px] items-center gap-12 px-5 py-14 md:grid-cols-2 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div>
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-background px-3 py-1 text-[12px] text-primary mb-6 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-indicator" />
            Level 01 · Corporate Profile & Heritage
          </div>
          <h1 className="text-[clamp(34px,4.8vw,58px)] leading-[1.12] text-primary">
            About Premium Elevators.
          </h1>
          <p className="mt-6 max-w-[560px] text-[15.5px] md:text-[17px] leading-relaxed text-gray-700">
            Premium Elevators is a specialized vertical mobility engineering company serving
            residential developers, architectural consultants, hospital administrators, industrial
            enterprises and private homeowners across Ahmedabad and Baroda, Gujarat.
          </p>
          <p className="mt-4 max-w-[560px] text-[14.5px] leading-relaxed text-gray-700">
            We design, manufacture, install and maintain machine-room-less (MRL) gearless lifts,
            hydraulic home elevators, heavy industrial freight lifts and panoramic glass capsules
            built strictly to Bureau of Indian Standards (IS 14665) specifications.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-primary/20 py-4 max-w-[560px]">
            <div>
              <span className="block font-mono text-[20px] font-medium text-primary">500+</span>
              <span className="text-[12px] text-gray-700">Lifts Installed</span>
            </div>
            <div>
              <span className="block font-mono text-[20px] font-medium text-primary">24/7</span>
              <span className="text-[12px] text-gray-700">Local Breakdown SLA</span>
            </div>
            <div>
              <span className="block font-mono text-[20px] font-medium text-primary">100%</span>
              <span className="text-[12px] text-gray-700">IS 14665 Compliant</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-7">
            <ArrowLink to="/lifts">Explore our lift systems</ArrowLink>
            <ArrowLink to="/contact">Contact engineering team</ArrowLink>
          </div>
        </div>

        <div className="aspect-[4/3] md:aspect-[4/4] max-h-[560px] overflow-hidden bg-primary/10 border border-primary/25 relative shadow-xs">
          <img
            src={images.hero}
            alt="Premium Elevators architectural installation in Gujarat"
            width="1536"
            height="1024"
            className="editorial-image h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-background/95 border border-primary/30 px-3 py-1 text-[11px] font-mono text-primary backdrop-blur-xs">
            AHMEDABAD / GUJARAT HOISTWAY
          </div>
        </div>
      </section>

      {/* 2. Vision & Engineering Principles */}
      <section
        id="about-vision"
        className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mx-auto w-full max-w-[1432px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
                Level 02 · Engineering Principles
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
                Engineering vision & core principles.
              </h2>
              <p className="mt-3 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                {companyVision.statement}
              </p>
            </div>
            <ArrowLink to="/services" className="shrink-0">
              Explore service standards
            </ArrowLink>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {companyVision.pillars.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              return (
                <div
                  key={pillar.title}
                  onClick={() => setActivePillar(idx)}
                  onMouseEnter={() => setActivePillar(idx)}
                  className={`group flex flex-col justify-between border p-7 transition-all duration-300 hover-lift bg-background cursor-pointer ${
                    isSelected
                      ? "border-primary bg-primary/[0.04] shadow-sm ring-1 ring-primary"
                      : "border-primary/25"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-primary/20 pb-4 text-primary text-[13px]">
                      <span className="inline-flex items-center gap-2 font-mono">
                        <span
                          className={`h-2 w-2 rounded-full ${isSelected ? "bg-primary pulse-indicator" : "bg-primary/30"}`}
                        />
                        Pillar 0{idx + 1}
                      </span>
                      <span className="border border-primary/30 px-2 py-0.5 text-[12px] font-mono bg-background">
                        Certified Norms
                      </span>
                    </div>
                    <h3 className="mt-5 text-[20px] text-primary leading-snug font-normal">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-gray-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-primary/20 pt-4 flex items-center justify-between text-[13px] text-primary">
                    <span className="font-mono text-[12px]">Engineering Focus</span>
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
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
        className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mx-auto w-full max-w-[1432px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
                Level 03 · Ascent Timeline
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
                Our engineering journey across Gujarat.
              </h2>
              <p className="mt-3 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                An ascending trajectory from specialized home lift engineering to hospital
                infrastructure, heavy-duty freight and high-speed commercial transit.
              </p>
            </div>
            <ArrowLink to="/contact" className="shrink-0">
              Plan your lift with us
            </ArrowLink>
          </div>

          {/* Interactive 3D Hoistway Ascent + Active Stage Overview */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] items-stretch mb-8">
            <HoistwayAscent3D activePhase={activePhase} onPhaseChange={setActivePhase} />

            <div className="flex flex-col justify-between border border-primary/30 p-7 md:p-9 bg-background shadow-xs">
              <div>
                <div className="flex items-center justify-between border-b border-primary/20 pb-4 text-[13px] text-primary">
                  <span className="inline-flex items-center gap-2 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-indicator" />
                    STAGE 0{activePhase + 1} OF 04
                  </span>
                  <span className="border border-primary/30 px-2.5 py-0.5 text-[12px] font-mono">
                    {companyJourney[activePhase].milestone}
                  </span>
                </div>

                <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-48 h-36 shrink-0 border border-primary/30 overflow-hidden bg-primary/10">
                    <img
                      src={MILESTONE_IMAGES[activePhase]}
                      alt={companyJourney[activePhase].phase}
                      width={300}
                      height={200}
                      className="editorial-image h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[clamp(20px,2.4vw,28px)] leading-[1.2] text-primary">
                      {companyJourney[activePhase].phase}
                    </h3>
                    <p className="mt-3 text-[14px] text-gray-700 leading-relaxed">
                      {companyJourney[activePhase].description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-primary/15 pt-4 grid grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <span className="text-gray-700 block text-[11px] font-mono uppercase">
                      Key Milestone Year
                    </span>
                    <span className="font-mono text-primary font-medium text-[15px]">
                      {MILESTONE_STATS[activePhase].year}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-700 block text-[11px] font-mono uppercase">
                      Engineering Output
                    </span>
                    <span className="font-mono text-primary font-medium text-[13px]">
                      {MILESTONE_STATS[activePhase].metric}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-primary/20 pt-4 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[12.5px] font-mono text-gray-700">
                  Interactive WebGL Ascent Kinetics
                </span>
                <ArrowLink to="/contact">Plan your lift with us</ArrowLink>
              </div>
            </div>
          </div>

          {/* 4 Interactive Journey Selector Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyJourney.map((step, idx) => {
              const isSelected = activePhase === idx;
              return (
                <div
                  key={step.phase}
                  onClick={() => setActivePhase(idx)}
                  onMouseEnter={() => setActivePhase(idx)}
                  className={`group relative flex flex-col justify-between border p-5 transition-all duration-300 cursor-pointer bg-background hover-lift shadow-xs ${
                    isSelected
                      ? "border-primary ring-1 ring-primary bg-primary/[0.04]"
                      : "border-primary/25 hover:border-primary/60"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-primary/20 pb-3 text-[13px] text-primary">
                      <span className="text-[18px] text-primary font-mono font-medium">
                        0{idx + 1}
                      </span>
                      <span className="border border-primary/30 px-2 py-0.5 text-[11px] font-mono bg-background">
                        {step.milestone}
                      </span>
                    </div>

                    <div className="mt-4 aspect-[16/10] overflow-hidden border border-primary/20 bg-primary/10">
                      <img
                        src={MILESTONE_IMAGES[idx]}
                        alt={step.phase}
                        width={400}
                        height={250}
                        className={`editorial-image h-full w-full object-cover transition-transform duration-500 ${
                          isSelected ? "scale-105" : "group-hover:scale-105"
                        }`}
                      />
                    </div>

                    <h3 className="mt-4 text-[17.5px] text-primary leading-snug font-normal">
                      {step.phase}
                    </h3>
                    <p className="mt-3 text-[13.5px] text-gray-700 leading-relaxed line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-primary/20 pt-4 flex items-center justify-between text-[12px] text-gray-700">
                    <span className="font-mono">{MILESTONE_STATS[idx].year}</span>
                    <span
                      className={`font-mono transition-colors ${isSelected ? "text-primary font-medium" : "text-gray-700"}`}
                    >
                      {isSelected ? "● ACTIVE ALTITUDE" : "ASCEND TO STAGE"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Milestone Achievements Breakdown Table */}
          <div className="mt-8 border border-primary/25 bg-background p-5">
            <div className="text-[13px] font-mono uppercase text-primary mb-3">
              Gujarat Expansion Milestones Summary
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {MILESTONE_STATS.map((m) => (
                <div key={m.year} className="border-l-2 border-primary pl-3 py-1">
                  <span className="font-mono text-primary font-medium text-[15px]">{m.year}</span>
                  <div className="text-[13px] text-primary font-medium">{m.highlight}</div>
                  <p className="text-[12.5px] text-gray-700 mt-1">{m.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Owner & Leadership Perspective */}
      <section
        id="about-leadership"
        className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mx-auto grid w-full max-w-[1432px] gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <div className="border-b border-primary/20 pb-3 text-[13px] text-primary flex items-center justify-between font-mono">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-indicator" />
                Level 04 · Leadership Commitment
              </span>
              <span className="border border-primary/30 px-2 py-0.5 text-[12px]">
                Direct Accountability
              </span>
            </div>
            <h2 className="mt-6 text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
              Engineering integrity & founder responsibility.
            </h2>
            <blockquote className="mt-6 border-l-2 border-primary pl-6 text-[16px] md:text-[17px] italic text-primary leading-relaxed bg-background/50 py-3">
              "{founderLeadership.quote}"
            </blockquote>
            <p className="mt-5 text-[14.5px] text-gray-700 leading-relaxed">
              {founderLeadership.statement}
            </p>
            <div className="mt-7 border-t border-primary/20 pt-5 flex items-center justify-between">
              <div>
                <div className="text-[18px] text-primary font-medium">{founderLeadership.name}</div>
                <div className="text-[13px] text-gray-700">
                  {founderLeadership.role} · Premium Elevators
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono border border-primary/30 px-2 py-1 text-primary">
                  FOUNDER SIGN-OFF
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between border border-primary/30 p-7 md:p-9 bg-background shadow-xs">
            <div>
              <div className="text-[16px] text-primary border-b border-primary/20 pb-4 font-normal flex items-center justify-between">
                <span>Core Leadership Commitments</span>
                <span className="text-[12px] font-mono text-primary/70">IS 14665 SAFETY</span>
              </div>
              <div className="mt-6 space-y-4">
                {founderLeadership.commitments.map((commitment, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 border-b border-primary/15 pb-4 last:border-0"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-primary text-[12px] text-primary font-mono bg-background">
                      0{i + 1}
                    </span>
                    <p className="text-[14px] text-gray-700 leading-relaxed">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-primary/20 flex flex-wrap items-center justify-between gap-4">
              <ArrowLink to="/contact">Speak with engineering director</ArrowLink>
              <ArrowLink to="/lifts">Explore lift models</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Offices & Principles */}
      <section id="about-offices" className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto grid w-full max-w-[1432px] gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
              Level 05 · Regional Foothold
            </span>
            <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
              Engineering principles & local commitment.
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-gray-700">
              Our engineering methodology prioritizes passenger safety, energy efficiency through
              regenerative VVVF drives, smooth vibration-free acceleration and shallow-pit compact
              footprint designs tailored for contemporary Gujarat architecture.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-[13.5px] text-primary">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} className="text-primary" />
                <span>Dedicated field engineers stationed across Ahmedabad & Baroda</span>
              </div>
              <div className="flex items-center gap-3 text-[13.5px] text-primary">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} className="text-primary" />
                <span>Zero-subcontracting policy on mechanical erection & testing</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="border border-primary/25 bg-background p-5 shadow-xs">
              <div className="flex items-center justify-between text-[16px] text-primary font-medium border-b border-primary/20 pb-3">
                <span>Ahmedabad Corporate Office</span>
                <span className="text-[11px] font-mono border border-primary/30 px-2 py-0.5 text-primary">
                  HEAD OFFICE
                </span>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-gray-700">{hoAddress}</p>
              <div className="mt-3 text-[13px] font-mono text-primary">Contact: {phone}</div>
            </div>

            <div className="border border-primary/25 bg-background p-5 shadow-xs">
              <div className="flex items-center justify-between text-[16px] text-primary font-medium border-b border-primary/20 pb-3">
                <span>Baroda Regional Operations</span>
                <span className="text-[11px] font-mono border border-primary/30 px-2 py-0.5 text-primary">
                  REGIONAL HUB
                </span>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-gray-700">{address}</p>
              <div className="mt-3 text-[13px] font-mono text-primary">Dispatch: {phone}</div>
            </div>

            <div className="border border-primary/25 bg-background p-5 shadow-xs">
              <div className="text-[15px] text-primary font-medium">
                Direct Engineering Inquiries
              </div>
              <p className="mt-1.5 text-[13.5px] text-gray-700 font-mono">
                {email} · {otherEmail}
              </p>
              <div className="mt-3 pt-3 border-t border-primary/15">
                <ArrowLink to="/services">View engineering services</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
