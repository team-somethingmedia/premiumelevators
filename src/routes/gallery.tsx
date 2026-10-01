import { createFileRoute } from "@tanstack/react-router";
import { useRef, useEffect } from "react";
import { ArrowLink } from "@/components/site-shell";
import { images, pageHead } from "@/lib/site-data";
import { initPageAnimations } from "@/lib/gsap-animations";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead(
      "Elevator Gallery | Architectural Installations in Ahmedabad & Baroda",
      "Browse architectural photographs of home lifts, passenger elevators and industrial goods lifts installed in Ahmedabad and Baroda by Premium Elevators.",
      "/gallery",
    ),
  component: Gallery,
});

function Gallery() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cleanup = initPageAnimations(containerRef.current);
    return cleanup;
  }, []);

  const photos = [
    {
      src: images.hero,
      alt: "Passenger elevator in a modern architectural commercial lobby in Ahmedabad",
      title: "Commercial Passenger Lifts",
    },
    {
      src: images.home,
      alt: "Panoramic glass residential home elevator in a luxury Gujarat villa",
      title: "Residential Home Lifts",
    },
    {
      src: images.goods,
      alt: "Heavy-duty freight goods lift in an industrial warehouse near Baroda",
      title: "Industrial Goods Lifts",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden py-4 sm:py-6 lg:py-6"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="mb-4 sm:mb-6 flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
          <h1 className="gsap-hero-title text-[clamp(24px,3.2vw,38px)] leading-[1.12] text-primary">
            Elevator gallery.
          </h1>
          <span className="text-[13px] text-gray-700">Gujarat Architectural Installations</span>
        </div>
        <div className="gsap-card-grid grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          {photos.map((p) => (
            <figure key={p.title} className="gsap-card group flex flex-col justify-between rounded-2xl border border-primary/20 bg-background p-3.5 sm:p-4 shadow-xs">
              <div className="aspect-[16/10] max-h-[280px] overflow-hidden rounded-xl border border-primary/20 bg-primary/10">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="editorial-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <figcaption className="flex justify-between border-t border-primary/20 mt-3 pt-2.5 text-[13.5px] text-primary font-normal">
                <span>{p.title}</span>
                <span className="text-[12px] text-gray-700 font-normal">
                  IS 14665 Build
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="gsap-fade-item mt-6 flex justify-between items-center border-t border-primary/15 pt-4">
          <span className="text-[13px] text-gray-700">Custom architectural cab finishes & glass towers available</span>
          <ArrowLink to="/contact">Discuss custom elevator design</ArrowLink>
        </div>
      </div>
    </main>
  );
}

