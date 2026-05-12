import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const badgeVariants = cva(
  'inline-block font-bold text-xs letter-spacing-0.8px text-transform-uppercase rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.8)]',
        featured: 'bg-[var(--ac)] text-white',
        status: 'bg-[rgba(16,185,129,0.15)] border border-[rgba(16,185,129,0.3)] text-[var(--verde)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), 'px-5 py-2', className)} {...props} />
  )
}
