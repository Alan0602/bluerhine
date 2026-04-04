type FilterBarProps = {
  categories: string[]
}

export function FilterBar({ categories }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <span
          key={category}
          className="rounded-full border border-brand-grey/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-grey"
        >
          {category}
        </span>
      ))}
    </div>
  )
}
