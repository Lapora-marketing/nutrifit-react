'use client'

import { useScrollReveal } from '@/lib/hooks/useScrollReveal'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  className?: string
  as?: 'div' | 'section' | 'article'
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const initialTransform = {
    up: 'translateY(24px)',
    down: 'translateY(-24px)',
    left: 'translateX(24px)',
    right: 'translateX(-24px)',
    fade: 'translateY(0)',
  }[direction]

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : initialTransform,
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  )
}
