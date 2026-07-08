import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";

function WebsiteDesignIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="4"
        y="6"
        width="24"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 11H28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="7" cy="8.5" r="0.75" fill="currentColor" />
      <circle cx="9.75" cy="8.5" r="0.75" fill="currentColor" />
      <circle cx="12.5" cy="8.5" r="0.75" fill="currentColor" />
      <rect
        x="8"
        y="15"
        width="10"
        height="2"
        rx="1"
        fill="currentColor"
        opacity="0.9"
      />
      <rect
        x="8"
        y="19"
        width="16"
        height="1.5"
        rx="0.75"
        fill="currentColor"
        opacity="0.35"
      />
      <rect
        x="8"
        y="22"
        width="12"
        height="1.5"
        rx="0.75"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}

function LocalSeoIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="14"
        cy="13"
        r="7"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <circle
        cx="14"
        cy="13"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M14 21V26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 26H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="13" r="1.75" fill="currentColor" />
      <path
        d="M22 22L27 27"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle
        cx="20.5"
        cy="20.5"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function WebsiteCareIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4L6 8.5V15.5C6 21.5 10.5 26.5 16 28C21.5 26.5 26 21.5 26 15.5V8.5L16 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 16L15 19L21 13"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    title: "Website Design",
    description:
      "Custom, conversion-focused sites that build instant credibility and guide visitors to call, book, or buy.",
    Icon: WebsiteDesignIcon,
  },
  {
    title: "Local SEO",
    description:
      "Rank when Lubbock customers search on Google. We optimize your maps presence and local visibility.",
    Icon: LocalSeoIcon,
  },
  {
    title: "Website Care",
    description:
      "Ongoing updates, monitoring, and performance tuning so your site stays fast, secure, and effective.",
    Icon: WebsiteCareIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell relative border-y border-border bg-surface">
      <SectionGlow variant="light" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="section-label">Services</p>
            <h2 className="section-heading mt-4">
              Three ways we help you grow
            </h2>
            <p className="section-subtext mt-5">
              Focused expertise. No bloated packages — just the work that moves
              the needle for Lubbock businesses.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {services.map(({ title, description, Icon }, index) => (
            <Reveal key={title} delay={index * 90} className="h-full">
              <article className="service-card group h-full">
                <div className="service-card-icon">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-brand">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-16 text-center lg:mt-20">
          <Link href="/#audit" className="nav-link-accent inline-flex text-sm font-semibold">
            Not sure where to start? Get a free audit
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
