import { MachineCatalogueSection } from '@/components/catalogue/MachineCatalogueSection'

export function StatsBar() {
  return (
    <MachineCatalogueSection
      sectionId="products"
      introLabel="Full Product Lineup"
      title="All Machine Models"
      description="Browse the complete Blue Rhine machinery lineup in a cleaner, easier-to-scan format. Filters and machine details stay synced directly from the same data source used by each machine page."
      showStats
    />
  )
}
