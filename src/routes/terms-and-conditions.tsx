import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink } from "@/components/site-shell";
import { email, pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    pageHead(
      "Terms & Conditions | Premium Elevators Ahmedabad & Baroda",
      "Read the website terms for information about lifts and engineering services from Premium Elevators in Ahmedabad and Baroda.",
      "/terms-and-conditions",
    ),
  component: Terms,
});

function Terms() {
  return (
    <main className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden py-4 sm:py-6 lg:py-6">
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6 md:px-10 lg:px-12">
        <h1 className="text-[clamp(28px,3.8vw,48px)] leading-[1.12] text-primary">
          Terms & conditions.
        </h1>
        <div className="mt-5 space-y-4 text-[14px] md:text-[14.5px] leading-relaxed text-gray-700">
          <p>
            This website provides architectural and technical specifications about Premium Elevators,
            our lift categories, customization options and engineering maintenance services across
            Ahmedabad and Baroda, Gujarat.
          </p>
          <p>
            Elevator suitability, shaft dimensions, load capacity, pricing and manufacturing lead
            times are finalized following a physical civil site assessment and formal engineering
            proposal.
          </p>
          <p>
            For formal project quotations and technical queries, reach our engineering desk at{" "}
            <a className="text-primary underline" href={`mailto:${email}`}>
              {email}
            </a>
            .
          </p>
        </div>
        <div className="mt-6 border-t border-primary/15 pt-4">
          <ArrowLink to="/contact">Contact us</ArrowLink>
        </div>
      </div>
    </main>
  );
}
