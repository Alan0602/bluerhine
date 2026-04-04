import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  className?: string
  tone?: 'default' | 'light'
}

export function Badge({ children, className, tone = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-widest',
        tone === 'default' && 'border-brand-orange/20 bg-brand-orange/10 text-brand-orange',
        tone === 'light' && 'border-white/20 bg-white/10 text-white',
        className,
      )}
    >
      {children}
    </span>
  )
}
