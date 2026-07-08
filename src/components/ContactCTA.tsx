import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.3),transparent_60%)]" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Ready to grow?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s build a website that works as hard as you do
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Schedule a free 30-minute strategy call. We&apos;ll review your
              current site, identify opportunities, and outline a clear path
              forward — no pressure, no obligation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand transition-all hover:bg-white/90 sm:w-auto"
              >
                Book Your Free Call
              </Link>
              <a
                href="tel:8065551234"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5 sm:w-auto"
              >
                (806) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
