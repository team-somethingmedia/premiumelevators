import { createFileRoute, Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { lifts, pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/lifts/")({
  head: () =>
    pageHead(
      "Lifts & Elevators in Ahmedabad & Baroda | Home, Passenger, Goods & Hospital Lifts",
      "Explore our comprehensive lift collection in Ahmedabad and Baroda: Home Lifts, Passenger Lifts, Hospital Stretchers, Industrial Goods Elevators, Capsule Glass Lifts, Hydraulic Lifts, Structure Elevators, Dumbwaiters and Car Lifts.",
      "/lifts",
    ),
  component: Lifts,
});

function Lifts() {
  return (
    <main className="mx-auto min-h-screen max-w-[1560px] px-5 py-14 md:px-10 md:py-20 xl:px-16">
      <h1 className="mb-10 text-[clamp(34px,4.8vw,60px)] leading-[1.12] text-primary">
        Lifts for Ahmedabad & Baroda.
      </h1>
      <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {lifts.map((lift) => (
          <Link
            key={lift.slug}
            to="/lifts/$slug"
            params={{ slug: lift.slug }}
            className="group hover-lift"
          >
            <div className="aspect-[4/3] overflow-hidden bg-primary/10">
              <img
                className="editorial-image h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src={lift.image}
                alt={`${lift.name} architectural installation in Gujarat`}
                loading="lazy"
                width="1024"
                height="1024"
              />
            </div>
            <div className="flex items-center justify-between border-b border-primary/40 py-4 text-primary">
              <h2 className="text-[20px] text-primary font-normal">{lift.name}</h2>
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} />
            </div>
            <p className="mt-2.5 text-[14px] leading-relaxed text-gray-700">{lift.use}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
