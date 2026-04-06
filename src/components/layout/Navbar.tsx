'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/catalogue', label: 'Machinery' },
  { href: '/#applications', label: 'Applications' },
  { href: '/#why-us', label: 'Why Us' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#111827] bg-[#ffffff]"
      style={{
        boxShadow: isScrolled ? '0 2px 0 #111827' : 'none',
        transition: 'box-shadow 220ms ease',
      }}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-[#111827]">
            <span className="font-[var(--font-barlow-condensed)] text-sm font-black uppercase tracking-[0.16em] text-[#ffffff]">
              BR
            </span>
          </div>
          <div className="flex items-baseline gap-1 uppercase leading-none">
            <span className="font-[var(--font-barlow-condensed)] text-[1.55rem] font-bold tracking-[0.08em] text-[#111827]">
              Blue
            </span>
            <span className="font-[var(--font-barlow-condensed)] text-[1.55rem] font-bold tracking-[0.08em] text-[#1B2F5E]">
              Rhine
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : item.href === '/catalogue' && pathname === '/catalogue'

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'border-b-2 border-transparent pb-1 font-[var(--font-barlow-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827] transition-colors duration-200 ease-in-out hover:text-[#1B2F5E]',
                  isActive && 'border-[#1B2F5E] text-[#1B2F5E]',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/#contact" variant="primary" size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="relative block h-5 w-6">
            <span
              className={cn(
                'absolute left-0 top-0 block h-0.5 w-6 bg-[#111827] transition-all duration-200 ease-in-out',
                isOpen && 'top-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-2 block h-0.5 w-6 bg-[#111827] transition-all duration-200 ease-in-out',
                isOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-4 block h-0.5 w-6 bg-[#111827] transition-all duration-200 ease-in-out',
                isOpen && 'top-2 -rotate-45',
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className="overflow-hidden border-b-2 border-[#111827] bg-[#ffffff] md:hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex h-12 items-center border-b border-[#111827] px-4 font-[var(--font-barlow-condensed)] text-[12px] font-bold uppercase tracking-[0.18em] text-[#111827] transition-colors duration-200 ease-in-out hover:bg-[#111827] hover:text-[#ffffff]',
                    (item.href === '/' ? pathname === '/' : item.href === '/catalogue' && pathname === '/catalogue') && 'text-[#1B2F5E]',
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="p-4">
                <Button className="w-full" href="/#contact" size="md" variant="primary">
                  Request a Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
