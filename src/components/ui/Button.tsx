import Link from 'next/link'

import { cn } from '@/lib/utils'

type ButtonProps = {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
  className?: string
}

const variantClasses = {
  primary:
    'border border-[#111111] bg-[#111111] text-[#ffffff] hover:bg-[#f26522] hover:border-[#f26522]',
  outline:
    'border border-[#111111] bg-transparent text-[#111111] hover:bg-[#111111] hover:text-[#ffffff]',
  ghost: 'border border-transparent bg-transparent text-[#111111] hover:text-[#f26522]',
}

const sizeClasses = {
  sm: 'px-5 py-2 text-[13px] tracking-[0.12em]',
  md: 'px-5 py-3 text-[13px] tracking-[0.12em]',
  lg: 'px-6 py-4 text-[14px] tracking-[0.14em]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-[var(--font-barlow-condensed)] font-bold uppercase leading-none transition-all duration-200 ease-in-out',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  )
}
