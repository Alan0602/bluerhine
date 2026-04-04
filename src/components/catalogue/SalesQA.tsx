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
            <div key={item.q} className="border-2 border-[#111111] bg-[#ffffff] transition-colors duration-200 ease-in-out">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-200 ease-in-out hover:bg-[#f8fafc]"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <h4 className="font-[var(--font-barlow-condensed)] text-base font-black uppercase tracking-[0.02em] text-[#111111] md:text-lg">
                  {item.q}
                </h4>
                <span
                  className={cn(
                    'text-2xl font-black text-[#f26522] transition-transform duration-300 ease-in-out',
                    isOpen && 'rotate-180',
                  )}
                >
                  ˅
                </span>
              </button>
              <div
                className={cn(
                  'overflow-hidden px-6 transition-all duration-500 ease-in-out',
                  isOpen ? 'max-h-[1000px] pb-8' : 'max-h-0 pb-0',
                )}
              >
                <p className="text-sm leading-7 text-[#6b7280]">{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
