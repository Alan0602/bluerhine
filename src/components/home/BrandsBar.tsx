const brands = ['JHF', 'Dlican', 'Accurate Laser']
const markets = ['UAE / Headquarters', 'KSA / Operations', 'GCC / Wide Distribution']

export function BrandsBar() {
  return (
    <section className="bg-surface px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <span className="mb-4 font-manrope text-[11px] font-bold uppercase tracking-widest text-primary-container">
            Official Distributor For
          </span>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {brands.map((brand) => (
              <div
                key={brand}
                className="font-manrope text-xl font-bold tracking-tight text-on-surface opacity-80"
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
              className="px-4 py-2 bg-surface-high font-manrope text-[10px] font-bold uppercase tracking-widest text-on-surface rounded-sm"
            >
              {market}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
