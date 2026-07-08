import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionGlow from "@/components/SectionGlow";

const auditIncludes = [
  "Mobile experience & page speed review",
  "Conversion gaps on your homepage & contact flow",
  "Local SEO visibility across Lubbock search results",
  "Action plan with quick wins you can implement today",
];

export default function WebsiteAudit() {
  return (
    <section id="audit" className="section-shell relative bg-brand text-white">
      <SectionGlow variant="dark" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent-light">
                Free Website Audit
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Find out why your site isn&apos;t converting — before you spend
                another dollar on ads
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
                Most Lubbock business owners don&apos;t need a sales pitch — they
                need clarity. We&apos;ll review your current website and send a
                personalized report showing exactly what&apos;s costing you leads.
              </p>

              <ul className="mt-8 space-y-4">
                {auditIncludes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm sm:text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="audit-card">
              <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent text-sm font-bold">
                  EL
                </div>
                <div>
                  <p className="font-semibold">Elevate Lubbock Audit Team</p>
                  <p className="text-sm text-white/50">
                    Average response time: under 48 hours
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/70">
                Request your free audit and we&apos;ll review your site against
                what&apos;s working for top-performing businesses in Lubbock,
                Wolfforth, and the surrounding area.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  className="btn-accent w-full bg-white text-brand hover:bg-white/90 hover:text-brand"
                >
                  Get My Free Audit Report
                </Link>
                <Link
                  href="/#portfolio"
                  className="btn-secondary w-full border-white/20 bg-transparent text-white hover:border-white/35 hover:bg-white/5"
                >
                  See Results From Local Clients
                </Link>
              </div>

              <p className="mt-5 text-center text-xs text-white/40">
                Trusted by 50+ Lubbock-area businesses · No spam, ever
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
