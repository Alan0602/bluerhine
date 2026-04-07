import type { PrintingSpeed } from '@/lib/types'

type SpeedTableProps = {
  printingSpeed?: PrintingSpeed
}

export function SpeedTable({ printingSpeed }: SpeedTableProps) {
  if (!printingSpeed) {
    return null
  }

  return (
    <section className="bg-surface p-8 border-l-2 border-primary-container">
      <h2 className="font-manrope text-xl font-semibold text-on-background">{printingSpeed.label}</h2>
      <div className="mt-6 space-y-3">
        {printingSpeed.rows.map((row) => (
          <div
            key={row.config}
            className="grid gap-4 rounded-sm bg-surface-lowest px-6 py-4 sm:grid-cols-3 transition-colors hover:bg-surface ambient-shadow-light"
          >
            <p className="font-manrope text-sm font-semibold text-on-background">{row.config}</p>
            <p className="font-manrope text-sm text-on-surface">{row.pass4}</p>
            <p className="font-manrope text-sm text-on-background font-medium">{row.pass6} / {row.pass8}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
