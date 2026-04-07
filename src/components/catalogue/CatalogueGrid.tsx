'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { data } from '@/lib/utils'

const iconMap: Record<string, string> = {
  width: 'straighten',
  speed: 'speed',
  printhead: 'print',
  type: 'precision_manufacturing',
  laser: 'flare',
  bed: 'aspect_ratio',
  ink: 'palette',
  automation: 'settings_suggest',
  layers: 'layers',
  application: 'update',
}

function getSpecIcon(label: string): string {
  const key = label.toLowerCase()
  if (key.includes('width') || key.includes('size') || key.includes('format')) return iconMap.width
  if (key.includes('speed') || key.includes('output')) return iconMap.speed
  if (key.includes('head') || key.includes('print')) return iconMap.printhead
  if (key.includes('laser')) return iconMap.laser
  if (key.includes('bed')) return iconMap.bed
  if (key.includes('ink') || key.includes('color')) return iconMap.ink
  if (key.includes('auto')) return iconMap.automation
  if (key.includes('layer')) return iconMap.layers
  if (key.includes('app')) return iconMap.application
  return iconMap.type
}

export function CatalogueGrid() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = useMemo(() => {
    const cats = data.categories.map((c) => ({ id: c.id, label: c.label }))
    return [{ id: 'all', label: 'All Systems' }, ...cats]
  }, [])

  const filteredMachines = useMemo(() => {
    if (activeCategory === 'all') return data.machines
    return data.machines.filter((m) => m.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="products" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-primary text-4xl font-extrabold tracking-tight mb-4">
              Precision Portfolio
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Browse our curated selection of high-capacity industrial machines, categorized by
              technology and output scale.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary border border-surface-container hover:bg-surface-container cursor-pointer'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMachines.map((machine) => {
            const hasImage = !!machine.image
            const categoryLabel =
              data.categories.find((c) => c.id === machine.category)?.label || machine.category

            return (
              <div
                key={machine.id}
                className="bg-surface-container-lowest overflow-hidden group hover:shadow-2xl transition-all duration-500 rounded-lg flex flex-col"
              >
                {hasImage ? (
                  <>
                    {/* Image Card */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={machine.image!}
                        alt={machine.fullName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {categoryLabel}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-primary text-2xl font-bold mb-6">{machine.fullName}</h3>
                      <div className="grid grid-cols-2 gap-y-4 mb-8">
                        {machine.keySpecs.slice(0, 4).map((spec) => (
                          <div key={spec.label} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary">
                              {getSpecIcon(spec.label)}
                            </span>
                            <span className="text-sm font-medium text-on-surface-variant">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <a
                        href="#products"
                        className="mt-auto w-full py-3 border border-outline-variant text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                      >
                        View Technical Brief
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text-only Card */}
                    <div className="p-8 flex-grow flex flex-col">
                      <span className="text-[10px] font-bold text-secondary tracking-widest uppercase mb-2">
                        {categoryLabel}
                      </span>
                      <h3 className="text-primary text-2xl font-bold mb-6">{machine.fullName}</h3>
                      <div className="space-y-4 mb-8">
                        {machine.keySpecs.slice(0, 2).map((spec) => (
                          <div
                            key={spec.label}
                            className="flex items-center gap-4 py-2 border-b border-surface-container"
                          >
                            <span className="material-symbols-outlined text-secondary">
                              {getSpecIcon(spec.label)}
                            </span>
                            <div className="flex flex-col">
                              <span className="text-[10px] uppercase font-bold text-outline">
                                {spec.label}
                              </span>
                              <span className="text-sm font-bold text-primary">{spec.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="mt-auto w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-container transition-all">
                        Request Datasheet
                      </button>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-20 p-12 bg-primary rounded-xl overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h4 className="text-white text-3xl font-bold mb-2">Looking for custom specs?</h4>
              <p className="text-white/70">
                Our engineers can help configure a machine tailored to your exact workflow.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:brightness-110 transition-all uppercase text-sm tracking-wide shrink-0"
            >
              Consult an Expert
            </a>
          </div>
          {/* Abstract Design Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />
        </div>
      </div>
    </section>
  )
}
