/**
 * Clamp a number between min and max bounds.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

/**
 * Linear interpolation between two values.
 */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

/**
 * Map a value from one range to another, with optional clamping.
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
  shouldClamp = true
): number {
  const t = (value - inMin) / (inMax - inMin)
  const result = outMin + t * (outMax - outMin)
  return shouldClamp ? clamp(result, outMin, outMax) : result
}

/**
 * Concatenate class names, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

