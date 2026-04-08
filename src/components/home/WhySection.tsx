'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

const applications = [
  { image: '/retail.png', code: 'POS_DISPLAYS', label: 'Retail Signage' },
  { image: '/billboard.png', code: 'OUTDOOR_ADV', label: 'Billboards' },
  { image: '/vehicleviniyl.png', code: 'FLEET_WRAP', label: 'Vehicle Vinyl' },
  { image: '/metalmarking.png', code: 'IND_PARTS', label: 'Metal Marking' },
  { image: '/backlit.png', code: 'LIGHT_BOXES', label: 'Backlit Media' },
  { image: '/dye.png', code: 'SOFT_SIGN', label: 'Dye-Sub Textiles' },
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

function ParallaxCard({ app, index, hoveredApp, setHoveredApp }: any) {
  const ref = useRef(null)

  const isActive = hoveredApp === index

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-pointer"
      onMouseEnter={() => setHoveredApp(index)}
      onMouseLeave={() => setHoveredApp(null)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Image container with premium rounding */}
      <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-2xl md:rounded-3xl bg-surface-high shadow-lg transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(239,125,0,0.2)]">
        <Image
          src={app.image}
          alt={app.label}
          fill
          className={`object-cover transition-transform duration-[1200ms] ease-out ${isActive ? 'scale-110' : 'scale-100'
            }`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Top corner index element (editorial, minimal) */}
        <div className="absolute right-6 top-6 z-10 flex items-center justify-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 font-manrope text-[10px] font-bold tracking-widest text-white">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Glow effect on hover */}
        <div className={`absolute inset-0 bg-secondary/10 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Content block with Glassmorphism overlay */}
      <div className={cn(
        "absolute inset-x-4 bottom-4 z-20 p-6 rounded-2xl border border-white/20 transition-all duration-500",
        isActive
          ? "bg-white/20 backdrop-blur-xl -translate-y-2 shadow-2xl scale-[1.02]"
          : "bg-primary/90 backdrop-blur-md translate-y-0"
      )}>
        <div className={cn(
          "mb-2 font-manrope text-[10px] font-bold uppercase tracking-widest transition-colors duration-500",
          isActive ? "text-secondary" : "text-white/60"
        )}>
          {app.code.replace(/_/g, ' ')}
        </div>
        <h4 className="font-manrope text-xl font-bold tracking-tight text-white">
          {app.label}
        </h4>

        {/* Hover reveal */}
        <div className={`mt-4 overflow-hidden transition-all duration-500 ease-out ${isActive ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="flex items-center gap-3 pt-2">
            <span className="font-manrope text-[10px] font-extrabold uppercase tracking-widest text-secondary">
              View Application
            </span>
            <span className="text-secondary transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function WhySection() {
  const [hoveredApp, setHoveredApp] = useState<number | null>(null)

  return (
    <div>
      {/* ── Production Use-Cases Section ────────────── */}
      <section id="applications" className="relative overflow-hidden bg-surface px-4 sm:px-6 py-16 sm:py-24 md:px-8 md:py-32">
        <div className="relative mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-12 sm:mb-20 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-label">Production</span>
              <h2 className="font-manrope text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-on-background lg:text-5xl">
                Use-Cases —<br />
                <span className="text-secondary-container">Versatility</span> By Design
              </h2>
            </div>
            <p className="max-w-md font-manrope text-sm sm:text-base leading-relaxed text-on-surface md:text-right">
              From retail signage to outdoor billboards — engineered for every production scenario.
            </p>
          </div>

          {/* ── Overlapping Image Grid with Parallax ─────────────────────── */}
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 sm:gap-y-12 sm:gap-x-10 lg:grid-cols-3 lg:gap-y-16 lg:gap-x-12">
            {applications.map((app, index) => (
              <ParallaxCard
                key={app.code}
                app={app}
                index={index}
                hoveredApp={hoveredApp}
                setHoveredApp={setHoveredApp}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Blue Rhine Section ──────────────────── */}
      <section id="why-us" className="relative overflow-hidden bg-surface-high px-4 sm:px-6 py-16 sm:py-24 md:px-8 md:py-32">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 sm:mb-20 text-center md:text-left">
            <span className="section-label md:mx-0">Service Infrastructure</span>
            <h2 className="mt-2 sm:mt-4 font-manrope text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-on-background lg:text-5xl">
              The Blue Rhine<br />
              <span className="text-primary-container">Advantage</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group flex flex-col bg-surface-lowest p-8 ambient-shadow-light transition-all duration-300 hover:ambient-shadow"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-primary-container/10 rounded-full font-manrope text-xl font-bold text-primary-container transition-colors duration-300 group-hover:bg-primary-container group-hover:text-white">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="mb-3 font-manrope text-xl font-semibold tracking-tight text-on-background">
                    {reason.title}
                  </h3>
                  <p className="font-manrope text-base leading-relaxed text-on-surface">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
