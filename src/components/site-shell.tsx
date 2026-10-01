import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import {
  lifts,
  services,
  email,
  otherEmail,
  address,
  hoAddress,
  authorityBacklinks,
  popularSearchQueries,
} from "@/lib/site-data";

export function ArrowLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-3 border-b border-primary pb-1.5 text-[13px] md:text-[14px] text-primary transition-[gap] hover:gap-5 ${className}`}
    >
      {children}
      <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.5} />
    </Link>
  );
}

const nav = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Lifts", to: "/lifts" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-[86px] max-w-[1440px] items-center justify-between gap-5 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <Link
          to="/"
          aria-label="Premium Elevators home"
          className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-85"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Premium Elevators"
            width="394"
            height="280"
            className="h-12 w-auto max-w-[170px] object-contain sm:h-14 sm:max-w-[200px] md:h-16 md:max-w-[240px]"
          />
          <span className="sr-only">Premium Elevators</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {nav.map((item) => (
            <div key={item.to} className="group relative flex h-[86px] items-center">
              <Link
                to={item.to}
                activeProps={{ className: "border-b border-primary font-medium" }}
                activeOptions={{ exact: true }}
                className="py-2 text-[13.5px] md:text-[14px] text-primary transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
              {(item.to === "/services" || item.to === "/lifts") && (
                <div className="invisible absolute left-[-20px] top-[70px] z-50 w-[320px] rounded-2xl border border-primary/20 bg-background/98 p-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 shadow-xl backdrop-blur-md">
                  <Link
                    to={item.to}
                    className="ruled-link mb-2 block py-2 text-[13px] text-primary font-medium"
                  >
                    All {item.label.toLowerCase()}
                  </Link>
                  {(item.to === "/services" ? services : lifts).map((entry) => (
                    <Link
                      key={entry.slug}
                      to={item.to === "/services" ? "/services/$slug" : "/lifts/$slug"}
                      params={{ slug: entry.slug }}
                      className="ruled-link block py-2.5 text-[13px] text-gray-700 hover:text-primary transition-colors"
                    >
                      {entry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Button
          asChild
          variant="default"
          className="hidden h-11 rounded-full bg-primary px-7 text-[13.5px] font-normal text-primary-foreground shadow-xs hover:bg-primary/90 hover:shadow-md transition-all duration-300 active:scale-[0.98] lg:inline-flex"
        >
          <Link to="/contact">
            Get in touch <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-primary rounded-full h-11 w-11 lg:hidden cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={24} />
        </Button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full max-h-[calc(100svh-86px)] overflow-y-auto rounded-b-2xl border-b border-primary/30 bg-background/98 px-5 pb-8 lg:hidden shadow-2xl backdrop-blur-lg z-50 animate-in fade-in slide-in-from-top-3 duration-300"
        >
          {nav.map((item) => (
            <div key={item.to} className="border-b border-primary/20">
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-[18px] text-primary"
              >
                {item.label}
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
              </Link>
              {(item.to === "/services" || item.to === "/lifts") && (
                <div className="grid grid-cols-1 gap-y-1 pb-3 pl-2 sm:grid-cols-2 sm:gap-x-4">
                  {(item.to === "/services" ? services : lifts).map((entry) => (
                    <Link
                      key={entry.slug}
                      to={item.to === "/services" ? "/services/$slug" : "/lifts/$slug"}
                      params={{ slug: entry.slug }}
                      onClick={() => setOpen(false)}
                      className="py-2.5 text-[13.5px] text-gray-700 hover:text-primary transition-colors"
                    >
                      {entry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-6 pt-2">
            <Button
              asChild
              className="w-full h-12 rounded-full bg-primary text-[14px] text-primary-foreground shadow-xs"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get in touch with engineers <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="flex min-h-[100svh] flex-col justify-between border-t border-primary/20 bg-background px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-12 lg:py-12 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-between gap-8 sm:gap-10">
        {/* Top Call to Action Header Row */}
        <div className="flex flex-col justify-between gap-6 border-b border-primary/20 pb-6 sm:flex-row sm:items-end sm:pb-8">
          <div>
            <div className="text-[12px] font-medium uppercase tracking-wider text-primary">
              Direct Engineering Consultation
            </div>
            <h2 className="mt-2 text-[clamp(24px,3.2vw,40px)] font-normal leading-[1.15] text-primary">
              Plan your lift shaft with Gujarat's leading engineers.
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <Button
              asChild
              className="h-11 rounded-full bg-primary px-7 text-[13.5px] font-normal text-primary-foreground shadow-xs transition-all duration-300 hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
            >
              <Link to="/contact">
                Request a site survey <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </Link>
            </Button>
          </div>
        </div>

        {/* 4-Column Structured Content Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Column 1: Brand & Direct Contact */}
          <div className="flex flex-col justify-between">
            <div>
              <Link to="/" aria-label="Premium Elevators home" className="inline-block transition-opacity hover:opacity-85">
                <img
                  src={logo}
                  alt="Premium Elevators"
                  width="394"
                  height="280"
                  className="h-12 w-auto max-w-[180px] object-contain sm:h-14 sm:max-w-[220px]"
                />
                <span className="sr-only">Premium Elevators</span>
              </Link>
              <p className="mt-4 text-[13.5px] leading-relaxed text-gray-700">
                Premium elevator engineering, precision installation, modernization and 24/7 preventive
                maintenance for residential, commercial and industrial spaces across Gujarat.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-1 text-[13px]">
              <div className="text-[11.5px] font-medium uppercase tracking-wider text-primary">Inquiries:</div>
              <a href={`mailto:${email}`} className="text-primary underline underline-offset-4 hover:opacity-80">
                {email}
              </a>
              <a href={`mailto:${otherEmail}`} className="text-primary underline underline-offset-4 hover:opacity-80">
                {otherEmail}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <div className="mb-3.5 text-[14.5px] font-medium text-primary">Explore Products & Services</div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-1">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-[13px] text-gray-700 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/lifts"
                className="text-[13px] text-gray-700 transition-colors hover:text-primary"
              >
                All Lift Types
              </Link>
              <Link
                to="/services"
                className="text-[13px] text-gray-700 transition-colors hover:text-primary"
              >
                All Services
              </Link>
            </div>
          </div>

          {/* Column 3: Regional Engineering Hubs */}
          <div>
            <div className="mb-3.5 text-[14.5px] font-medium text-primary">Offices in Gujarat</div>
            <div className="space-y-3.5 text-[13px] text-gray-700">
              <div>
                <div className="font-medium text-primary">Head Office (Ahmedabad):</div>
                <p className="mt-1 leading-relaxed text-gray-700">{hoAddress}</p>
              </div>
              <div>
                <div className="font-medium text-primary">Registered Office (Baroda):</div>
                <p className="mt-1 leading-relaxed text-gray-700">{address}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Compliance & Certifications */}
          <div>
            <div className="mb-3.5 text-[14.5px] font-medium text-primary">Standards & Legal</div>
            <div className="grid gap-2">
              {authorityBacklinks.map((auth) => (
                <a
                  key={auth.url}
                  href={auth.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-gray-700 transition-colors hover:text-primary"
                >
                  {auth.name} ↗
                </a>
              ))}
              <div className="mt-1 flex flex-col gap-1 border-t border-primary/15 pt-2">
                <Link
                  to="/privacy-policy"
                  className="text-[13px] text-gray-700 transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="text-[13px] text-gray-700 transition-colors hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Search Keywords Index */}
        <div className="border-t border-primary/20 pt-4 sm:pt-5">
          <div className="mb-2 text-[11.5px] font-medium uppercase tracking-wider text-primary">
            Popular Elevator Searches in Ahmedabad & Baroda
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-gray-700">
            {popularSearchQueries.map((q) => (
              <span key={q} className="border-b border-primary/15 pb-0.5">
                {q}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location stamps */}
        <div className="flex flex-col justify-between gap-3 border-t border-primary/20 pt-4 text-[12px] text-gray-700 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Premium Elevators. All rights reserved. IS 14665 & NBC 2016 Compliant.</span>
          <div>
            <span>Operational across Ahmedabad · Baroda · Surat · Rajkot · Gujarat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
