import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/#process", label: "Process" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/#services", label: "Web Design" },
    { href: "/#services", label: "Development" },
    { href: "/#services", label: "Local SEO" },
  ],
  work: [
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#pricing", label: "Pricing" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Elevate<span className="text-brand-accent">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Premium websites for Lubbock businesses that want more customers,
              stronger brands, and measurable growth online.
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
                    className="text-sm text-white/70 transition-colors hover:text-white"
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
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Lubbock, Texas</li>
              <li>
                <a href="tel:8065551234" className="hover:text-white">
                  (806) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@elevatelubbock.com"
                  className="hover:text-white"
                >
                  hello@elevatelubbock.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Elevate Lubbock. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.work.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
