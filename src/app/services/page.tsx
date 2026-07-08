import Link from "next/link";

const services = [
  {
    title: "Landscape Design & Installation",
    description:
      "Native and drought-tolerant plantings, lawn installation, bed design, and seasonal color tailored to Lubbock's climate.",
  },
  {
    title: "Hardscaping",
    description:
      "Custom patios, pergolas, retaining walls, fire pits, and outdoor kitchens using premium stone and pavers.",
  },
  {
    title: "Irrigation Systems",
    description:
      "Design, installation, and repair of efficient sprinkler and drip systems to keep your landscape healthy.",
  },
  {
    title: "Drainage Solutions",
    description:
      "French drains, grading, and erosion control to protect your home and landscape from West Texas storms.",
  },
  {
    title: "Outdoor Lighting",
    description:
      "Low-voltage landscape lighting for safety, ambiance, and architectural accent.",
  },
  {
    title: "Maintenance Programs",
    description:
      "Ongoing care plans including trimming, fertilization, seasonal cleanups, and system checks.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">
          Services
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">
          Everything your outdoor space needs
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          Whether you need a full backyard overhaul or a single upgrade, our
          team handles design, permits, and construction under one roof.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-stone-200 bg-white p-6"
          >
            <h2 className="text-xl font-semibold text-stone-900">
              {service.title}
            </h2>
            <p className="mt-3 leading-relaxed text-stone-600">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-stone-900 px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Not sure where to start?</h2>
        <p className="mt-3 max-w-xl text-stone-300">
          Book a free on-site consultation and we will walk your property with
          you to identify the best next steps.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-yellow-500"
        >
          Request a Consultation
        </Link>
      </div>
    </div>
  );
}
