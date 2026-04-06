import type { UseCase } from '@/lib/types'

type UseCaseBarProps = {
  items: UseCase[]
}

export function UseCaseBar({ items }: UseCaseBarProps) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="relative overflow-hidden border border-[#111827] bg-[#ffffff] p-8">
          <div className="absolute left-0 top-0 h-1 w-full bg-[#1B2F5E]" />
          <span className="mb-4 block text-2xl">{item.emoji}</span>
          <h4 className="font-[var(--font-barlow-condensed)] text-xl font-bold uppercase text-[#111827]">
            {item.label}
          </h4>
        </div>
      ))}
    </section>
  )
}
