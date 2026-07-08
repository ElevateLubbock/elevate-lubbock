import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "50+", label: "Lubbock businesses served" },
  { value: "3.2×", label: "Avg. increase in qualified leads" },
  { value: "14 days", label: "Median time to launch" },
];

const trustBarItems = [
  "Mobile First",
  "SEO Ready",
  "Fast Loading",
  "Built for Lubbock Businesses",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-4 py-2 text-xs font-medium text-muted shadow-sm backdrop-blur-sm sm:mb-10 sm:text-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-accent" />
              Proudly serving Lubbock &amp; the South Plains
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-[2.125rem] font-semibold leading-[1.06] tracking-[-0.03em] text-brand sm:text-5xl sm:leading-[1.05] lg:text-[3.75rem] lg:leading-[1.04]">
              Your Website Should Be Your{" "}
              <span className="bg-gradient-to-r from-brand via-[#333333] to-brand-accent bg-clip-text text-transparent">
                Best Salesperson.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-[1.65] text-muted sm:mt-8 sm:text-xl sm:leading-[1.7]">
              We design high-converting websites for Lubbock businesses that want
              more calls, more leads, and more customers.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link href="/#audit" className="btn-accent w-full px-8 py-4 sm:w-auto">
                Get My Free Website Audit
              </Link>
              <Link
                href="/#portfolio"
                className="btn-secondary w-full px-8 py-4 sm:w-auto"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mx-auto mt-10 inline-flex max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-2.5 rounded-2xl border border-border/70 bg-surface/50 px-5 py-3.5 shadow-sm backdrop-blur-sm sm:mt-12 sm:gap-x-6 sm:rounded-full sm:px-7">
              {trustBarItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted sm:text-sm"
                >
                  <span className="text-brand-accent" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mx-auto mt-20 max-w-5xl sm:mt-24">
          <div className="motion-card overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-neutral-200/50">
            <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 truncate text-xs text-muted">
                westtexasdental.com — Lubbock, TX
              </span>
            </div>
            <div className="grid lg:grid-cols-5">
              <div className="border-b border-border p-6 sm:p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
                <p className="section-label">Recent Lubbock launch</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-brand sm:text-2xl">
                  West Texas Dental Group
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Rebuilt their site for trust and conversions. Appointment
                  requests increased 240% in the first 90 days.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Strategy", "Design", "Development", "Local SEO"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-accent-soft px-3 py-1 text-xs font-medium text-brand-accent"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="bg-gradient-to-br from-neutral-100 via-white to-brand-accent-soft p-6 sm:p-8 lg:col-span-3">
                <div className="grid h-full min-h-[180px] grid-cols-12 grid-rows-6 gap-2.5 sm:min-h-[220px] sm:gap-3">
                  <div className="col-span-8 row-span-2 rounded-xl bg-brand/5 transition-colors duration-500 ease-out hover:bg-brand/10" />
                  <div className="col-span-4 row-span-3 rounded-xl bg-brand-accent/10 transition-colors duration-500 ease-out hover:bg-brand-accent/15" />
                  <div className="col-span-5 row-span-2 rounded-xl bg-brand/5 transition-colors duration-500 ease-out hover:bg-brand/10" />
                  <div className="col-span-3 row-span-2 rounded-xl bg-brand-accent/20 transition-colors duration-500 ease-out hover:bg-brand-accent/25" />
                  <div className="col-span-4 row-span-1 rounded-xl bg-brand/5 transition-colors duration-500 ease-out hover:bg-brand/10" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <dl className="mx-auto mt-16 grid max-w-4xl gap-8 border-t border-border pt-14 sm:grid-cols-3 sm:gap-10 sm:pt-16">
          {stats.map(({ value, label }, index) => (
            <Reveal key={label} delay={index * 80}>
              <div className="text-center">
                <dt className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
                  {value}
                </dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-muted">
                  {label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
