import type { PrintingSpeed } from '@/lib/types'

type SpeedTableProps = {
  printingSpeed?: PrintingSpeed
}

export function SpeedTable({ printingSpeed }: SpeedTableProps) {
  if (!printingSpeed) {
    return null
  }

  return (
    <section className="rounded-[2rem] border border-brand-lightGrey bg-white p-8">
      <h2 className="text-2xl font-semibold text-brand-black">{printingSpeed.label}</h2>
      <div className="mt-6 space-y-3">
        {printingSpeed.rows.map((row) => (
          <div
            key={row.config}
            className="grid gap-2 rounded-2xl bg-brand-lightGrey px-4 py-3 sm:grid-cols-3"
          >
            <p className="text-base font-medium text-brand-black">{row.config}</p>
            <p className="text-base text-brand-grey">{row.pass4}</p>
            <p className="text-base text-brand-black">{row.pass6} / {row.pass8}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
