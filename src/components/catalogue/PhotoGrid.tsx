type PhotoGridProps = {
  images: string[]
  title: string
}

export function PhotoGrid({ images, title }: PhotoGridProps) {
  const placeholders = images.length > 0 ? images : ['Machine Front', 'Machine Detail', 'Workflow', 'Output']

  return (
    <section>
      <h2 className="mb-12 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]">
        {'// '}
        {title}
      </h2>
      <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:grid-cols-10 md:auto-rows-[180px]">
        {placeholders.slice(0, 5).map((image, index) => {
          const layoutClasses = [
            'col-span-2 md:col-span-6 md:row-span-2',
            'col-span-2 md:col-span-4 md:row-span-2',
            'col-span-1 md:col-span-3 md:row-span-1',
            'col-span-1 md:col-span-4 md:row-span-1',
            'col-span-2 md:col-span-3 md:row-span-1',
          ]

          return (
            <div
              key={`${image}-${index}`}
              className={`${layoutClasses[index] ?? 'col-span-1'} group relative overflow-hidden border border-[#e5e7eb] bg-[#f3f4f6]`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#111111_0%,#4b5563_100%)] opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 border border-[#111111] bg-[#ffffff] px-3 py-1 font-[var(--font-barlow-condensed)] text-[10px] font-black uppercase tracking-[0.18em] text-[#111111]">
                {image}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
