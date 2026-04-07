'use client'

import Image from 'next/image'
import { useCallback } from 'react'
import { data } from '@/lib/utils'

export function Footer() {
  const handleNavClick = useCallback((href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <footer className="bg-primary pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-[50px]">
                <Image
                  src="/logo.svg"
                  alt="Blue Rhine Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Pioneering industrial printing and fabrication solutions across the GCC since 1996. Engineering excellence for the next generation of production.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'share', label: 'LinkedIn' },
                { icon: 'public', label: 'Website' },
                { icon: 'alternate_email', label: 'Email' }
              ].map((social, i) => (
                <div key={i} className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all cursor-pointer group">
                  <span className="material-symbols-outlined text-base">
                    {social.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Machinery Categories */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 pb-4 border-b border-white/5">Solutions</h5>
            <ul className="space-y-4">
              {[
                { label: 'Industrial UV Printers', href: '#technical-specs' },
                { label: 'Roll-to-Roll Systems', href: '#technical-specs' },
                { label: 'UV Flatbed Solutions', href: '#technical-specs' },
                { label: 'CO2 Laser Cutting', href: '#technical-specs' }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }} 
                    className="text-white/40 text-sm hover:text-secondary transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Infrastructure */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 pb-4 border-b border-white/5">Navigation</h5>
            <ul className="space-y-4">
              {[
                { label: 'Production Use-Cases', href: '#applications' },
                { label: 'Technological Edge', href: '#why-us' },
                { label: 'Regional Support', href: '#why-us' },
                { label: 'Technical Desk', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }} 
                    className="text-white/40 text-sm hover:text-secondary transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="space-y-8">
            <div>
              <h5 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8 pb-4 border-b border-white/5">Technical Subscription</h5>
              <div className="flex bg-white/5 rounded-lg overflow-hidden border border-white/10 p-1 focus-within:border-secondary transition-all">
                <input 
                  type="email" 
                  placeholder="Official Email" 
                  className="bg-transparent border-none outline-none text-xs text-white px-4 py-2.5 flex-grow placeholder:text-white/20 w-full" 
                />
                <button className="bg-secondary text-white px-4 py-2 rounded font-bold text-[10px] uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all">
                  Sign Up
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
               <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-xl">call</span>
                  <div>
                    <p className="text-white/90 font-bold text-sm tracking-tight">{data.brand.phone}</p>
                    <p className="text-white/30 text-[9px] uppercase font-bold tracking-widest">General Inquiries</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-xl">support_agent</span>
                  <div>
                    <p className="text-white/90 font-bold text-sm tracking-tight">{data.brand.customerSupport}</p>
                    <p className="text-white/30 text-[9px] uppercase font-bold tracking-widest">Toll Free Support</p>
                  </div>
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Blue Rhine. All Rights Reserved.
            </p>
            <p className="text-white/10 text-[9px] font-medium uppercase tracking-widest">
              Authorized Regional Distributor for JHF, Dlican & Accurate Laser
            </p>
          </div>
          <div className="flex gap-10">
             {['Privacy', 'Legal', 'Governance'].map((text) => (
               <a key={text} href="#" className="text-white/30 text-[9px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                 {text}
               </a>
             ))}
          </div>
        </div>

      </div>

      {/* Modern Industrial Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] -rotate-12 w-full select-none hidden lg:block">
        <h1 className="text-[12vw] font-black text-white italic tracking-tighter leading-none whitespace-nowrap text-center uppercase">
          Precision Industrial
        </h1>
      </div>
    </footer>
  )
}
