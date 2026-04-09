'use client'

import { useState, useLayoutEffect, useMemo } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Explicitly set worker source
const workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

interface PDFViewerProps {
  pdfUrl: string
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  // Memoize options to prevent unnecessary re-renders
  const options = useMemo(() => ({
    standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
  }), [])

  // Ensure worker is set before rendering
  useLayoutEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = workerSrc
  }, [])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center select-none pb-20">
      {/* Document Viewer */}
      <div className="w-full relative min-h-[500px]">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-low z-10 space-y-4 rounded-sm border border-surface-container">
            <div className="w-10 h-10 border-4 border-primary/10 border-t-primary rounded-full animate-spin"></div>
            <p className="text-[10px] font-manrope font-bold uppercase tracking-widest text-primary/40">Loading Document...</p>
          </div>
        )}

        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={null}
          options={options}
          className="flex flex-col items-center gap-8"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`} className="bg-white shadow-2xl rounded-sm overflow-hidden border border-surface-container">
              <Page
                pageNumber={index + 1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                width={Math.min(window.innerWidth - 64, 960)}
                className="shadow-xl"
              />
            </div>
          ))}
        </Document>
      </div>

      {/* Footer Info */}
      {!loading && numPages > 0 && (
        <div className="mt-12 bg-primary/5 px-6 py-2 rounded-full border border-primary/10">
          <p className="font-manrope font-bold uppercase text-[9px] tracking-widest text-primary/60">
            End of <span className="text-secondary">{numPages}</span> Page Brochure
          </p>
        </div>
      )}
    </div>
  )
}
