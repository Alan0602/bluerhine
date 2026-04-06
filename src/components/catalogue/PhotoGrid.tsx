import Image from 'next/image'
import { Photo } from '@/lib/types'

type PhotoGridProps = {
  photos: Photo[]
  title: string
}

export function PhotoGrid({ photos, title }: PhotoGridProps) {
  return (
    <section>
      <h2 className="mb-12 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#111827]">
        {title}
      </h2>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[300px]">
        {photos.map((photo, index) => (
          <div
            key={`${photo.label}-${index}`}
            className="group relative overflow-hidden border border-[#E8ECF2] bg-[#F4F6FA]"
          >
            {photo.url ? (
              <Image 
                src={photo.url} 
                alt={photo.label} 
                fill 
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
              />
            ) : (
               <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827_0%,#2E3A4E_100%)] opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-105" />
            )}
            <div className="absolute bottom-4 left-4 border border-[#111827] bg-[#ffffff] px-3 py-1 font-[var(--font-barlow-condensed)] text-[10px] font-black uppercase tracking-[0.18em] text-[#111827]">
              {photo.label}
            </div>
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/60 p-4 transition-transform duration-300 group-hover:translate-y-0">
               <p className="text-[10px] text-white opacity-80">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
