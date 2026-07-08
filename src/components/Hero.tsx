import Link from "next/link";

const stats = [
  { value: "50+", label: "Local businesses served" },
  { value: "3×", label: "Average lead increase" },
  { value: "14 days", label: "Typical launch timeline" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.12),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(250,250,250,1))]" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-accent" />
            Lubbock&apos;s premium web studio for growing businesses
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-brand sm:text-5xl lg:text-7xl">
            Websites that turn visitors into{" "}
            <span className="bg-gradient-to-r from-brand-accent to-blue-400 bg-clip-text text-transparent">
              paying customers
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Elevate Lubbock partners with local businesses to design and build
            high-performance websites — strategic, beautiful, and built to
            generate real revenue.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-neutral-800 sm:w-auto"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-surface px-8 py-4 text-sm font-semibold text-brand transition-all hover:border-neutral-300 hover:bg-surface-elevated sm:w-auto"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-neutral-200/60">
            <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-4 text-xs text-muted">
                elevatelubbock.com — preview
              </span>
            </div>
            <div className="grid gap-0 lg:grid-cols-5">
              <div className="border-b border-border p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
                <p className="section-label">Featured build</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand">
                  West Texas Dental Group
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A conversion-focused site that increased appointment requests
                  by 240% in the first 90 days.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Strategy", "UI Design", "Development", "SEO"].map(
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
              <div className="bg-gradient-to-br from-neutral-100 via-white to-brand-accent-soft p-8 lg:col-span-3">
                <div className="grid h-full min-h-[220px] grid-cols-12 grid-rows-6 gap-3">
                  <div className="col-span-8 row-span-2 rounded-xl bg-brand/5" />
                  <div className="col-span-4 row-span-3 rounded-xl bg-brand-accent/10" />
                  <div className="col-span-5 row-span-2 rounded-xl bg-brand/5" />
                  <div className="col-span-3 row-span-2 rounded-xl bg-brand-accent/20" />
                  <div className="col-span-4 row-span-1 rounded-xl bg-brand/5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <dt className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
                {value}
              </dt>
              <dd className="mt-2 text-sm text-muted">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
