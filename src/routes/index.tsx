import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { ArrowLink } from "@/components/site-shell";
import { WarpBackground } from "@/components/ui/warp-background";
import { Elevator3DExperience } from "@/components/elevator-3d-model";
import { InteractiveHeroLogo } from "@/components/interactive-hero-logo";
import { initPageAnimations } from "@/lib/gsap-animations";
import {
  images,
  illustrations3d,
  lifts,
  services,
  pageHead,
  authorityBacklinks,
  elevatorTechnologies,
  engineeringPhases,
  elevatorSafetySystems,
} from "@/lib/site-data";

const LIFT_SPECS_TABLE = [
  {
    type: "Home Lifts (MRL)",
    capacity: "250 - 450 kg (2-6 Pax)",
    speed: "0.35 - 0.65 m/s",
    drive: "PMSM Gearless / Hydraulic",
    pit: "150 - 300 mm (Shallow)",
    overhead: "2600 mm",
    application: "Bungalows & Duplexes",
  },
  {
    type: "Passenger Elevators",
    capacity: "408 - 1600 kg (6-24 Pax)",
    speed: "1.0 - 2.5 m/s",
    drive: "Synchronous Gearless MRL",
    pit: "1200 - 1500 mm",
    overhead: "3800 - 4400 mm",
    application: "Residential & Corporate Towers",
  },
  {
    type: "Hospital & Bed Lifts",
    capacity: "1020 - 2040 kg (Stretcher)",
    speed: "0.75 - 1.5 m/s",
    drive: "Smooth VVVF Micro-Leveling",
    pit: "1400 mm",
    overhead: "4200 mm",
    application: "Hospitals & Medical Centers",
  },
  {
    type: "Panoramic Capsule Lifts",
    capacity: "408 - 1360 kg (6-20 Pax)",
    speed: "1.0 - 1.75 m/s",
    drive: "Silent Gearless Traction",
    pit: "1300 mm",
    overhead: "4200 mm",
    application: "Hotels, Malls & Luxury Villas",
  },
  {
    type: "Industrial Freight / Goods",
    capacity: "500 - 5000 kg (0.5-5 Tons)",
    speed: "0.25 - 0.75 m/s",
    drive: "Heavy Geared / Hydraulic Cylinder",
    pit: "1200 - 1800 mm",
    overhead: "4000 mm",
    application: "Factories, Warehouses & Textile Units",
  },
  {
    type: "Retrofit Structure Lifts",
    capacity: "250 - 680 kg (2-10 Pax)",
    speed: "0.35 - 1.0 m/s",
    drive: "Self-Supporting Steel Tower",
    pit: "200 mm (Zero Civil Shaft)",
    overhead: "2800 mm",
    application: "Existing Buildings & Heritage Homes",
  },
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Best Lifts & Elevators in Ahmedabad & Baroda | Premium Elevators",
      "Leading lift manufacturer and installer in Ahmedabad and Baroda. Home lifts, passenger elevators, hospital lifts, industrial goods lifts, hydraulic and capsule elevators with BIS compliance and 24/7 maintenance support.",
      "/",
    ),
  component: Home,
});

export function Home() {
  const [selectedTech, setSelectedTech] = useState<number>(0);
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cleanup = initPageAnimations(mainRef.current);
    return cleanup;
  }, []);

  return (
    <main ref={mainRef} className="relative overflow-hidden">
      {/* 1. Hero Section with 3D Warp Shaft Background & Interactive Logo in Strict 100vh Format */}
      <section
        id="hero-level"
        className="section-frame relative flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 bg-background"
      >
        <WarpBackground
          perspective={110}
          beamSize={4}
          beamsPerSide={5}
          beamDuration={3.2}
          gridColor="rgba(39, 74, 102, 0.16)"
          className="flex h-full min-h-[calc(100svh-86px)] w-full flex-col justify-center"
        >
          {/* Foreground Hero Content Grid — exact same container alignment as Header */}
          <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-8 px-4 py-8 sm:px-6 sm:py-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12 lg:py-6 xl:px-16">
            <div className="flex flex-col justify-center">
              <h1 className="gsap-hero-title text-[clamp(32px,3.8vw,52px)] font-normal leading-[1.14] tracking-tight text-primary">
                Best Home Lifts & Elevators in Ahmedabad & Baroda.
              </h1>
              <p className="gsap-hero-text mt-5 max-w-[580px] text-[15px] leading-[1.65] text-gray-700 md:text-[16.5px]">
                Engineering advanced vertical mobility for private residences, commercial towers,
                multi-specialty hospitals and industrial manufacturing plants across Gujarat with
                silent MRL technology, BIS safety compliance and local maintenance teams.
              </p>
              
              <div className="mt-7 flex flex-wrap items-center gap-6">
                <div className="gsap-hero-action">
                  <ArrowLink to="/lifts">Explore all lifts</ArrowLink>
                </div>
                <div className="gsap-hero-action">
                  <ArrowLink to="/contact">Discuss your project</ArrowLink>
                </div>
              </div>

              {/* Clean Inline Key Metrics */}
              <div className="gsap-fade-item mt-8 flex flex-wrap items-center gap-6 border-t border-primary/20 pt-6 sm:gap-8 md:gap-10">
                <div>
                  <div className="text-[20px] font-normal tracking-tight text-primary sm:text-[22px]">99.8%</div>
                  <div className="text-[12px] text-gray-700">System Uptime</div>
                </div>
                <div className="hidden h-7 w-[1px] bg-primary/20 sm:block" />
                <div>
                  <div className="text-[20px] font-normal tracking-tight text-primary sm:text-[22px]">IS 14665</div>
                  <div className="text-[12px] text-gray-700">BIS Certified</div>
                </div>
                <div className="hidden h-7 w-[1px] bg-primary/20 sm:block" />
                <div>
                  <div className="text-[20px] font-normal tracking-tight text-primary sm:text-[22px]">±2 mm</div>
                  <div className="text-[12px] text-gray-700">Stop Precision</div>
                </div>
                <div className="hidden h-7 w-[1px] bg-primary/20 sm:block" />
                <div>
                  <div className="text-[20px] font-normal tracking-tight text-primary sm:text-[22px]">24/7</div>
                  <div className="text-[12px] text-gray-700">Local Response</div>
                </div>
              </div>
            </div>

            {/* Custom Interactive 3D Brand Mark */}
            <div className="gsap-hero-media relative flex w-full items-center justify-center lg:justify-end">
              <InteractiveHeroLogo />
            </div>
          </div>
        </WarpBackground>
      </section>

      {/* 2. Lift Collection in 100vh Format */}
      <section
        id="lift-collection"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-6 sm:py-8 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 md:mb-8 md:flex-row md:items-end">
            <div>
              <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
                Lifts for every architectural space.
              </h2>
              <p className="mt-2 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                Custom-engineered vertical mobility solutions designed for residential bungalows,
                commercial complexes, healthcare facilities, and manufacturing plants across Gujarat.
              </p>
            </div>
            <ArrowLink to="/lifts" className="shrink-0">
              View all 6 lift categories
            </ArrowLink>
          </div>

          {/* 3 Featured Lift Cards */}
          <div className="gsap-card-grid grid gap-6 md:grid-cols-3">
            {lifts.slice(0, 3).map((lift, i) => (
              <Link
                to="/lifts/$slug"
                params={{ slug: lift.slug }}
                key={lift.slug}
                className="gsap-card group flex min-w-0 flex-col justify-between rounded-2xl border border-primary/25 bg-background p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-primary hover-lift"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-primary/15 bg-primary/10">
                    <img
                      src={lift.image}
                      alt={`${lift.name} installation example in Gujarat`}
                      width={i === 0 ? 1024 : i === 1 ? 1536 : 1024}
                      height={1024}
                      loading="lazy"
                      className="editorial-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between border-b border-primary/30 pb-3 text-primary">
                    <h3 className="text-[18px] font-normal text-primary md:text-[20px]">{lift.name}</h3>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={18}
                      strokeWidth={1.4}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-primary/20 pt-3">
                  {lift.specs.slice(0, 2).map((s) => (
                    <span
                      key={s.label}
                      className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[11.5px] text-primary"
                    >
                      <span className="text-gray-700">{s.label}:</span> {s.value}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Technical Matrix Table in 100vh Format */}
      <section
        id="specs-matrix"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-6 sm:py-8 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-5 flex flex-col justify-between gap-4 md:mb-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
                Elevator technical specifications matrix.
              </h2>
              <p className="mt-1.5 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                Architectural dimension guidelines and mechanical parameters for planning lift shafts
                in Ahmedabad and Baroda projects.
              </p>
            </div>
            <ArrowLink to="/contact" className="shrink-0">
              Request custom shaft drawings
            </ArrowLink>
          </div>

          {/* Technical Data Table */}
          <div className="gsap-fade-item overflow-x-auto rounded-2xl border border-primary/30 bg-background shadow-xs">
            <table className="w-full min-w-[680px] text-left text-[13px]">
              <thead className="border-b border-primary/30 bg-primary/5 text-[11.5px] font-medium uppercase tracking-wider text-primary">
                <tr>
                  <th className="p-3 sm:p-3.5">Elevator Category</th>
                  <th className="p-3 sm:p-3.5">Capacity Range</th>
                  <th className="p-3 sm:p-3.5">Speed</th>
                  <th className="p-3 sm:p-3.5">Drive Technology</th>
                  <th className="p-3 sm:p-3.5">Min. Pit Depth</th>
                  <th className="p-3 sm:p-3.5">Primary Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/20">
                {LIFT_SPECS_TABLE.map((row) => (
                  <tr key={row.type} className="gsap-table-row transition-colors hover:bg-primary/[0.04]">
                    <td className="whitespace-nowrap p-3 font-medium text-primary sm:p-3.5">{row.type}</td>
                    <td className="whitespace-nowrap p-3 text-gray-700 sm:p-3.5">{row.capacity}</td>
                    <td className="whitespace-nowrap p-3 text-gray-700 sm:p-3.5">{row.speed}</td>
                    <td className="p-3 text-gray-700 sm:p-3.5">{row.drive}</td>
                    <td className="whitespace-nowrap p-3 text-gray-700 sm:p-3.5">{row.pit}</td>
                    <td className="p-3 text-gray-700 sm:p-3.5">{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Interactive 3D Elevator Shaft Simulation in 100vh Format */}
      <section
        id="elevator-3d-simulator"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-6 sm:py-8 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 md:mb-7 md:flex-row md:items-end">
            <div>
              <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
                Interactive 3D elevator shaft & cabin simulator.
              </h2>
              <p className="mt-1.5 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                Experience real-time MRL gearless traction kinematics. Drag to orbit the 3D hoistway
                and click call buttons to dispatch the elevator cabin between 5 architectural
                levels.
              </p>
            </div>
            <ArrowLink to="/contact" className="shrink-0">
              Request BIM / 3D CAD models
            </ArrowLink>
          </div>

          <div className="gsap-fade-item grid items-stretch gap-6 lg:grid-cols-[1.3fr_1fr]">
            <Elevator3DExperience />

            <div className="flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-5 shadow-xs md:p-6">
              <div>
                <div className="flex items-center justify-between border-b border-primary/15 pb-3 text-[13px] text-primary">
                  <span className="font-medium text-primary">
                    Drive & Hoistway Overview
                  </span>
                  <span className="text-[12px] text-gray-700">
                    IS 14665 Compliant
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <h3 className="text-[17px] font-normal text-primary md:text-[18px]">Permanent Magnet Synchronous Drive</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-gray-700">
                      Gearless PMSM traction system eliminates machine room requirements while
                      reducing power consumption by up to 70%.
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-primary/15 pt-3 text-[13px]">
                    <div className="flex justify-between text-gray-700">
                      <span>Drive Architecture</span>
                      <span className="font-medium text-primary">Machine-Room-Less (MRL)</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Counterweight Ratio</span>
                      <span className="font-medium text-primary">1:1 Balanced Ratio</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Leveling Accuracy</span>
                      <span className="font-medium text-primary">±2 mm Micro-Leveling</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Emergency Protocol</span>
                      <span className="font-medium text-primary">ARD Auto-Rescue Battery</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-primary/20 pt-3">
                <span className="text-[12.5px] text-gray-700">
                  Real-time 3D Kinematics
                </span>
                <ArrowLink to="/lifts">Explore lift models</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Elevator Engineering & Drive Technology in 100vh Format */}
      <section
        id="drive-tech"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-6 sm:py-8 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 md:mb-7 md:flex-row md:items-end">
            <div>
              <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
                Elevator engineering & drive technology.
              </h2>
              <p className="mt-1.5 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                Precision engineering that combines permanent magnet synchronous gearless traction,
                micro-smooth VVVF leveling, and autonomous battery rescue.
              </p>
            </div>
            <ArrowLink to="/lifts" className="shrink-0">
              View lift specifications
            </ArrowLink>
          </div>

          <div className="gsap-fade-item grid items-stretch gap-6 lg:grid-cols-[1.1fr_1.3fr] lg:gap-10">
            <div className="flex flex-col justify-center space-y-2.5">
              {elevatorTechnologies.map((tech, idx) => {
                const isActive = selectedTech === idx;
                return (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => setSelectedTech(idx)}
                    className={`group w-full cursor-pointer rounded-xl border p-3.5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary/5 shadow-xs ring-1 ring-primary"
                        : "border-primary/20 bg-background hover:border-primary/60 hover:bg-primary/[0.02]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-primary">
                      <span className="text-[15px] font-normal text-primary">{tech.title}</span>
                      <span className="text-[12px] font-medium text-primary">
                        {tech.metric}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Workbench Preview with 3D Component Illustration & Efficiency Graph */}
            <div className="flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-5 shadow-xs transition-all duration-300 md:p-6">
              <div>
                <div className="flex items-center justify-between border-b border-primary/15 pb-3 text-[13px] text-primary">
                  <span className="font-medium text-primary">
                    Component Details
                  </span>
                  <span className="text-[12px] text-gray-700">
                    {elevatorTechnologies[selectedTech].feature}
                  </span>
                </div>

                <div className="mt-4 flex flex-col items-start gap-5 sm:flex-row">
                  <div className="flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/25 bg-primary/5 p-2 sm:w-36">
                    <img
                      src={elevatorTechnologies[selectedTech].illustration}
                      alt={elevatorTechnologies[selectedTech].title}
                      width={300}
                      height={300}
                      className="h-full w-full object-contain transition-transform duration-500 ease-out hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-[clamp(18px,2vw,22px)] font-normal leading-[1.2] text-primary">
                      {elevatorTechnologies[selectedTech].title}
                    </h3>
                    <div className="mt-1 text-[13px] font-medium text-primary">
                      {elevatorTechnologies[selectedTech].tagline}
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-gray-700">
                      {elevatorTechnologies[selectedTech].description}
                    </p>
                  </div>
                </div>

                {/* Energy Efficiency & Acoustic Performance Bar Graph */}
                <div className="mt-4 border-t border-primary/20 pt-3">
                  <div className="mb-2 text-[12.5px] font-medium text-primary">
                    Efficiency & Acoustic Benchmarks
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="mb-1 flex justify-between text-[11.5px] text-gray-700">
                        <span>PMSM Gearless Traction Energy Efficiency</span>
                        <span className="font-medium text-primary">70% vs Geared</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary/15">
                        <div className="h-full w-[70%] rounded-full bg-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-[11.5px] text-gray-700">
                        <span>Acoustic Whisper Rating (Cabin In-Flight)</span>
                        <span className="font-medium text-primary">&lt; 45 dB</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary/15">
                        <div className="h-full w-[88%] rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-primary/20 pt-3">
                <div className="text-[12.5px] text-primary">
                  Performance: <span className="font-medium text-gray-700">{elevatorTechnologies[selectedTech].metric}</span>
                </div>
                <ArrowLink to="/contact">Consult on this specification</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Turnkey Engineering & Installation Workflow in 100vh Format */}
      <section
        id="workflow"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-6 sm:py-8 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 md:mb-8 md:flex-row md:items-end">
            <div>
              <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
                Turnkey engineering & installation workflow.
              </h2>
              <p className="mt-1.5 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                From structural shaft survey in Ahmedabad and Baroda to certified mechanical
                erection, statutory inspection, and lifetime preventive maintenance.
              </p>
            </div>
            <ArrowLink to="/services" className="shrink-0">
              All engineering services
            </ArrowLink>
          </div>

          <div className="gsap-card-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringPhases.map((phase, idx) => {
              const isSelected = selectedPhase === idx;
              return (
                <div
                  key={phase.step}
                  onClick={() => setSelectedPhase(idx)}
                  onMouseEnter={() => setSelectedPhase(idx)}
                  className={`gsap-card group relative flex cursor-pointer flex-col justify-between rounded-2xl border p-4 sm:p-5 transition-all duration-300 hover-lift ${
                    isSelected
                      ? "border-primary bg-primary/[0.04] shadow-sm ring-1 ring-primary"
                      : "border-primary/25 bg-background"
                  }`}
                >
                  <div>
                    {/* 3D Illustration frame in Thiings.co style */}
                    <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-primary/15 bg-primary/5 p-3">
                      <img
                        src={phase.illustration}
                        alt={`Phase ${phase.step}: ${phase.phase}`}
                        width={240}
                        height={180}
                        className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-3.5 flex items-center justify-between border-b border-primary/20 pb-2 text-primary">
                      <span className="text-[16px] font-medium text-primary">
                        {phase.step}
                      </span>
                      <span className="text-[11px] font-medium text-gray-700">
                        Phase {idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-2 text-[15.5px] font-normal leading-snug text-primary">{phase.phase}</h3>
                  </div>
                  <div className="mt-4 border-t border-primary/20 pt-2.5 text-[11.5px] text-primary">
                    <span className="block text-[10px] font-medium uppercase tracking-wider text-gray-700">
                      Deliverable
                    </span>
                    <span className="mt-0.5 block text-[12px] font-medium text-gray-700 line-clamp-1">
                      {phase.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Services Support in 100vh Format — Clean & Minimal */}
      <section
        id="services-support"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-6 sm:py-8 lg:py-6"
      >
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-4 sm:px-6 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:px-12 xl:px-16">
          <div className="gsap-fade-item">
            <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Engineering & service support across Gujarat.
            </h2>
            <p className="mt-3.5 max-w-[480px] text-[14.5px] leading-relaxed text-gray-700">
              From initial shaft dimensions assessment, equipment manufacturing, precision
              mechanical erection to statutory government inspections and ongoing 24/7 breakdown
              assistance, our certified technicians support builders, architects and facility
              managers in Ahmedabad and Baroda.
            </p>
            <div className="mt-6">
              <ArrowLink to="/contact">Discuss maintenance & contracts</ArrowLink>
            </div>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-background p-4 shadow-xs md:p-6">
            {services.slice(0, 4).map((service) => (
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                key={service.slug}
                className="gsap-card group flex items-center justify-between gap-4 rounded-xl border-b border-primary/20 px-3.5 py-4 text-primary transition-colors hover:bg-primary/[0.04] last:border-b-0"
              >
                <span className="text-[16.5px] font-normal text-primary md:text-[18px]">
                  {service.name}
                </span>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={18}
                  className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            ))}
            <div className="mt-4 border-t border-primary/20 pt-3">
              <ArrowLink to="/services">All services</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Certified Elevator Safety Systems in 100vh Format — Clean & Minimal */}
      <section
        id="safety-systems"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-6 sm:py-8 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 md:mb-8 md:flex-row md:items-end">
            <div>
              <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
                Multi-layered elevator safety architecture.
              </h2>
              <p className="mt-1.5 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                Every elevator manufactured by Premium Elevators incorporates active and passive
                safety measures certified to IS 14665 and National Building Code specifications.
              </p>
            </div>
            <ArrowLink to="/contact" className="shrink-0">
              Safety compliance queries
            </ArrowLink>
          </div>

          <div className="gsap-card-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {elevatorSafetySystems.map((item) => (
              <div
                key={item.title}
                className="gsap-card group flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-4 sm:p-5 shadow-xs transition-all duration-300 hover:border-primary hover-lift"
              >
                <div>
                  {/* 3D Safety Component Frame */}
                  <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-primary/15 bg-primary/5 p-3">
                    <img
                      src={item.illustration}
                      alt={item.title}
                      width={240}
                      height={180}
                      className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-3.5 flex items-center justify-between border-b border-primary/20 pb-2 text-[12px] text-primary">
                    <span>Safety System</span>
                    <span className="font-medium text-gray-700">
                      {item.standard}
                    </span>
                  </div>
                  <h3 className="mt-2 text-[15.5px] font-normal leading-snug text-primary">{item.title}</h3>
                </div>
                <div className="mt-4 flex items-center gap-1.5 border-t border-primary/15 pt-2.5 text-[12px] text-primary transition-transform group-hover:translate-x-1">
                  <span className="font-medium">Verified Fail-Safe</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Certified safety & standards compliance in 100vh Format */}
      <section
        id="compliance"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-6 sm:py-8 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 md:mb-8">
            <h2 className="max-w-[960px] text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Certified safety & standards compliance.
            </h2>
            <p className="mt-1.5 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
              Every elevator conforms to Indian Standard IS 14665, National Building Code (NBC 2016)
              regulations and Gujarat Lift Inspection Authority directives for fail-safe vertical transit.
            </p>
          </div>
          <div className="gsap-card-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {authorityBacklinks.map((auth) => (
              <a
                key={auth.url}
                href={auth.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gsap-card group flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-5 shadow-xs transition-all duration-300 hover:border-primary hover-lift"
              >
                <div>
                  <div className="flex items-center justify-between text-primary">
                    <span className="text-[15px] font-medium text-primary">{auth.name}</span>
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-700 line-clamp-2">
                    {auth.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 border-t border-primary/15 pt-2.5 text-[11.5px] font-medium text-primary transition-transform group-hover:translate-x-1">
                  <span>Official Authority Record</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={13} />
                </div>
              </a>
            ))}
          </div>
          <div className="gsap-fade-item mt-7 flex flex-wrap gap-7">
            <ArrowLink to="/contact">Request a site survey</ArrowLink>
            <ArrowLink to="/about">About Premium Elevators</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
