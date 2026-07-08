const projects = [
  {
    name: "Modern Desert Retreat",
    location: "South Lubbock",
    scope: "Full landscape redesign with native plantings and drip irrigation",
    gradient: "from-emerald-800 to-stone-700",
  },
  {
    name: "Stone Patio & Fire Feature",
    location: "Tech Terrace",
    scope: "Flagstone patio, built-in seating, and gas fire pit",
    gradient: "from-stone-600 to-amber-900",
  },
  {
    name: "Front Yard Transformation",
    location: "Lubbock-Cooper",
    scope: "Curb appeal upgrade with new beds, lighting, and walkway",
    gradient: "from-green-700 to-emerald-950",
  },
  {
    name: "Poolside Oasis",
    location: "West Lubbock",
    scope: "Hardscape surround, privacy plantings, and landscape lighting",
    gradient: "from-teal-800 to-stone-800",
  },
  {
    name: "Commercial Entry",
    location: "Downtown Lubbock",
    scope: "Low-maintenance commercial landscaping and irrigation",
    gradient: "from-stone-700 to-green-900",
  },
  {
    name: "Backyard Entertaining",
    location: "North Lubbock",
    scope: "Outdoor kitchen, pergola, and integrated lighting package",
    gradient: "from-amber-800 to-stone-900",
  },
];

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">
          Portfolio
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">
          Projects we are proud of
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          A selection of recent residential and commercial work across the
          Lubbock area.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
          >
            <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient}`} />
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
                {project.location}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-stone-900">
                {project.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {project.scope}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
