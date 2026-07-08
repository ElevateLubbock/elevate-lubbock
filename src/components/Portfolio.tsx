import Link from "next/link";

const projects = [
  {
    name: "West Texas Dental Group",
    category: "Healthcare",
    result: "+240% appointment requests",
    gradient: "from-sky-100 via-white to-blue-50",
    accent: "bg-sky-500",
  },
  {
    name: "Hub City Plumbing",
    category: "Home Services",
    result: "+180% phone call leads",
    gradient: "from-neutral-100 via-white to-stone-50",
    accent: "bg-neutral-800",
  },
  {
    name: "Rodriguez Family Law",
    category: "Professional Services",
    result: "+186% form submissions",
    gradient: "from-indigo-50 via-white to-violet-50",
    accent: "bg-indigo-600",
  },
  {
    name: "Plains Auto Detail",
    category: "Automotive",
    result: "2× online bookings",
    gradient: "from-amber-50 via-white to-orange-50",
    accent: "bg-amber-500",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Portfolio</p>
            <h2 className="section-heading mt-4">
              Work that drives measurable results
            </h2>
            <p className="section-subtext mt-6">
              Real projects for Lubbock businesses — designed to look premium
              and perform under pressure.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="shrink-0 text-sm font-semibold text-brand-accent hover:underline"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:shadow-xl hover:shadow-neutral-200/50"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-6 rounded-xl border border-black/5 bg-white/80 shadow-sm backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-2.5">
                    <span className={`h-2 w-2 rounded-full ${project.accent}`} />
                    <span className="h-2 w-2 rounded-full bg-neutral-300" />
                    <span className="h-2 w-2 rounded-full bg-neutral-300" />
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="h-3 w-2/3 rounded bg-neutral-200" />
                    <div className="h-2 w-full rounded bg-neutral-100" />
                    <div className="h-2 w-4/5 rounded bg-neutral-100" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="aspect-square rounded-lg bg-neutral-100" />
                      <div className="aspect-square rounded-lg bg-neutral-100" />
                      <div className="aspect-square rounded-lg bg-neutral-100" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {project.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-brand">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand-accent">
                  {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
