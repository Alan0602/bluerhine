import Link from 'next/link'

import { cn } from '@/lib/utils'

const productLinks = [
  { href: '/catalogue?category=hybrid', label: 'Hybrid UV' },
  { href: '/catalogue?category=roll', label: 'Roll-to-Roll' },
  { href: '/catalogue?category=industrial', label: 'Industrial' },
  { href: '/catalogue?category=uv-flatbed', label: 'UV Flatbed' },
  { href: '/catalogue?category=laser', label: 'CO2 Laser' },
]

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/locations', label: 'Locations' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/careers', label: 'Careers' },
]

const contactLinks = [
  { href: 'tel:+97148049800', label: '+971 4 8049800' },
  { href: 'tel:80074463', label: '800 74463 (Toll Free)' },
  { href: 'mailto:info@bluerhine.com', label: 'info@bluerhine.com' },
  { href: 'https://www.bluerhine.store', label: 'www.bluerhine.store' },
]

function footerHeading(label: string) {
  return (
    <h3 className="mb-5 font-[var(--font-barlow-condensed)] text-[12px] font-bold uppercase tracking-[0.2em] text-[#111111]">
      {label}
    </h3>
  )
}

function footerLinkClasses() {
  return 'font-[var(--font-barlow)] text-sm text-[#111111] transition-colors duration-200 ease-in-out hover:text-[#f26522]'
}

export function Footer() {
  return (
    <footer className="border-t-2 border-[#111111] bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="flex min-h-full flex-col">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center bg-[#111111]">
                <span className="font-[var(--font-barlow-condensed)] text-sm font-black uppercase tracking-[0.16em] text-[#ffffff]">
                  BR
                </span>
              </div>
              <div className="flex items-baseline gap-1 uppercase leading-none">
                <span className="font-[var(--font-barlow-condensed)] text-[1.65rem] font-bold tracking-[0.08em] text-[#111111]">
                  Blue
                </span>
                <span className="font-[var(--font-barlow-condensed)] text-[1.65rem] font-bold tracking-[0.08em] text-[#f26522]">
                  Rhine
                </span>
              </div>
            </div>
            <p className="max-w-sm font-[var(--font-barlow)] text-base leading-7 text-[#6b7280]">
              Official GCC distributor for industrial UV printing and CO2 laser cutting systems,
              built around machine expertise, direct support, and structured delivery.
            </p>
            <p className="mt-auto pt-6 font-[var(--font-barlow)] text-[11px] leading-5 text-[#6b7280]">
              © 2026 Blue Rhine. All rights reserved.
            </p>
          </div>

          <div>
            {footerHeading('Products')}
            <div className="flex flex-col gap-3">
              {productLinks.map((item) => (
                <Link key={item.label} href={item.href} className={footerLinkClasses()}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            {footerHeading('Company')}
            <div className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <Link key={item.label} href={item.href} className={footerLinkClasses()}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            {footerHeading('Contact')}
            <div className="flex flex-col gap-3">
              {contactLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(footerLinkClasses(), 'break-all')}
                  target={item.href.startsWith('https') ? '_blank' : undefined}
                  rel={item.href.startsWith('https') ? 'noreferrer' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#111111]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#111111]">
            Locations: UAE · KSA · OMAN · KUWAIT · QATAR · BAHRAIN
          </p>
          <Link
            href="https://www.bluerhine.com"
            className="font-[var(--font-barlow-condensed)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#111111] transition-colors duration-200 ease-in-out hover:text-[#f26522]"
            rel="noreferrer"
            target="_blank"
          >
            www.bluerhine.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
