import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const cardVariants = cva(
  'rounded-2xl padding transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]',
        featured: 'bg-gradient-to-br from-[rgba(var(--ac-rgb),0.18)] to-[rgba(var(--ac-rgb),0.04)] border border-[var(--ac)]',
        problem: 'bg-[rgba(255,23,68,0.06)] border border-[rgba(255,23,68,0.18)]',
        feature: 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  icon?: React.ReactNode
  title?: string
  description?: string
}

export function Card({
  className,
  variant,
  icon,
  title,
  description,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cn(cardVariants({ variant }), 'p-6 md:p-8', className)} {...props}>
      {icon && <div className="text-2xl mb-4">{icon}</div>}
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      {description && <p className="text-sm text-[rgba(255,255,255,0.6)]">{description}</p>}
      {children}
    </div>
  )
}
