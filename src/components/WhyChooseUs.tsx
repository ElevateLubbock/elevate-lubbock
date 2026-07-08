function LocalExpertiseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4C11.03 4 7 8.03 7 13c0 7.25 9 15 9 15s9-7.75 9-15c0-4.97-4.03-9-9-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="13" r="2.75" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M11 26h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

function FastPerformanceIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17 4L6 18h9l-1 10 12-16h-9l1-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileFirstIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="10"
        y="4"
        width="12"
        height="24"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14.5 7h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="24.5" r="1" fill="currentColor" />
      <rect
        x="12.5"
        y="10"
        width="7"
        height="10"
        rx="1"
        fill="currentColor"
        opacity="0.15"
      />
    </svg>
  );
}

function SeoOptimizedIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M19.5 19.5L26 26"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M11.5 14h5M14 11.5v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TransparentPricingIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="5"
        y="8"
        width="22"
        height="18"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 13h22"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 19h8M10 22h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="22" cy="20.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PersonalSupportIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="11" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 26c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 12.5c2.5 0.75 4 2.75 4 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M6 17.5c0-2.25 1.5-4.25 4-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";

const features = [
  {
    title: "Local Expertise",
    description:
      "We understand how Lubbock customers search, compare options, and decide who to trust — because we live and work here too.",
    Icon: LocalExpertiseIcon,
  },
  {
    title: "Fast Performance",
    description:
      "Sites built to load quickly on everyday connections, so visitors get a smooth experience from the first tap or click.",
    Icon: FastPerformanceIcon,
  },
  {
    title: "Mobile First",
    description:
      "Most local searches happen on phones. Every layout starts on small screens, then scales up with intention.",
    Icon: MobileFirstIcon,
  },
  {
    title: "SEO Optimized",
    description:
      "Clean structure, local signals, and search fundamentals built in from the start — not bolted on after launch.",
    Icon: SeoOptimizedIcon,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear packages and straightforward answers before you commit. No surprise invoices or vague scope.",
    Icon: TransparentPricingIcon,
  },
  {
    title: "Personal Support",
    description:
      "You work with people who know your project — not a ticket queue, account manager maze, or offshore handoff.",
    Icon: PersonalSupportIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative border-y border-border/60 bg-surface py-32 lg:py-44">
      <SectionGlow variant="accent" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Why Elevate</p>
            <h2 className="section-heading mt-5">
              Why Lubbock Businesses Choose Elevate
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
              A local studio built on clarity, craft, and care — the kind of
              partnership you can count on before, during, and after launch.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 sm:mt-24 sm:grid-cols-2 sm:gap-8 lg:mt-28 lg:gap-10">
          {features.map(({ title, description, Icon }, index) => (
            <Reveal key={title} delay={index * 70} className="h-full">
              <article className="trust-feature group h-full">
                <div className="trust-feature-icon">
                  <Icon className="h-6 w-6" />
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
  );
}
