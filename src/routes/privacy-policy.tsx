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
    <main className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden py-4 sm:py-6 lg:py-6">
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6 md:px-10 lg:px-12">
        <h1 className="text-[clamp(28px,3.8vw,48px)] leading-[1.12] text-primary">Privacy policy.</h1>
        <div className="mt-5 space-y-4 text-[14px] md:text-[14.5px] leading-relaxed text-gray-700">
          <p>
            When you choose to contact Premium Elevators, your email client prepares a structured
            enquiry message containing the specifications you provide. The website does not retain or
            sell your personal information. Your enquiry is transmitted only when you send the email
            from your application.
          </p>
          <p>
            We use the information you send to assess site dimensions, provide elevator quotations and
            coordinate engineering site visits across Gujarat.
          </p>
          <p>
            For privacy inquiries or data requests, contact us directly at{" "}
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
