const brands = ['JHF', 'Dlican', 'Accurate Laser']
const markets = ['UAE / Headquarters', 'KSA / Operations', 'GCC / Wide Distribution']

export function BrandsBar() {
  return (
    <section className="border-b-2 border-[#111111] bg-[#ffffff] px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <span className="mb-4 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
            {'// Official Distributor For'}
          </span>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {brands.map((brand) => (
              <div
                key={brand}
                className="border border-[#111111] px-4 py-3 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[-0.04em] text-[#111111] grayscale"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {markets.map((market) => (
            <div
              key={market}
              className="border border-[#111111] px-4 py-2 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#111111]"
            >
              {market}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
