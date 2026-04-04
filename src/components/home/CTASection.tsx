import { data } from '@/lib/utils'

export function CTASection() {
  const categories = ['Hybrid Printers', 'Flatbed Printers', 'Laser Cutting']

  return (
    <section id="contact" className="bg-[#111111] px-6 py-24 text-[#ffffff] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <span className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
            {'// '}Project_Inquiry
          </span>
          <h2 className="mt-4 font-[var(--font-barlow-condensed)] text-5xl font-black uppercase tracking-[-0.05em] md:text-7xl">
            Let&apos;s Build
            <br />
            Your Line
            <span className="text-[#f26522]">.</span>
          </h2>

          <div className="mt-12 space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 items-center justify-center bg-[#f26522] font-[var(--font-barlow-condensed)] text-xs font-black uppercase text-[#111111]">
                LOC
              </div>
              <div>
                <div className="mb-1 font-[var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.16em]">
                  Main Showroom
                </div>
                <div className="text-sm leading-7 text-[#9ca3af]">{data.brand.headquarters}</div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 items-center justify-center bg-[#f26522] font-[var(--font-barlow-condensed)] text-xs font-black uppercase text-[#111111]">
                TEL
              </div>
              <div>
                <div className="mb-1 font-[var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.16em]">
                  Quick Line
                </div>
                <div className="text-sm leading-7 text-[#9ca3af]">{data.brand.phone}</div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {['Dubai', 'Riyadh', 'Muscat', 'Doha'].map((city) => (
              <div
                key={city}
                className="border border-[#374151] bg-[#1f2937] px-4 py-1 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffffff]"
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        <form className="space-y-10">
          <div>
            <input
              className="w-full border-0 border-b-2 border-[#374151] bg-transparent px-0 py-4 font-[var(--font-barlow-condensed)] text-lg uppercase tracking-[0.08em] text-[#ffffff] outline-none placeholder:text-[#4b5563] focus:border-[#f26522]"
              placeholder="Your Full Name"
              type="text"
            />
          </div>
          <div>
            <input
              className="w-full border-0 border-b-2 border-[#374151] bg-transparent px-0 py-4 font-[var(--font-barlow-condensed)] text-lg uppercase tracking-[0.08em] text-[#ffffff] outline-none placeholder:text-[#4b5563] focus:border-[#f26522]"
              placeholder="Corporate Email"
              type="email"
            />
          </div>
          <div>
            <select
              className="w-full border-0 border-b-2 border-[#374151] bg-transparent px-0 py-4 font-[var(--font-barlow-condensed)] text-lg uppercase tracking-[0.08em] text-[#9ca3af] outline-none focus:border-[#f26522]"
              defaultValue=""
            >
              <option value="" disabled>
                Select Machine Category
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              className="w-full border-0 border-b-2 border-[#374151] bg-transparent px-0 py-4 font-[var(--font-barlow-condensed)] text-lg uppercase tracking-[0.08em] text-[#ffffff] outline-none placeholder:text-[#4b5563] focus:border-[#f26522]"
              placeholder="Project Requirements"
              rows={4}
            />
          </div>
          <button
            className="w-full border-2 border-[#111111] bg-[#f26522] py-6 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[0.16em] text-[#111111] transition-colors duration-200 ease-in-out hover:bg-[#ffffff]"
            type="submit"
          >
            Send Technical Brief
          </button>
        </form>
      </div>
    </section>
  )
}
