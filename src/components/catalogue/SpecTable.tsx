import type { Specification } from '@/lib/types'

type SpecTableProps = {
  specs: Specification[]
}

export function SpecTable({ specs }: SpecTableProps) {
  return (
    <section className="overflow-hidden border-2 border-[#111827] bg-[#ffffff]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <tbody>
        {specs.map((spec) => (
          spec.highlight ? (
            <tr key={spec.param} className="bg-[#1B2F5E] text-[#ffffff]">
              <td className="border-b border-[#111827] p-6 font-[var(--font-barlow-condensed)] text-base font-bold uppercase tracking-[0.14em]">
                {spec.param}
              </td>
              <td className="border-b border-[#111827] p-6 text-base font-bold">{spec.value}</td>
            </tr>
          ) : (
            <tr key={spec.param}>
              <td className="w-1/3 border-b border-[#111827] bg-[#F4F6FA] p-6 font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.18em] text-[#111827]">
                {spec.param}
              </td>
              <td className="border-b border-[#111827] p-6 text-base leading-7 text-[#6B7A93]">
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
