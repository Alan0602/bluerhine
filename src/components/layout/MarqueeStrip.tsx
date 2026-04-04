type MarqueeStripProps = {
  items: string[]
  speed?: number
}

export function MarqueeStrip({ items, speed = 30 }: MarqueeStripProps) {
  const loopItems = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-[#111111] bg-[#111111] py-3">
      <div
        className="flex min-w-max items-center"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {loopItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-4 font-[var(--font-barlow-condensed)] text-[12px] font-bold uppercase tracking-[0.2em] text-[#ffffff]">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="mx-2 inline-block h-1.5 w-1.5 rotate-45 bg-[#f26522]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
