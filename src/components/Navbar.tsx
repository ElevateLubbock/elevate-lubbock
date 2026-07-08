"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isNavActive(href: string, pathname: string, hash: string) {
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(2);
  }

  return pathname === href;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash.replace("#", ""));
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-out ${
        scrolled
          ? "border-b border-border/70 bg-background/75 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8 ${
          scrolled ? "py-3.5" : "py-4"
        } transition-[padding] duration-500 ease-out`}
      >
        <Logo className="shrink-0" onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${isNavActive(href, pathname, hash) ? "nav-link-active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/#audit" className="nav-link-accent hidden lg:inline-flex">
            Free Audit
          </Link>
          <Link href="/contact" className="btn-primary px-5 py-2.5">
            Get More Customers
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface transition-all duration-300 ease-out hover:border-neutral-300 hover:bg-surface-elevated hover:shadow-sm md:hidden"
        >
          <div className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full origin-center bg-brand transition-all duration-300 ease-out ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-brand transition-all duration-300 ease-out ${open ? "scale-x-0 opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full origin-center bg-brand transition-all duration-300 ease-out ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 ease-out md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col gap-1 overflow-y-auto px-6 pb-10 pt-24">
          {links.map(({ href, label }, index) => {
            const active = isNavActive(href, pathname, hash);

            return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
              className={`group flex items-center justify-between border-b border-border/60 py-5 text-2xl font-semibold tracking-tight transition-all duration-300 ease-out ${
                active ? "text-brand-accent" : "text-brand hover:text-brand-accent"
              } ${
                open
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              {label}
              <span className={`text-lg transition-all duration-300 ease-out group-hover:translate-x-0.5 ${
                active ? "text-brand-accent opacity-100" : "text-muted opacity-0 group-hover:opacity-100"
              }`}>
                →
              </span>
            </Link>
            );
          })}
          <div
            className={`mt-6 space-y-3 border-t border-border pt-8 transition-all duration-500 ease-out ${
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "200ms" : "0ms" }}
          >
            <Link
              href="/#audit"
              onClick={() => setOpen(false)}
              className="btn-accent w-full"
            >
              Get My Free Website Audit
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Get More Customers
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
