'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

import type { UseCase } from '@/lib/types'

/* ── Props ──────────────────────────────────────── */
type UseCaseBarProps = {
  items: UseCase[]
}

/* ── Image map ──────────────────────────────────── */
const useCaseImageMap: Record<string, string> = {
  '🎨': 'https://i.ibb.co/yBfWFqYB/Backlit-Media-Theme-Apr-6-2026-2.png',
  '🎪': 'https://i.ibb.co/VWfFmdC6/Google-Gemini-Generated-Image.png',
  '🏆': 'https://i.ibb.co/4nkrMxQf/Backlit-Media-Theme-Apr-6-2026.png',
  '🏗️': 'https://i.ibb.co/xKpY7W2K/Backlit-Media-Theme-Apr-6-2026-3.png',
  '🏠': 'https://i.ibb.co/yBfWFqYB/Backlit-Media-Theme-Apr-6-2026-2.png',
  '🏢': 'https://i.ibb.co/VWfFmdC6/Google-Gemini-Generated-Image.png',
  '🏳️': 'https://i.ibb.co/yBfWFqYB/Backlit-Media-Theme-Apr-6-2026-2.png',
  '👣': 'https://i.ibb.co/VWfFmdC6/Google-Gemini-Generated-Image.png',
  '💡': 'https://i.ibb.co/4nkrMxQf/Backlit-Media-Theme-Apr-6-2026.png',
  '💻': 'https://i.ibb.co/VWfFmdC6/Google-Gemini-Generated-Image.png',
  '📢': 'https://i.ibb.co/jqm3jB6/Google-Gemini-Generated-Image-1.png',
  '📦': 'https://i.ibb.co/VWfFmdC6/Google-Gemini-Generated-Image.png',
  '📱': 'https://i.ibb.co/VWfFmdC6/Google-Gemini-Generated-Image.png',
  '🔧': 'https://i.ibb.co/xKpY7W2K/Backlit-Media-Theme-Apr-6-2026-3.png',
  '🖼️': 'https://i.ibb.co/4nkrMxQf/Backlit-Media-Theme-Apr-6-2026.png',
  '🚗': 'https://i.ibb.co/xKpY7W2K/Backlit-Media-Theme-Apr-6-2026-3.png',
  '🚧': 'https://i.ibb.co/jqm3jB6/Google-Gemini-Generated-Image-1.png',
  '🛍️': 'https://i.ibb.co/VWfFmdC6/Google-Gemini-Generated-Image.png',
  '🧱': 'https://i.ibb.co/xKpY7W2K/Backlit-Media-Theme-Apr-6-2026-3.png',
  '🪟': 'https://i.ibb.co/jqm3jB6/Google-Gemini-Generated-Image-1.png',
  '🪧': 'https://i.ibb.co/jqm3jB6/Google-Gemini-Generated-Image-1.png',
}

const defaultImage = 'https://i.ibb.co/VWfFmdC6/Google-Gemini-Generated-Image.png'

/* ── Component ──────────────────────────────────── */
export function UseCaseBar({ items }: UseCaseBarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative">
      {/* Section header */}
      <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="h-[3px] w-10 bg-[#2799d4]" />
            <span className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.3em] text-[#2799d4]">
              Production
            </span>
          </div>
          <h3 className="font-[var(--font-barlow-condensed)] text-4xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#111827] md:text-5xl">
            Use-Cases —<br />
            <span className="text-[#2799d4]">Versatility</span> By Design
          </h3>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[#6B7A93] md:text-right">
          From retail signage to outdoor billboards — engineered for every production scenario.
        </p>
      </div>

      {/* ── Grid layout ─────────────────────────────── */}
      <div ref={containerRef} className="grid grid-cols-1 gap-[2px] bg-[#111827] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const isWide = index === 0 || index === 3
          const isActive = activeIndex === index
          const imgSrc = useCaseImageMap[item.emoji] || defaultImage

          return (
            <div
              key={item.label}
              className={`group relative cursor-pointer overflow-hidden bg-[#111827] ${
                isWide ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Image — 70-80% visual focus */}
              <div className={`relative w-full ${isWide ? 'h-[380px] md:h-[480px]' : 'h-[340px] md:h-[420px]'}`}>
                <Image
                  src={imgSrc}
                  alt={item.label}
                  fill
                  className={`object-cover transition-all duration-[900ms] ease-out ${
                    isActive ? 'scale-[1.08] brightness-110' : 'scale-100 brightness-[0.85]'
                  }`}
                  sizes={isWide
                    ? '(max-width: 768px) 100vw, 66vw'
                    : '(max-width: 768px) 100vw, 33vw'
                  }
                />

                {/* ── Cinematic shadow overlays ──────── */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/30 to-transparent" />

                {/* ── Matte industrial texture ──────── */}
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 30% 70%, rgba(39, 153, 212, 0.08), transparent 50%)',
                  }}
                />

                {/* ── Electric blue glow accent (hover) */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#2799d4] transition-all duration-700 ease-out ${
                    isActive ? 'w-full shadow-[0_0_20px_rgba(39,153,212,0.4)]' : 'w-0'
                  }`}
                />

                {/* ── Top corner index ──────────────── */}
                <div className="absolute right-0 top-0 z-10 flex items-center gap-0">
                  <div className={`h-8 transition-all duration-500 ${isActive ? 'w-8 bg-[#2799d4]' : 'w-0 bg-transparent'}`} />
                  <div className="bg-[#111827]/90 px-4 py-2 font-[var(--font-barlow-condensed)] text-[11px] font-black tracking-[0.25em] text-[#2799d4]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* ── Content overlay ───────────────── */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                  {/* Label tag */}
                  <div
                    className={`mb-3 inline-block border border-[#ffffff]/10 px-3 py-1 font-[var(--font-barlow-condensed)] text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${
                      isActive
                        ? 'border-[#2799d4]/40 bg-[#2799d4]/10 text-[#2799d4]'
                        : 'bg-[#ffffff]/5 text-[#ffffff]/40'
                    }`}
                  >
                    Application
                  </div>

                  {/* Title */}
                  <h4
                    className={`font-[var(--font-barlow-condensed)] text-2xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-[#ffffff] transition-all duration-500 md:text-3xl ${
                      isWide ? 'lg:text-4xl' : ''
                    }`}
                  >
                    {item.label}
                  </h4>

                  {/* ── Hover reveal: glassmorphism bar */}
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
                        Explore Use Case
                      </span>
                      <span className="ml-auto text-[#2799d4] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Corner geometric accents ─────── */}
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
    </section>
  )
}
