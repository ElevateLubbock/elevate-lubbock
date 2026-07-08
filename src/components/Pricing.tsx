import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";

const tiers = [
  {
    name: "Starter",
    bestFor: "New businesses establishing credibility",
    price: "$2,500",
    description:
      "Launch a professional presence that builds trust and captures your first wave of online leads.",
    features: [
      "Up to 5 custom pages",
      "Mobile-first responsive design",
      "Contact form & Google Maps integration",
      "On-page SEO foundations",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    cta: "Start With Starter",
  },
  {
    name: "Growth",
    bestFor: "Businesses ready to scale lead generation",
    price: "$5,500",
    description:
      "Our most chosen package — built to outrank competitors and convert traffic into booked jobs.",
    features: [
      "Up to 10 custom pages",
      "Conversion-focused copywriting",
      "Advanced local SEO & schema markup",
      "Analytics, call tracking & goal setup",
      "Blog or resources hub",
      "90-day post-launch optimization",
    ],
    featured: true,
    cta: "Choose Growth — Most Popular",
  },
  {
    name: "Premium",
    bestFor: "Established brands with complex needs",
    price: "Custom",
    description:
      "Enterprise-level strategy, design, and ongoing growth for market leaders in Lubbock.",
    features: [
      "Unlimited pages & custom features",
      "Full brand strategy & identity support",
      "CRM & tool integrations",
      "Ongoing SEO & content roadmap",
      "Priority support with SLA",
      "Dedicated account manager",
    ],
    cta: "Request Custom Quote",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-shell relative border-y border-border bg-surface">
      <SectionGlow variant="light" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Pricing</p>
            <h2 className="section-heading mt-4">
              Invest once. Earn customers for years.
            </h2>
            <p className="section-subtext mt-5">
              Transparent packages with everything included — strategy, design,
              development, and launch. No hidden fees. No scope creep surprises.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6 lg:items-stretch">
          {tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 90} className="h-full">
              <article
                className={`pricing-card relative flex h-full flex-col ${
                  tier.featured
                    ? "order-first border-brand-accent bg-brand text-white shadow-2xl shadow-brand-accent/15 lg:order-none lg:-mt-2 lg:mb-2 lg:scale-[1.03]"
                    : "border-border bg-background"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-accent px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}

                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    tier.featured ? "text-brand-accent-light" : "text-brand-accent"
                  }`}
                >
                  {tier.bestFor}
                </p>

                <h3 className="mt-3 text-xl font-semibold">{tier.name}</h3>

                <div className="mt-3 flex items-baseline gap-1">
                  <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {tier.price}
                  </p>
                  {tier.price !== "Custom" && (
                    <span
                      className={`text-sm ${tier.featured ? "text-white/50" : "text-muted"}`}
                    >
                      one-time
                    </span>
                  )}
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    tier.featured ? "text-white/70" : "text-muted"
                  }`}
                >
                  {tier.description}
                </p>

                <div
                  className={`my-6 h-px ${tier.featured ? "bg-white/10" : "bg-border"}`}
                />

                <ul className="flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm leading-relaxed ${
                        tier.featured ? "text-white/90" : "text-brand"
                      }`}
                    >
                      <span className="mt-0.5 shrink-0 font-bold text-brand-accent">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 ${
                    tier.featured
                      ? "bg-white text-brand shadow-md hover:bg-white/90 hover:shadow-lg"
                      : "bg-brand text-white hover:bg-[#222222] hover:shadow-md"
                  }`}
                >
                  {tier.cta}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mx-auto mt-12 max-w-2xl text-center lg:mt-14">
          <p className="text-sm text-muted">
            Every package includes a satisfaction guarantee on launch quality.
          </p>
          <p className="mt-3 text-sm text-muted">
            Not sure which fits?{" "}
            <Link href="/#audit" className="text-link">
              Start with a free website audit
            </Link>{" "}
            — we&apos;ll recommend the right path.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
