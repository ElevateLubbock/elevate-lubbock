import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for new businesses ready to establish a professional online presence.",
    features: [
      "Up to 5 custom pages",
      "Mobile-responsive design",
      "Contact form & Google Maps",
      "Basic on-page SEO setup",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "$5,500",
    description: "Our most popular package for businesses serious about generating leads online.",
    features: [
      "Up to 10 custom pages",
      "Conversion-focused copywriting",
      "Advanced SEO & schema markup",
      "Analytics & goal tracking",
      "Blog / resources section",
      "90-day growth support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "Custom",
    description: "Full-scale digital presence for established businesses with complex needs.",
    features: [
      "Unlimited pages & features",
      "Brand strategy & identity",
      "Custom integrations & CRM",
      "Ongoing SEO & content plan",
      "Priority support & SLA",
      "Dedicated account manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Pricing</p>
          <h2 className="section-heading mt-4">
            Clear investment, exceptional return
          </h2>
          <p className="section-subtext mt-6">
            Transparent packages with no hidden fees. Every tier includes strategy,
            design, development, and launch support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.featured
                  ? "border-brand-accent bg-brand text-white shadow-2xl shadow-brand-accent/20 lg:scale-105"
                  : "border-border bg-background"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-accent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2 text-3xl font-semibold tracking-tight">
                {tier.price}
                {tier.price !== "Custom" && (
                  <span
                    className={`text-sm font-normal ${tier.featured ? "text-white/60" : "text-muted"}`}
                  >
                    {" "}
                    one-time
                  </span>
                )}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${tier.featured ? "text-white/70" : "text-muted"}`}
              >
                {tier.description}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${tier.featured ? "text-white/90" : "text-brand"}`}
                  >
                    <span
                      className={`mt-0.5 shrink-0 ${tier.featured ? "text-brand-accent" : "text-brand-accent"}`}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                  tier.featured
                    ? "bg-white text-brand hover:bg-white/90"
                    : "bg-brand text-white hover:bg-neutral-800"
                }`}
              >
                Get Started
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted">
          Not sure which package fits?{" "}
          <Link href="/contact" className="font-semibold text-brand-accent hover:underline">
            Book a free consultation
          </Link>{" "}
          and we&apos;ll recommend the right path.
        </p>
      </div>
    </section>
  );
}
