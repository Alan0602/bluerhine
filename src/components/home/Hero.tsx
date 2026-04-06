import Link from 'next/link'

import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="grain-overlay matte-surface relative overflow-hidden border-b-2 border-[#111827] bg-[#0a0f1a]">
      {/* ── Abstract brutalist geometry (animated) ─── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid pattern — concrete feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Large floating diagonal block — top right */}
        <div
          className="absolute -right-20 -top-24 h-[520px] w-[520px] rotate-[14deg] border border-[#2799d4]/10 bg-[#1B2F5E]/12"
          style={{ animation: 'float-slow 12s ease-in-out infinite' }}
        />

        {/* Layered rectangles — left mid */}
        <div
          className="absolute -left-16 top-[25%] h-[320px] w-[160px] border-2 border-[#2799d4]/10"
          style={{ animation: 'float-slower 16s ease-in-out infinite' }}
        />
        <div
          className="absolute -left-8 top-[28%] h-[220px] w-[90px] bg-[#2799d4]/[0.04]"
          style={{ animation: 'float-slower 16s ease-in-out infinite 2s' }}
        />

        {/* Floating small blocks cluster — mid right */}
        <div
          className="absolute right-[12%] top-[15%] h-24 w-24 border border-[#ffffff]/[0.06] bg-[#1B2F5E]/10"
          style={{ animation: 'float-slow 10s ease-in-out infinite 1s' }}
        />
        <div
          className="absolute right-[9%] top-[22%] h-12 w-12 bg-[#2799d4]/[0.06]"
          style={{ animation: 'float-slower 14s ease-in-out infinite' }}
        />
        <div
          className="absolute right-[14%] top-[28%] h-8 w-8 bg-[#D4A843]/[0.08]"
          style={{ animation: 'float-slow 8s ease-in-out infinite 3s' }}
        />

        {/* Small blocks — bottom left */}
        <div
          className="absolute bottom-[18%] left-[8%] h-14 w-14 border border-[#2799d4]/[0.08]"
          style={{ animation: 'float-slower 12s ease-in-out infinite 5s' }}
        />
        <div
          className="absolute bottom-[14%] left-[12%] h-8 w-8 bg-[#1B2F5E]/10"
          style={{ animation: 'float-slow 10s ease-in-out infinite 2s' }}
        />

        {/* Cut-out shape — bottom right */}
        <div
          className="absolute -bottom-12 right-[8%] h-[200px] w-[360px] -rotate-2 border-t-2 border-[#2799d4]/12 bg-gradient-to-b from-[#2799d4]/[0.03] to-transparent"
          style={{ animation: 'drift-x 20s ease-in-out infinite' }}
        />

        {/* Horizontal glowing lines */}
        <div
          className="absolute left-0 top-[35%] h-[1px] w-[30%] origin-left bg-gradient-to-r from-[#2799d4]/30 to-transparent"
          style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-[30%] right-0 h-[1px] w-[22%] origin-right bg-gradient-to-l from-[#D4A843]/20 to-transparent"
          style={{ animation: 'glow-pulse 4s ease-in-out infinite 2s' }}
        />
        <div
          className="absolute left-[20%] top-[65%] h-[1px] w-[15%] origin-left bg-gradient-to-r from-[#ffffff]/[0.06] to-transparent"
          style={{ animation: 'glow-pulse 6s ease-in-out infinite 1s' }}
        />

        {/* Circle accents */}
        <div
          className="absolute left-[5%] top-[10%] h-40 w-40 rounded-full border border-[#ffffff]/[0.04]"
          style={{ animation: 'float-slower 18s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-[20%] right-[20%] h-24 w-24 rounded-full border border-[#2799d4]/[0.06]"
          style={{ animation: 'float-slow 14s ease-in-out infinite 4s' }}
        />

        {/* Large watermark text */}
        <div className="glow-blue-text absolute -bottom-20 -right-4 hidden select-none font-[var(--font-barlow-condensed)] text-[22rem] font-black uppercase leading-none text-[#ffffff]/[0.015] md:block">
          BR
        </div>
        <div className="absolute -left-10 top-[10%] hidden select-none font-[var(--font-barlow-condensed)] text-[14rem] font-black uppercase leading-none text-[#ffffff]/[0.012] md:block">
          IN
        </div>
      </div>

      {/* ── Main content ──────────────────────────── */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-16 md:min-h-[calc(100vh-68px)] md:px-8 md:py-20">
        <div className="max-w-5xl text-center">
          {/* Distributor badge */}
          <div className="glass-card inline-flex px-5 py-2.5 font-[var(--font-barlow-condensed)] text-[12px] font-black uppercase tracking-[0.18em] text-[#ffffff]/70">
            <span className="text-[#2799d4]">JHF &amp; Dlican</span>
            <span className="mx-3 text-[#ffffff]/20">|</span>
            Exclusive UAE &amp; GCC Distributor
          </div>

          {/* Main heading */}
          <h1 className="glow-blue-text mt-10 font-[var(--font-barlow-condensed)] text-[3.2rem] font-black uppercase leading-[0.90] tracking-[-0.04em] text-[#ffffff] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8.5rem]">
            Power Your
            <br />
            Production
            <span className="text-[#2799d4]">.</span>
          </h1>

          {/* Accent line */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-[3px] w-12 bg-[#2799d4]" />
            <div className="h-[3px] w-6 bg-[#2799d4]/40" />
            <div className="h-[3px] w-3 bg-[#2799d4]/20" />
          </div>

          {/* Subheading */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-[1.8] text-[#8896AB] md:text-lg md:leading-[1.9]">
            Industrial UV printing systems and CO₂ laser solutions engineered for high-precision
            manufacturing. Built for scale, backed by local support.
          </p>

          {/* CTA buttons — sharp edges */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-5">
            <Button
              href="/catalogue"
              className="glow-blue w-full border-2 border-[#2799d4] bg-[#2799d4] text-sm font-black uppercase tracking-[0.15em] text-[#0a0f1a] transition-all duration-300 hover:bg-transparent hover:text-[#2799d4] hover:shadow-[0_0_40px_rgba(39,153,212,0.25)] md:w-auto"
              size="lg"
            >
              Explore Catalogue
            </Button>
            <Button
              href="/machines/e150"
              variant="outline"
              size="lg"
              className="w-full border-2 border-[#ffffff]/15 text-sm font-bold uppercase tracking-[0.15em] text-[#ffffff]/70 transition-all duration-300 hover:border-[#2799d4]/50 hover:text-[#2799d4] md:w-auto"
            >
              Request a Quote
            </Button>
          </div>
        </div>

        {/* Mobile brand links */}
        <div className="mt-12 flex w-full flex-col gap-3 md:hidden">
          {['JHF', 'Dlican', 'Accurate Laser'].map((brand) => (
            <Link
              key={brand}
              href="/catalogue"
              className="glass-card flex items-center justify-between px-5 py-4 font-[var(--font-barlow-condensed)] text-xl font-black uppercase tracking-[-0.03em] text-[#ffffff] transition-all duration-200 ease-in-out active:translate-x-1 active:translate-y-1"
            >
              {brand}
              <span className="text-[#2799d4]">→</span>
            </Link>
          ))}
        </div>

        {/* Bottom stats strip — desktop */}
        <div className="mt-16 hidden w-full max-w-4xl items-center justify-between border-t border-[#ffffff]/[0.06] pt-8 md:flex">
          {[
            { value: '200+', label: 'Machines Deployed' },
            { value: '6', label: 'GCC Countries' },
            { value: '24/7', label: 'Support Coverage' },
            { value: '15+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[var(--font-barlow-condensed)] text-3xl font-black uppercase text-[#2799d4]">
                {stat.value}
              </div>
              <div className="mt-1 font-[var(--font-barlow-condensed)] text-[9px] font-bold uppercase tracking-[0.25em] text-[#ffffff]/30">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
