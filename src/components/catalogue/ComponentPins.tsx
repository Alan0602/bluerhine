import type { Component } from '@/lib/types'
import Image from 'next/image'

type ComponentPinsProps = {
  components: Component[]
  image?: string | null
  machineName?: string
}

export function ComponentPins({ components, image, machineName = 'Machine' }: ComponentPinsProps) {
  const visibleComponents = components.slice(0, 8)
  const hasPinnedDiagram = visibleComponents.some((component) => component.pin)

  return (
    <section className="space-y-8">
      {hasPinnedDiagram ? (
        <div className="relative hidden overflow-hidden border-2 border-[#253d4e] bg-[#F4F6FA] p-12 md:block">
          <div className="relative flex h-[520px] w-full items-center justify-center border border-[#253d4e] bg-[linear-gradient(135deg,#f9fafb_0%,#E8ECF2_100%)]">
            {image && (
              <Image
                src={image}
                alt={machineName}
                fill
                className="object-contain p-8 opacity-90 mix-blend-multiply"
                sizes="(min-width: 768px) 1000px, 100vw"
              />
            )}
            {visibleComponents
              .filter((component) => component.pin)
              .map((component) => (
                <div
                  key={`${component.number}-${component.name}`}
                  className="group absolute z-10"
                  style={{ left: `${component.pin?.x}%`, top: `${component.pin?.y}%` }}
                >
                  <div className="flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#104c8c] font-[var(--font-barlow-condensed)] text-sm font-bold text-[#ffffff] shadow-md ring-2 ring-white cursor-pointer hover:scale-110 transition-transform">
                    {component.number}
                  </div>
                  <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap border border-[#253d4e] bg-[#ffffff] px-3 py-2 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.16em] text-[#253d4e] shadow-lg group-hover:block">
                    {component.name}
                  </div>
                </div>
              ))}
          </div>
          <div className="absolute right-4 top-4 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#B0BAC9]">
            Machine Diagram View
          </div>
        </div>
      ) : null}

      <div className="space-y-3">
        {visibleComponents.map((component) => (
          <div
            key={`${component.number}-${component.name}`}
            className="flex items-center gap-6 border-b border-dashed border-[#D0D6E0] py-3 last:border-b-0"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#253d4e] font-[var(--font-barlow-condensed)] text-base font-bold text-[#104c8c] transition-colors duration-200 ease-in-out hover:bg-[#253d4e] hover:text-[#ffffff]">
              {String(component.number).padStart(2, '0')}
            </div>
            <div className="flex flex-col">
              <span className="font-[var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.18em] text-[#253d4e]">
                {component.name}
              </span>
              <p className="text-base leading-7 text-[#6B7A93]">
                {component.pin ? `X ${component.pin.x} / Y ${component.pin.y}` : 'Component position available on request'}
              </p>
            </div>
            <span className="ml-auto text-[#D0D6E0]">→</span>
          </div>
        ))}
      </div>
    </section>
  )
}
