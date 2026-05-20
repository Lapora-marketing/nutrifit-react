'use client'

import { useAnimatedCounter } from '@/lib/hooks/useAnimatedCounter'

interface AnimatedNumberProps {
  /** String like "98%", "+500", "6sem", "$490k" */
  value: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Renders an animated number with preserved prefix/suffix.
 * Example: "98%" → animates 0 → 98 with "%" appended
 *          "+500" → animates 0 → 500 with "+" prepended
 *          "6sem" → animates 0 → 6 with "sem" appended
 */
export function AnimatedNumber({
  value,
  duration = 1400,
  className,
  style,
}: AnimatedNumberProps) {
  // Extract numeric core from string
  const match = value.match(/^([^\d]*?)([\d.,]+)(.*)$/)

  if (!match) {
    return <span className={className} style={style}>{value}</span>
  }

  const [, prefix, numberPart, suffix] = match
  const numeric = parseFloat(numberPart.replace(/,/g, '.')) || 0
  const decimals = numberPart.includes('.') || numberPart.includes(',') ? 1 : 0

  const { ref, value: animated } = useAnimatedCounter({
    end: numeric,
    duration,
    decimals,
  })

  const display = decimals === 0 ? Math.round(animated) : animated.toFixed(1)

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{display}{suffix}
    </span>
  )
}
