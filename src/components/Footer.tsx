import Link from "next/link";
import Logo from "@/components/Logo";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/#process", label: "Process" },
    { href: "/#audit", label: "Free Website Audit" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/#services", label: "Web Design" },
    { href: "/#services", label: "Development" },
    { href: "/#services", label: "Local SEO" },
  ],
};

const footerHighlights = [
  {
    value: "Local",
    label: "Proudly serving businesses across Lubbock and West Texas",
  },
  {
    value: "Modern",
    label: "Fast, mobile-friendly websites built to perform",
  },
  {
    value: "Trust",
    label: "Building lasting relationships through honest service",
  },
];

const serviceAreas = [
  "Lubbock",
  "Wolfforth",
  "Shallowater",
  "Slaton",
  "Idalou",
  "South Plains",
];
const trustStats = [
  {
    value: "Local",
    label: "Proudly serving West Texas businesses",
  },
  {
    value: "Modern",
    label: "Fast, mobile-friendly websites",
  },
  {
    value: "Trust",
    label: "Building our reputation one client at a time",
  },
];
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand text-white">
      <div className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {trustStats.map(({ value, label }) => (
            <div key={label} className="text-center sm:text-left">
              <p className="text-2xl font-semibold tracking-tight">{value}</p>
              <p className="mt-1 text-sm text-white/50">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Lubbock&apos;s premium web studio for local businesses that want
              more customers, stronger credibility, and a website that actually
              pays for itself.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/40">
              Service Area
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {serviceAreas.join(" · ")}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 text-link-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 text-link-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Lubbock, Texas 79401</li>
              <li>
                <a
                  href="tel:8065551234"
                  className="text-link-light"
                >
                  (806) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@elevatelubbock.com"
                  className="text-link-light"
                >
                  hello@elevatelubbock.com
                </a>
              </li>
            </ul>
            <Link href="/#audit" className="nav-link-accent mt-6 inline-flex">
              Claim your free audit →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/40 sm:text-left">
            © {new Date().getFullYear()} Elevate Lubbock. Locally owned &
            operated. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5 sm:justify-end">
            <Link href="/#portfolio" className="text-link-light text-xs text-white/40">
              Portfolio
            </Link>
            <Link href="/#approach" className="text-link-light text-xs text-white/40">
              Our Approach
            </Link>
            <Link href="/contact" className="text-link-light text-xs text-white/40">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
