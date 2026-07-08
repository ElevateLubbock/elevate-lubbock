const values = [
  {
    title: "Local Expertise",
    description:
      "We understand Lubbock soil, wind, and water constraints—and design for them from day one.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Our crews take pride in precision grading, clean finishes, and details that hold up over time.",
  },
  {
    title: "Clear Communication",
    description:
      "You always know what is happening next, with honest timelines and no surprise change orders.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            About Us
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">
            Elevating outdoor living in West Texas
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            Elevate Lubbock was founded with a simple mission: help homeowners
            create outdoor spaces they actually use and love. We combine
            thoughtful design with dependable construction to deliver landscapes
            that look great in year one and still perform in year ten.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            From first consultation to final walkthrough, you work with a team
            that treats your property like our own.
          </p>
        </div>

        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand to-brand-dark" />
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title}>
            <h2 className="text-xl font-semibold text-stone-900">
              {value.title}
            </h2>
            <p className="mt-3 leading-relaxed text-stone-600">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
