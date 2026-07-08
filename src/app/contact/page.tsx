import type { Metadata } from "next";
import HeroBackground from "@/components/HeroBackground";
import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";

export const metadata: Metadata = {
  title: "Free Website Audit | Elevate Lubbock",
  description:
    "Request a free website audit from Elevate Lubbock. We'll review your site for mobile experience, speed, SEO, design, and conversion opportunities.",
};

const reviewAreas = [
  {
    title: "Mobile experience",
    description:
      "How your site looks, reads, and functions on phones — where most local customers find you.",
  },
  {
    title: "Speed & performance",
    description:
      "Load times, page weight, and technical factors that affect whether visitors stay or leave.",
  },
  {
    title: "SEO & local visibility",
    description:
      "How well your site is structured to rank in Lubbock-area search results and maps.",
  },
  {
    title: "Design & credibility",
    description:
      "Whether your site looks professional, trustworthy, and aligned with the quality of your work.",
  },
  {
    title: "Conversion opportunities",
    description:
      "Gaps in your homepage, contact flow, and calls-to-action that may be costing you leads.",
  },
];

const industries = [
  "Home Services",
  "Healthcare / Dental",
  "Legal / Professional Services",
  "Restaurant / Hospitality",
  "Retail",
  "Automotive",
  "Real Estate",
  "Other",
];

const fieldClass = "form-input";
const labelClass = "form-label";

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="section-label">Free Website Audit</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-brand sm:text-5xl sm:leading-[1.06]">
                Request your free website audit
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-[1.65] text-muted sm:text-lg sm:leading-8">
                Elevate Lubbock will review your website for mobile experience,
                speed, SEO, design, and conversion opportunities — then send you
                a clear, actionable report with what to fix first.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell relative">
        <SectionGlow variant="light" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 xl:gap-20">
            <div className="lg:col-span-2">
              <Reveal>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-brand sm:text-[1.75rem]">
                    What we review
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    No sales pitch — just an honest look at where your site
                    stands and what&apos;s holding it back from bringing in more
                    customers.
                  </p>
                </div>
              </Reveal>

              <ul className="mt-10 space-y-6">
                {reviewAreas.map(({ title, description }, index) => (
                  <Reveal key={title} delay={index * 60}>
                    <li className="flex gap-4">
                      <span
                        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-accent-soft text-xs font-semibold text-brand-accent"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <div>
                        <p className="font-semibold text-brand">{title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {description}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={320}>
                <dl className="mt-12 space-y-5 border-t border-border pt-10 text-sm">
                  <div>
                    <dt className="font-semibold text-brand">Phone</dt>
                    <dd className="mt-1">
                      <a
                        href="tel:8065551234"
                        className="text-link text-sm"
                      >
                        (806) 555-1234
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand">Email</dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:hello@elevatelubbock.com"
                        className="text-link text-sm"
                      >
                        hello@elevatelubbock.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand">Service area</dt>
                    <dd className="mt-1 text-muted">
                      Lubbock and surrounding South Plains communities
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <Reveal delay={120} className="lg:col-span-3">
              <div className="form-card">
                <div className="mb-8 border-b border-border/70 pb-8">
                  <h2 className="text-xl font-semibold tracking-tight text-brand sm:text-2xl">
                    Tell us about your business
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Fill out the form below and we&apos;ll review your website
                    and follow up with your personalized audit report.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className={fieldClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessName" className={labelClass}>
                        Business Name
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        required
                        autoComplete="organization"
                        className={fieldClass}
                        placeholder="Your business name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="websiteUrl" className={labelClass}>
                      Website URL
                    </label>
                    <input
                      id="websiteUrl"
                      name="websiteUrl"
                      type="url"
                      required
                      className={fieldClass}
                      placeholder="https://yourbusiness.com"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={fieldClass}
                        placeholder="you@yourbusiness.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        className={fieldClass}
                        placeholder="(806) 555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className={labelClass}>
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="form-select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select your industry
                      </option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenge" className={labelClass}>
                      Biggest website challenge
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      required
                      rows={4}
                      className="form-textarea"
                      placeholder="What's not working with your current site? Low traffic, few calls, outdated design, slow load times..."
                    />
                  </div>

                  <button type="submit" className="btn-accent w-full py-4">
                    Get My Free Website Audit
                  </button>

                  <p className="text-center text-xs leading-relaxed text-muted">
                    No spam, ever. We&apos;ll only use your information to
                    prepare and deliver your audit report.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
