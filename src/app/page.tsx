import { BrandsBar } from '@/components/home/BrandsBar'
import { CTASection } from '@/components/home/CTASection'
import { Hero } from '@/components/home/Hero'
import { StatsBar } from '@/components/home/StatsBar'
import { WhySection } from '@/components/home/WhySection'
import { MarqueeStrip } from '@/components/layout/MarqueeStrip'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BrandsBar />
      <MarqueeStrip
        items={[
          'Industrial Precision',
          'Exclusive GCC Distributor',
          'JHF',
          'Dlican',
          'Accurate Laser',
          'Local Support Infrastructure',
        ]}
      />
      <StatsBar />
      <WhySection />
      <CTASection />
    </div>
  )
}
