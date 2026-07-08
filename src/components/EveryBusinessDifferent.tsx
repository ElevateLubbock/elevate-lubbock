import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";

const includes = [
  "Mobile-first design",
  "SEO optimization",
  "Fast loading",
  "Contact forms",
  "Google Maps",
  "Responsive design",
  "Analytics",
  "Security",
  "Training",
  "Local business optimization",
];

function CheckIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2.5 6L5 8.5L9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EveryBusinessDifferent() {
  return (
    <section
      id="approach"
      className="section-shell relative border-y border-border bg-surface"
    >
      <SectionGlow variant="light" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <Reveal>
            <div className="max-w-xl">
              <p className="section-label">Our Approach</p>
              <h2 className="section-heading mt-4">
                Every Business Is Different
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:mt-8 sm:text-lg sm:leading-8">
                <p>
                  Every business has unique goals, customers, and challenges.
                </p>
                <p>
                  That&apos;s why every project starts with a free website audit.
                  We&apos;ll review your current website or discuss your goals
                  and recommend the best solution for your business.
                </p>
                <p>
                  Whether you&apos;re launching your first website or redesigning
                  an existing one, we&apos;ll create a custom plan tailored to
                  your business.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4">
                <Link href="/#audit" className="btn-accent w-full px-8 py-4 sm:w-auto">
                  Get My Free Website Audit
                </Link>
                <Link
                  href="/#portfolio"
                  className="btn-secondary w-full px-8 py-4 sm:w-auto"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="includes-card motion-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Included with every build
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand sm:text-[1.75rem]">
                Every Website Includes
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.9375rem] sm:leading-7">
                The essentials your business needs to look credible, get found,
                and convert visitors — built in from day one.
              </p>

              <ul className="mt-8 grid gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
                {includes.map((item, index) => (
                  <li
                    key={item}
                    className="includes-item"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    <span className="includes-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <span className="text-sm font-medium text-brand">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
