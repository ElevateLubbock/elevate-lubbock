import type { Metadata } from "next";
import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";
import HeroBackground from "@/components/HeroBackground";
import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";

export const metadata: Metadata = {
  title: "About | Elevate Lubbock",
  description:
    "Elevate Lubbock is a Lubbock-based web design studio helping local businesses build credible, high-converting websites that turn visitors into customers.",
};

const localReasons = [
  {
    title: "Customers decide in seconds",
    description:
      "Before someone calls or walks in, they check your website. If it looks outdated, slow, or unclear, they move on to the next option — often a competitor across town.",
  },
  {
    title: "Local search is where growth starts",
    description:
      "Most Lubbock customers find services on their phones. A site built for local search, maps visibility, and mobile browsing puts your business where decisions actually happen.",
  },
  {
    title: "Trust is earned online first",
    description:
      "Reviews, photos, service details, and a professional presence shape whether someone believes you are the right choice. Your website sets that first impression.",
  },
  {
    title: "Your community deserves better",
    description:
      "Lubbock is built on local relationships — dentists, contractors, restaurants, clinics, and shops that keep this city running. They deserve websites as strong as the work they do.",
  },
];

const standards = [
  {
    title: "Clarity over clutter",
    description:
      "Every page has a purpose. Visitors should immediately understand what you do, who you serve, and how to take the next step.",
  },
  {
    title: "Mobile-first by default",
    description:
      "Layouts are designed for phones first, then scaled up. No pinching, zooming, or hunting for a phone number on a small screen.",
  },
  {
    title: "Speed that respects your visitors",
    description:
      "Fast-loading pages keep people engaged and signal quality. We build lean, optimized sites — not bloated templates weighed down by unnecessary code.",
  },
  {
    title: "Built for local discovery",
    description:
      "Clean structure, proper headings, and local SEO fundamentals are part of the build — not an afterthought sold as an add-on.",
  },
  {
    title: "Honest communication",
    description:
      "You get clear timelines, straightforward pricing, and direct access to the people doing the work. No jargon, no runaround.",
  },
  {
    title: "Craft you can feel",
    description:
      "Typography, spacing, imagery, and copy are treated with intention. The result should look premium, credible, and unmistakably yours.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="section-label">About Elevate Lubbock</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.03em] text-brand sm:text-5xl sm:leading-[1.06] lg:text-[3.25rem]">
                A Lubbock web studio built for businesses that want to{" "}
                <span className="bg-gradient-to-r from-brand via-[#333333] to-brand-accent bg-clip-text text-transparent">
                  grow online.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-[1.65] text-muted sm:mt-8 sm:text-xl sm:leading-[1.7]">
                We design and build websites for local businesses across Lubbock
                and the South Plains — sites that earn trust, load fast, and turn
                visitors into calls, bookings, and customers.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <Link href="/#audit" className="btn-accent w-full px-8 py-4 sm:w-auto">
                  Get My Free Website Audit
                </Link>
                <Link href="/contact" className="btn-secondary w-full px-8 py-4 sm:w-auto">
                  Get in Touch
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-shell relative border-y border-border/60 bg-surface">
        <SectionGlow variant="light" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <p className="section-label">Our Mission</p>
                <h2 className="section-heading mt-5">
                  Help Lubbock businesses compete — and win — online
                </h2>
                <p className="section-subtext mt-6">
                  Elevate Lubbock exists to close the gap between great local
                  businesses and weak online presence. Too many owners do
                  excellent work in person but lose customers before the first
                  conversation because their website does not reflect their
                  quality.
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
                  We partner with Lubbock business owners who want a website that
                  works as hard as they do — one that builds credibility, answers
                  questions, and makes it easy for the right people to reach out.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-border bg-background p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent">
                  What we believe
                </p>
                <ul className="mt-6 space-y-5">
                  {[
                    "A professional website is not a luxury — it is how local businesses stay visible and competitive.",
                    "Strategy, design, and development belong together — not spread across disconnected vendors.",
                    "Lubbock businesses deserve the same caliber of digital craft that national brands take for granted.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* Why Elevate Exists */}
      <section className="section-shell relative">
        <SectionGlow variant="accent" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label">Why Elevate Exists</p>
              <h2 className="section-heading mt-5">
                Great businesses deserve great first impressions.
              </h2>
              <p className="section-subtext mt-6">
                We started Elevate Lubbock after seeing too many hardworking
                business owners lose opportunities because their websites did not
                reflect the quality of their work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-surface p-8 text-center sm:p-10">
              <p className="text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
                Some had outdated websites. Others had no website at all.
                Meanwhile, potential customers were making decisions in seconds.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
                We believe a website should build trust before the first
                conversation ever happens.
              </p>
              <p className="mt-6 text-xl font-semibold tracking-tight text-brand">
                Build trust first. Growth follows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      {/* Why local businesses matter */}
      <section className="section-shell relative">
        <SectionGlow variant="accent" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label">Why It Matters</p>
              <h2 className="section-heading mt-5">
                Local businesses are the backbone of Lubbock
              </h2>
              <p className="section-subtext mt-6">
                From the Tech Terrace shops to contractors serving Wolfforth and
                Shallowater, Lubbock runs on businesses that show up, do the work,
                and build reputations face to face. Online, that same standard
                should hold.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:mt-24">
            {localReasons.map(({ title, description }, index) => (
              <Reveal key={title} delay={index * 70} className="h-full">
                <article className="trust-feature group h-full">
                  <div className="trust-feature-icon">
                    <span className="text-sm font-semibold text-brand-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold tracking-tight text-brand">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our standards */}
      <section className="section-shell relative border-y border-border/60 bg-surface-elevated">
        <SectionGlow variant="light" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label">Our Standards</p>
              <h2 className="section-heading mt-5">
                How we approach every project
              </h2>
              <p className="section-subtext mt-6">
                No shortcuts, no template dumps, no vague deliverables. These are
                the principles we hold ourselves to — whether you need a
                five-page site or a full custom build.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:grid-cols-3">
            {standards.map(({ title, description }, index) => (
              <Reveal key={title} delay={index * 60} className="h-full">
                <article className="process-card group h-full">
                  <h3 className="text-lg font-semibold tracking-tight text-brand">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </>
  );
}
