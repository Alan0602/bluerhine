'use client'

import Image from 'next/image'
import { useState } from 'react'

const applications = [
  { image: 'https://i.ibb.co/VWfFmdC6/Google-Gemini-Generated-Image.png', code: 'POS_DISPLAYS', label: 'Retail Signage' },
  { image: 'https://i.ibb.co/jqm3jB6/Google-Gemini-Generated-Image-1.png', code: 'OUTDOOR_ADV', label: 'Billboards' },
  { image: 'https://i.ibb.co/xKpY7W2K/Backlit-Media-Theme-Apr-6-2026-3.png', code: 'FLEET_WRAP', label: 'Vehicle Vinyl' },
  { image: 'https://i.ibb.co/20Jtb4pp/Backlit-Media-Theme-Apr-6-2026-1.png', code: 'IND_PARTS', label: 'Metal Marking' },
  { image: 'https://i.ibb.co/4nkrMxQf/Backlit-Media-Theme-Apr-6-2026.png', code: 'LIGHT_BOXES', label: 'Backlit Media' },
  { image: 'https://i.ibb.co/yBfWFqYB/Backlit-Media-Theme-Apr-6-2026-2.png', code: 'SOFT_SIGN', label: 'Dye-Sub Textiles' },
]

const reasons = [
  {
    title: 'GCC-Wide Presence',
    text: 'Strategically located hubs across UAE, KSA, and Oman ensure rapid response times and local expertise.',
    icon: '01',
  },
  {
    title: 'Technical Support',
    text: 'Certified engineers trained by JHF and Dlican provide on-site assistance, calibration, and uptime protection.',
    icon: '02',
  },
  {
    title: 'Spare Parts Repo',
    text: 'Critical components, consumables, and replacement parts stay close to production with local stock support.',
    icon: '03',
  },
  {
    title: 'Financing Solutions',
    text: 'Flexible commercial pathways help production teams upgrade equipment without slowing operational growth.',
    icon: '04',
  },
  {
    title: 'Track Record',
    text: 'A long-standing installation history across the region gives buyers confidence in deployment and after-sales service.',
    icon: '05',
  },
  {
    title: 'Multi-Brand Ecosystem',
    text: 'Printers, cutters, materials, workflow support, and applications consulting live under one distribution structure.',
    icon: '06',
  },
]

export function WhySection() {
  const [hoveredApp, setHoveredApp] = useState<number | null>(null)

  return (
    <div>
      {/* ── Production Use-Cases Section ────────────── */}
      <section id="applications" className="relative overflow-hidden border-y-2 border-[#111827] bg-[#F4F6FA] px-6 py-20 md:px-8 md:py-28">
        {/* Subtle grid texture */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#11182706_1px,transparent_1px),linear-gradient(to_bottom,#11182706_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-[3px] w-10 bg-[#2799d4]" />
                <span className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.3em] text-[#2799d4]">
                  Production
                </span>
              </div>
              <h2 className="font-[var(--font-barlow-condensed)] text-4xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#111827] md:text-5xl lg:text-6xl">
                Use-Cases —<br />
                <span className="text-[#2799d4]">Versatility</span> By Design
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#6B7A93] md:text-right">
              From retail signage to outdoor billboards — engineered for every production scenario.
            </p>
          </div>

          {/* ── Image-first grid ─────────────────────── */}
          <div className="grid grid-cols-1 gap-[2px] bg-[#111827] sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => {
              const isWide = index === 0 || index === 3
              const isActive = hoveredApp === index

              return (
                <div
                  key={app.code}
                  className={`group relative cursor-pointer overflow-hidden bg-[#111827] ${
                    isWide ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                  onMouseEnter={() => setHoveredApp(index)}
                  onMouseLeave={() => setHoveredApp(null)}
                >
                  {/* Image — 70-80% visual focus */}
                  <div className={`relative w-full ${isWide ? 'h-[340px] md:h-[420px]' : 'h-[300px] md:h-[380px]'}`}>
                    <Image
                      src={app.image}
                      alt={app.label}
                      fill
                      className={`object-cover transition-all duration-[900ms] ease-out ${
                        isActive ? 'scale-[1.08] brightness-110' : 'scale-100 brightness-[0.85]'
                      }`}
                      sizes={isWide
                        ? '(max-width: 768px) 100vw, 66vw'
                        : '(max-width: 768px) 100vw, 33vw'
                      }
                    />

                    {/* Cinematic shadow overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/30 to-transparent" />

                    {/* Matte industrial texture */}
                    <div
                      className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 30% 70%, rgba(39, 153, 212, 0.08), transparent 50%)',
                      }}
                    />

                    {/* Electric blue glow bar (hover) */}
                    <div
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#2799d4] transition-all duration-700 ease-out ${
                        isActive ? 'w-full shadow-[0_0_20px_rgba(39,153,212,0.4)]' : 'w-0'
                      }`}
                    />

                    {/* Top corner index */}
                    <div className="absolute right-0 top-0 z-10 flex items-center gap-0">
                      <div className={`h-8 transition-all duration-500 ${isActive ? 'w-8 bg-[#2799d4]' : 'w-0 bg-transparent'}`} />
                      <div className="bg-[#111827]/90 px-4 py-2 font-[var(--font-barlow-condensed)] text-[11px] font-black tracking-[0.25em] text-[#2799d4]">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                      <div
                        className={`mb-3 inline-block border border-[#ffffff]/10 px-3 py-1 font-[var(--font-barlow-condensed)] text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${
                          isActive
                            ? 'border-[#2799d4]/40 bg-[#2799d4]/10 text-[#2799d4]'
                            : 'bg-[#ffffff]/5 text-[#ffffff]/40'
                        }`}
                      >
                        {app.code.replace(/_/g, ' ')}
                      </div>
                      <h4
                        className={`font-[var(--font-barlow-condensed)] text-2xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-[#ffffff] transition-all duration-500 md:text-3xl ${
                          isWide ? 'lg:text-4xl' : ''
                        }`}
                      >
                        {app.label}
                      </h4>

                      {/* Hover reveal bar */}
                      <div
                        className={`mt-5 overflow-hidden transition-all duration-600 ease-out ${
                          isActive ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="flex items-center gap-4 border-t border-[#ffffff]/10 pt-4">
                          <div className="flex items-center gap-2">
                            <div className="h-[2px] w-6 bg-[#2799d4]" />
                            <div className="h-[2px] w-3 bg-[#2799d4]/40" />
                          </div>
                          <span className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffffff]/50">
                            View Application
                          </span>
                          <span className="ml-auto text-[#2799d4] transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Corner geometric accents */}
                    <div className={`absolute left-0 top-0 transition-all duration-500 ${isActive ? 'h-16 w-[2px] bg-[#2799d4]/40' : 'h-0 w-0'}`} />
                    <div className={`absolute left-0 top-0 transition-all duration-500 ${isActive ? 'h-[2px] w-16 bg-[#2799d4]/40' : 'h-0 w-0'}`} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom accent bar */}
          <div className="flex items-center gap-0">
            <div className="h-1 flex-1 bg-[#111827]" />
            <div className="h-1 w-32 bg-[#2799d4]" />
            <div className="h-1 w-16 bg-[#D4A843]" />
          </div>
        </div>
      </section>

      {/* ── Why Blue Rhine Section ──────────────────── */}
      <section id="why-us" className="relative overflow-hidden bg-[#111827] px-6 py-20 text-[#ffffff] md:px-8 md:py-28">
        {/* Abstract background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute -right-10 top-0 hidden select-none font-[var(--font-barlow-condensed)] text-[16rem] font-black uppercase leading-none text-[#ffffff]/[0.015] md:block">
            BR
          </div>
          <div
            className="absolute bottom-[10%] right-[5%] h-24 w-24 border border-[#2799d4]/[0.06]"
            style={{ animation: 'float-slow 12s ease-in-out infinite' }}
          />
          <div
            className="absolute left-[3%] top-[20%] h-32 w-32 rounded-full border border-[#ffffff]/[0.03]"
            style={{ animation: 'float-slower 16s ease-in-out infinite' }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-[3px] w-10 bg-[#2799d4]" />
              <span className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.3em] text-[#2799d4]">
                Service Infrastructure
              </span>
            </div>
            <h2 className="mt-4 font-[var(--font-barlow-condensed)] text-4xl font-black uppercase tracking-[-0.04em] text-[#ffffff] md:text-5xl lg:text-6xl">
              The Blue Rhine<br />
              <span className="text-[#2799d4]">Advantage</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="glass-card group flex flex-col gap-5 p-6 transition-all duration-300 hover:border-[#2799d4]/20"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-[#2799d4] font-[var(--font-barlow-condensed)] text-xl font-black text-[#0a0f1a] transition-colors duration-200 ease-in-out group-hover:bg-[#D4A843]">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-[var(--font-barlow-condensed)] text-lg font-black uppercase tracking-[0.04em] text-[#ffffff]">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-[#8896AB]">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
