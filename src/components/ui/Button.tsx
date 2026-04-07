import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: React.MouseEventHandler<any>
  href?: string
  className?: string
  showArrow?: boolean
}

const variantClasses = {
  primary:
    'rounded-md bg-secondary-container text-on-secondary hover:bg-secondary',
  outline:
    'rounded-md border border-on-surface/20 bg-transparent text-on-surface hover:border-primary-container hover:text-primary-container',
  ghost: 'bg-transparent text-on-surface hover:text-secondary',
}

const sizeClasses = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg font-semibold',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className,
  showArrow = false,
}: ButtonProps) {
  // If no size is needed for ghost buttons with arrows, we can suppress it using cn() if we wanted, 
  // but we'll apply it normally. Ghost buttons often don't need padding.
  const isGhost = variant === 'ghost'

  const classes = cn(
    'inline-flex items-center justify-center transition-all duration-200 ease-in-out',
    !isGhost && sizeClasses[size], 
    variantClasses[variant],
    className
  )

  const content = (
    <>
      {children}
      {(isGhost || showArrow) && (
        <span className="ml-2 text-secondary">→</span>
      )}
    </>
  )

  if (href) {
    // If it's an anchor link, just use an <a> tag instead of <Link> if we want smooth scrolls inside single page
    if (href.startsWith('#')) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {content}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {content}
    </button>
  )
}
