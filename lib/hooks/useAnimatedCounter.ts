'use client'

import { useEffect, useRef, useState } from 'react'

interface UseAnimatedCounterOptions {
  /** End value to count up to */
  end: number
  /** Duration in milliseconds */
  duration?: number
  /** Decimals to preserve */
  decimals?: number
  /** Trigger when element comes into view */
  startOnView?: boolean
}

/**
 * Animates a number from 0 to `end` when the returned ref enters the viewport.
 * Uses requestAnimationFrame with an ease-out curve for natural motion.
 */
export function useAnimatedCounter({
  end,
  duration = 1400,
  decimals = 0,
  startOnView = true,
}: UseAnimatedCounterOptions) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const start = () => {
      if (startedRef.current) return
      startedRef.current = true

      const startTime = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTime
        const t = Math.min(elapsed / duration, 1)
        // ease-out cubic for natural deceleration
        const eased = 1 - Math.pow(1 - t, 3)
        setValue(end * eased)
        if (t < 1) requestAnimationFrame(tick)
        else setValue(end)
      }

      requestAnimationFrame(tick)
    }

    if (!startOnView) {
      start()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start()
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration, startOnView])

  const formatted = value.toFixed(decimals)

  return { ref, value, formatted }
}
