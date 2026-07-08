const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, audience, and goals through a focused strategy session and competitive audit.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Custom wireframes and high-fidelity mockups aligned to your brand — refined until every detail feels right.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Clean, performant development with SEO foundations, analytics, and conversion tracking built in from day one.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We go live, monitor performance, and optimize based on real data — so your site keeps improving over time.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-y border-border bg-surface-elevated py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Process</p>
          <h2 className="section-heading mt-4">
            From first call to live site in weeks
          </h2>
          <p className="section-subtext mt-6">
            A proven, streamlined process that keeps you informed at every stage
            — without the complexity of a big-agency engagement.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-accent/20 bg-brand-accent-soft text-sm font-semibold text-brand-accent">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-brand">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
