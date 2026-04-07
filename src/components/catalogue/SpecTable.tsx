import type { Specification } from '@/lib/types'

type SpecTableProps = {
  specs: Specification[]
}

export function SpecTable({ specs }: SpecTableProps) {
  return (
    <section className="overflow-hidden bg-surface-lowest">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm md:text-base">
          <tbody>
            {specs.map((spec) => (
              spec.highlight ? (
                <tr key={spec.param} className="bg-primary-container text-white">
                  <td className="p-6 font-manrope font-semibold uppercase tracking-wider text-white/80 border-b border-white/10">
                    {spec.param}
                  </td>
                  <td className="p-6 font-manrope font-semibold text-white border-b border-white/10">{spec.value}</td>
                </tr>
              ) : (
                <tr key={spec.param} className="border-b border-[rgba(37,61,78,0.05)] transition-colors hover:bg-surface">
                  <td className="w-1/3 p-6 font-manrope font-semibold uppercase tracking-wider text-on-surface bg-surface-high/30">
                    {spec.param}
                  </td>
                  <td className="p-6 font-manrope text-on-background">
                    {spec.value}
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
