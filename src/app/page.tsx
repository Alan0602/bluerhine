import { Hero } from '@/components/home/Hero'
import { MachineCatalogueSection } from '@/components/catalogue/MachineCatalogueSection'
import { WhySection } from '@/components/home/WhySection'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero Slider ─────────────────────────── */}
      <Hero />

      {/* ── Technical Detail Catalogue (Accordion) ── */}
      <MachineCatalogueSection 
        introLabel="The Catalogue"
        title="Technical Specifications"
        description="Comprehensive technical breakdowns of our entire inventory, including printheads, speeds, and media compatibility."
        sectionId="technical-specs"
      />

      {/* ── Production Use-Cases (Parallax) ──────── */}
      <WhySection />

      {/* ── Contact & Regional Infrastructure ────── */}
      <CTASection />
    </div>
  )
}
