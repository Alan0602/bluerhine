import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ComponentPins } from '@/components/catalogue/ComponentPins'
import { PhotoGrid } from '@/components/catalogue/PhotoGrid'
import { SalesQA } from '@/components/catalogue/SalesQA'
import { SpecTable } from '@/components/catalogue/SpecTable'
import { SpeedTable } from '@/components/catalogue/SpeedTable'
import { UseCaseBar } from '@/components/catalogue/UseCaseBar'
import { Button } from '@/components/ui/Button'
import { data, getMachineBySlug } from '@/lib/utils'

type MachinePageProps = {
  params: Promise<{ slug: string }>
}

const applicationTiles = [
  { emoji: '🌆', label: 'Outdoor Billboards' },
  { emoji: '🪧', label: 'Signage & Display' },
  { emoji: '💡', label: 'Backlit Lightboxes' },
  { emoji: '🎪', label: 'Exhibition Graphics' },
  { emoji: '🚗', label: 'Vehicle Wraps' },
  { emoji: '📦', label: 'Packaging' },
  { emoji: '🏠', label: 'Home Decor' },
  { emoji: '🏭', label: 'Industrial Design' },
  { emoji: '🔷', label: 'Glass & Ceramic' },
  { emoji: '🏗', label: 'Floor Graphics' },
  { emoji: '🎨', label: 'Fine Art Prints' },
  { emoji: '🪟', label: 'Window Graphics' },
  { emoji: '✨', label: 'Reflective Films' },
  { emoji: '🏷️', label: 'Advertising Stickers' },
  { emoji: '📱', label: 'Phone Cases' },
  { emoji: '💎', label: 'Crystal Stickers' },
]

export default async function MachineDetailPage({ params }: MachinePageProps) {
  const { slug } = await params
  const machine = getMachineBySlug(slug)

  if (!machine) {
    notFound()
  }

  const tickerItems = machine.tags.length > 0 ? machine.tags : machine.keySpecs.map((spec) => spec.value)
  const primarySpecs = machine.keySpecs.slice(0, 4)
  const sectionLinks = [
    { href: '#specs', label: 'Specs' },
    { href: '#features', label: 'Features' },
    ...(machine.photos.length > 0 ? [{ href: '#gallery', label: 'Gallery' }] : []),
    { href: '#use-cases', label: 'Use Cases' },
  ]

  return (
    <div className="bg-[#ffffff] text-[#111827]">
      <div className="sticky top-[68px] z-40 hidden border-b-2 border-[#111827] bg-[#ffffff] px-8 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-8">
          {sectionLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ease-in-out ${
                index === 0 ? 'text-[#1B2F5E]' : 'text-[#111827] hover:text-[#1B2F5E]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button href="#contact" size="sm" className="border-2 border-[#111827] bg-[#1B2F5E] hover:border-[#111827]">
          Get Quote
        </Button>
      </div>

      <div className="border-b-2 border-[#111827] px-4 py-3 md:hidden">
        <div className="flex items-center justify-between">
          <div className="border border-[#111827] p-2 font-[var(--font-barlow-condensed)] text-sm font-black uppercase tracking-[-0.04em]">
            {machine.brand.split(' ')[0].toLowerCase()} <span className="text-[#1B2F5E]">{machine.brand.split(' ').slice(1).join(' ').toUpperCase() || machine.brand.toUpperCase()}</span>
          </div>
          <span className="font-[var(--font-barlow-condensed)] text-xs font-bold uppercase tracking-[0.18em]">
            {machine.model}
          </span>
        </div>
      </div>

      <section className="relative overflow-hidden border-b-2 border-[#111827] bg-[#ffffff]">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: machine.headerGradient }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#11182712_1px,transparent_1px),linear-gradient(to_bottom,#11182712_1px,transparent_1px)] bg-[size:84px_84px]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-16 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <div className="border-2 border-[#111827] bg-[#ffffff] px-4 py-2 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.12em] text-[#111827]">
                {machine.brand}
              </div>
              <div className="border-2 border-[#111827] bg-[#1B2F5E] px-4 py-2 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffffff]">
                {machine.model}
              </div>
            </div>

            <div className="mb-8 border-l-4 border-[#1B2F5E] pl-6">
              <p className="font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.12em] text-[#1B2F5E]">
                {machine.subtitle}
              </p>
            </div>

            <h1 className="font-[var(--font-barlow-condensed)] text-[56px] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#111827] md:text-7xl lg:text-[7rem]">
              {machine.fullName}
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-[1.8] text-[#2E3A4E] md:text-[1.25rem]">
              {machine.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {machine.tags.slice(0, 5).map((tag) => (
                <span
                  key={`${machine.id}-${tag}`}
                  className="border border-[#111827] bg-[#ffffff] px-4 py-2 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#111827]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-10 md:flex-row md:flex-wrap">
              <Button href="#specs" size="lg" className="border-2 border-[#111827] px-10 py-5 text-sm tracking-[0.1em]">
                Get Specifications
              </Button>
              <Button
                href={machine.photos.length > 0 ? '#gallery' : '#features'}
                variant="outline"
                size="lg"
                className="border-2 border-[#1B2F5E] px-10 py-5 text-sm tracking-[0.1em] text-[#1B2F5E] hover:border-[#111827] hover:bg-[#111827] hover:text-[#1B2F5E]"
              >
                {machine.photos.length > 0 ? 'Watch In Action' : 'Explore Features'}
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {machine.image ? (
              <div className="relative mb-8 flex min-h-[320px] w-full items-center justify-center md:min-h-[480px]">
                <Image
                  src={machine.image}
                  alt={machine.fullName}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            ) : null}
            <div className="border-2 border-[#111827] bg-[#ffffff] p-6 md:p-8">

              <div className="mb-6 flex items-center justify-between border-b-2 border-dashed border-[#111827] pb-4">
                <span className="font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#1B2F5E]">
                  Machine Snapshot
                </span>
                <span className="font-[var(--font-barlow-condensed)] text-[10px] font-black uppercase tracking-[0.18em] text-[#111827]">
                  {machine.category.replace(/-/g, ' ')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {primarySpecs.map((spec, index) => (
                  <div
                    key={`${machine.id}-${spec.label}`}
                    className={`min-h-32 border border-[#111827] p-4 ${
                      index === 0 ? 'bg-[#111827] text-[#ffffff]' : 'bg-[#F4F6FA] text-[#111827]'
                    }`}
                  >
                    <div className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4A843]">
                      {spec.label}
                    </div>
                    <div className="mt-6 font-[var(--font-barlow-condensed)] text-[1.8rem] font-black uppercase leading-none md:text-[2.2rem]">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border border-[#111827] bg-[#F4F6FA] p-5">
                <div className="mb-3 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#111827]">
                  Production Readiness
                </div>
                <div className="space-y-3">
                  {machine.keyFeatures.slice(0, 3).map((feature, index) => (
                    <div
                      key={`${machine.id}-${feature.title}`}
                      className="flex items-start gap-3 border-b border-dashed border-[#111827]/20 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="font-[var(--font-barlow-condensed)] text-xl font-black text-[#1B2F5E]">
                        0{index + 1}
                      </span>
                      <div>
                        <div className="font-[var(--font-barlow-condensed)] text-sm font-bold uppercase text-[#111827]">
                          {feature.title}
                        </div>
                        <div className="text-lg leading-8 text-[#2E3A4E]">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-2 border-[#111827] bg-[#111827] py-4">
        <div
          className="flex w-max items-center whitespace-nowrap font-[var(--font-barlow-condensed)] text-[12px] font-bold uppercase tracking-[0.3em] text-[#ffffff] md:text-xl"
          style={{ animation: 'marquee-scroll 30s linear infinite' }}
        >
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="px-5">
              {item} <span className="px-4 text-[#1B2F5E]">·</span>
            </span>
          ))}
        </div>
      </div>

      <section id="features" className="border-b border-dashed border-[#111827] px-4 py-16 md:px-16 md:py-24">
        <p className="mb-4 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#1B2F5E]">
          Key Features
        </p>
        <div className="mb-16 flex flex-wrap gap-3">
          {machine.keyFeatures.slice(0, 3).map((feature) => (
            <span
              key={feature.title}
              className="border border-[#111827] px-4 py-1 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.16em]"
            >
              {feature.title}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {machine.keyFeatures.slice(0, 3).map((feature, index) => (
            <div
              key={feature.title}
              className="bg-[#ffffff] p-8 transition-colors duration-200 ease-in-out hover:bg-[#fafafa]"
              style={{ borderTop: '8px solid #111827' }}
            >
              <div className="mb-12 flex items-start justify-between">
                <span className="font-[var(--font-barlow-condensed)] text-4xl font-black text-[#1B2F5E]">
                  0{index + 1}
                </span>
                <span className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#B0BAC9]">
                  REF_00{index + 1}
                </span>
              </div>
              <h3 className="mb-4 font-[var(--font-barlow-condensed)] text-2xl font-bold uppercase leading-tight">
                {feature.title}
              </h3>
              <p className="text-lg leading-8 text-[#6B7A93]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#ffffff] px-4 py-20 md:px-16 md:py-32">
        <p className="mb-12 text-center font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#111827]">
          Product Anatomy
        </p>
        <div className="mx-auto max-w-6xl border-2 border-[#111827] bg-[#F4F6FA] p-6 md:p-12">
          <ComponentPins components={machine.components} image={machine.image} machineName={machine.fullName} />
        </div>
      </section>

      <section id="specs" className="border-t border-dashed border-[#111827] px-4 py-16 md:px-16 md:py-24">
        <p className="mb-12 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#1B2F5E]">
          Technical Specifications
        </p>
        <SpecTable specs={machine.specifications} />
        <div className="mt-12">
          <SpeedTable printingSpeed={machine.printingSpeed} />
        </div>
      </section>

      {machine.salesInsights.length > 0 ? (
        <section className="border-t border-dashed border-[#111827] bg-[#F4F6FA] px-4 py-16 md:px-16 md:py-24">
          <p className="mb-12 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#111827]">
            Sales Insights
          </p>
          <div className="max-w-4xl">
            <SalesQA items={machine.salesInsights} />
          </div>
        </section>
      ) : null}

      <section className="border-t border-dashed border-[#111827] px-4 py-16 md:px-16 md:py-24">
        <p className="mb-12 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#1B2F5E]">
          Applications
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {applicationTiles.map((tile) => (
            <div
              key={tile.label}
              className="group border border-[#111827] p-4 text-center transition-all duration-200 ease-in-out hover:bg-[#1B2F5E] hover:text-[#ffffff]"
            >
              <span className="mb-2 block text-2xl">{tile.emoji}</span>
              <p className="font-[var(--font-barlow-condensed)] text-[9px] font-black uppercase tracking-[0.16em] leading-tight">
                {tile.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="use-cases" className="bg-[#ffffff] px-4 py-16 md:px-16 md:py-24">
        <p className="mb-12 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#1B2F5E]">
          Use Cases
        </p>
        <UseCaseBar items={machine.useCases} />
      </section>

      {machine.photos.length > 0 ? (
        <section id="gallery" className="border-t border-dashed border-[#111827] px-4 py-16 md:px-16 md:py-24">
          <PhotoGrid title="In Action" photos={machine.photos} />
        </section>
      ) : null}

      <section className="relative overflow-hidden bg-[#111827] px-4 py-16 text-[#ffffff] md:px-16 md:py-24">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-10 md:block">
          <div className="rotate-12 font-[var(--font-barlow-condensed)] text-[20rem] font-black uppercase text-[#ffffff]">
            BR
          </div>
        </div>
        <div className="relative z-10">
          <p className="mb-12 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#1B2F5E]">
            Why Blue Rhine
          </p>
          <h2 className="mb-16 font-[var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none tracking-[-0.04em] md:text-6xl">
            Blue Rhine
            <br />
            Advantage.
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              'Exclusive GCC Distributor',
              'In-Country Expert Support',
              'Complete Industrial Range',
            ].map((title, index) => (
              <div key={title} className="border-l-2 border-[#1B2F5E] pl-8">
                <h3 className="mb-4 font-[var(--font-barlow-condensed)] text-xl font-bold uppercase">{title}</h3>
                <p className="text-base leading-8 text-[#B0BAC9]">
                  {[
                    'Official representation across UAE, KSA, Oman, Kuwait, Qatar, and Bahrain with direct factory access and genuine parts support.',
                    'Dedicated technical teams across the region for installation, training, troubleshooting, and factory-certified after-sales service.',
                    'From compact flatbeds to industrial roll systems, the regional catalogue covers every major production scale with one support network.',
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-between gap-8 border-y border-dashed border-[#111827] bg-[#ffffff] px-4 py-12 md:flex-row md:px-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-2 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#B0BAC9]">
            Official Distributor
          </div>
          <div className="font-[var(--font-barlow-condensed)] text-3xl font-black uppercase tracking-[-0.04em]">
            Blue <span className="text-[#1B2F5E]">Rhine</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#B0BAC9]">
            Toll Free Support
          </div>
          <div className="font-[var(--font-barlow-condensed)] text-2xl font-black tracking-tight">
            {data.brand.customerSupport}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#111827]">
          {data.brand.locations.map((location, index) => (
            <span key={location}>
              {location}
              {index < data.brand.locations.length - 1 ? <span className="ml-4 text-[#1B2F5E]">·</span> : null}
            </span>
          ))}
        </div>
      </div>

      <section id="contact" className="border-t border-[#333333] bg-[#111827] px-4 py-20 text-[#ffffff] md:px-16 md:py-32">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="mb-8 font-[var(--font-barlow-condensed)] text-5xl font-black uppercase leading-tight tracking-[-0.04em] md:text-6xl">
              Ready to Scale
              <br />
              Production?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-[#1B2F5E]">⌖</span>
                <div>
                  <p className="font-bold text-sm">HEADQUARTERS</p>
                  <p className="text-sm text-[#B0BAC9]">{data.brand.headquarters}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#1B2F5E]">✆</span>
                <div>
                  <p className="font-bold text-sm">DIRECT LINE</p>
                  <p className="text-sm text-[#B0BAC9]">{data.brand.phone}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  className="border border-[#ffffff] bg-transparent p-4 font-[var(--font-barlow-condensed)] text-xs font-bold uppercase placeholder:text-[#737373] focus:border-[#1B2F5E] focus:outline-none"
                  placeholder="Full Name"
                  type="text"
                />
                <input
                  className="border border-[#ffffff] bg-transparent p-4 font-[var(--font-barlow-condensed)] text-xs font-bold uppercase placeholder:text-[#737373] focus:border-[#1B2F5E] focus:outline-none"
                  placeholder="Work Email"
                  type="email"
                />
              </div>
              <input
                className="w-full border border-[#ffffff] bg-transparent p-4 font-[var(--font-barlow-condensed)] text-xs font-bold uppercase placeholder:text-[#737373] focus:border-[#1B2F5E] focus:outline-none"
                placeholder="Company Name"
                type="text"
              />
              <textarea
                className="w-full border border-[#ffffff] bg-transparent p-4 font-[var(--font-barlow-condensed)] text-xs font-bold uppercase placeholder:text-[#737373] focus:border-[#1B2F5E] focus:outline-none"
                placeholder="How can we help?"
                rows={4}
              />
              <button className="w-full bg-[#1B2F5E] p-5 font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.18em] text-[#ffffff] transition-all duration-200 ease-in-out hover:bg-[#ffffff] hover:text-[#111827]">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-[#111827] bg-[#ffffff] md:hidden">
        <div className="grid h-16 grid-cols-4">
          <Link href="/" className="flex items-center justify-center bg-[#1B2F5E] text-[#ffffff]">⌂</Link>
          <Link href="#specs" className="flex items-center justify-center border-r border-dashed border-[#111827] text-[#111827]">≡</Link>
          <Link href="#features" className="flex items-center justify-center border-r border-dashed border-[#111827] text-[#111827]">⊞</Link>
          <Link href="#contact" className="flex items-center justify-center text-[#111827]">◉</Link>
        </div>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  )
}
