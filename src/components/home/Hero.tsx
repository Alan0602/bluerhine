'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const heroSlides = [
  {
    tag: 'Featured Products',
    title: 'Industrial UV Printers',
    description:
      "JHF's UV printers combine cutting-edge printhead technology with continuous roll media handling, delivering vibrant, durable prints for signage, décor, and display applications.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjt7Evk9WftEFlCenCyEGuYgRuv3sHu6PA5FWwy2g-PGadUSfyG-pZ3IT3BXsq1oYXC2C9V0RW9Hs4hgYVPa4li_87Gif4OtxBOvI4Uf6zDirM-OIXDJDAszxXEf-yE0LK8QqKpF0huvg8Fk8llPTyZeblsWKoHPTT6KcH2zHIRIBoBF5osA478GvPlKqXDzkmF2AIbKDUF2FVnFUQxFcMhZb-TkjNyt9D3b6f2Sp0o2S7OdBddd_YVkT5XKNGvuXsTTgmFmJt',
    brand: 'JHF',
  },
  {
    tag: 'High Precision',
    title: 'Roll-to-Roll Systems',
    description:
      'Industry-leading roll-to-roll UV systems for high-volume production. Kyocera printhead technology delivers exceptional speed and quality for outdoor signage and fleet wraps.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPDIBnZVhm9n6cdxKgCDdt19NZTtPUDzSFo522G5dAdEN9EB_nxUX7CAqVLe6_SRGcczMvEbqeyVjdJUoJOp8iXNBa_L7g-8vYmCjzrUXHuHNt665yIV-3zD4MuQDnhHLOJA6RY126Q_OAaw6kA-sW56NSVPOT1lcws2O_TLVeL6J3FZMwpufXZiyC89j29TPzCePT0rD7wXm03l4Gc3FeJoJkZbZ9M4WWGlPuN8VT66Khx1QEnjI0JCBjQcV6sJr2M94lKQgm',
    brand: 'JHF',
  },
  {
    tag: 'UV Flatbed',
    title: 'Flatbed Printing Solutions',
    description:
      'Multi-layer UV flatbed printers with precision dot placement for rigid substrates. Perfect for acrylic, glass, wood, and metal applications with CMYK + White + Varnish.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjQ-r1uiykQ5TBD6RlxHCYaHTC4dOU9dpGrBdZEQhuPKg9SUw2rvk4DziRM8WCx-0UlKt5FR8Et6OTz4AIXcZg7M_m8n701eo_oGe-dfh7ZLZ0hJAQKiqKl92O7qTqQlvouckl_d16vWxBVhCt8vRVyZiSo41JKG0UJogrdBUA5TNtzrvp7wGOwuHBKTncdZRaxbCuHu2sozFhy3Fm3kSALxstkM5qijotpe6r29oRWnbFjfLjPYVxez2HvITtObAR7v_jN18s',
    brand: 'Dlican',
  },
]

const marqueeImages = [
  { src: 'https://lh3.googleusercontent.com/d/1r78i-B_AiLWGK9xUfNnGbTiSVh9VK9sf=s4000', label: 'Dlican DLI-3220' },
  { src: 'https://lh3.googleusercontent.com/d/14H0KPGUWIIXtJ0G5u8LcfYsVTEww-Xc3=s4000', label: 'Accurate 3015AE' },
  { src: 'https://lh3.googleusercontent.com/d/1qmAUWjm4waxX8Cp_v8-NTZQ-GD5TU5z_=s4000', label: 'Accurate Fiber Laser 3015GAE' },
  { src: 'https://lh3.googleusercontent.com/d/1yNYg2RSOVeUjhsS3T8dDgFucE3gSlIR3=s4000', label: 'Accurate Fiber Laser 3015N' },
  { src: 'https://lh3.googleusercontent.com/d/1Ty9TNFby7pWcer27Ch2E4Zw09Rm08EeD=s4000', label: 'Accurate Laser E150' },
  { src: 'https://lh3.googleusercontent.com/d/1eR6HPhv6pcfrP3DmAgSenmgqxwbN6tIV=s4000', label: 'Accurate Laser E300' },
  { src: 'https://lh3.googleusercontent.com/d/1LDn_3YGmt-K3jJ8X9735tu9SpqyrRPCM=s4000', label: 'Dlican DLI-2513' },
  { src: 'https://lh3.googleusercontent.com/d/190_DI8pzIaMkClD3bsIk3Kn0MeS1ml-f=s4000', label: 'Dlican DLI-3220 Alt' },
  { src: 'https://lh3.googleusercontent.com/d/1uh9N2H8ayMzSOOY0oZt42ZHfF2snsRph=s4000', label: 'Elite C6 CNC Router' },
  { src: 'https://lh3.googleusercontent.com/d/1StMEuwZBCCNjxx1sCwPewyZTo4JYYBrW=s4000', label: 'Jaguar V GCC' },
  { src: 'https://lh3.googleusercontent.com/d/1Q4yrRZRqS5RG3J_6G_VUUr_wCOO4S60p=s4000', label: 'JHF M5300' },
  { src: 'https://lh3.googleusercontent.com/d/1NpVOLPmIY_Ns2f7RRZhM8_dF8DZlyI_p=s4000', label: 'JHF Vista V398' },
  { src: 'https://lh3.googleusercontent.com/d/1_zu6WaEWdzgvpaLvDEmbcUDZ9iNRLLdl=s4000', label: 'JHF Vista V698' },
  { src: 'https://lh3.googleusercontent.com/d/1WNaV_qex29l18WcUMdy-2WIbU7lRSYTd=s4000', label: 'Rhine LAM-1600SE' },
]

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = useCallback((index: number) => setActiveSlide(index), [])
  const goPrev = useCallback(() => setActiveSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length), [])
  const goNext = useCallback(() => setActiveSlide((p) => (p + 1) % heroSlides.length), [])

  const slide = heroSlides[activeSlide]

  return (
    <section id="home" className="relative bg-white pt-24 md:pt-28 pb-8 md:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 min-h-[auto] md:min-h-[720px]">
          {/* Left Content Card — floating editorial style */}
          <div className="z-20 w-full md:w-[480px] bg-white p-6 sm:p-10 md:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.15)] rounded-2xl md:-mr-20 self-center shrink-0 border border-surface-container-low">
            <span className="text-secondary text-xs font-black uppercase tracking-[0.3em] mb-3 md:mb-4 block">
              {slide.tag}
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-primary mb-6 md:mb-8 leading-[1.1] transition-all duration-500 font-barlow-condensed tracking-tighter"
              key={`title-${activeSlide}`}
            >
              {slide.title}
            </h1>
            <p
              className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 md:mb-10 transition-opacity duration-500 opacity-90 font-manrope"
              key={`desc-${activeSlide}`}
            >
              {slide.description}
            </p>
            <div className="flex items-center gap-8">
              <button
                onClick={goNext}
                className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white shadow-[0_15px_40px_rgba(250,110,53,0.35)] hover:scale-110 active:scale-95 transition-all group"
              >
                <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>

              {/* Dot Indicators */}
              <div className="flex gap-4">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-700 ${i === activeSlide ? 'w-12 bg-secondary' : 'w-2 bg-surface-container-high hover:bg-primary/30'
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Container (Enlarged and Balanced) */}
          <div className="relative w-full md:w-[65%] max-w-[860px] flex-grow">
            <div className="aspect-[4/3] md:aspect-[1.4/1] w-full rounded-2xl md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:shadow-[0_50px_120px_rgba(0,0,0,0.2)] relative group">
              {heroSlides.map((s, i) => (
                <Image
                  key={i}
                  src={s.image}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  className={`object-cover transition-all duration-1000 ease-in-out absolute inset-0 ${i === activeSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-110'
                    }`}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              ))}

              {/* Brand Overlay */}
              <div className="absolute top-12 left-12 z-10">
                <span className="text-5xl font-black text-white italic tracking-tighter opacity-40 mix-blend-overlay">
                  {slide.brand}
                </span>
              </div>

              {/* Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/5 pointer-events-none" />
            </div>

            {/* Navigation Arrows */}
            <div className="absolute -bottom-6 right-10 flex gap-2 z-30">
              <button
                onClick={goPrev}
                className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-primary border border-surface-container hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>
              <button
                onClick={goNext}
                className="w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-primary border border-surface-container hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Seamless Image Marquee ──────────────────── */}
      <div className="mt-12 md:mt-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-6 md:mb-8 flex items-center justify-between">
          <h3 className="font-barlow-condensed text-lg md:text-xl font-bold uppercase tracking-widest text-primary/40">Products</h3>
          <div className="h-px flex-grow mx-8 bg-surface-container-high" />
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="flex w-max animate-[marquee-scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Double the list for seamless looping */}
            {[...marqueeImages, ...marqueeImages].map((img, i) => (
              <div
                key={i}
                className="group relative w-[200px] h-[130px] sm:w-[280px] sm:h-[180px] mx-3 sm:mx-4 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl bg-white"
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-manrope text-xs font-bold uppercase tracking-wider">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
