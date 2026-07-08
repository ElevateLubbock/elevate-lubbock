export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            Fill out the form and we will get back to you within one business
            day to schedule your free consultation.
          </p>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-stone-900">Phone</dt>
              <dd>
                <a href="tel:8065551234" className="text-brand hover:underline">
                  (806) 555-1234
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-900">Email</dt>
              <dd>
                <a
                  href="mailto:hello@elevatelubbock.com"
                  className="text-brand hover:underline"
                >
                  hello@elevatelubbock.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-900">Service Area</dt>
              <dd className="text-stone-600">Lubbock and surrounding South Plains communities</dd>
            </div>
          </dl>
        </div>

        <form className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-stone-900">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-900">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                placeholder="Tell us about your property and what you have in mind..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
