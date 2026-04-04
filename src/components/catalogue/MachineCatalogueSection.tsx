'use client'

import Image from 'next/image'
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
type CatalogueTabId = 'overview' | 'features' | 'materials' | 'applications'

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

function getBadgeValues(machine: MachineRecord) {
  return machine.keySpecs.slice(0, 2).map((spec) => spec.value.toUpperCase())
}

function getOverviewStats(machine: MachineRecord) {
  const summarySpecs = machine.keySpecs.slice(0, 4)
  if (summarySpecs.length > 0) {
    return summarySpecs
  }

  return machine.specifications.slice(0, 4).map((spec) => ({
    label: spec.param,
    value: spec.value,
  }))
}

function getCategoryPill(machine: MachineRecord) {
  const categoryLabel = categoryLabels.get(machine.category) ?? machine.category
  if (machine.category === 'hybrid') return `${categoryLabel.toUpperCase()} SYSTEM`
  if (machine.category === 'roll') return `${categoryLabel.toUpperCase()}`
  if (machine.category === 'laser') return 'LASER CUTTING'
  return `${categoryLabel.toUpperCase()} PLATFORM`
}

function getCategoryBadgeClass(machine: MachineRecord, reverseLayout: boolean) {
  if (machine.category === 'laser') return 'bg-orange-600/85'
  if (machine.category === 'roll') return 'bg-cyan-600/85'
  if (machine.category === 'uv-flatbed') return 'bg-emerald-600/85'
  return reverseLayout ? 'bg-cyan-600/85' : 'bg-indigo-600/85'
}

function getDefaultTab(machine: MachineRecord): CatalogueTabId {
  if (machine.overview) return 'overview'
  if (machine.keyFeatures.length > 0) return 'features'
  if (machine.applicableMaterials.length > 0) return 'materials'
  return 'applications'
}

function getTabItems(machine: MachineRecord) {
  return [
    {
      id: 'overview' as const,
      label: 'Overview',
      enabled: Boolean(machine.overview),
    },
    {
      id: 'features' as const,
      label: 'Features',
      enabled: machine.keyFeatures.length > 0,
    },
    {
      id: 'materials' as const,
      label: 'Materials',
      enabled: machine.applicableMaterials.length > 0,
    },
    {
      id: 'applications' as const,
      label: 'Applications',
      enabled: machine.useCases.length > 0,
    },
  ]
}

function CatalogueCard({ machine, index }: { machine: MachineRecord; index: number }) {
  const reverseLayout = index % 2 === 1
  const overviewStats = getOverviewStats(machine)
  const badgeValues = getBadgeValues(machine)
  const tabItems = getTabItems(machine)
  const [activeTab, setActiveTab] = useState<CatalogueTabId>(getDefaultTab(machine))

  useEffect(() => {
    setActiveTab(getDefaultTab(machine))
  }, [machine])

  return (
    <article className="group relative overflow-hidden border-2 border-[#111111] bg-white">
      <div className="absolute right-4 top-4 z-20 font-[var(--font-space-grotesk)] text-[10px] font-bold text-zinc-400">
        {buildReferenceLabel(machine.model, index)}
      </div>

      <div className={`flex flex-col ${reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div
          className={`relative h-[450px] bg-zinc-50 ${reverseLayout ? 'lg:w-1/2 lg:border-l-2' : 'lg:w-1/2 lg:border-r-2'} border-[#111111]`}
        >
          <div
            className="absolute inset-0"
            style={{
              background: machine.headerGradient,
            }}
          />

          {machine.image ? (
            <Image
              src={machine.image}
              alt={machine.fullName}
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          ) : null}

          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

          <div
            className={`absolute top-6 ${reverseLayout ? 'right-6' : 'left-6'} ${getCategoryBadgeClass(machine, reverseLayout)} px-4 py-2 font-[var(--font-space-grotesk)] text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md`}
          >
            {`// ${getCategoryPill(machine)}`}
          </div>

          <div className={`absolute bottom-6 ${reverseLayout ? 'right-6 text-right' : 'left-6'}`}>
            <h3 className="pointer-events-none select-none font-[var(--font-space-grotesk)] text-7xl font-black uppercase text-zinc-900/10 md:text-8xl">
              {machine.model}
            </h3>
            <div className={`mt-[-32px] flex gap-2 ${reverseLayout ? 'justify-end' : ''}`}>
              {badgeValues.map((badge) => (
                <span
                  key={`${machine.id}-${badge}`}
                  className="bg-zinc-900 px-3 py-1 font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-widest text-white"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex lg:w-1/2 flex-col">
          <div className="flex border-b-2 border-[#111111]">
            {tabItems.map((tab, tabIndex) => {
              const isActive = activeTab === tab.id

              return (
                <button
                  key={`${machine.id}-${tab.id}`}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  disabled={!tab.enabled}
                  className={`flex-1 px-4 py-4 font-[var(--font-space-grotesk)] text-[10px] font-black uppercase tracking-widest transition-colors ${
                    isActive
                      ? 'bg-zinc-900 text-white'
                      : 'bg-white text-[#111111] hover:bg-zinc-100'
                  } ${tabIndex > 0 ? 'border-l-2 border-[#111111]' : ''} ${!tab.enabled ? 'cursor-not-allowed text-zinc-300 hover:bg-white' : ''}`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex-1 p-8">
              {activeTab === 'overview' ? (
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  <div>
                    <h4 className="mb-4 font-[var(--font-space-grotesk)] text-2xl font-bold uppercase text-[#111111]">
                      {machine.fullName}
                    </h4>
                    <p className="mb-6 font-[var(--font-inter)] text-sm leading-relaxed text-[#5f5e5e]">
                      {machine.overview}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {machine.tags.slice(0, 3).map((tag) => (
                        <span
                          key={`${machine.id}-${tag}`}
                          className="border border-[#f26522] px-2 py-1 font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase text-[#f26522]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border border-zinc-900/10 bg-zinc-50 p-6">
                    <div className="space-y-4">
                      {overviewStats.map((spec, specIndex) => (
                        <div
                          key={`${machine.id}-${spec.label}`}
                          className={`flex items-center justify-between gap-4 ${
                            specIndex < overviewStats.length - 1 ? 'border-b border-zinc-200 pb-2' : ''
                          }`}
                        >
                          <span className="font-[var(--font-space-grotesk)] text-[10px] font-black uppercase">
                            {spec.label}
                          </span>
                          <span className="text-right font-[var(--font-space-grotesk)] text-sm font-bold text-[#111111]">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {activeTab === 'features' ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {machine.keyFeatures.slice(0, 4).map((feature, featureIndex) => (
                    <div key={`${machine.id}-${feature.title}`} className="border border-zinc-900/10 bg-zinc-50 p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-[var(--font-space-grotesk)] text-2xl font-black uppercase text-[#f26522]">
                          0{featureIndex + 1}
                        </span>
                        <span className="font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                          Feature
                        </span>
                      </div>
                      <h5 className="mb-3 font-[var(--font-space-grotesk)] text-lg font-bold uppercase text-[#111111]">
                        {feature.title}
                      </h5>
                      <p className="font-[var(--font-inter)] text-sm leading-relaxed text-[#5f5e5e]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {activeTab === 'materials' ? (
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr]">
                  <div>
                    <h4 className="mb-4 font-[var(--font-space-grotesk)] text-2xl font-bold uppercase text-[#111111]">
                      Materials Compatibility
                    </h4>
                    <p className="mb-6 font-[var(--font-inter)] text-sm leading-relaxed text-[#5f5e5e]">
                      Built to handle production-ready substrates with the stability and consistency required for
                      commercial output.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {machine.applicableMaterials.map((material) => (
                        <span
                          key={`${machine.id}-${material}`}
                          className="border border-[#111111] bg-white px-4 py-3 font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.16em] text-[#111111]"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border border-zinc-900/10 bg-zinc-50 p-6">
                    <div className="mb-4 font-[var(--font-space-grotesk)] text-[10px] font-black uppercase tracking-[0.18em] text-[#f26522]">
                      {'// Supported Scope'}
                    </div>
                    <div className="space-y-4">
                      {machine.specifications.slice(0, 4).map((spec, specIndex) => (
                        <div
                          key={`${machine.id}-material-spec-${spec.param}`}
                          className={`${specIndex < 3 ? 'border-b border-zinc-200 pb-3' : ''}`}
                        >
                          <div className="font-[var(--font-space-grotesk)] text-[10px] font-black uppercase text-[#111111]">
                            {spec.param}
                          </div>
                          <div className="mt-1 font-[var(--font-inter)] text-sm text-[#5f5e5e]">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {activeTab === 'applications' ? (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {machine.useCases.map((useCase) => (
                    <div
                      key={`${machine.id}-${useCase.label}`}
                      className="flex min-h-28 flex-col justify-between border border-zinc-900/10 bg-zinc-50 p-5"
                    >
                      <span className="text-2xl">{useCase.emoji}</span>
                      <div>
                        <div className="mb-1 font-[var(--font-space-grotesk)] text-[10px] font-black uppercase tracking-[0.18em] text-[#f26522]">
                          {'// Application'}
                        </div>
                        <div className="font-[var(--font-space-grotesk)] text-sm font-bold uppercase text-[#111111]">
                          {useCase.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="mt-auto flex flex-col gap-5 border-t border-zinc-100 p-8 pt-0 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {machine.useCases.slice(0, 3).map((useCase) => (
                  <span
                    key={`${machine.id}-${useCase.label}`}
                    className="bg-zinc-100 px-3 py-1 font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-tight text-[#111111]"
                  >
                    {`${useCase.label} ${useCase.emoji}`}
                  </span>
                ))}
              </div>

              <Link
                href={`/machines/${machine.slug}`}
                className={`inline-flex items-center justify-center border-2 border-[#111111] px-6 py-3 font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-widest transition-all ${
                  reverseLayout
                    ? 'bg-white text-[#111111] hover:bg-[#111111] hover:text-white'
                    : 'bg-[#f26522] text-white hover:bg-zinc-900'
                }`}
              >
                View Machine Details
              </Link>
            </div>
          </div>
        </div>
      </div>
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
    <section id={sectionId} className="mx-auto max-w-7xl space-y-10 px-6 py-24">
      <div className="text-left">
        <span className="font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
          {'// '}
          {introLabel}
        </span>
        <h2 className="mt-4 font-[var(--font-space-grotesk)] text-5xl font-bold uppercase tracking-[-0.05em] text-[#111111] md:text-7xl">
          {title}
        </h2>
        <p className="mt-5 max-w-3xl font-[var(--font-inter)] text-base leading-7 text-[#5f5e5e]">{description}</p>
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
              className="relative flex flex-col items-start overflow-hidden border-[#111111] p-8 odd:border-r-2 md:[&:not(:last-child)]:border-r-2"
            >
              <div className="absolute left-0 top-0 h-8 w-1 bg-[#f26522]" />
              <span className="font-[var(--font-space-grotesk)] text-4xl font-black">{stat.value}</span>
              <span className="mt-2 font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#f26522]">
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
              className={`border-2 px-4 py-2 font-[var(--font-space-grotesk)] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
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

      <div className="space-y-12">
        {visibleMachines.map((machine, index) => (
          <CatalogueCard key={machine.id} machine={machine} index={index} />
        ))}
      </div>
    </section>
  )
}
