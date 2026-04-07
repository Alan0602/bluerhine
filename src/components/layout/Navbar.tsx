'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#technical-specs', label: 'Machinery' },
  { href: '#applications', label: 'Applications' },
  { href: '#why-us', label: 'The Advantage' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsExpanded(window.scrollY > 80)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <nav
        className={cn(
          'flex items-center justify-between transition-all duration-500 ease-in-out',
          isExpanded
            ? 'w-full rounded-b-[2rem] bg-primary shadow-2xl px-6 lg:px-10 h-20'
            : 'mt-4 w-[95%] max-w-6xl rounded-full bg-primary/95 backdrop-blur-md px-6 lg:px-8 h-16 shadow-2xl'
        )}
      >
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="relative flex items-center shrink-0 group transition-transform hover:scale-105"
        >
          <div className={cn("relative transition-all duration-500", isExpanded ? "h-10 w-[50px] lg:h-11 lg:w-[56px]" : "h-8 w-[40px] lg:h-9 lg:w-[45px]")}>
            <Image
              src="/logo.svg"
              alt="Blue Rhine Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-xs uppercase tracking-wider text-white/90">
          {navItems.map((item) => (
            <div key={item.href} className="flex items-center gap-1 group cursor-pointer">
              <a
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://www.bluerhine.store"
            target="_blank"
            rel="noreferrer"
            className="bg-secondary text-white px-5 py-2 rounded-full font-bold text-[11px] uppercase tracking-wide hover:brightness-110 transition-all"
          >
            Visit Store
          </a>
          <a
            href="#technical-specs"
            onClick={(e) => { e.preventDefault(); handleNavClick('#technical-specs') }}
            className="bg-white text-primary px-5 py-2 rounded-full font-bold text-[11px] uppercase tracking-wide hover:bg-gray-100 transition-all"
          >
            Our Products
          </a>
          <div className="flex items-center space-x-3 ml-2 text-white">
            <span className="material-symbols-outlined text-xl cursor-pointer hover:text-white/70 transition-colors">search</span>
            <span className="material-symbols-outlined text-xl cursor-pointer hover:text-white/70 transition-colors">phone_in_talk</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsOpen((o) => !o)}
          type="button"
        >
          <span className="relative block h-5 w-6">
            <span className={cn(
              'absolute left-0 top-0 block h-0.5 w-6 bg-white transition-all duration-200',
              isOpen && 'top-2 rotate-45'
            )} />
            <span className={cn(
              'absolute left-0 top-2 block h-0.5 w-6 bg-white transition-all duration-200',
              isOpen && 'opacity-0'
            )} />
            <span className={cn(
              'absolute left-0 top-4 block h-0.5 w-6 bg-white transition-all duration-200',
              isOpen && 'top-2 -rotate-45'
            )} />
          </span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className="absolute top-full left-0 right-0 overflow-hidden bg-primary/95 backdrop-blur-md md:hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  className="flex h-12 items-center px-6 text-xs font-semibold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-3 p-6">
                <a href="https://www.bluerhine.store" target="_blank" rel="noreferrer"
                   className="flex-1 text-center bg-secondary text-white py-3 rounded-full font-bold text-[11px] uppercase tracking-wide"
                >
                  Visit Store
                </a>
                <a href="#technical-specs" onClick={(e) => { e.preventDefault(); handleNavClick('#technical-specs') }}
                   className="flex-1 text-center bg-white text-primary py-3 rounded-full font-bold text-[11px] uppercase tracking-wide"
                >
                  Our Products
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
