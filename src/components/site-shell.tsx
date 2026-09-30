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
    <header className="relative z-30 border-b border-primary/20 bg-background">
      <div className="mx-auto flex h-[86px] max-w-[1560px] items-center justify-between gap-5 px-5 md:px-10 xl:px-16">
        <Link
          to="/"
          aria-label="Premium Elevators home"
          className="flex min-w-0 items-center gap-3"
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
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex xl:gap-10">
          {nav.map((item) => (
            <div key={item.to} className="group relative flex h-[86px] items-center">
              <Link
                to={item.to}
                activeProps={{ className: "border-b border-primary" }}
                activeOptions={{ exact: true }}
                className="py-2 text-[13px] md:text-[14px] text-primary transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
              {(item.to === "/services" || item.to === "/lifts") && (
                <div className="invisible absolute left-[-24px] top-[70px] z-40 w-[320px] border border-primary/20 bg-background p-5 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 shadow-none">
                  <Link
                    to={item.to}
                    className="ruled-link mb-2 block py-2 text-[13px] text-primary"
                  >
                    All {item.label.toLowerCase()}
                  </Link>
                  {(item.to === "/services" ? services : lifts).map((entry) => (
                    <Link
                      key={entry.slug}
                      to={item.to === "/services" ? "/services/$slug" : "/lifts/$slug"}
                      params={{ slug: entry.slug }}
                      className="ruled-link block py-2.5 text-[13px] text-gray-700 hover:text-primary"
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
          className="hidden h-10 rounded-none bg-primary px-5 text-[13px] font-normal text-primary-foreground shadow-none hover:bg-primary/90 lg:inline-flex"
        >
          <Link to="/contact">
            Get in touch <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} size={23} />
        </Button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full max-h-[calc(100svh-86px)] overflow-y-auto border-b border-primary bg-background px-5 pb-6 lg:hidden"
        >
          {nav.map((item) => (
            <div key={item.to} className="border-b border-primary/20">
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-[18px] text-primary"
              >
                {item.label}
                <HugeiconsIcon icon={ArrowRight01Icon} size={17} />
              </Link>
              {(item.to === "/services" || item.to === "/lifts") && (
                <div className="grid grid-cols-1 gap-y-1 pb-3 sm:grid-cols-2 sm:gap-x-4">
                  {(item.to === "/services" ? services : lifts).map((entry) => (
                    <Link
                      key={entry.slug}
                      to={item.to === "/services" ? "/services/$slug" : "/lifts/$slug"}
                      params={{ slug: entry.slug }}
                      onClick={() => setOpen(false)}
                      className="py-2 text-[13px] text-gray-700 hover:text-primary"
                    >
                      {entry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background px-5 py-14 md:px-10 xl:px-16">
      <div className="mx-auto grid max-w-[1432px] gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" aria-label="Premium Elevators home" className="inline-block">
            <img
              src={logo}
              alt="Premium Elevators"
              width="394"
              height="280"
              className="h-14 w-auto max-w-[200px] object-contain sm:h-16 sm:max-w-[240px]"
            />
            <span className="sr-only">Premium Elevators</span>
          </Link>
          <p className="mt-5 text-[14px] leading-relaxed text-gray-700">
            Premium elevator solutions, precision installation, modernization and round-the-clock
            maintenance for residential, commercial and industrial clients across Ahmedabad and
            Baroda.
          </p>
          <div className="mt-4 flex flex-col gap-1 text-[13px]">
            <a href={`mailto:${email}`} className="text-primary underline underline-offset-4">
              {email}
            </a>
            <a href={`mailto:${otherEmail}`} className="text-primary underline underline-offset-4">
              {otherEmail}
            </a>
          </div>
        </div>
        <div>
          <div className="mb-4 text-[15px] text-primary font-normal">Explore</div>
          <div className="grid gap-2.5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[13px] text-gray-700 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-[15px] text-primary font-normal">Offices in Gujarat</div>
          <div className="space-y-4 text-[13px] text-gray-700">
            <div>
              <div className="text-[13px] text-primary">Head Office (Ahmedabad):</div>
              <p className="mt-1 text-[13px] text-gray-700">{hoAddress}</p>
            </div>
            <div>
              <div className="text-[13px] text-primary">Registered Office (Baroda):</div>
              <p className="mt-1 text-[13px] text-gray-700">{address}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 text-[15px] text-primary font-normal">Authority & Compliance</div>
          <div className="grid gap-2.5">
            {authorityBacklinks.map((auth) => (
              <a
                key={auth.url}
                href={auth.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-gray-700 hover:text-primary"
              >
                {auth.name} ↗
              </a>
            ))}
            <Link
              to="/privacy-policy"
              className="mt-2 text-[13px] text-gray-700 hover:text-primary"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-[13px] text-gray-700 hover:text-primary"
            >
              Terms & conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1432px] border-t border-primary/20 pt-6">
        <div className="text-[13px] text-primary mb-3 font-normal">
          Popular Searches in Ahmedabad & Baroda
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-gray-700">
          {popularSearchQueries.map((q) => (
            <span key={q} className="border-b border-primary/20 pb-0.5">
              {q}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1432px] flex-col justify-between gap-3 border-t border-primary/20 pt-5 text-[13px] text-gray-700 sm:flex-row">
        <span>© {new Date().getFullYear()} Premium Elevators. All rights reserved.</span>
        <span>Ahmedabad · Baroda · Gujarat</span>
      </div>
    </footer>
  );
}
