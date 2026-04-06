'use client'

import Link from 'next/link'
import { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react'

import { data } from '@/lib/utils'

type MachineCatalogueSectionProps = {
  initialCategory?: string
  introLabel: string
  title: string
  description: string
  sectionId?: string
  showStats?: boolean
}

type MachineRecord = (typeof data.machines)[number]

const categoryLabels = new Map(data.categories.map((category) => [category.id, category.label]))
const availableCategories = Array.from(new Set(data.machines.map((machine) => machine.category)))

const filterOptions = [
  { id: 'all', label: 'All Models' },
  ...availableCategories.map((categoryId) => ({
    id: categoryId,
    label: categoryLabels.get(categoryId) ?? categoryId.replace(/-/g, ' '),
  })),
]

function getSafeCategory(category?: string) {
  if (!category) return 'all'
  return availableCategories.includes(category) ? category : 'all'
}

function buildReferenceLabel(model: string, index: number) {
  const normalizedModel = model.replace(/[^a-z0-9]/gi, '').toUpperCase()
  return `REF_${normalizedModel}_${String(index + 1).padStart(2, '0')}`
}

function getCategoryLabel(machine: MachineRecord) {
  return categoryLabels.get(machine.category) ?? machine.category.replace(/-/g, ' ')
}

function getAccentClass(category: string) {
  if (category === 'laser') return 'bg-[#f26522]'
  if (category === 'roll') return 'bg-cyan-500'
  if (category === 'uv-flatbed') return 'bg-emerald-500'
  if (category === 'industrial') return 'bg-sky-500'
  return 'bg-violet-500'
}

function ListingRow({ machine, index }: { machine: MachineRecord; index: number }) {
  return (
    <article className="group border-b-2 border-[#111111] bg-[#ffffff] transition-colors duration-200 hover:bg-[#fafafa]">
      <Link href={`/machines/${machine.slug}`} className="block">
        <div className="flex flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:gap-8 md:px-8 md:py-5">
          {/* Left: Name & Brand */}
          <div className="flex min-w-0 shrink-0 flex-col gap-1 md:w-[320px]">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b7280]">
                <span className={`h-2 w-2 rounded-full ${getAccentClass(machine.category)}`} />
                {getCategoryLabel(machine)}
              </span>
              <span className="font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#9ca3af]">
                {machine.brand}
              </span>
            </div>
            <h3 className="font-[var(--font-barlow-condensed)] text-2xl font-black uppercase leading-none tracking-[-0.04em] text-[#111111] md:text-[1.75rem]">
              {machine.fullName}
            </h3>
            <p className="font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.06em] text-[#f26522]">
              {machine.subtitle}
            </p>
          </div>

          {/* Center: Key specs inline */}
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
            {machine.keySpecs.slice(0, 4).map((spec, specIndex) => (
              <span
                key={`${machine.id}-${spec.label}`}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 font-[var(--font-barlow-condensed)] text-[12px] font-bold uppercase tracking-[0.1em] ${
                  specIndex === 0
                    ? 'border border-[#111111] bg-[#111111] text-[#ffffff]'
                    : 'border border-[#e5e7eb] bg-[#f8fafc] text-[#111111]'
                }`}
              >
                <span className={specIndex === 0 ? 'text-[#f26522]' : 'text-[#9ca3af]'}>{spec.label}:</span>
                {spec.value}
              </span>
            ))}
          </div>

          {/* Right: Arrow */}
          <div className="hidden shrink-0 items-center md:flex">
            <span className="font-[var(--font-barlow-condensed)] text-2xl text-[#d1d5db] transition-colors duration-200 group-hover:text-[#f26522]">
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export function MachineCatalogueSection({
  initialCategory,
  introLabel,
  title,
  description,
  sectionId,
  showStats = false,
}: MachineCatalogueSectionProps) {
  const [activeCategory, setActiveCategory] = useState(getSafeCategory(initialCategory))

  useEffect(() => {
    setActiveCategory(getSafeCategory(initialCategory))
  }, [initialCategory])

  const deferredCategory = useDeferredValue(activeCategory)

  const visibleMachines = useMemo(
    () =>
      deferredCategory === 'all'
        ? data.machines
        : data.machines.filter((machine) => machine.category === deferredCategory),
    [deferredCategory],
  )

  return (
    <section id={sectionId} className="mx-auto max-w-7xl space-y-10 px-6 py-24 md:px-8">
      <div className="text-left">
        <span className="font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
          {'// '}
          {introLabel}
        </span>
        <h2 className="mt-4 font-[var(--font-barlow-condensed)] text-5xl font-black uppercase tracking-[-0.05em] text-[#111111] md:text-6xl lg:text-7xl">
          {title}
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-[#4b5563] md:text-xl md:leading-[1.8]">
          {description}
        </p>
      </div>

      {showStats ? (
        <div className="grid w-full grid-cols-2 border-2 border-[#111111] bg-white md:grid-cols-4">
          {[
            { value: `${data.machines.length}+`, label: 'Models Available' },
            { value: '5m', label: 'Max Width' },
            { value: '400+', label: 'm²/h Speed' },
            { value: 'UV LED', label: 'Curing Tech' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative flex min-h-[150px] flex-col items-start justify-end overflow-hidden border-[#111111] p-6 odd:border-r-2 md:min-h-[180px] md:p-8 md:[&:not(:last-child)]:border-r-2"
            >
              <div className="absolute left-0 top-0 h-10 w-1 bg-[#f26522]" />
              <span className="font-[var(--font-barlow-condensed)] text-[2.3rem] font-black leading-none md:text-[2.9rem]">
                {stat.value}
              </span>
              <span className="mt-3 font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
                {'// '}
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-4">
        {filterOptions.map((option) => {
          const isActive = activeCategory === option.id

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                startTransition(() => {
                  setActiveCategory(option.id)
                })
              }}
              className={`border-2 px-4 py-2.5 font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${
                isActive
                  ? 'border-[#f26522] bg-[#f26522] text-white'
                  : 'border-[#111111] bg-white text-[#111111] hover:bg-[#111111] hover:text-white'
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>

      <div className="border-t-2 border-[#111111]">
        {visibleMachines.map((machine, index) => (
          <ListingRow key={machine.id} machine={machine} index={index} />
        ))}
      </div>
    </section>
  )
}
