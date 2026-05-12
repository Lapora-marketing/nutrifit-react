import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center text-center font-bold transition-all duration-300 cursor-pointer border-none rounded-lg whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'bg-[var(--ac)] text-white hover:filter hover:drop-shadow-lg hover:translate-y-[-2px]',
        outline: 'bg-transparent border-1.5 border-[rgba(255,255,255,0.2)] text-white hover:border-[var(--ac)] hover:text-[var(--ac)]',
        ghost: 'bg-transparent text-white hover:bg-[rgba(255,255,255,0.1)]',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-7 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
