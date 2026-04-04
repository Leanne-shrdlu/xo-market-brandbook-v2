'use client'

import { useState, useEffect, useCallback } from 'react'

// Cubic bezier implementation using Newton-Raphson iteration
function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  return function (t: number): number {
    if (t <= 0) return 0
    if (t >= 1) return 1

    const cx = 3 * x1
    const bx = 3 * (x2 - x1) - cx
    const ax = 1 - cx - bx

    const cy = 3 * y1
    const by = 3 * (y2 - y1) - cy
    const ay = 1 - cy - by

    function sampleCurveX(t: number) {
      return ((ax * t + bx) * t + cx) * t
    }

    function sampleCurveY(t: number) {
      return ((ay * t + by) * t + cy) * t
    }

    function solveCurveX(x: number) {
      let t2 = x
      for (let i = 0; i < 8; i++) {
        const x2 = sampleCurveX(t2) - x
        if (Math.abs(x2) < 1e-6) return t2
        const d2 = (3 * ax * t2 + 2 * bx) * t2 + cx
        if (Math.abs(d2) < 1e-6) break
        t2 = t2 - x2 / d2
      }
      return t2
    }

    return sampleCurveY(solveCurveX(t))
  }
}

const easeScroll = cubicBezier(1, 0.25, 0.85, 1)

export interface ScrollAnimationState {
  scrollProgress: number
  easedProgress: number
  hasScrolled: boolean
}

export function useScrollAnimation(): ScrollAnimationState {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [easedProgress, setEasedProgress] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const rawProgress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0

    setScrollProgress(rawProgress)
    setEasedProgress(easeScroll(rawProgress))

    if (rawProgress > 0.01 && !hasScrolled) {
      setHasScrolled(true)
    }
  }, [hasScrolled])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { scrollProgress, easedProgress, hasScrolled }
}

