import { cn } from '@/lib/cn'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'featured'
  children: React.ReactNode
}

export function Tag({ variant = 'default', className, ...props }: TagProps) {
  const variantClasses = {
    default: 'bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.8)]',
    success: 'bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] text-[var(--verde)]',
    featured: 'bg-[rgba(var(--ac-rgb),0.1)] border border-[rgba(var(--ac-rgb),0.3)] text-[var(--ac)]',
  }

  return (
    <span
      className={cn(
        'inline-block text-xs font-bold px-3 py-1 rounded-full',
        variantClasses[variant],
        className
      )}
      {...props}
    />
  )
}
