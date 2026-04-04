import Link from 'next/link'

import { Badge } from '@/components/ui/Badge'
import type { Machine } from '@/lib/types'

type MachineCardProps = {
  machine: Machine
}

export function MachineCard({ machine }: MachineCardProps) {
  return (
    <Link
      href={`/machines/${machine.slug}`}
      className="group rounded-[2rem] border border-brand-lightGrey bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between gap-4">
        <Badge>{machine.brand}</Badge>
        <span className="text-sm uppercase tracking-[0.2em] text-brand-grey">{machine.category}</span>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-brand-black">{machine.fullName}</h2>
      <p className="mt-3 text-sm text-brand-grey">{machine.subtitle}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {machine.keySpecs.slice(0, 4).map((spec) => (
          <div key={spec.label} className="rounded-2xl bg-brand-lightGrey p-3">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-grey">{spec.label}</p>
            <p className="mt-2 text-sm font-medium text-brand-black">{spec.value}</p>
          </div>
        ))}
      </div>
    </Link>
  )
}
