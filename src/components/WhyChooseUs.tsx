const reasons = [
  {
    title: "Built for Lubbock businesses",
    description:
      "We understand the local market — from how customers search to what builds trust in West Texas communities.",
  },
  {
    title: "Strategy before pixels",
    description:
      "Every project starts with your goals, audience, and competitive landscape. Design follows business outcomes.",
  },
  {
    title: "No cookie-cutter templates",
    description:
      "Your brand deserves better than a generic theme. We craft original experiences that stand apart from competitors.",
  },
  {
    title: "Transparent partnership",
    description:
      "Clear timelines, fixed pricing, and direct access to your project team — no agency runaround or surprise fees.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="section-label">Why Elevate</p>
            <h2 className="section-heading mt-4">
              A partner invested in your growth
            </h2>
            <p className="section-subtext mt-6">
              Most agencies deliver a website and disappear. We build digital
              assets that continue generating leads — and we stay with you to
              make sure they do.
            </p>

            <ul className="mt-10 space-y-6">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-white">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand">{reason.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {reason.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-accent/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-brand p-8 text-white sm:p-10">
              <p className="text-sm font-medium uppercase tracking-widest text-white/60">
                Client result
              </p>
              <blockquote className="mt-6 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                &ldquo;Within two months of launch, our website became our #1
                source of new customers. Elevate understood our business from day
                one.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                  MR
                </div>
                <div>
                  <p className="font-semibold">Maria Rodriguez</p>
                  <p className="text-sm text-white/60">
                    Owner, Rodriguez Family Law
                  </p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-semibold">+186%</p>
                  <p className="mt-1 text-sm text-white/60">
                    Increase in form submissions
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">#1</p>
                  <p className="mt-1 text-sm text-white/60">
                    Google ranking for target keywords
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
