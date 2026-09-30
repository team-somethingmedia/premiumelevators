import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
import { ElevatorPathAnimation } from "@/components/elevator-path-animation";
import {
  images,
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

  return (
    <main className="relative overflow-hidden">
      {/* Elevator Continuous Hoistway SVG Pathing Spine */}
      <ElevatorPathAnimation />

      {/* 1. Hero Section with 3D Warp Shaft Background */}
      <section
        id="hero-level"
        className="section-frame relative flex min-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden border-b border-primary/20 bg-background"
      >
        <WarpBackground
          perspective={110}
          beamSize={4}
          beamsPerSide={5}
          beamDuration={3.2}
          gridColor="rgba(39, 74, 102, 0.16)"
          className="w-full min-h-[calc(100svh-86px)] px-5 py-16 md:px-12 md:py-24 xl:px-20 flex flex-col justify-center"
        >
          {/* Foreground Hero Content */}
          <div className="relative z-10 mx-auto w-full max-w-[1432px]">
            <div className="max-w-[920px]">
              <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.1] text-primary tracking-tight">
                Best Home Lifts & Elevators in Ahmedabad & Baroda.
              </h1>
              <p className="mt-6 max-w-[680px] text-[16px] md:text-[18px] leading-[1.65] text-gray-700">
                Engineering advanced vertical mobility for private residences, commercial towers,
                multi-specialty hospitals and industrial manufacturing plants across Gujarat with
                silent MRL technology, BIS safety compliance and local maintenance teams.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-8">
                <ArrowLink to="/lifts">Explore all lifts</ArrowLink>
                <ArrowLink to="/contact">Discuss your project</ArrowLink>
              </div>
            </div>
          </div>
        </WarpBackground>
      </section>

      {/* 2. Lift Collection */}
      <section
        id="lift-collection"
        className="section-frame mx-auto max-w-[1560px] px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
              Level 02 · Lift Systems Catalogue
            </span>
            <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
              Lifts for every architectural space.
            </h2>
            <p className="mt-3 max-w-[620px] text-[14.5px] leading-relaxed text-gray-700">
              Custom-engineered vertical mobility solutions designed for residential bungalows,
              commercial complexes, healthcare facilities, and manufacturing plants across Gujarat.
            </p>
          </div>
          <ArrowLink to="/lifts" className="shrink-0">
            View all 6 lift categories
          </ArrowLink>
        </div>

        {/* 3 Featured Lift Cards with full color authentic imagery */}
        <div className="grid gap-7 md:grid-cols-3">
          {lifts.slice(0, 3).map((lift, i) => (
            <Link
              to="/lifts/$slug"
              params={{ slug: lift.slug }}
              key={lift.slug}
              className="group min-w-0 border border-primary/25 bg-background p-5 transition-all duration-300 hover:border-primary hover-lift shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-primary/10 relative border border-primary/15">
                  <img
                    src={lift.image}
                    alt={`${lift.name} installation example in Gujarat`}
                    width={i === 0 ? 1024 : i === 1 ? 1536 : 1024}
                    height={1024}
                    loading="lazy"
                    className="editorial-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-background/90 border border-primary/30 px-2.5 py-0.5 text-[11px] font-mono text-primary backdrop-blur-xs">
                    MODEL 0{i + 1}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between border-b border-primary/30 pb-3 text-primary">
                  <h3 className="text-[20px] md:text-[22px] text-primary">{lift.name}</h3>
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={20}
                    strokeWidth={1.4}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-gray-700">{lift.use}</p>
              </div>

              <div className="mt-6 border-t border-primary/20 pt-4 flex flex-wrap gap-2">
                {lift.specs.slice(0, 2).map((s) => (
                  <span
                    key={s.label}
                    className="text-[11.5px] border border-primary/20 bg-primary/5 px-2.5 py-1 text-primary"
                  >
                    <span className="text-gray-700">{s.label}:</span> {s.value}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. NEW: Comprehensive Technical Matrix Table */}
      <section
        id="specs-matrix"
        className="section-frame mx-auto max-w-[1560px] px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
              Level 03 · Engineering Matrix
            </span>
            <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
              Elevator technical specifications matrix.
            </h2>
            <p className="mt-3 max-w-[620px] text-[14.5px] leading-relaxed text-gray-700">
              Architectural dimension guidelines and mechanical parameters for planning lift shafts
              in Ahmedabad and Baroda projects.
            </p>
          </div>
          <ArrowLink to="/contact" className="shrink-0">
            Request custom shaft drawings
          </ArrowLink>
        </div>

        {/* Technical Data Table */}
        <div className="overflow-x-auto border border-primary/30 bg-background shadow-xs">
          <table className="w-full text-left text-[13.5px]">
            <thead className="border-b border-primary/30 bg-primary/5 font-mono text-[12px] uppercase text-primary">
              <tr>
                <th className="p-4">Elevator Category</th>
                <th className="p-4">Capacity Range</th>
                <th className="p-4">Speed</th>
                <th className="p-4">Drive Technology</th>
                <th className="p-4">Min. Pit Depth</th>
                <th className="p-4">Primary Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/20">
              {LIFT_SPECS_TABLE.map((row) => (
                <tr key={row.type} className="transition-colors hover:bg-primary/[0.03]">
                  <td className="p-4 font-medium text-primary">{row.type}</td>
                  <td className="p-4 font-mono text-gray-700">{row.capacity}</td>
                  <td className="p-4 font-mono text-gray-700">{row.speed}</td>
                  <td className="p-4 text-gray-700">{row.drive}</td>
                  <td className="p-4 font-mono text-gray-700">{row.pit}</td>
                  <td className="p-4 text-gray-700">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Interactive 3D Elevator Shaft Simulation */}
      <section
        id="elevator-3d-simulator"
        className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mx-auto w-full max-w-[1432px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
                Level 04 · Kinetic Simulation
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
                Interactive 3D elevator shaft & cabin simulator.
              </h2>
              <p className="mt-3 max-w-[620px] text-[14.5px] leading-relaxed text-gray-700">
                Experience real-time MRL gearless traction kinematics. Drag to orbit the 3D hoistway
                and click call buttons to dispatch the elevator cabin between 5 architectural
                levels.
              </p>
            </div>
            <ArrowLink to="/contact" className="shrink-0">
              Request BIM / 3D CAD models
            </ArrowLink>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-stretch">
            <Elevator3DExperience />

            <div className="flex flex-col justify-between border border-primary/30 p-7 md:p-9 bg-background shadow-xs">
              <div>
                <div className="flex items-center justify-between border-b border-primary/20 pb-4 text-[13px] text-primary">
                  <span className="inline-flex items-center gap-2 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-indicator" />
                    MRL KINEMATICS ENGINE
                  </span>
                  <span className="border border-primary/30 px-2.5 py-0.5 text-[12px] font-mono">
                    IS 14665 SPEC
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-[20px] text-primary">Permanent Magnet Synchronous Drive</h3>
                    <p className="mt-2 text-[14px] text-gray-700 leading-relaxed">
                      Gearless PMSM traction system eliminates machine room requirements while
                      reducing power consumption by up to 70% compared to traditional geared
                      systems.
                    </p>
                  </div>

                  <div className="border-t border-primary/15 pt-4 space-y-2.5 text-[13px]">
                    <div className="flex justify-between text-gray-700">
                      <span>Drive Architecture</span>
                      <span className="font-mono text-primary font-medium">
                        Machine-Room-Less (MRL)
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Counterweight Ratio</span>
                      <span className="font-mono text-primary font-medium">1:1 Balanced Ratio</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Leveling Accuracy</span>
                      <span className="font-mono text-primary font-medium">
                        ±2 mm Micro-Leveling
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Emergency Protocol</span>
                      <span className="font-mono text-primary font-medium">
                        ARD Auto-Rescue Battery
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-primary/20 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[12.5px] font-mono text-gray-700">
                  Real-time WebGL + Three.js Engine
                </span>
                <ArrowLink to="/lifts">Explore lift models</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Elevator Engineering & Drive Technology */}
      <section
        id="drive-tech"
        className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mx-auto w-full max-w-[1432px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
                Level 05 · Traction & Motors
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
                Elevator engineering & drive technology.
              </h2>
              <p className="mt-3 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                Precision engineering that combines permanent magnet synchronous gearless traction,
                micro-smooth VVVF leveling, and autonomous battery rescue.
              </p>
            </div>
            <ArrowLink to="/lifts" className="shrink-0">
              View lift specifications
            </ArrowLink>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:gap-14">
            <div className="space-y-3">
              {elevatorTechnologies.map((tech, idx) => {
                const isActive = selectedTech === idx;
                return (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => setSelectedTech(idx)}
                    className={`group w-full text-left p-5 transition-all duration-300 border ${
                      isActive
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-primary/20 bg-background hover:border-primary/60 hover:bg-primary/[0.02]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-primary">
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2 w-2 rounded-full transition-colors ${isActive ? "bg-primary pulse-indicator" : "bg-primary/30"}`}
                        />
                        <span className="text-[16px] font-medium text-primary">{tech.title}</span>
                      </div>
                      <span className="text-[12px] border border-primary/30 px-2.5 py-0.5 text-primary font-mono bg-background">
                        {tech.metric}
                      </span>
                    </div>
                    <p className="mt-2 text-[13.5px] text-gray-700 pl-5 line-clamp-2">
                      {tech.tagline}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Interactive Workbench Preview with real Motor Schematic Photo & Efficiency Graph */}
            <div className="flex flex-col justify-between border border-primary/30 p-7 md:p-9 transition-all duration-300 bg-background shadow-xs">
              <div>
                <div className="flex items-center justify-between border-b border-primary/20 pb-4 text-[13px] text-primary">
                  <span className="inline-flex items-center gap-2 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-indicator" />
                    Benchmark {selectedTech + 1} of {elevatorTechnologies.length}
                  </span>
                  <span className="border border-primary/30 px-2.5 py-0.5 text-[12px] font-mono">
                    {elevatorTechnologies[selectedTech].feature}
                  </span>
                </div>

                <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-48 h-36 shrink-0 border border-primary/30 overflow-hidden bg-primary/10">
                    <img
                      src={images.motor}
                      alt="Permanent magnet synchronous gearless motor"
                      width={300}
                      height={200}
                      className="editorial-image h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[clamp(20px,2.4vw,28px)] leading-[1.2] text-primary">
                      {elevatorTechnologies[selectedTech].title}
                    </h3>
                    <div className="mt-2 text-[14px] text-primary font-medium">
                      {elevatorTechnologies[selectedTech].tagline}
                    </div>
                    <p className="mt-3 text-[14px] text-gray-700 leading-relaxed">
                      {elevatorTechnologies[selectedTech].description}
                    </p>
                  </div>
                </div>

                {/* Energy Efficiency & Acoustic Performance Bar Graph */}
                <div className="mt-6 border-t border-primary/20 pt-5">
                  <div className="text-[12.5px] font-mono uppercase text-primary mb-3">
                    Efficiency & Acoustic Benchmarks
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[12px] text-gray-700 mb-1">
                        <span>PMSM Gearless Traction Energy Efficiency</span>
                        <span className="font-mono text-primary font-medium">70% vs Geared</span>
                      </div>
                      <div className="h-2 w-full bg-primary/15 overflow-hidden">
                        <div className="h-full bg-primary w-[70%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[12px] text-gray-700 mb-1">
                        <span>Acoustic Whisper Rating (Cabin In-Flight)</span>
                        <span className="font-mono text-primary font-medium">&lt; 45 dB</span>
                      </div>
                      <div className="h-2 w-full bg-primary/15 overflow-hidden">
                        <div className="h-full bg-primary w-[88%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-primary/20 pt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="text-[13.5px] text-primary">
                  Performance Metric:{" "}
                  <span className="font-mono text-gray-700 font-medium">
                    {elevatorTechnologies[selectedTech].metric}
                  </span>
                </div>
                <ArrowLink to="/contact">Consult on this specification</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Turnkey Engineering & Installation Workflow */}
      <section
        id="workflow"
        className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mx-auto w-full max-w-[1432px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
                Level 06 · Lifecycle
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
                Turnkey engineering & installation workflow.
              </h2>
              <p className="mt-3 max-w-[580px] text-[14.5px] leading-relaxed text-gray-700">
                From structural shaft survey in Ahmedabad and Baroda to certified mechanical
                erection, statutory inspection, and lifetime preventive maintenance.
              </p>
            </div>
            <ArrowLink to="/services" className="shrink-0">
              All engineering services
            </ArrowLink>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringPhases.map((phase, idx) => {
              const isSelected = selectedPhase === idx;
              return (
                <div
                  key={phase.step}
                  onClick={() => setSelectedPhase(idx)}
                  onMouseEnter={() => setSelectedPhase(idx)}
                  className={`group relative flex flex-col justify-between border p-6 transition-all duration-300 hover-lift cursor-pointer ${
                    isSelected
                      ? "border-primary bg-primary/[0.04] shadow-sm ring-1 ring-primary"
                      : "border-primary/25 bg-background"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-primary border-b border-primary/20 pb-3">
                      <span className="text-[20px] text-primary font-mono font-medium">
                        {phase.step}
                      </span>
                      <span className="text-[11px] text-gray-700 uppercase tracking-wider font-mono border border-primary/30 px-2 py-0.5 bg-background">
                        Phase 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[18px] text-primary leading-snug">{phase.phase}</h3>
                    <p className="mt-3 text-[13.5px] text-gray-700 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="mt-7 border-t border-primary/20 pt-4 text-[12.5px] text-primary">
                    <span className="block text-gray-700 text-[11px] uppercase font-mono">
                      Deliverable
                    </span>
                    <span className="mt-1 block text-gray-700 font-medium">
                      {phase.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Services Support */}
      <section
        id="services-support"
        className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mx-auto grid w-full max-w-[1432px] gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
              Level 07 · Maintenance & Support
            </span>
            <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
              Engineering & service support across Gujarat.
            </h2>
            <p className="mt-5 max-w-[480px] text-[14.5px] leading-relaxed text-gray-700">
              From initial shaft dimensions assessment, equipment manufacturing, precision
              mechanical erection to statutory government inspections and ongoing 24/7 breakdown
              assistance, our certified technicians support builders, architects and facility
              managers in Ahmedabad and Baroda.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-[13.5px] text-primary">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} className="text-primary" />
                <span>24/7 Emergency Breakdown Dispatch in Ahmedabad & Baroda</span>
              </div>
              <div className="flex items-center gap-3 text-[13.5px] text-primary">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} className="text-primary" />
                <span>Original OEM Spare Parts & Laser Shaft Alignment</span>
              </div>
              <div className="flex items-center gap-3 text-[13.5px] text-primary">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} className="text-primary" />
                <span>Quarterly Safety Audit & Gujarat Lift Inspectorate Sign-off</span>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/30">
            {services.slice(0, 4).map((service) => (
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                key={service.slug}
                className="group flex items-center justify-between gap-4 border-b border-primary/30 py-5 text-primary transition-colors hover:bg-primary/[0.02] px-2"
              >
                <div>
                  <span className="text-[18px] text-primary md:text-[20px] font-normal">
                    {service.name}
                  </span>
                  <p className="text-[13px] text-gray-700 mt-1 line-clamp-1">
                    {service.description}
                  </p>
                </div>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                />
              </Link>
            ))}
            <div className="mt-8">
              <ArrowLink to="/services">All services</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Certified Elevator Safety Systems */}
      <section
        id="safety-systems"
        className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16 border-b border-primary/20"
      >
        <div className="mx-auto w-full max-w-[1432px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
                Level 08 · Protection Architecture
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
                Multi-layered elevator safety architecture.
              </h2>
              <p className="mt-3 max-w-[620px] text-[14.5px] leading-relaxed text-gray-700">
                Every elevator manufactured by Premium Elevators incorporates active and passive
                safety measures certified to IS 14665 and National Building Code specifications.
              </p>
            </div>
            <ArrowLink to="/contact" className="shrink-0">
              Safety compliance queries
            </ArrowLink>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {elevatorSafetySystems.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between border border-primary/25 bg-background p-6 transition-all duration-300 hover:border-primary hover-lift shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-primary/20 pb-3 text-[12px] text-primary">
                    <span>Safety System</span>
                    <span className="border border-primary/30 px-2 py-0.5 font-mono">
                      {item.standard}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[17.5px] text-primary leading-snug">{item.title}</h3>
                  <p className="mt-3 text-[13.5px] text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 flex items-center text-[13px] text-primary gap-2 transition-transform group-hover:translate-x-1 border-t border-primary/15">
                  <span className="font-mono text-[12px]">Verified Fail-Safe</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Certified safety & standards compliance */}
      <section id="compliance" className="section-frame px-5 py-14 md:px-10 md:py-20 xl:px-16">
        <div className="mx-auto w-full max-w-[1432px]">
          <span className="text-[12px] uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-0.5 inline-block mb-3 font-mono">
            Level 09 · Standards & Licensure
          </span>
          <h2 className="max-w-[960px] text-[clamp(26px,3.4vw,42px)] leading-[1.15] text-primary">
            Certified safety & standards compliance.
          </h2>
          <p className="mt-4 max-w-[620px] text-[14.5px] leading-relaxed text-gray-700">
            Every elevator manufactured and installed by Premium Elevators conforms to Indian
            Standard IS 14665, National Building Code (NBC 2016) regulations and Gujarat Lift
            Inspection Authority directives for fail-safe vertical transit.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {authorityBacklinks.map((auth) => (
              <a
                key={auth.url}
                href={auth.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-primary/25 bg-background p-6 transition-all duration-300 hover:border-primary hover-lift shadow-xs"
              >
                <div className="flex items-center justify-between text-primary">
                  <span className="text-[15px] font-medium text-primary">{auth.name}</span>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-gray-700">
                  {auth.description}
                </p>
              </a>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-7">
            <ArrowLink to="/contact">Request a site survey</ArrowLink>
            <ArrowLink to="/about">About Premium Elevators</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
