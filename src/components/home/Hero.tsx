import Link from 'next/link'

import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="blueprint-grid-mobile border-b-2 border-[#111827] bg-[#ffffff] px-6 py-10 md:min-h-[calc(100vh-68px)] md:px-8 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center">
        <div className="max-w-5xl text-center">
          <div className="inline-flex border-2 border-[#111827] bg-[#ffffff] px-4 py-2 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.12em] text-[#111827]">
            JHF &amp; Dlican — Exclusive UAE &amp; GCC Distributor
          </div>
          <h1 className="mt-8 font-[var(--font-barlow-condensed)] text-[3.2rem] font-black uppercase leading-[0.92] tracking-[-0.04em] text-[#111827] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8rem]">
            Power Your
            <br />
            Production
            <span className="text-[#1B2F5E]">.</span>
          </h1>
          <div className="mx-auto mt-6 h-1 w-28 bg-[#1B2F5E] md:w-48" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#6B7A93] md:text-xl md:leading-9">
            Industrial UV printing systems and CO2 laser solutions engineered for high-precision
            manufacturing. Built for scale, backed by local support.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <Button href="/catalogue" className="w-full border-2 border-[#111827] md:w-auto" size="lg">
              Explore Catalogue
            </Button>
            <Button
              href="/machines/e150"
              variant="outline"
              size="lg"
              className="w-full border-2 border-[#111827] md:w-auto"
            >
              Request a Quote
            </Button>
          </div>
        </div>



        <div className="mt-12 flex w-full flex-col gap-4 md:hidden">
          <Link
            href="/catalogue"
            className="flex items-center justify-between border-2 border-[#111827] bg-[#ffffff] px-4 py-4 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[-0.03em] text-[#111827] transition-transform duration-200 ease-in-out active:translate-x-1 active:translate-y-1"
          >
            JHF
            <span className="text-[#1B2F5E]">→</span>
          </Link>
          <Link
            href="/catalogue"
            className="flex items-center justify-between border-2 border-[#111827] bg-[#ffffff] px-4 py-4 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[-0.03em] text-[#111827] transition-transform duration-200 ease-in-out active:translate-x-1 active:translate-y-1"
          >
            Dlican
            <span className="text-[#1B2F5E]">→</span>
          </Link>
          <Link
            href="/catalogue"
            className="flex items-center justify-between border-2 border-[#111827] bg-[#ffffff] px-4 py-4 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[-0.03em] text-[#111827] transition-transform duration-200 ease-in-out active:translate-x-1 active:translate-y-1"
          >
            Accurate Laser
            <span className="text-[#1B2F5E]">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
