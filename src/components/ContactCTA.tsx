import Link from "next/link";
import Reveal from "@/components/Reveal";

function CtaBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(204,0,0,0.1),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_90%_60%,rgba(204,0,0,0.05),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_70%,rgba(17,17,17,0.04),transparent_50%)]" />
      <div className="cta-orb cta-orb-1" />
      <div className="cta-orb cta-orb-2" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}

export default function ContactCTA() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="cta-panel relative overflow-hidden rounded-3xl border border-white/[0.08] bg-brand px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
            <CtaBackground />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]">
                Ready to Elevate Your Business?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:mt-6 sm:text-lg sm:leading-8">
                Let&apos;s build a website that helps your business grow.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
                <Link href="/#audit" className="cta-btn-primary w-full sm:w-auto">
                  Get My Free Website Audit
                </Link>
                <Link href="/contact" className="cta-btn-secondary w-full sm:w-auto">
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
