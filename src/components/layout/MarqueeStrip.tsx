type MarqueeStripProps = {
  items: string[]
  speed?: number
}

export function MarqueeStrip({ items, speed = 30 }: MarqueeStripProps) {
  const loopItems = [...items, ...items]

  return (
    <div className="overflow-hidden bg-primary py-4">
      <div
        className="flex min-w-max items-center"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {loopItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-6 font-manrope text-xs font-bold uppercase tracking-[0.2em] text-white">
              {item}
            </span>
            <span
              aria-hidden="true"
              className="mx-4 inline-block h-1 w-1 rounded-full bg-secondary-container"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
