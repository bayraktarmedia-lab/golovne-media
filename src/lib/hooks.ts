'use client'

import { useEffect, useRef, useState } from 'react'

// Intersection Observer hook for reveal animations
export function useReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px 100px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Counter animation hook
export function useCounter(target: number, isDecimal = false) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  const start = () => {
    if (started) return
    setStarted(true)

    const duration = 1600
    const startTime = performance.now()
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1)
      setValue(easeOut(t) * target)
      if (t < 1) requestAnimationFrame(tick)
      else setValue(target)
    }
    requestAnimationFrame(tick)
  }

  const formatted = isDecimal
    ? value.toFixed(1).replace('.', ',')
    : Math.floor(value).toLocaleString('uk')

  return { formatted, start }
}
