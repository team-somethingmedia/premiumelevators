import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { address, hoAddress, email, otherEmail, pageHead } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact Premium Elevators | Ahmedabad & Baroda Lift Enquiries",
      "Get in touch with Premium Elevators in Ahmedabad and Baroda for home lifts, passenger elevators, hospital lifts, goods lifts, maintenance AMC and turnkey installation.",
      "/contact",
    ),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Lift Project Enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nCity: ${data.get("city")}\nLift Type: ${data.get("liftType") || "General"}\n\nProject Details:\n${data.get("message")}`,
    );
    window.location.href = `mailto:${email}?cc=${otherEmail}&subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="mx-auto grid min-h-[calc(100svh-86px)] max-w-[1560px] items-center gap-12 px-5 py-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:px-10 xl:px-16">
      <div>
        <h1 className="text-[clamp(34px,4.8vw,60px)] leading-[1.12] text-primary">
          Let’s discuss your lift project.
        </h1>
        <p className="mt-6 max-w-[480px] text-[15px] md:text-[16px] leading-relaxed text-gray-700">
          Reach out to our engineering consultants for elevator design recommendations, civil shaft
          dimension guidance, quotation estimates and on-site surveys across Ahmedabad, Baroda and
          nearby Gujarat industrial clusters.
        </p>
        <div className="mt-10 space-y-5 text-[14px] text-gray-700">
          <div>
            <div className="text-primary font-normal text-[15px]">Direct Email Enquiries:</div>
            <a
              href={`mailto:${email}`}
              className="block text-primary underline underline-offset-4 mt-1"
            >
              {email}
            </a>
            <a
              href={`mailto:${otherEmail}`}
              className="block text-primary underline underline-offset-4 mt-0.5"
            >
              {otherEmail}
            </a>
          </div>
          <div>
            <div className="text-primary font-normal text-[15px]">Ahmedabad Head Office:</div>
            <p className="mt-1 text-gray-700 leading-relaxed">{hoAddress}</p>
          </div>
          <div>
            <div className="text-primary font-normal text-[15px]">Baroda Regional Office:</div>
            <p className="mt-1 text-gray-700 leading-relaxed">{address}</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={submit}
        className="grid gap-4 border border-primary/20 bg-background/50 p-6 md:p-8"
        aria-label="Contact enquiry"
      >
        <input
          required
          name="name"
          aria-label="Your full name"
          placeholder="Your full name *"
          className="h-12 w-full rounded-none border-b border-primary/40 bg-transparent px-2 text-[14px] text-primary outline-none placeholder:text-gray-700 focus:border-primary"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            type="email"
            name="email"
            aria-label="Email address"
            placeholder="Email address *"
            className="h-12 w-full rounded-none border-b border-primary/40 bg-transparent px-2 text-[14px] text-primary outline-none placeholder:text-gray-700 focus:border-primary"
          />
          <input
            required
            type="tel"
            name="phone"
            aria-label="Phone number"
            placeholder="Phone number *"
            className="h-12 w-full rounded-none border-b border-primary/40 bg-transparent px-2 text-[14px] text-primary outline-none placeholder:text-gray-700 focus:border-primary"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            name="city"
            aria-label="City (Ahmedabad, Baroda, etc.)"
            placeholder="City (e.g. Ahmedabad, Baroda) *"
            className="h-12 w-full rounded-none border-b border-primary/40 bg-transparent px-2 text-[14px] text-primary outline-none placeholder:text-gray-700 focus:border-primary"
          />
          <input
            name="liftType"
            aria-label="Lift Type (Home, Passenger, Goods, etc.)"
            placeholder="Lift Type (e.g. Home, Passenger, Goods)"
            className="h-12 w-full rounded-none border-b border-primary/40 bg-transparent px-2 text-[14px] text-primary outline-none placeholder:text-gray-700 focus:border-primary"
          />
        </div>
        <textarea
          required
          name="message"
          aria-label="Project details and requirements"
          placeholder="Tell us about your project requirements, building type, number of stops, capacity or service needs *"
          rows={4}
          className="w-full resize-y rounded-none border-b border-primary/40 bg-transparent px-2 py-3 text-[14px] text-primary outline-none placeholder:text-gray-700 focus:border-primary"
        />
        <Button
          type="submit"
          className="mt-2 h-12 w-fit rounded-none bg-primary px-8 text-[13.5px] font-normal text-primary-foreground shadow-none hover:bg-primary/90"
        >
          Send project enquiry <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} />
        </Button>
        {sent && (
          <p role="status" className="mt-2 text-[13.5px] text-gray-700">
            Your email client has opened with your structured enquiry. Please submit the email to
            deliver your request.
          </p>
        )}
      </form>
    </main>
  );
}
