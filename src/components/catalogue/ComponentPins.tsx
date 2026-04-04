import type { Component } from '@/lib/types'

type ComponentPinsProps = {
  components: Component[]
}

export function ComponentPins({ components }: ComponentPinsProps) {
  const visibleComponents = components.slice(0, 8)
  const hasPinnedDiagram = visibleComponents.some((component) => component.pin)

  return (
    <section className="space-y-8">
      {hasPinnedDiagram ? (
        <div className="relative hidden overflow-hidden border-2 border-[#111111] bg-[#f8fafc] p-12 md:block">
          <div className="relative h-[520px] w-full border border-[#111111] bg-[linear-gradient(135deg,#f9fafb_0%,#e5e7eb_100%)]">
            {visibleComponents
              .filter((component) => component.pin)
              .map((component) => (
                <div
                  key={`${component.number}-${component.name}`}
                  className="group absolute"
                  style={{ left: `${component.pin?.x}%`, top: `${component.pin?.y}%` }}
                >
                  <div className="flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#f26522] font-[var(--font-barlow-condensed)] text-sm font-bold text-[#ffffff]">
                    {component.number}
                  </div>
                  <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 whitespace-nowrap border border-[#111111] bg-[#ffffff] px-3 py-2 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.16em] text-[#111111] group-hover:block">
                    {component.name}
                  </div>
                </div>
              ))}
          </div>
          <div className="absolute right-4 top-4 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#9ca3af]">
            Machine Diagram View
          </div>
        </div>
      ) : null}

      <div className="space-y-3">
        {visibleComponents.map((component) => (
          <div
            key={`${component.number}-${component.name}`}
            className="flex items-center gap-6 border-b border-dashed border-[#d1d5db] py-3 last:border-b-0"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#111111] font-[var(--font-barlow-condensed)] text-base font-bold text-[#f26522] transition-colors duration-200 ease-in-out hover:bg-[#111111] hover:text-[#ffffff]">
              {String(component.number).padStart(2, '0')}
            </div>
            <div className="flex flex-col">
              <span className="font-[var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.18em] text-[#111111]">
                {component.name}
              </span>
              <p className="text-sm text-[#6b7280]">
                {component.pin ? `X ${component.pin.x} / Y ${component.pin.y}` : 'Component position available on request'}
              </p>
            </div>
            <span className="ml-auto text-[#d1d5db]">→</span>
          </div>
        ))}
      </div>
    </section>
  )
}
