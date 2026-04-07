'use client'

import { useState } from 'react'

import type { SalesInsight } from '@/lib/types'
import { cn } from '@/lib/utils'

type SalesQAProps = {
  items: SalesInsight[]
}

export function SalesQA({ items }: SalesQAProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="space-y-4">
      <div className="mt-6 space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div key={item.q} className={cn(
              "bg-surface-lowest transition-all duration-300 ease-in-out border-b border-[rgba(37,61,78,0.1)]",
              isOpen ? "ambient-shadow-light border-b-transparent" : "hover:bg-surface"
            )}>
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors duration-200 ease-in-out"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <h4 className="font-manrope text-base font-semibold tracking-tight text-on-background md:text-lg">
                  {item.q}
                </h4>
                <span
                  className={cn(
                    'text-xl font-bold text-primary-container transition-transform duration-300 ease-in-out',
                    isOpen && 'rotate-180 text-secondary-container',
                  )}
                >
                  ↓
                </span>
              </button>
              <div
                className={cn(
                  'overflow-hidden px-6 transition-all duration-500 ease-in-out',
                  isOpen ? 'max-h-[1000px] pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0',
                )}
              >
                <p className="font-manrope text-base leading-relaxed text-on-surface">{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
