import type { Specification } from '@/lib/types'

type SpecTableProps = {
  specs: Specification[]
}

export function SpecTable({ specs }: SpecTableProps) {
  return (
    <section className="overflow-hidden border-2 border-[#111111] bg-[#ffffff]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <tbody>
        {specs.map((spec) => (
          spec.highlight ? (
            <tr key={spec.param} className="bg-[#f26522] text-[#ffffff]">
              <td className="border-b border-[#111111] p-6 font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.14em]">
                {spec.param}
              </td>
              <td className="border-b border-[#111111] p-6 text-sm font-bold">{spec.value}</td>
            </tr>
          ) : (
            <tr key={spec.param}>
              <td className="w-1/3 border-b border-[#111111] bg-[#f8fafc] p-6 font-[var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.18em] text-[#111111]">
                {spec.param}
              </td>
              <td className="border-b border-[#111111] p-6 text-sm text-[#6b7280]">
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
