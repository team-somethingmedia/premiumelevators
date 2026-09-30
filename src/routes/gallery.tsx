import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink } from "@/components/site-shell";
import { images, pageHead } from "@/lib/site-data";

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
    <main className="mx-auto min-h-screen max-w-[1560px] px-5 py-14 md:px-10 md:py-20 xl:px-16">
      <h1 className="mb-10 text-[clamp(34px,4.8vw,60px)] leading-[1.12] text-primary">
        Elevator gallery.
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {photos.map((p, i) => (
          <figure key={p.title} className={i === 0 ? "md:col-span-2" : ""}>
            <div
              className={
                i === 0
                  ? "aspect-[16/8] overflow-hidden bg-primary/10"
                  : "aspect-[4/3] overflow-hidden bg-primary/10"
              }
            >
              <img
                src={p.src}
                alt={p.alt}
                width={i === 0 ? 1536 : 1024}
                height={1024}
                loading="lazy"
                className="editorial-image h-full w-full object-cover"
              />
            </div>
            <figcaption className="flex justify-between border-b border-primary/30 py-4 text-[15px] text-primary font-normal">
              <span>{p.title}</span>
              <span className="text-[13px] text-gray-700 font-normal">
                Gujarat Architectural Installation
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-14">
        <ArrowLink to="/contact">Discuss custom elevator design</ArrowLink>
      </div>
    </main>
  );
}
