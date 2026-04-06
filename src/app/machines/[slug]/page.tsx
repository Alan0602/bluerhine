import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ComponentPins } from '@/components/catalogue/ComponentPins'
import { PhotoGrid } from '@/components/catalogue/PhotoGrid'
import { SalesQA } from '@/components/catalogue/SalesQA'
import { SpecTable } from '@/components/catalogue/SpecTable'
import { SpeedTable } from '@/components/catalogue/SpeedTable'

import { Button } from '@/components/ui/Button'
import { data, getMachineBySlug } from '@/lib/utils'

type MachinePageProps = {
  params: Promise<{ slug: string }>
}



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
  ]

  return (
    <div className="bg-[#ffffff] text-[#111827]">
      <div className="sticky top-[68px] z-40 hidden border-b-2 border-[#111827] bg-[#ffffff] px-8 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-8">
          {sectionLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ease-in-out ${index === 0 ? 'text-[#1B2F5E]' : 'text-[#111827] hover:text-[#1B2F5E]'
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

      <section className="grain-overlay matte-surface relative overflow-hidden border-b-2 border-[#111827] bg-[#0a0f1a]">
        {/* ── Abstract brutalist geometry (animated) ─── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Grid pattern — concrete feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* Large floating diagonal block — top right */}
          <div
            className="absolute -right-16 -top-16 h-[460px] w-[460px] rotate-[14deg] border border-[#2799d4]/10 bg-[#1B2F5E]/15"
            style={{ animation: 'float-slow 12s ease-in-out infinite' }}
          />

          {/* Layered rectangle — left mid */}
          <div
            className="absolute -left-12 top-[30%] h-[280px] w-[140px] border-2 border-[#2799d4]/10"
            style={{ animation: 'float-slower 16s ease-in-out infinite' }}
          />
          <div
            className="absolute -left-6 top-[33%] h-[200px] w-[80px] bg-[#2799d4]/[0.04]"
            style={{ animation: 'float-slower 16s ease-in-out infinite 2s' }}
          />

          {/* Floating small blocks cluster — mid right */}
          <div
            className="absolute right-[18%] top-[18%] h-20 w-20 border border-[#ffffff]/[0.06] bg-[#1B2F5E]/10"
            style={{ animation: 'float-slow 10s ease-in-out infinite 1s' }}
          />
          <div
            className="absolute right-[15%] top-[24%] h-10 w-10 bg-[#2799d4]/[0.06]"
            style={{ animation: 'float-slower 14s ease-in-out infinite' }}
          />
          <div
            className="absolute right-[20%] top-[28%] h-6 w-6 bg-[#D4A843]/[0.08]"
            style={{ animation: 'float-slow 8s ease-in-out infinite 3s' }}
          />

          {/* Cut-out shape — bottom right */}
          <div
            className="absolute -bottom-10 right-[10%] h-[180px] w-[300px] -rotate-3 border-t-2 border-[#2799d4]/15 bg-gradient-to-b from-[#2799d4]/[0.03] to-transparent"
            style={{ animation: 'drift-x 20s ease-in-out infinite' }}
          />

          {/* Horizontal glowing lines */}
          <div
            className="absolute left-0 top-[38%] h-[1px] w-[35%] origin-left bg-gradient-to-r from-[#2799d4]/30 to-transparent"
            style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-[25%] right-0 h-[1px] w-[20%] origin-right bg-gradient-to-l from-[#D4A843]/20 to-transparent"
            style={{ animation: 'glow-pulse 4s ease-in-out infinite 2s' }}
          />

          {/* Large watermark text */}
          <div className="glow-blue-text absolute -bottom-16 -right-6 hidden select-none font-[var(--font-barlow-condensed)] text-[20rem] font-black uppercase leading-none text-[#ffffff]/[0.02] md:block">
            BR
          </div>

          {/* Circle accent */}
          <div
            className="absolute left-[6%] top-[12%] h-36 w-36 rounded-full border border-[#ffffff]/[0.04]"
            style={{ animation: 'float-slower 18s ease-in-out infinite' }}
          />
          <div
            className="absolute bottom-[15%] left-[25%] h-20 w-20 rounded-full border border-[#2799d4]/[0.06]"
            style={{ animation: 'float-slow 14s ease-in-out infinite 4s' }}
          />
        </div>

        {/* ── Content ──────────────────────────────── */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 md:px-16 md:py-14">
          {/* Top bar — brand + model + category */}
          <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-[#ffffff]/[0.06] pb-5">
            <div className="glass-card px-4 py-2 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.12em] text-[#ffffff]">
              {machine.brand}
            </div>
            <div className="border-2 border-[#2799d4] bg-[#2799d4] px-4 py-2 font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#0a0f1a]">
              {machine.model}
            </div>
            <div className="ml-auto hidden items-center gap-3 md:flex">
              <div className="h-[1px] w-8 bg-[#ffffff]/10" />
              <span className="font-[var(--font-barlow-condensed)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffffff]/30">
                {machine.category.replace(/-/g, ' ')}
              </span>
            </div>
          </div>

          {/* Main hero grid */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
            {/* Left — content */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-[3px] w-8 bg-[#2799d4]" />
                <p className="font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.2em] text-[#2799d4]">
                  {machine.subtitle}
                </p>
              </div>

              <h1 className="glow-blue-text mb-6 font-[var(--font-barlow-condensed)] text-[3rem] font-black uppercase leading-[0.88] tracking-[-0.04em] text-[#ffffff] md:text-[4.5rem] lg:text-[6rem]">
                {machine.fullName}
              </h1>

              <p className="mb-8 max-w-lg text-base leading-[1.75] text-[#8896AB] md:text-[1.05rem]">
                {machine.overview}
              </p>

              {/* Tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {machine.tags.slice(0, 5).map((tag) => (
                  <span
                    key={`${machine.id}-${tag}`}
                    className="glass-card px-3 py-1.5 font-[var(--font-barlow-condensed)] text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffffff]/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Sharp-edge CTA buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href="#specs"
                  size="lg"
                  className="glow-blue border-2 border-[#2799d4] bg-[#2799d4] px-10 py-5 text-sm font-black uppercase tracking-[0.15em] text-[#0a0f1a] transition-all duration-300 hover:bg-transparent hover:text-[#2799d4] hover:shadow-[0_0_40px_rgba(39,153,212,0.25)]"
                >
                  Get Specifications
                </Button>
                <Button
                  href="#features"
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#ffffff]/15 px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] text-[#ffffff]/70 transition-all duration-300 hover:border-[#2799d4]/50 hover:text-[#2799d4]"
                >
                  Explore Features
                </Button>
              </div>
            </div>

            {/* Right — machine image + key specs */}
            <div className="relative">
              {machine.image ? (
                <div className="relative flex min-h-[280px] w-full items-center justify-center md:min-h-[400px]">
                  {/* Layered brutalist frames */}
                  <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#2799d4]/15" />
                  <div className="absolute -bottom-6 -right-6 hidden h-full w-full border border-[#ffffff]/[0.04] md:block" />
                  <div className="absolute -left-2 -top-2 h-10 w-10 bg-[#2799d4]/10" />
                  <div className="absolute -right-1 top-4 h-6 w-6 bg-[#D4A843]/10" />

                  <Image
                    src={machine.image}
                    alt={machine.fullName}
                    fill
                    className="object-contain drop-shadow-[0_20px_80px_rgba(39,153,212,0.12)]"
                    priority
                    sizes="(min-width: 768px) 42vw, 100vw"
                  />
                </div>
              ) : null}

              {/* Key specs strip */}
              <div className="mt-6 grid grid-cols-2 gap-0">
                {primarySpecs.map((spec, index) => (
                  <div
                    key={`${machine.id}-${spec.label}`}
                    className={`border border-[#ffffff]/[0.06] p-4 ${index === 0
                        ? 'bg-[#2799d4] text-[#0a0f1a]'
                        : 'glass-card text-[#ffffff]'
                      }`}
                  >
                    <div className={`font-[var(--font-barlow-condensed)] text-[9px] font-bold uppercase tracking-[0.2em] ${index === 0 ? 'text-[#0a0f1a]/50' : 'text-[#2799d4]'
                      }`}>
                      {spec.label}
                    </div>
                    <div className="mt-2 font-[var(--font-barlow-condensed)] text-[1.3rem] font-black uppercase leading-none md:text-[1.5rem]">
                      {spec.value}
                    </div>
                  </div>
                ))}
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
        <p className="mb-4 font-[var(--font-barlow-condensed)] text-[13px] font-black uppercase tracking-[0.16em] text-[#1B2F5E]">
          Compatible Materials
        </p>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#6B7A93]">
          This machine supports a wide range of substrates and materials for diverse production needs.
        </p>
        <div className="flex flex-wrap gap-3">
          {machine.applicableMaterials.map((material, index) => (
            <div
              key={material}
              className="group flex items-center gap-3 border-2 border-[#111827] bg-[#ffffff] px-5 py-3 transition-all duration-200 ease-in-out hover:bg-[#111827] hover:text-[#ffffff]"
            >
              <span className="font-[var(--font-barlow-condensed)] text-[11px] font-bold text-[#1B2F5E] transition-colors group-hover:text-[#D4A843]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-[var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.08em]">
                {material}
              </span>
            </div>
          ))}
        </div>
      </section>



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
