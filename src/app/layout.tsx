import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed, Inter, Space_Grotesk } from 'next/font/google'

import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

import './globals.css'

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Blue Rhine | Industrial Printing Machinery GCC',
  description:
    'Official GCC distributor for JHF, Dlican and Accurate Laser industrial UV printing and CO2 laser cutting machines.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <Navbar />
        <main className="pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
