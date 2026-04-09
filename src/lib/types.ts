export interface BrandInfo {
  name: string
  tagline: string
  headquarters: string
  phone: string
  customerSupport: string
  email: string
  website: string
  store: string
  locations: string[]
}

export interface Category {
  id: string
  label: string
  dotColor: string
}

export interface KeySpec {
  label: string
  value: string
}

export interface Pin {
  x: number
  y: number
}

export interface Component {
  number: number
  name: string
  pin?: Pin
}

export interface KeyFeature {
  title: string
  description: string
}

export interface Specification {
  param: string
  value: string
  highlight?: boolean
}

export interface SpeedRow {
  config: string
  pass4: string
  pass6: string
  pass8: string
}

export interface PrintingSpeed {
  label: string
  columns: string[]
  rows: SpeedRow[]
}

export interface ColorConfiguration {
  name: string
  config: string
  colors: string
}

export interface UseCase {
  emoji: string
  label: string
}

export interface Photo {
  label: string
  caption: string
  url?: string
}

export interface SalesInsight {
  q: string
  a: string
}

export interface Machine {
  id: string
  slug: string
  brand: string
  model: string
  fullName: string
  subtitle: string
  category: string
  headerGradient: string
  accentDotColor: string
  image?: string
  keySpecs: KeySpec[]
  overview: string
  tags: string[]
  components: Component[]
  keyFeatures: KeyFeature[]
  specifications: Specification[]
  useCases: UseCase[]
  applicableMaterials: string[]
  salesInsights: SalesInsight[]
  photos: Photo[]
  printingSpeed?: PrintingSpeed
  colorConfigurations?: ColorConfiguration[]
  pdf?: string
}

export interface MachineSummary {
  id: string
  slug: string
  brand: string
  model: string
  fullName: string
  subtitle: string
  category: string
  headerGradient: string
  accentDotColor: string
  image?: string
  keySpecs: KeySpec[]
}

export interface MachineImageEntry {
  name: string
  image: string
}

export type MachineImageMap = Record<string, MachineImageEntry>

export interface MachineDetail {
  overview: string
  tags: string[]
  components: Component[]
  keyFeatures: KeyFeature[]
  specifications: Specification[]
  useCases: UseCase[]
  applicableMaterials: string[]
  salesInsights: SalesInsight[]
  photos: Photo[]
  printingSpeed?: PrintingSpeed
  colorConfigurations?: ColorConfiguration[]
  pdf?: string
}

export type MachineDetailMap = Record<string, MachineDetail>

export interface ComparisonMatrixSection {
  title: string
  fields: string[]
  machines: string[]
}

export interface ComparisonMatrix {
  laser: ComparisonMatrixSection
  uvFlatbed: ComparisonMatrixSection
}

export interface UITheme {
  white: string
  black: string
  orange: string
  grey: string
  lightGrey: string
}

export interface UIFonts {
  primary: string
  fallback: string
}

export interface UIConfig {
  theme: UITheme
  fonts: UIFonts
  sectionLabelPrefix: string
  cardBorderStyle: string
  cardHoverBorderStyle: string
  tablHeaderBg: string
  tableHeaderColor: string
  tableAltRowBg: string
  pinColor: string
  pinTextColor: string
  activeTabColor: string
  activeTabBorder: string
}

export interface MachineData {
  brand: BrandInfo
  categories: Category[]
  machines: Machine[]
  comparisonMatrix: ComparisonMatrix
  uiConfig: UIConfig
}

export interface MachineIndexData {
  brand: BrandInfo
  categories: Category[]
  machines: MachineSummary[]
  comparisonMatrix: ComparisonMatrix
  uiConfig: UIConfig
}
