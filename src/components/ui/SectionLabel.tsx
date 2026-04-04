import { cn } from '@/lib/utils'

type SectionLabelProps = {
  label: string
  className?: string
}

export function SectionLabel({ label, className }: SectionLabelProps) {
  return <span className={cn('section-label', className)}>{label}</span>
}
