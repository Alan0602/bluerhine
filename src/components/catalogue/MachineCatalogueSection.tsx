'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

import { SpecTable } from '@/components/catalogue/SpecTable'
import { SpeedTable } from '@/components/catalogue/SpeedTable'
import { SalesQA } from '@/components/catalogue/SalesQA'
import { data } from '@/lib/utils'

import './MachineList.css'

type MachineCatalogueSectionProps = {
  initialCategory?: string
  introLabel: string
  title: string
  description: string
  sectionId?: string
}

export function MachineCatalogueSection({
  initialCategory = 'all',
  introLabel,
  title,
  description,
  sectionId,
}: MachineCatalogueSectionProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [activeMachineId, setActiveMachineId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>({})

  // Modal state
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMachineId, setModalMachineId] = useState<string | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  useEffect(() => {
    setActiveCategory(initialCategory)
  }, [initialCategory])

  const categories = useMemo(() => {
    const cats = data.categories.map(c => ({ id: c.id, label: c.label }))
    return [{ id: 'all', label: 'All Models' }, ...cats]
  }, [])

  // Category counts for the dropdown
  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = {}
    data.machines.forEach(m => {
      map[m.category] = (map[m.category] || 0) + 1
    })
    return map
  }, [])

  const filteredMachines = useMemo(() => {
    if (activeMachineId) return data.machines.filter(m => m.id === activeMachineId)
    if (activeCategory === 'all') return data.machines
    return data.machines.filter(m => m.category === activeCategory)
  }, [activeCategory, activeMachineId])

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handleDropdownChange = (value: string) => {
    if (value === 'all') {
      setActiveMachineId(null)
      setActiveCategory('all')
    } else if (value.startsWith('cat:')) {
      setActiveMachineId(null)
      setActiveCategory(value.replace('cat:', ''))
    } else if (value.startsWith('name:')) {
      const slug = value.replace('name:', '')
      const machine = data.machines.find(m => m.slug === slug)
      if (machine) {
        setActiveMachineId(machine.id)
        setActiveCategory('all')
        setExpandedId(machine.id)
      }
    }
  }

  const getActiveTab = (machineId: string) => activeTabs[machineId] || 'overview'

  const setTab = (machineId: string, tab: string) => {
    setActiveTabs(prev => ({ ...prev, [machineId]: tab }))
  }

  const openModal = (machineId: string, photoIndex: number) => {
    setModalMachineId(machineId)
    setCurrentPhotoIndex(photoIndex)
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalMachineId(null)
    document.body.style.overflow = 'auto'
  }

  const modalMachine = useMemo(() => {
    if (!modalMachineId) return null
    return data.machines.find(m => m.id === modalMachineId)
  }, [modalMachineId])

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'specs', label: 'Specifications' },
    { id: 'materials', label: 'Materials' },
    { id: 'insights', label: 'Sales Insights' },
  ]

  return (
    <section id={sectionId} className="m-container py-24 md:py-32">
      <div className="m-header">
        <span className="section-label">
          {introLabel}
        </span>
        <h2 className="mt-4 font-manrope text-4xl font-semibold tracking-tight text-on-background md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mt-6 max-w-4xl font-manrope text-lg leading-relaxed text-on-surface md:text-xl">
          {description}
        </p>
      </div>

      <div className="m-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`font-manrope px-6 py-2 rounded-sm border transition-all duration-200 ease-in-out text-sm font-semibold tracking-wide ${
              !activeMachineId && activeCategory === cat.id 
                ? 'bg-primary-container border-primary-container text-white ambient-shadow-light' 
                : 'bg-surface border-[rgba(37,61,78,0.15)] text-on-surface hover:border-primary-container hover:text-primary-container'
            }`}
            onClick={() => {
              setActiveMachineId(null)
              setActiveCategory(cat.id)
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="fdr-wrap">
        <select
          className="fdr-sel"
          onChange={(e) => handleDropdownChange(e.target.value)}
          value={
            activeMachineId
              ? `name:${data.machines.find(m => m.id === activeMachineId)?.slug || ''}`
              : activeCategory === 'all'
              ? 'all'
              : `cat:${activeCategory}`
          }
        >
          <option value="all">All Machines ({data.machines.length})</option>

          <optgroup label="Filter by Category">
            {data.categories.map((cat) => (
              <option key={cat.id} value={`cat:${cat.id}`}>
                {cat.label} · {categoryCounts[cat.id] || 0} machine{(categoryCounts[cat.id] || 0) !== 1 ? 's' : ''}
              </option>
            ))}
          </optgroup>

          <optgroup label="Filter by Machine">
            {data.machines.map((machine) => (
              <option key={machine.id} value={`name:${machine.slug}`}>
                {machine.fullName}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className="m-list">
        {filteredMachines.map((machine, index) => {
          const isExpanded = expandedId === machine.id
          const activeTab = getActiveTab(machine.id)
          const categoryLabel = data.categories.find(c => c.id === machine.category)?.label || machine.category
          const visibleTabs = tabs.filter((t) => {
            if (t.id === 'insights') return machine.salesInsights && machine.salesInsights.length > 0
            if (t.id === 'materials') return machine.applicableMaterials && machine.applicableMaterials.length > 0
            if (t.id === 'features') return machine.keyFeatures && machine.keyFeatures.length > 0
            return true
          })

          return (
            <div key={machine.id} className={`m-item ${isExpanded ? 'expanded' : ''}`}>
              <div className="m-summary" onClick={() => toggleExpand(machine.id)}>
                <div className="m-index">{(index + 1).toString().padStart(2, '0')}</div>
                <div className="m-title-area">
                  <div className="mitem-brand">{machine.brand}</div>
                  <div className="mitem-name">{machine.fullName}</div>
                  <div className="mitem-tagline">{machine.subtitle}</div>
                </div>
                <div className="m-spec-pills">
                  {machine.keySpecs.slice(0, 3).map((spec) => (
                    <span key={spec.label} className="spec-pill">{spec.value}</span>
                  ))}
                </div>
                <div className="cat-badge">{categoryLabel}</div>
                <div className="m-chevron">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              <div className="m-content">
                <div className="c-inner">
                  <div className="c-tabs">
                    {visibleTabs.map((t) => (
                      <div
                        key={t.id}
                        className={`c-tab ${activeTab === t.id ? 'active' : ''}`}
                        onClick={() => setTab(machine.id, t.id)}
                      >
                        {t.label}
                      </div>
                    ))}
                  </div>
                  {/* ── Overview Tab ─────────────────────────── */}
                  <div className={`tab-panel ${activeTab === 'overview' ? 'active' : ''}`}>
                    <div className="overview-standalone">
                      {/* Full-width Diagram Block */}
                      {machine.image && (
                        <div className="diagram-block">
                          <Image 
                            src={machine.image} 
                            alt={machine.fullName} 
                            fill 
                            className="object-contain p-12 mix-blend-darken" 
                            sizes="100vw"
                          />
                          {machine.components?.slice(0, 8).filter(c => c.pin).map((comp) => (
                            <div
                              key={`${comp.number}-${comp.name}`}
                              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                              style={{ left: `${comp.pin?.x}%`, top: `${comp.pin?.y}%` }}
                            >
                              <div className="relative">
                                {/* Pulse Effect */}
                                <div className="absolute inset-0 rounded-sm bg-secondary/50 animate-ping"></div>
                                
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-sm bg-secondary font-manrope text-xs font-black text-white shadow-[0_0_20px_rgba(250,110,53,0.4)] ring-2 ring-white cursor-pointer hover:scale-110 hover:rotate-3 transition-all duration-300">
                                  {comp.number}
                                </div>
                                
                                {/* Label Tooltip */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-2 bg-primary text-white text-[10px] font-bold uppercase tracking-tighter rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-2xl">
                                  {comp.name}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Expanded Edge-to-Edge Content Below */}
                      <div className="overview-content-edge">
                        <div className="content-main">
                          <div className="section-label text-secondary">Operational Brief</div>
                          <div className="m-desc text-xl leading-relaxed font-medium">{machine.overview}</div>
                          <div className="tag-cloud mt-6">
                            {machine.tags.map(tag => <span key={tag} className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold text-primary tracking-wide">#{tag}</span>)}
                          </div>
                        </div>

                        {/* Technical Core Grid */}
                        <div className="technical-core">
                          <div className="section-label">Technical Core</div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            {machine.keySpecs.slice(0, 4).map((spec, si) => (
                              <div
                                key={spec.label}
                                className="p-8 bg-surface-container-low rounded-lg border border-transparent hover:border-secondary/20 transition-colors"
                              >
                                <div className="font-manrope text-[10px] font-bold uppercase tracking-widest text-secondary mb-2">
                                  {spec.label}
                                </div>
                                <div className="font-manrope text-2xl font-extrabold tracking-tight text-primary">
                                  {spec.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component list below diagram */}
                    {machine.components && machine.components.length > 0 && (
                      <div className="mt-12">
                        <div className="mb-6 font-manrope text-[11px] font-bold uppercase tracking-widest text-primary-container">
                          Component Breakdown
                        </div>
                        <div className="component-list">
                          {machine.components.slice(0, 8).map((comp, i) => (
                            <div key={i} className="ci">
                              <span className="ci-num">{i + 1}</span>
                              {comp.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── Features Tab ─────────────────────────── */}
                  <div className={`tab-panel ${activeTab === 'features' ? 'active' : ''}`}>
                    <div className="feature-grid">
                      {machine.keyFeatures?.map((f, i) => (
                        <div key={i} className="fc">
                          <h4>{f.title}</h4>
                          <p>{f.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── Specs Tab ────────────────────────────── */}
                  <div className={`tab-panel ${activeTab === 'specs' ? 'active' : ''}`}>
                    <SpecTable specs={machine.specifications} />
                    {machine.printingSpeed && (
                      <div className="mt-8">
                        <SpeedTable printingSpeed={machine.printingSpeed} />
                      </div>
                    )}
                  </div>

                  {/* ── Materials Tab ────────────────────────── */}
                  <div className={`tab-panel ${activeTab === 'materials' ? 'active' : ''}`}>
                    <div className="mb-4">
                      <p className="mb-8 max-w-2xl font-manrope text-base leading-relaxed text-on-surface">
                        This machine supports a wide range of substrates and materials for diverse production needs.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {machine.applicableMaterials?.map((material, mi) => (
                          <div
                            key={material}
                            className="group flex items-center gap-4 bg-surface px-6 py-4 transition-all duration-200 ease-in-out hover:bg-primary-container hover:text-white rounded-sm border border-[rgba(37,61,78,0.05)]"
                          >
                            <span className="font-manrope text-xs font-bold text-primary-container transition-colors group-hover:text-secondary-container">
                              {String(mi + 1).padStart(2, '0')}
                            </span>
                            <span className="font-manrope text-sm font-bold uppercase tracking-wider text-on-background group-hover:text-white">
                              {material}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── Sales Insights Tab ───────────────────── */}
                  <div className={`tab-panel ${activeTab === 'insights' ? 'active' : ''}`}>
                    <div className="max-w-4xl">
                      <SalesQA items={machine.salesInsights} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal */}
      {modalOpen && modalMachine && (
        <div className="modal-backdrop active" onClick={closeModal}>
          <div className="modal-close" onClick={closeModal}>×</div>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <div className="main-photo-view">
              <Image 
                src={modalMachine.photos?.[currentPhotoIndex]?.url || modalMachine.image || '/placeholder.jpg'} 
                alt={modalMachine.photos?.[currentPhotoIndex]?.label || 'Machine'}
                fill
                className="object-contain"
              />
              <div className="photo-caption">
                <h3>{modalMachine.photos?.[currentPhotoIndex]?.label || modalMachine.fullName}</h3>
                <p>{modalMachine.photos?.[currentPhotoIndex]?.caption || ''}</p>
              </div>
            </div>
            <div className="modal-thumbs">
              {modalMachine.photos?.map((photo, i) => (
                <div 
                  key={i} 
                  className={`modal-thumb ${currentPhotoIndex === i ? 'active' : ''}`}
                  onClick={() => setCurrentPhotoIndex(i)}
                >
                  <Image src={photo.url || modalMachine.image || '/placeholder.jpg'} alt={photo.label} width={80} height={60} className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
