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
      {/* 1. Hero Section — Blank 100vh Space */}
      <section
        id="hero-level"
        className="section-frame relative flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 bg-background"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16" />
      </section>

      {/* 2. Lift Collection in 100vh Format */}
      <section
        id="lift-collection"
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-6 sm:py-8 lg:py-6"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center md:mb-8">
            <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Lifts for every architectural space.
            </h2>
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
          <div className="gsap-section-header mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center md:mb-6">
            <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Elevator technical specifications matrix.
            </h2>
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
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center md:mb-7">
            <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Interactive 3D elevator shaft & cabin simulator.
            </h2>
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
        className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 py-4 sm:py-6 lg:py-4"
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          {/* Section Header with helper badge */}
          <div className="gsap-section-header mb-3 flex flex-col justify-between gap-2 sm:mb-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Interactive Component Inspector
                </span>
                <span className="hidden text-[12px] text-gray-700 sm:inline">
                  Select any drive system below to inspect live specifications
                </span>
              </div>
              <h2 className="mt-1 text-[clamp(20px,2.8vw,34px)] leading-[1.15] text-primary">
                Elevator engineering & drive technology.
              </h2>
            </div>
            <ArrowLink to="/lifts" className="shrink-0 text-[12.5px] sm:text-[13px]">
              View all lift specifications
            </ArrowLink>
          </div>

          {/* Mobile / Tablet Horizontal Tab Strip (Directly above showcase so changes are immediately visible) */}
          <div className="mb-3 grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:hidden">
            {elevatorTechnologies.map((tech, idx) => {
              const isActive = selectedTech === idx;
              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => setSelectedTech(idx)}
                  className={`flex cursor-pointer items-center gap-2 rounded-xl border p-2 text-left transition-all ${
                    isActive
                      ? "border-primary bg-primary text-background shadow-xs ring-1 ring-primary/30"
                      : "border-primary/20 bg-background text-primary hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <img
                    src={tech.illustration}
                    alt={tech.title}
                    width={32}
                    height={32}
                    className={`h-7 w-7 shrink-0 object-contain rounded-md p-0.5 ${
                      isActive ? "bg-background/20" : "bg-primary/5"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <span className="block truncate text-[11px] font-medium">
                      0{idx + 1}. {tech.title.split(" ")[0]} {tech.title.split(" ")[1]}
                    </span>
                    <span
                      className={`block truncate text-[10px] ${
                        isActive ? "text-background/80" : "text-gray-700"
                      }`}
                    >
                      {tech.metric}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop & Tablet Main Content Grid */}
          <div className="gsap-fade-item grid items-stretch gap-4 lg:grid-cols-[380px_1fr] lg:gap-6 xl:grid-cols-[420px_1fr]">
            {/* Desktop Left Column: 4 Interactive Selectable Cards with Mini 3D Illustrations */}
            <div className="hidden flex-col justify-between space-y-2 lg:flex">
              {elevatorTechnologies.map((tech, idx) => {
                const isActive = selectedTech === idx;
                return (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => setSelectedTech(idx)}
                    onMouseEnter={() => setSelectedTech(idx)}
                    className={`group relative flex w-full cursor-pointer items-center gap-3.5 rounded-xl border p-3 text-left transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-primary/[0.06] shadow-xs ring-1 ring-primary"
                        : "border-primary/20 bg-background hover:border-primary/60 hover:bg-primary/[0.02]"
                    }`}
                  >
                    {/* Mini Component Thumbnail */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border p-1 transition-colors ${
                        isActive
                          ? "border-primary/40 bg-primary/10"
                          : "border-primary/15 bg-primary/5 group-hover:border-primary/30"
                      }`}
                    >
                      <img
                        src={tech.illustration}
                        alt={tech.title}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[11px] font-semibold tracking-wider text-primary uppercase">
                          0{idx + 1} // TECH SPEC
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-1.5 py-0.2 text-[9.5px] font-medium text-background">
                            Active
                          </span>
                        )}
                      </div>
                      <div className="truncate text-[13.5px] font-medium text-primary">
                        {tech.title}
                      </div>
                      <div className="truncate text-[11.5px] text-gray-700">
                        {tech.metric} · {tech.feature}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Live Interactive Component Inspector Card */}
            <div className="flex flex-col justify-between rounded-2xl border border-primary/25 bg-background p-4 shadow-xs transition-all duration-300 sm:p-5">
              <div>
                {/* Top Inspection Status Bar */}
                <div className="flex items-center justify-between border-b border-primary/15 pb-2.5 text-[12.5px]">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span>Selected: 0{selectedTech + 1} — {elevatorTechnologies[selectedTech].feature}</span>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary">
                    IS 14665 Standard
                  </span>
                </div>

                {/* Split Component Display: 3D Illustration + Descriptive Overview */}
                <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <div className="relative flex aspect-square h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/25 bg-primary/5 p-2 shadow-xs">
                    <img
                      key={elevatorTechnologies[selectedTech].id}
                      src={elevatorTechnologies[selectedTech].illustration}
                      alt={elevatorTechnologies[selectedTech].title}
                      width={200}
                      height={200}
                      className="h-full w-full object-contain transition-transform duration-500 ease-out hover:scale-110"
                    />
                    <span className="absolute bottom-1 right-1 rounded-sm bg-background/80 px-1 py-0.2 text-[9px] text-primary font-medium">
                      3D Asset
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-700">
                      Engineering Architecture
                    </div>
                    <h3 className="text-[clamp(16px,1.8vw,20px)] font-normal leading-[1.2] text-primary">
                      {elevatorTechnologies[selectedTech].title}
                    </h3>
                    <div className="mt-0.5 text-[12.5px] font-medium text-primary">
                      {elevatorTechnologies[selectedTech].tagline}
                    </div>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-gray-700 line-clamp-2 sm:line-clamp-3">
                      {elevatorTechnologies[selectedTech].description}
                    </p>
                  </div>
                </div>

                {/* Live Engineering Benchmarks */}
                <div className="mt-3 border-t border-primary/15 pt-2.5">
                  <div className="mb-2 flex items-center justify-between text-[11.5px] font-medium text-primary">
                    <span>Performance Benchmarks</span>
                    <span className="text-gray-700">Output: {elevatorTechnologies[selectedTech].metric}</span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="rounded-lg border border-primary/15 bg-primary/[0.02] p-2">
                      <div className="mb-1 flex justify-between text-[11px] text-gray-700">
                        <span>PMSM Power Efficiency</span>
                        <span className="font-semibold text-primary">70% vs Geared</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary/15">
                        <div className="h-full w-[70%] rounded-full bg-primary transition-all duration-700" />
                      </div>
                    </div>

                    <div className="rounded-lg border border-primary/15 bg-primary/[0.02] p-2">
                      <div className="mb-1 flex justify-between text-[11px] text-gray-700">
                        <span>Acoustic Damping</span>
                        <span className="font-semibold text-primary">&lt; 45 dB Whisper</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary/15">
                        <div className="h-full w-[88%] rounded-full bg-primary transition-all duration-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar Footer */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-primary/20 pt-2.5 text-[12px]">
                <div className="text-gray-700">
                  Feature: <span className="font-medium text-primary">{elevatorTechnologies[selectedTech].feature}</span>
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
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center md:mb-8">
            <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Turnkey engineering & installation workflow.
            </h2>
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
          <div className="gsap-fade-item flex flex-col justify-center">
            <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
              Engineering & service support across Gujarat.
            </h2>
            <div className="mt-6 sm:mt-8">
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
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center md:mb-8">
            <h2 className="text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Multi-layered elevator safety architecture.
            </h2>
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
          <div className="gsap-section-header mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center md:mb-8">
            <h2 className="max-w-[960px] text-[clamp(24px,3.2vw,38px)] leading-[1.15] text-primary">
              Certified safety & standards compliance.
            </h2>
            <ArrowLink to="/contact" className="shrink-0">
              Request compliance record
            </ArrowLink>
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
