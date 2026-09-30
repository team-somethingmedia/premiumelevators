import { createFileRoute } from "@tanstack/react-router";
import { ArrowLink } from "@/components/site-shell";
import { email, pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead(
      "Privacy Policy | Premium Elevators Ahmedabad & Baroda",
      "Read how Premium Elevators handles information shared through email enquiries and website contact in Ahmedabad and Baroda.",
      "/privacy-policy",
    ),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto min-h-[calc(100svh-86px)] max-w-[900px] px-5 py-16 md:px-10">
      <h1 className="text-[clamp(34px,4.8vw,56px)] leading-[1.12] text-primary">Privacy policy.</h1>
      <div className="mt-10 space-y-6 text-[14.5px] md:text-[15.5px] leading-relaxed text-gray-700">
        <p>
          When you choose to contact Premium Elevators, your email client prepares a structured
          enquiry message containing the specifications you provide. The website does not retain or
          sell your personal information. Your enquiry is transmitted only when you send the email
          from your application.
        </p>
        <p>
          We use the information you send to assess site dimensions, provide elevator quotations and
          coordinate engineering site visits.
        </p>
        <p>
          For privacy inquiries or data requests, contact us directly at{" "}
          <a className="text-primary underline" href={`mailto:${email}`}>
            {email}
          </a>
          .
        </p>
      </div>
      <div className="mt-12">
        <ArrowLink to="/contact">Contact us</ArrowLink>
      </div>
    </main>
  );
}
