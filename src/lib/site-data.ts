import hero from "@/assets/elevator-hero.jpg";
import home from "@/assets/home-lift.jpg";
import goods from "@/assets/industrial-lift.jpg";
import capsule from "@/assets/capsule-lift.jpg";
import hospital from "@/assets/hospital-lift.jpg";
import motor from "@/assets/elevator-motor.jpg";

export const images = { hero, home, goods, capsule, hospital, motor };

export const illustrations3d = {
  motor: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-Co7Y43IXIqna0bWJp09V4VrXP1K7am.png",
  smartController: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-2vL1JW6NYs6a2F7CbJASnaaSnVRtPJ.png",
  laserSurvey: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-bk0Blvw2h3YpUL2VCEW6BCTIHw3mxW.png",
  safetyGovernor: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-kXBt6eBKGhBMvWpMgAfvEgOJyq8e6F.png",
  safetyShield: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-kXBt6eBKGhBMvWpMgAfvEgOJyq8e6F.png",
  panoramicCapsule: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-2vL1JW6NYs6a2F7CbJASnaaSnVRtPJ.png",
  copPanel: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-ZGC3nm3RAnS0v1Gpj5NVIOhFfyEA99.png",
  ecoDrive: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-TY2nnUu2xdWPP6NExiQYrp4LodTAP4.png",
  toolbox: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-d7lf8LhduKgJMeGR7zKIrY9OCmpv0E.png",
  motherboard: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-ZGC3nm3RAnS0v1Gpj5NVIOhFfyEA99.png",
  workbench: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-bk0Blvw2h3YpUL2VCEW6BCTIHw3mxW.png",
  shippingPallet: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-JkUJvSu9pc8aSJpZOUUJpVqZZPY5si.png",
};

export const lifts = [
  {
    slug: "home-lifts-in-ahmedabad-or-baroda",
    name: "Home lifts",
    use: "For private residences, duplexes, bungalows and luxury villas in Ahmedabad and Baroda",
    description:
      "Home lifts provide smooth vertical mobility across private homes, duplexes and villas in Ahmedabad and Baroda. Engineered with compact machine-room-less (MRL) technology, silent gearless drives, whisper-quiet operation and custom glass or stainless steel cabin finishes that integrate seamlessly with your interior architecture without requiring deep pit excavations or extensive overhead headroom.",
    image: home,
    specs: [
      { label: "Capacity", value: "250 kg to 450 kg (2 to 6 persons)" },
      { label: "Drive system", value: "Gearless MRL / Hydraulic traction" },
      { label: "Pit depth requirement", value: "150 mm to 300 mm shallow pit" },
      { label: "Standard speed", value: "0.3 m/s to 0.65 m/s" },
      { label: "Cabin finish", value: "Frameless glass, champagne gold, hairline SS" },
    ],
  },
  {
    slug: "passenger-lifts-in-ahmedabad-or-baroda",
    name: "Passenger lifts",
    use: "For residential apartments, commercial corporate towers and retail complexes",
    description:
      "Passenger lifts deliver rapid, energy-efficient and dependable vertical transit for multi-story residential towers, commercial offices and retail centers across Ahmedabad and Baroda. Equipped with intelligent microprocessor group dispatching, regenerative variable voltage variable frequency (VVVF) drives and robust safety interlocks certified to Bureau of Indian Standards (BIS) specifications.",
    image: hero,
    specs: [
      { label: "Capacity", value: "408 kg to 1600 kg (6 to 24 passengers)" },
      { label: "Drive system", value: "Permanent magnet synchronous gearless" },
      { label: "Speed range", value: "1.0 m/s up to 2.5 m/s" },
      { label: "Compliance standard", value: "IS 14665 & NBC 2016 safety norms" },
      { label: "Control system", value: "Microprocessor duplex / triplex group control" },
    ],
  },
  {
    slug: "hydraulic-lifts-in-ahmedabad-or-baroda",
    name: "Hydraulic lifts",
    use: "For low-rise private homes, heritage properties and buildings without overhead machine rooms",
    description:
      "Hydraulic lifts offer a versatile architectural solution for low-rise buildings, showrooms and private villas in Ahmedabad and Baroda where rooftop machine rooms cannot be accommodated. Utilizing high-efficiency submerged hydraulic power packs and precision proportional valves for soft start and stop transitions with minimal structural impact.",
    image: motor,
    specs: [
      { label: "Capacity", value: "300 kg to 2000 kg" },
      { label: "Travel height", value: "Up to 15 meters (G+4 floors)" },
      { label: "Machine room", value: "No overhead room required (compact ground cabinet)" },
      { label: "Speed", value: "0.35 m/s to 0.6 m/s" },
      { label: "Safety feature", value: "Automatic emergency lowering valve on power failure" },
    ],
  },
  {
    slug: "hospital-lifts-in-ahmedabad-or-baroda",
    name: "Hospital lifts",
    use: "For healthcare facilities, multi-specialty hospitals, trauma centers and diagnostic clinics",
    description:
      "Hospital bed and stretcher lifts are custom-engineered for multi-specialty healthcare centers in Ahmedabad and Baroda. Built with extended car depth to accommodate hospital stretchers, ICU beds and medical personnel with millimeter-level landing accuracy, gentle acceleration ramps and antibacterial hairline stainless steel interior surfaces.",
    image: hospital,
    specs: [
      { label: "Capacity", value: "1020 kg to 2040 kg (15 to 30 persons / stretcher)" },
      {
        label: "Door opening",
        value: "Center opening / two-speed telescopic (1000 mm to 1400 mm)",
      },
      { label: "Leveling accuracy", value: "±2 mm precision floor leveling" },
      { label: "Emergency system", value: "Automatic Rescue Device (ARD) & intercom backup" },
      { label: "Cabin finish", value: "Medical-grade 304 stainless steel with bumper rails" },
    ],
  },
  {
    slug: "goods-lifts-in-ahmedabad-or-baroda",
    name: "Goods lifts",
    use: "For industrial manufacturing plants, warehouses, logistics hubs and textile units",
    description:
      "Goods and freight lifts are built heavy-duty to transport raw materials, palletized cargo and machinery between industrial floor levels in manufacturing zones across Ahmedabad (Sanand, Changodar, Vatva, Naroda) and Baroda (Makarpura, Savli, Halol, Nandesari). Built with reinforced structural steel chassis, checkered anti-skid floor plates and heavy-gauge collapsible or bi-parting automatic steel doors.",
    image: goods,
    specs: [
      { label: "Capacity", value: "500 kg to 5000 kg (0.5 to 5 tons)" },
      { label: "Platform flooring", value: "Reinforced checkered steel plate" },
      {
        label: "Door options",
        value: "Manual collapsible / vertical bi-parting / auto telescopic",
      },
      { label: "Drive mechanism", value: "Heavy-duty geared traction or hydraulic cylinder" },
      { label: "Safety", value: "Instantaneous / gradual safety gear with overspeed governor" },
    ],
  },
  {
    slug: "capsule-lifts-in-ahmedabad-or-baroda",
    name: "Capsule lifts",
    use: "For luxury hotels, shopping malls, corporate headquarters and prestige private villas",
    description:
      "Panoramic capsule lifts elevate the visual presence of architectural lobbies and building facades in Ahmedabad and Baroda. Featuring curved or polygonal laminated safety glass cabins with integrated LED illumination, aerodynamic styling and panoramic 180° to 360° visibility during travel.",
    image: capsule,
    specs: [
      { label: "Glass specification", value: "Laminated curved toughened safety glass" },
      { label: "Shape choices", value: "Semi-circular, circular, 3-side glass polygonal" },
      { label: "Capacity", value: "408 kg to 1360 kg (6 to 20 passengers)" },
      { label: "Speed", value: "1.0 m/s to 1.75 m/s" },
      { label: "Drive", value: "Gearless synchronous motor with silent operation" },
    ],
  },
  {
    slug: "structure-lifts-in-ahmedabad-or-baroda",
    name: "Structure lifts",
    use: "For existing buildings and retrofit sites without a pre-constructed concrete civil lift shaft",
    description:
      "Self-supporting steel structure lifts provide a turnkey vertical mobility solution for existing bungalows, renovated commercial offices and heritage structures across Ahmedabad and Baroda that lack a built-in concrete elevator shaft. Fabricated from precision structural steel profiles and clad in glass or ACP sheets.",
    image: home,
    specs: [
      { label: "Structure material", value: "Engineered structural hollow steel sections (HSS)" },
      {
        label: "Cladding options",
        value: "Toughened laminated glass / ACP panels / insulated sheets",
      },
      { label: "Installation site", value: "Indoor stairwell core or exterior building facade" },
      { label: "Civil work impact", value: "Zero requirement for concrete shaft or masonry walls" },
      { label: "Capacity", value: "250 kg to 680 kg" },
    ],
  },
  {
    slug: "dumbwaiter-lifts-in-ahmedabad-or-baroda",
    name: "Dumbwaiter lifts",
    use: "For restaurants, hotels, cloud kitchens, laboratories and luxury multi-level residences",
    description:
      "Small service dumbwaiters deliver fast and hygienic transfer of food trays, kitchenware, medical specimens and documents between floors in Ahmedabad and Baroda commercial kitchens, hotels, hospitals and villas. Fabricated with food-grade stainless steel interior compartments with optional heated shelves and bi-parting vertical doors.",
    image: goods,
    specs: [
      { label: "Capacity", value: "50 kg to 250 kg" },
      { label: "Material", value: "Food-grade SS 304 cabin & bi-parting doors" },
      { label: "Speed", value: "0.25 m/s to 0.5 m/s" },
      { label: "Shelving", value: "Removable / adjustable stainless steel tray dividers" },
      { label: "Controls", value: "Floor call and send push-button stations with arrival chime" },
    ],
  },
  {
    slug: "car-lifts-in-ahmedabad-or-baroda",
    name: "Car lifts",
    use: "For automobile showrooms, multi-level parking structures and luxury residential basements",
    description:
      "Automotive car elevators eliminate cumbersome ramp footprints and optimize parking capacity in multi-level parking garages, car dealerships, service centers and luxury residences in Ahmedabad and Baroda. Engineered with rugged dual-cylinder hydraulic or heavy-duty traction drives to transport vehicles securely.",
    image: goods,
    specs: [
      { label: "Capacity", value: "2500 kg to 4000 kg" },
      { label: "Platform size", value: "Custom engineered up to 3000 mm x 6000 mm" },
      { label: "Drive system", value: "Heavy-duty hydraulic or traction hoist mechanism" },
      { label: "Safety devices", value: "Wheel stop barriers, optical positioning sensors, ARD" },
      { label: "Operation", value: "Key switch, remote control & driver-cabin push buttons" },
    ],
  },
] as const;

export const services = [
  {
    slug: "lift-installation-in-ahmedabad-or-baroda",
    name: "Lift installation & commissioning",
    description:
      "End-to-end turnkey elevator installation from initial structural shaft survey, mechanical erection, precision rail alignment, electrical wiring to final government elevator inspector licensing across Ahmedabad and Baroda. Every installation strictly adheres to Bureau of Indian Standards (IS 14665) and Gujarat Lift Act regulations.",
    deliverables: [
      "Site dimension survey and structural load assessment",
      "Turnkey mechanical and electrical erection",
      "Pre-commissioning multi-point safety validation",
      "Government lift inspection coordination and licensing",
    ],
  },
  {
    slug: "lift-maintenance-and-repair-in-ahmedabad-or-baroda",
    name: "Lift maintenance & AMC",
    description:
      "Comprehensive Annual Maintenance Contracts (AMC) and non-comprehensive preventive servicing programs designed to prevent unexpected breakdowns, extend machinery lifespan and maintain peak passenger safety for residential, commercial and industrial elevators in Ahmedabad and Baroda.",
    deliverables: [
      "Monthly multi-point preventive maintenance visits",
      "Lubrication, brake adjustment and safety gear testing",
      "Genuine OEM spare parts replacement",
      "Detailed digital service reports and logbook compliance",
    ],
  },
  {
    slug: "lift-modernization-in-ahmedabad-or-baroda",
    name: "Lift modernization & retrofit",
    description:
      "Transform ageing, sluggish or high-power-consuming elevator installations in Ahmedabad and Baroda with state-of-the-art microprocessors, regenerative VVVF drives, modern stainless steel cabins, touchless operating panels and whisper-quiet door operators without the cost of full shaft reconstruction.",
    deliverables: [
      "Energy-saving VVVF drive and controller replacement",
      "Cabin aesthetic modernization and LED lighting upgrades",
      "Door operator and safety curtain sensor upgrades",
      "Enhanced safety compliance to current NBC standards",
    ],
  },
  {
    slug: "lift-audit-in-ahmedabad-or-baroda",
    name: "Lift safety audit & inspection",
    description:
      "Independent engineering safety audits, performance benchmarking and statutory compliance inspections for building owners, housing societies and industrial plants across Ahmedabad and Baroda. Identifying hidden mechanical wear, electrical risks and ride quality deviations.",
    deliverables: [
      "Vibration, acceleration and ride comfort acoustic testing",
      "Governor overspeed and emergency brake trigger tests",
      "Rope wear and traction sheave groove inspection",
      "Comprehensive risk mitigation and compliance audit report",
    ],
  },
  {
    slug: "after-sales-service-in-ahmedabad-or-baroda",
    name: "After-sales & spares support",
    description:
      "Dedicated post-handover customer support, technical assistance and genuine spare parts inventory for all elevator systems installed throughout Ahmedabad and Baroda. Our local engineering inventory ensures zero downtime waiting for replacement components.",
    deliverables: [
      "Direct access to trained factory technicians",
      "Stocked local spares warehouse in Ahmedabad and Baroda",
      "Scheduled warranty checkups and health diagnostics",
      "Transparent service level agreements (SLAs)",
    ],
  },
  {
    slug: "emergency-breakdown-service-in-ahmedabad-or-baroda",
    name: "24/7 Emergency breakdown support",
    description:
      "Rapid response emergency breakdown team ready 24 hours a day, 7 days a week to handle passenger rescue situations and critical system downtime in residential buildings, hospitals and factories across Ahmedabad and Baroda.",
    deliverables: [
      "24/7 dedicated rapid breakdown hotline",
      "Trained rescue technicians dispatched immediately",
      "Systematic fault diagnosis and on-the-spot repair",
      "Post-incident safety verification before reopening",
    ],
  },
] as const;

export const popularSearchQueries = [
  "Best home lift in Ahmedabad",
  "Home lifts in Ahmedabad",
  "Passenger lift price Ahmedabad",
  "Hydraulic home lift in Baroda",
  "Industrial goods lift manufacturer Ahmedabad",
  "Hospital stretcher elevator Baroda",
  "Capsule glass lift in Ahmedabad",
  "Lift AMC and maintenance service Ahmedabad",
  "Lift modernization and retrofit Baroda",
  "MRL elevator installation Ahmedabad",
];

export const authorityBacklinks = [
  {
    name: "Bureau of Indian Standards",
    url: "https://www.bis.gov.in/",
    description: "National standards body of India for lift safety compliance (IS 14665)",
  },
  {
    name: "Government of Gujarat",
    url: "https://www.gujarat.gov.in/",
    description: "Official portal for Gujarat State Energy & Lift Inspection regulations",
  },
  {
    name: "Indian Green Building Council",
    url: "https://igbc.in/",
    description: "Energy-efficient building transit and green architecture certification",
  },
  {
    name: "CREDAI Gujarat",
    url: "https://credaiofficial.com/",
    description: "Apex body for real estate developers and builders in Gujarat",
  },
];

export const email = "info@premiumelevators.in";
export const otherEmail = "vikas.premiumelevators@gmail.com";
export const phone = "+91 98250 12345";
export const address = "A-343, Siddhath Annex-3, Nr. Dumad Circle, Vemali, Vadodara – 390008.";
export const hoAddress =
  "502, Parkview Prism, Umiya Dham Rd, next to Ganesh Pride, Khodiyar, Gujarat 382501.";

export const elevatorTechnologies = [
  {
    id: "mrl-drive",
    title: "Permanent Magnet Synchronous Gearless MRL",
    tagline: "Energy reduction up to 40% with machine-room-less architecture",
    description:
      "Eliminates bulky rooftop motor rooms. High-torque synchronous gearless drives run cooler, silent and vibration-free, making them optimal for luxury homes, low-to-high rise residential towers, and contemporary commercial buildings in Ahmedabad and Baroda.",
    metric: "Up to 40% energy savings",
    feature: "No penthouse room needed",
    illustration: illustrations3d.motor,
  },
  {
    id: "vvvf-drive",
    title: "VVVF Inverter Drive & Precision Leveling",
    tagline: "Millimeter-precise landing with jerk-free acceleration curves",
    description:
      "Variable Voltage Variable Frequency speed regulation guarantees ultra-smooth start and stop profiles, ensuring floor leveling within ±2mm for wheelchair, stretcher and passenger safety.",
    metric: "±2 mm stop precision",
    feature: "Stepless speed transitions",
    illustration: illustrations3d.ecoDrive,
  },
  {
    id: "ard-system",
    title: "Integrated Automatic Rescue Device (ARD)",
    tagline: "Autonomous battery-backed emergency evacuation system",
    description:
      "In case of sudden power outages in local power grids across Gujarat, the intelligent ARD immediately activates to navigate the car to the nearest floor and open doors automatically for safe exit.",
    metric: "Instant backup response",
    feature: "Fail-safe battery backup",
    illustration: illustrations3d.smartController,
  },
  {
    id: "cabin-acoustics",
    title: "Whisper-Quiet Cabin Acoustics & Dampening",
    tagline: "Sound levels engineered under 50 dB for peaceful interiors",
    description:
      "High-grade nylon guide rollers, vibration-isolated car slings, and acoustic damping sandwich panels ensure whisper-quiet travel inside private villas, residential penthouses and quiet healthcare environments.",
    metric: "< 50 dB silent travel",
    feature: "Vibration-isolated sling",
    illustration: illustrations3d.copPanel,
  },
] as const;

export const engineeringPhases = [
  {
    step: "01",
    phase: "Site Survey & Shaft Planning",
    description:
      "Structural engineers evaluate shaft dimensions, pit depth, overhead clearance, and electrical power parameters across residential or industrial sites in Gujarat.",
    deliverable: "Comprehensive shaft layout & civil guideline drawings",
    illustration: illustrations3d.workbench,
  },
  {
    step: "02",
    phase: "Precision Modular Fabrication",
    description:
      "Cabins, counterweights, guide rails, safety gear, and microprocessor control panels are custom-fabricated strictly adhering to IS 14665 standards.",
    deliverable: "Custom cabin finish & mechanical pre-assembly",
    illustration: illustrations3d.motor,
  },
  {
    step: "03",
    phase: "Laser Alignment & Mechanical Erection",
    description:
      "Certified elevator technicians erect guide rails using high-precision laser alignment, hang car slings, wire safety interlocks, and commission VVVF drives.",
    deliverable: "Smooth rail calibration & electrical interlock wiring",
    illustration: illustrations3d.toolbox,
  },
  {
    step: "04",
    phase: "Statutory Inspection & Safe Handover",
    description:
      "We coordinate government lift inspector validation, execute full-load emergency tests, and issue operation manuals with 24/7 AMC onboarding.",
    deliverable: "Gujarat Lift Authority certification & client handover",
    illustration: illustrations3d.safetyShield,
  },
] as const;

export const elevatorSafetySystems = [
  {
    title: "Instantaneous & Gradual Safety Gear",
    description:
      "Bi-directional mechanical overspeed governor clamps onto guide rails instantaneously if travel speed exceeds safety thresholds.",
    standard: "IS 14665 certified",
    illustration: illustrations3d.safetyGovernor,
  },
  {
    title: "Multi-Beam Infrared Light Curtains",
    description:
      "Dense non-contact infrared beams across the door frame prevent closing if passengers, pets, or objects cross the threshold.",
    standard: "154-beam protection",
    illustration: illustrations3d.laserSurvey,
  },
  {
    title: "Emergency Alarm & Microprocessor Intercom",
    description:
      "Dedicated battery-backed digital controller connects cabin occupants with building security and our emergency response team 24/7.",
    standard: "24/7 dedicated line",
    illustration: illustrations3d.smartController,
  },
  {
    title: "Certified IS 14665 Quality Standard",
    description:
      "Automated fail-safe mechanisms, thermal motor protection, and phase-1 emergency return certified by Gujarat Lift Authority.",
    standard: "NBC 2016 & IS 14665",
    illustration: illustrations3d.safetyShield,
  },
] as const;

export const companyVision = {
  title: "Engineering Vision & Mission",
  statement:
    "To set the benchmark for whisper-quiet, energy-efficient, and fail-safe vertical mobility across Gujarat through uncompromising mechanical precision and localized support.",
  pillars: [
    {
      title: "Zero Compromise on Passenger Safety",
      description:
        "Every component complies with Bureau of Indian Standards (IS 14665) and National Building Code regulations, backed by multi-stage factory and on-site testing.",
    },
    {
      title: "Architectural Harmony & Custom Craftsmanship",
      description:
        "Engineering space-efficient shallow-pit home lifts and panoramic glass capsules that blend seamlessly into contemporary architectural aesthetics.",
    },
    {
      title: "Dependable Local Engineering Support",
      description:
        "Ensuring round-the-clock technician availability, rapid emergency response, and stocked genuine spare parts in Ahmedabad and Baroda.",
    },
  ],
} as const;

export const companyJourney = [
  {
    phase: "Foundation & Home Mobility",
    milestone: "Precision Home Lifts Focus",
    description:
      "Established to solve spatial challenges in private residences, bungalows, and duplexes across Ahmedabad and Baroda with compact, shallow-pit MRL lift systems.",
  },
  {
    phase: "Commercial & Industrial Expansion",
    milestone: "Broadening Mobility Solutions",
    description:
      "Expanded engineering and manufacturing capabilities to deliver high-capacity passenger elevators, hospital stretcher lifts, and industrial goods elevators for manufacturing hubs in Gujarat.",
  },
  {
    phase: "Dual-City Operational Footprint",
    milestone: "Head Office & Regional Presence",
    description:
      "Solidified rapid regional service response with our corporate headquarters in Ahmedabad and regional operations hub in Vadodara, backed by local spares inventory.",
  },
  {
    phase: "Green Drives & Modernization",
    milestone: "Next-Generation Vertical Transit",
    description:
      "Integrated energy-saving regenerative VVVF drives, silent gearless motors, and comprehensive turnkey modernization packages for ageing elevator installations.",
  },
] as const;

export const founderLeadership = {
  name: "Vikas Patel",
  role: "Founder & Engineering Director",
  quote:
    "An elevator is not simply a mechanical box; it is critical safety infrastructure that families, patients, and industrial workers entrust with their lives every day.",
  statement:
    "When we founded Premium Elevators, our core principle was straightforward: uncompromising engineering integrity without taking shortcuts on materials, electronics, or safety gear. Whether engineering a single glass home lift in Vadodara or a multi-unit passenger lift installation in Ahmedabad, our team remains directly accountable from initial blueprint to ongoing maintenance.",
  commitments: [
    "Direct engineering oversight on every installation",
    "Adherence to certified BIS & Gujarat Lift Act standards",
    "Transparent technical consultations with architects & builders",
    "Responsive local servicing and preventive maintenance",
  ],
} as const;

export function pageHead(title: string, description: string, path: string, type = "website") {
  const canonicalUrl = `https://premiumelevators.in${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Premium Elevators, home lifts Ahmedabad, passenger lifts Ahmedabad, goods lifts Ahmedabad, hydraulic lifts Baroda, capsule lifts Gujarat, elevator manufacturer Ahmedabad, lift installation Baroda, hospital lifts Gujarat, lift maintenance Ahmedabad, lift AMC Baroda, best home lift in ahmedabad",
      },
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Ahmedabad, Vadodara, Gujarat" },
      { name: "geo.position", content: "23.0225;72.5714" },
      { name: "ICBM", content: "23.0225, 72.5714" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonicalUrl },
      { property: "og:site_name", content: "Premium Elevators" },
      { property: "og:image", content: "https://premiumelevators.in/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://premiumelevators.in/logo.png" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
