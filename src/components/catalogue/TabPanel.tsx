type TabPanelProps = {
  materials: string[]
  overview: string
  subtitle: string
}

export function TabPanel({ materials, overview, subtitle }: TabPanelProps) {
  return (
    <section className="rounded-[2rem] border border-brand-lightGrey bg-brand-lightGrey/50 p-8">
      <div className="flex gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-grey">
        <span className="rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2 text-brand-orange">
          Overview
        </span>
        <span className="rounded-full border border-brand-grey/20 px-4 py-2">Materials</span>
      </div>
      <h2 className="mt-6 text-3xl font-semibold text-brand-black">{subtitle}</h2>
      <p className="mt-4 text-lg leading-8 text-brand-grey">{overview}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {materials.map((material) => (
          <span
            key={material}
            className="rounded-full bg-white px-3 py-2 text-sm text-brand-black shadow-sm"
          >
            {material}
          </span>
        ))}
      </div>
    </section>
  )
}
