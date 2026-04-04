import { MachineCatalogueSection } from '@/components/catalogue/MachineCatalogueSection'

type CataloguePageProps = {
  searchParams: Promise<{ category?: string | string[] }>
}

export default async function CataloguePage({ searchParams }: CataloguePageProps) {
  const resolvedSearchParams = await searchParams
  const category = typeof resolvedSearchParams.category === 'string' ? resolvedSearchParams.category : undefined

  return (
    <MachineCatalogueSection
      introLabel="Machine Catalogue"
      title="Explore The Current Lineup"
      description="Filter the full machine range by category and jump directly into any machine detail page. This catalogue is driven by the same JSON data source as the homepage and machine routes."
      initialCategory={category}
    />
  )
}
