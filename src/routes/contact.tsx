import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { address, hoAddress, email, otherEmail, pageHead } from "@/lib/site-data";
import { initPageAnimations } from "@/lib/gsap-animations";

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
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cleanup = initPageAnimations(containerRef.current);
    return cleanup;
  }, []);

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
    <main
      ref={containerRef}
      className="section-frame flex min-h-[calc(100svh-86px)] lg:h-[calc(100svh-86px)] lg:max-h-[calc(100svh-86px)] flex-col justify-center overflow-hidden py-4 sm:py-6 lg:py-6"
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-10 md:px-10 lg:gap-14 lg:px-12 xl:px-16">
        <div>
          <h1 className="gsap-hero-title text-[clamp(28px,3.8vw,48px)] leading-[1.12] text-primary">
            Let’s discuss your lift project.
          </h1>
          <p className="gsap-hero-text mt-3.5 max-w-[480px] text-[14px] md:text-[15px] leading-relaxed text-gray-700">
            Reach out to our engineering consultants for lift shaft dimension guidance, quotation estimates and on-site surveys across Ahmedabad and Baroda.
          </p>
          <div className="gsap-hero-action mt-6 space-y-3.5 text-[13.5px] text-gray-700 border-t border-primary/15 pt-4">
            <div>
              <div className="text-primary font-medium text-[14px]">Direct Email Enquiries:</div>
              <a
                href={`mailto:${email}`}
                className="block text-primary underline underline-offset-4 mt-0.5"
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
              <div className="text-primary font-medium text-[14px]">Ahmedabad Head Office:</div>
              <p className="mt-0.5 text-gray-700 leading-relaxed text-[13px]">{hoAddress}</p>
            </div>
            <div>
              <div className="text-primary font-medium text-[14px]">Baroda Regional Office:</div>
              <p className="mt-0.5 text-gray-700 leading-relaxed text-[13px]">{address}</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="gsap-hero-media grid gap-3 rounded-2xl border border-primary/20 bg-background/60 p-4 sm:p-6 shadow-xs"
          aria-label="Contact enquiry"
        >
          <input
            required
            name="name"
            aria-label="Your full name"
            placeholder="Your full name *"
            className="h-10 sm:h-11 w-full rounded-xl border border-primary/25 bg-background/80 px-3.5 text-[13.5px] text-primary outline-none transition-all duration-300 placeholder:text-gray-700/80 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:bg-background"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              type="email"
              name="email"
              aria-label="Email address"
              placeholder="Email address *"
              className="h-10 sm:h-11 w-full rounded-xl border border-primary/25 bg-background/80 px-3.5 text-[13.5px] text-primary outline-none transition-all duration-300 placeholder:text-gray-700/80 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:bg-background"
            />
            <input
              required
              type="tel"
              name="phone"
              aria-label="Phone number"
              placeholder="Phone number *"
              className="h-10 sm:h-11 w-full rounded-xl border border-primary/25 bg-background/80 px-3.5 text-[13.5px] text-primary outline-none transition-all duration-300 placeholder:text-gray-700/80 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:bg-background"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              name="city"
              aria-label="City (Ahmedabad, Baroda, etc.)"
              placeholder="City (e.g. Ahmedabad, Baroda) *"
              className="h-10 sm:h-11 w-full rounded-xl border border-primary/25 bg-background/80 px-3.5 text-[13.5px] text-primary outline-none transition-all duration-300 placeholder:text-gray-700/80 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:bg-background"
            />
            <input
              name="liftType"
              aria-label="Lift Type (Home, Passenger, Goods, etc.)"
              placeholder="Lift Type (e.g. Home, Passenger, Goods)"
              className="h-10 sm:h-11 w-full rounded-xl border border-primary/25 bg-background/80 px-3.5 text-[13.5px] text-primary outline-none transition-all duration-300 placeholder:text-gray-700/80 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:bg-background"
            />
          </div>
          <textarea
            required
            name="message"
            aria-label="Project details and requirements"
            placeholder="Tell us about your project requirements, stops, capacity or service needs *"
            rows={2}
            className="w-full resize-none rounded-xl border border-primary/25 bg-background/80 px-3.5 py-2.5 text-[13.5px] text-primary outline-none transition-all duration-300 placeholder:text-gray-700/80 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:bg-background"
          />
          <Button
            type="submit"
            className="mt-1 h-10 sm:h-11 w-fit rounded-full bg-primary px-7 text-[13px] font-normal text-primary-foreground shadow-none transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Send project enquiry <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-1" />
          </Button>
          {sent && (
            <p role="status" className="mt-1 text-[12.5px] text-gray-700">
              Your email client has opened with your structured enquiry.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}

