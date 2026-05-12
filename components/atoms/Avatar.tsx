import { cn } from '@/lib/cn'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  emoji?: string
  initials?: string
  size?: 'sm' | 'md' | 'lg'
  bgColor?: string
}

export function Avatar({
  emoji,
  initials,
  size = 'md',
  bgColor = 'rgba(var(--ac-rgb), 0.2)',
  className,
  ...props
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl',
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-full font-bold flex-shrink-0',
        sizeClasses[size],
        className
      )}
      style={{ background: bgColor }}
      {...props}
    >
      {emoji || initials}
    </div>
  )
}
