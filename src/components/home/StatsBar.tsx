import { MachineCatalogueSection } from '@/components/catalogue/MachineCatalogueSection'

export function StatsBar() {
  return (
    <MachineCatalogueSection
      sectionId="products"
      introLabel="Full Product Lineup"
      title="All Machine Models"
      description="Browse the complete Bluerhine machinery lineup. Filters and cards update directly from the machine JSON, so the catalogue stays in sync with the machine pages."
      showStats
    />
  )
}
