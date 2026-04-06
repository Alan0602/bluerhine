'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

import { data } from '@/lib/utils'

import './MachineList.css'

type MachineCatalogueSectionProps = {
  initialCategory?: string
  introLabel: string
  title: string
  description: string
  sectionId?: string
}

type MachineRecord = (typeof data.machines)[number]

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

  return (
    <section id={sectionId} className="m-container py-24">
      <div className="m-header">
        <span className="font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#1B2F5E]">
          {introLabel}
        </span>
        <h2 className="mt-4 font-[var(--font-barlow-condensed)] text-5xl font-black uppercase tracking-[-0.05em] text-[#111827] md:text-6xl lg:text-7xl">
          {title}
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-[#2E3A4E] md:text-xl md:leading-[1.8]">
          {description}
        </p>
      </div>

      <div className="m-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`f-btn ${
              !activeMachineId && activeCategory === cat.id ? 'active' : ''
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
                    <div 
                      className={`c-tab ${activeTab === 'overview' ? 'active' : ''}`}
                      onClick={() => setTab(machine.id, 'overview')}
                    >
                      Overview
                    </div>
                    <div 
                      className={`c-tab ${activeTab === 'features' ? 'active' : ''}`}
                      onClick={() => setTab(machine.id, 'features')}
                    >
                      Key Features
                    </div>
                    <div 
                      className={`c-tab ${activeTab === 'photos' ? 'active' : ''}`}
                      onClick={() => setTab(machine.id, 'photos')}
                    >
                      Photos
                    </div>
                    {machine.salesInsights && machine.salesInsights.length > 0 && (
                      <div 
                        className={`c-tab ${activeTab === 'insights' ? 'active' : ''}`}
                        onClick={() => setTab(machine.id, 'insights')}
                      >
                        Sales Insights
                      </div>
                    )}
                  </div>

                  {/* Overview Panel */}
                  <div className={`tab-panel ${activeTab === 'overview' ? 'active' : ''}`}>
                    <div className="overview-grid">
                      <div className="panel-left">
                        <div className="m-desc">{machine.overview}</div>
                        <div className="tag-cloud">
                          {machine.tags.map(tag => <span key={tag}>{tag}</span>)}
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
                      <div className="panel-right">
                        {machine.image && (
                          <div className="relative h-[400px] w-full">
                             <Image 
                                src={machine.image} 
                                alt={machine.fullName} 
                                fill 
                                className="object-contain" 
                                sizes="(max-width: 768px) 100vw, 40vw"
                              />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Features Panel */}
                  <div className={`tab-panel ${activeTab === 'features' ? 'active' : ''}`}>
                    <div className="feature-grid">
                      {machine.keyFeatures.map((f, i) => (
                        <div key={i} className="fc">
                          <h4>{f.title}</h4>
                          <p>{f.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Photos Panel */}
                  <div className={`tab-panel ${activeTab === 'photos' ? 'active' : ''}`}>
                    <div className="photos-grid">
                      {machine.photos.length > 0 ? (
                        machine.photos.map((photo, i) => (
                          <div key={i} className="ph-thumb" onClick={() => openModal(machine.id, i)}>
                            <div className="ph-overlay">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                              </svg>
                            </div>
                            <Image 
                              src={photo.url || machine.image || '/placeholder.jpg'} 
                              alt={photo.label}
                              width={300}
                              height={225}
                              className="object-cover"
                            />
                          </div>
                        ))
                      ) : (
                        <div className="col-span-4 py-10 text-center text-gray-400">No photos available.</div>
                      )}
                    </div>
                  </div>

                  {/* Insights Panel */}
                  <div className={`tab-panel ${activeTab === 'insights' ? 'active' : ''}`}>
                    <div className="qa-list">
                      {machine.salesInsights?.map((qa, i) => (
                        <div key={i} className="qa-item">
                          <div className="q"><span>Q.</span> {qa.q}</div>
                          <div className="a">{qa.a}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases Bar */}
                  <div className="use-cases-bar">
                    {machine.useCases.map((uc, i) => (
                      <div key={i} className="ut">
                        <div className="ut-icon">{uc.emoji}</div>
                        <div className="ut-text">{uc.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="m-cta-row">
                    <Link href={`/machines/${machine.slug}`} className="m-detail-btn">
                      View Full Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
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
                src={modalMachine.photos[currentPhotoIndex].url || modalMachine.image || '/placeholder.jpg'} 
                alt={modalMachine.photos[currentPhotoIndex].label}
                fill
                className="object-contain"
              />
              <div className="photo-caption">
                <h3>{modalMachine.photos[currentPhotoIndex].label}</h3>
                <p>{modalMachine.photos[currentPhotoIndex].caption}</p>
              </div>
            </div>
            <div className="modal-thumbs">
              {modalMachine.photos.map((photo, i) => (
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
