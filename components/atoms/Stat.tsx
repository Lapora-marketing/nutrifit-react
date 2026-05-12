import { cn } from '@/lib/cn'

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  number: string
  label: string
  color?: string
}

export function Stat({ number, label, color = 'var(--ac)', className, ...props }: StatProps) {
  return (
    <div className={cn('text-center', className)} {...props}>
      <div className="text-4xl font-black mb-2" style={{ color }}>
        {number}
      </div>
      <div className="text-sm text-[rgba(255,255,255,0.5)]">{label}</div>
    </div>
  )
}
