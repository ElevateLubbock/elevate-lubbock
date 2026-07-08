import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We review your business, competitors, and current site — then define exactly what success looks like for you.",
  },
  {
    number: "02",
    title: "Design & Copy",
    description:
      "Custom mockups and conversion-focused messaging, refined with your feedback until it feels unmistakably you.",
  },
  {
    number: "03",
    title: "Build & Optimize",
    description:
      "Fast, SEO-ready development with analytics, call tracking, and mobile performance dialed in from day one.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We go live, monitor results, and keep improving — because a great website is never truly finished.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-shell relative border-y border-border bg-surface-elevated">
      <SectionGlow variant="light" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Process</p>
            <h2 className="section-heading mt-4">
              A clear path from first call to more customers
            </h2>
            <p className="section-subtext mt-5">
              No confusing agency jargon. Just a proven four-step process that
              gets Lubbock businesses live fast — with a site built to perform.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80} className="h-full">
              <article className="process-card group h-full">
                <span className="process-step-badge">{step.number}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-brand sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
