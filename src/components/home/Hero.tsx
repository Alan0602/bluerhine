import Link from 'next/link'

import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="blueprint-grid-mobile border-b-2 border-[#111111] bg-[#ffffff] px-6 py-10 md:min-h-[calc(100vh-68px)] md:px-8 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center">
        <div className="max-w-5xl text-center">
          <div className="inline-flex border-2 border-[#111111] bg-[#ffffff] px-4 py-2 font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111]">
            <span className="mr-2 text-[#f26522]">{'//'}</span>
            JHF &amp; Dlican — Exclusive UAE &amp; GCC Distributor
          </div>
          <h1 className="mt-8 font-[var(--font-barlow-condensed)] text-[3.2rem] font-black uppercase leading-[0.92] tracking-[-0.04em] text-[#111111] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8rem]">
            Power Your
            <br />
            Production
            <span className="text-[#f26522]">.</span>
          </h1>
          <div className="mx-auto mt-6 h-1 w-28 bg-[#f26522] md:w-48" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#6b7280] md:text-xl md:leading-9">
            Industrial UV printing systems and CO2 laser solutions engineered for high-precision
            manufacturing. Built for scale, backed by local support.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <Button href="/catalogue" className="w-full border-2 border-[#111111] md:w-auto" size="lg">
              Explore Catalogue
            </Button>
            <Button
              href="/machines/e150"
              variant="outline"
              size="lg"
              className="w-full border-2 border-[#111111] md:w-auto"
            >
              Request a Quote
            </Button>
          </div>
        </div>

        <div className="mt-16 grid w-full max-w-6xl grid-cols-2 border-2 border-[#111111] bg-[#ffffff] md:mt-24 md:grid-cols-4">
          {[
            { value: '9+', label: 'Models Available' },
            { value: '5m', label: 'Max Width' },
            { value: '400+', label: 'm²/h Speed' },
            { value: 'UV LED', label: 'Curing Tech' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`relative flex min-h-[122px] flex-col items-start justify-end border-[#111111] p-5 md:min-h-[160px] md:p-8 ${
                index % 2 === 0 ? 'border-r-2 md:border-r-0' : ''
              } ${index < 2 ? 'border-b-2 md:border-b-0' : ''}`}
            >
              <div className="absolute left-0 top-0 h-8 w-1 bg-[#f26522]" />
              <span className="font-[var(--font-barlow-condensed)] text-[2rem] font-black uppercase leading-none text-[#111111] md:text-[2.6rem]">
                {stat.value}
              </span>
              <span className="mt-3 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
                {'// '}
                {stat.label}
              </span>
              {index < 3 ? (
                <span className="absolute right-0 top-0 hidden h-full w-0 border-r-2 border-[#111111] md:block" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-12 flex w-full flex-col gap-4 md:hidden">
          <Link
            href="/catalogue"
            className="flex items-center justify-between border-2 border-[#111111] bg-[#ffffff] px-4 py-4 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[-0.03em] text-[#111111] transition-transform duration-200 ease-in-out active:translate-x-1 active:translate-y-1"
          >
            JHF
            <span className="text-[#f26522]">→</span>
          </Link>
          <Link
            href="/catalogue"
            className="flex items-center justify-between border-2 border-[#111111] bg-[#ffffff] px-4 py-4 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[-0.03em] text-[#111111] transition-transform duration-200 ease-in-out active:translate-x-1 active:translate-y-1"
          >
            Dlican
            <span className="text-[#f26522]">→</span>
          </Link>
          <Link
            href="/catalogue"
            className="flex items-center justify-between border-2 border-[#111111] bg-[#ffffff] px-4 py-4 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[-0.03em] text-[#111111] transition-transform duration-200 ease-in-out active:translate-x-1 active:translate-y-1"
          >
            Accurate Laser
            <span className="text-[#f26522]">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
