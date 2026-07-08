import Link from "next/link";

const tiers = [
  {
    name: "Essential",
    price: "Starting at $3,500",
    description: "Focused upgrades for beds, planting, or small hardscape areas.",
    features: [
      "On-site consultation",
      "Design for one project area",
      "Premium materials",
      "1-year workmanship warranty",
    ],
  },
  {
    name: "Complete",
    price: "Starting at $12,000",
    description: "Full-yard transformations with design, build, and irrigation.",
    features: [
      "Full property assessment",
      "3D concept rendering",
      "Hardscape & planting package",
      "Irrigation integration",
      "2-year workmanship warranty",
    ],
    featured: true,
  },
  {
    name: "Custom Estate",
    price: "Custom Quote",
    description: "Large-scale estates, outdoor kitchens, pools, and lighting.",
    features: [
      "Dedicated project manager",
      "Phased construction plan",
      "Premium stone & fixtures",
      "Smart irrigation & lighting",
      "Extended warranty options",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">
          Pricing
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">
          Transparent packages, custom results
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          Every property is different. These starting points help you plan; your
          final proposal is always tailored to your site and goals.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`rounded-2xl border p-6 ${
              tier.featured
                ? "border-brand bg-brand text-white shadow-lg"
                : "border-stone-200 bg-white"
            }`}
          >
            {tier.featured && (
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Most Popular
              </span>
            )}
            <h2 className="mt-2 text-2xl font-semibold">{tier.name}</h2>
            <p
              className={`mt-1 text-lg font-medium ${
                tier.featured ? "text-white" : "text-brand"
              }`}
            >
              {tier.price}
            </p>
            <p
              className={`mt-3 text-sm ${
                tier.featured ? "text-stone-200" : "text-stone-600"
              }`}
            >
              {tier.description}
            </p>
            <ul className="mt-6 space-y-2">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className={`text-sm ${
                    tier.featured ? "text-stone-100" : "text-stone-700"
                  }`}
                >
                  • {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-stone-600">
        Need an exact quote?{" "}
        <Link href="/contact" className="font-semibold text-brand hover:underline">
          Contact us
        </Link>{" "}
        for a free estimate.
      </p>
    </div>
  );
}
