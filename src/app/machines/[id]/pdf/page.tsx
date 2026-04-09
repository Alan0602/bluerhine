'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { data } from '@/lib/utils'

// Lazy load react-pdf because it doesn't support SSR
const PDFViewer = dynamic(() => import('@/app/machines/[id]/pdf/PDFViewer'), { 
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <p className="text-sm font-manrope font-bold uppercase tracking-widest text-primary/60">Initialising Viewer...</p>
    </div>
  )
})

export default function MachinePDFPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string

  const machine = useMemo(() => {
    return data.machines.find(m => m.id === id)
  }, [id])

  // Redirect if machine or PDF is missing
  useEffect(() => {
    if (!machine || !machine.pdf) {
      router.replace('/machines')
    }
  }, [machine, router])

  if (!machine || !machine.pdf) return null

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-surface-container px-4 py-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-primary font-manrope font-bold uppercase text-[10px] tracking-widest hover:text-secondary transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>
          
          <h1 className="flex-1 text-center font-manrope text-sm sm:text-base font-extrabold tracking-tight text-primary truncate px-4">
            {machine.fullName} — Brochure
          </h1>
          
          <div className="w-[60px] hidden sm:block"></div> {/* Spacer for symmetry */}
        </div>
      </header>

      {/* PDF Content Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-8">
        <div className="max-w-[960px] mx-auto">
          <PDFViewer pdfUrl={machine.pdf} />
        </div>
      </main>
    </div>
  )
}
