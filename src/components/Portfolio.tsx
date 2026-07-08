import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";

type ProjectTheme = {
  desktopBg: string;
  mobileBg: string;
  accent: string;
  accentSoft: string;
  url: string;
};

type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  tags: string[];
  theme: ProjectTheme;
};

const projects: Project[] = [
  {
    slug: "high-plains-roofing",
    name: "High Plains Roofing",
    category: "Home Services · Lubbock",
    summary:
      "A trust-first concept for a roofing company — clear emergency CTAs, service-area coverage, and credibility built into every scroll.",
    tags: ["Web Design", "Local SEO", "Mobile First"],
    theme: {
      desktopBg: "from-stone-100 via-white to-amber-50",
      mobileBg: "from-stone-200 to-amber-100",
      accent: "bg-amber-600",
      accentSoft: "bg-amber-500/20",
      url: "highplainsroofing.com",
    },
  },
  {
    slug: "hub-city-landscaping",
    name: "Hub City Landscaping",
    category: "Landscaping · Lubbock",
    summary:
      "A visual-forward concept showcasing seasonal services, project galleries, and a quote flow designed for quick local lead capture.",
    tags: ["Web Design", "Lead Generation", "Brand Layout"],
    theme: {
      desktopBg: "from-emerald-50 via-white to-lime-50",
      mobileBg: "from-emerald-100 to-green-50",
      accent: "bg-emerald-600",
      accentSoft: "bg-emerald-500/20",
      url: "hubcitylandscaping.com",
    },
  },
  {
    slug: "west-texas-dental",
    name: "West Texas Dental",
    category: "Healthcare · Lubbock",
    summary:
      "A patient-first concept with appointment-focused layout, warm clinical tone, and messaging designed to reduce friction before the first visit.",
    tags: ["Web Design", "Conversion UX", "Website Care"],
    theme: {
      desktopBg: "from-sky-50 via-white to-blue-50",
      mobileBg: "from-sky-100 to-blue-50",
      accent: "bg-sky-500",
      accentSoft: "bg-sky-500/20",
      url: "westtexasdental.com",
    },
  },
];

function DesktopPreview({ theme }: { theme: ProjectTheme }) {
  return (
    <div className="w-full max-w-[520px] overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-[0_24px_80px_-12px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-out group-hover:scale-[1.015]">
      <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-yellow-400" />
        <span className="h-2 w-2 rounded-full bg-green-400" />
        <span className="ml-2 truncate rounded-md bg-background px-2.5 py-0.5 text-[10px] text-muted">
          {theme.url}
        </span>
      </div>
      <div className={`bg-gradient-to-br ${theme.desktopBg} p-5 sm:p-6`}>
        <div className="flex items-center justify-between gap-3">
          <div className={`h-2 w-16 rounded-full ${theme.accent} opacity-80`} />
          <div className="hidden gap-1.5 sm:flex">
            <div className="h-1.5 w-8 rounded-full bg-brand/10" />
            <div className="h-1.5 w-8 rounded-full bg-brand/10" />
            <div className="h-1.5 w-8 rounded-full bg-brand/10" />
          </div>
        </div>
        <div className={`mt-5 rounded-xl ${theme.accentSoft} p-4 sm:p-5`}>
          <div className="h-2.5 w-2/3 max-w-[220px] rounded-full bg-brand/15" />
          <div className="mt-3 h-2 w-full max-w-[280px] rounded-full bg-brand/8" />
          <div className="mt-2 h-2 w-4/5 max-w-[240px] rounded-full bg-brand/8" />
          <div
            className={`mt-4 inline-flex h-7 w-24 items-center rounded-full ${theme.accent} opacity-90`}
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <div className="aspect-[4/3] rounded-lg bg-white/70 shadow-sm" />
          <div className="aspect-[4/3] rounded-lg bg-white/70 shadow-sm" />
          <div className="aspect-[4/3] rounded-lg bg-white/70 shadow-sm" />
        </div>
      </div>
    </div>
  );
}

function MobilePreview({ theme }: { theme: ProjectTheme }) {
  return (
    <div className="absolute -bottom-4 right-0 w-[108px] rounded-[1.65rem] border-[3px] border-white/90 bg-white p-1 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] transition-transform duration-700 ease-out group-hover:translate-y-[-4px] sm:-bottom-6 sm:right-4 sm:w-[128px]">
      <div className="overflow-hidden rounded-[1.25rem]">
        <div className={`aspect-[9/16] bg-gradient-to-b ${theme.mobileBg} p-2.5`}>
          <div className={`h-1.5 w-8 rounded-full ${theme.accent} opacity-70`} />
          <div className={`mt-3 rounded-lg ${theme.accentSoft} p-2`}>
            <div className="h-1.5 w-full rounded-full bg-brand/12" />
            <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-brand/8" />
            <div
              className={`mt-2 h-4 w-12 rounded-full ${theme.accent} opacity-80`}
            />
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="h-6 rounded-md bg-white/60" />
            <div className="h-6 rounded-md bg-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-shell relative bg-background">
      <SectionGlow variant="accent" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Portfolio</p>
            <h2 className="section-heading mt-4">
              Concept work, crafted with intent
            </h2>
            <p className="section-subtext mt-5">
              Explorations of how Lubbock businesses could show up online — with
              the polish, clarity, and conversion focus of a premium brand.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-8 lg:mt-20 lg:space-y-10">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <article className="portfolio-card group">
              <div
                className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div
                  className={`relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br p-8 sm:min-h-[340px] sm:p-10 lg:min-h-[400px] ${project.theme.desktopBg} ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}
                >
                  <div className="relative w-full max-w-[560px] pr-12 sm:pr-16">
                    <DesktopPreview theme={project.theme} />
                    <MobilePreview theme={project.theme} />
                  </div>
                </div>

                <div
                  className={`flex flex-col justify-center p-8 sm:p-10 lg:p-12 ${index % 2 === 1 ? "lg:[direction:ltr]" : ""}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                    Concept Website
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-brand sm:text-[1.75rem]">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/portfolio#${project.slug}`}
                      className="btn-secondary px-6 py-3 text-sm"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
