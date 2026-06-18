"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { PhoneLink } from "@/components/PhoneLink";
import { SiteLogo } from "@/components/SiteLogo";
import { mainNavLinks, serviceLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinkBase =
  "text-sm font-medium text-dark transition-colors hover:text-primary hover:underline";
const navLinkActive = "text-primary";

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive =
    pathname === "/services" || serviceLinks.some((link) => pathname === link.href);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white shadow-sm">
      <div className="container-narrow flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 font-display text-lg font-semibold leading-tight text-primary sm:text-xl"
          aria-label={`${siteConfig.name} — ${siteConfig.locationLabel} home`}
          onClick={() => setMobileOpen(false)}
        >
          <SiteLogo size={36} priority className="rounded-md" />
          <span>
            Greenville Crawl Space{" "}
            <span className="relative inline-block">
              Pros
              <span
                className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-accent"
                aria-hidden="true"
              />
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Main navigation">
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1",
                navLinkBase,
                isServicesActive && navLinkActive,
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>

            <div
              className={cn(
                "absolute left-1/2 top-full z-50 min-w-[260px] -translate-x-1/2 pt-2 transition-all duration-200",
                servicesOpen
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "pointer-events-none invisible -translate-y-1 opacity-0",
              )}
            >
              <ul
                className="overflow-hidden rounded-lg border border-primary/10 bg-white py-2 shadow-lg"
                role="menu"
              >
                {serviceLinks.map(({ href, label }) => (
                  <li key={href} role="none">
                    <Link
                      href={href}
                      role="menuitem"
                      className={cn(
                        "block px-4 py-2.5 text-sm text-dark transition-colors hover:bg-neutral hover:text-primary",
                        pathname === href && "font-medium text-primary",
                      )}
                      onClick={() => setServicesOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {mainNavLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(navLinkBase, pathname === href && navLinkActive)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PhoneLink className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-light lg:inline-flex xl:px-5">
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            {siteConfig.phone}
          </PhoneLink>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-primary lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-primary/10 bg-white transition-all duration-300 ease-in-out lg:hidden",
          mobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-narrow px-4 pb-6 pt-2 sm:px-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            <li>
              <button
                type="button"
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-neutral",
                  isServicesActive ? "text-primary" : "text-dark",
                )}
                onClick={() => setMobileServicesOpen((open) => !open)}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform", mobileServicesOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <ul className="ml-3 border-l border-primary/10 py-1 pl-3">
                  {serviceLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-neutral",
                          pathname === href ? "font-medium text-primary" : "text-dark",
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {mainNavLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-neutral",
                    pathname === href ? "text-primary" : "text-dark",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="pt-3">
              <PhoneLink className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-light">
                <Phone className="h-5 w-5" aria-hidden="true" />
                {siteConfig.phone}
              </PhoneLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
