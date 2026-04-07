import Image from 'next/image'

export function BrandOverview() {
  return (
    <section id="about" className="py-24 bg-surface border-t border-surface-container">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-primary text-4xl font-extrabold tracking-tight mb-6">
              Elite Partnerships, <br />Global Standards.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Blue Rhine stands as the exclusive distributor for industry giants{' '}
              <span className="text-primary font-bold">JHF</span> and{' '}
              <span className="text-primary font-bold">Dlican</span> across the GCC. We bridge the
              gap between world-class engineering and local production needs, providing unparalleled
              technical support and supply chain reliability.
            </p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-8 items-center justify-items-center opacity-80">
            <div className="h-20 flex items-center justify-center p-4 bg-surface-container rounded-xl w-full">
              <span className="text-2xl font-black text-primary opacity-40 tracking-tight">JHF</span>
            </div>
            <div className="h-20 flex items-center justify-center p-4 bg-surface-container rounded-xl w-full">
              <span className="text-2xl font-black text-primary opacity-40 tracking-tight">DLICAN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
