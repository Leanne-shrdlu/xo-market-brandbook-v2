'use client'

import { useState, useEffect } from 'react'
import TileModal from './TileModal'

interface ColorModalProps {
  onClose: () => void
}

interface ColorSwatch {
  hex: string
  textColor: string
}

const PRIMARY_COLORS: ColorSwatch[] = [
  { hex: '#ff87a6', textColor: '#ffffff' },
  { hex: '#ffffff', textColor: '#1a1a1a' },
  { hex: '#000000', textColor: '#ffffff' },
]

const SECONDARY_COLORS: ColorSwatch[] = [
  { hex: '#a293ff', textColor: '#ffffff' },
  { hex: '#d0fa49', textColor: '#1a1a1a' },
  { hex: '#ff9500', textColor: '#ffffff' },
  { hex: '#18daeb', textColor: '#1a1a1a' },
]

// Default: circles overlap, last circle on top (highest z-index).
//
// On hover of circle h:
//   h === 0 (first): circle 0 stays pinned at x=0, shows hex;
//                    all others shift right by `margin` → 25px gap opens between 0 and 1
//   h > 0  (middle/last): circle h shifts right by `margin` (gap on its left);
//                         circles after h shift right by `2×margin` (gap on its right too);
//                         circles before h stay — circle 0 is always pinned
//
// Result: 25px gap on each side of the hovered circle.
function OverlapHoverRow({ colors, size = 80 }: { colors: ColorSwatch[]; size?: number }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const overlap = size * 0.38              // default overlap between adjacent circles
  const step    = size - overlap           // center-to-center distance in default state
  const margin  = Math.round(overlap + 25) // shift that produces a 25px visual gap

  const groupWidth     = size + (colors.length - 1) * step
  const containerWidth = groupWidth + margin * 2  // room for the max possible shift

  const handleClick = (hex: string, i: number) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedIndex(i)
      setTimeout(() => setCopiedIndex(null), 1400)
    })
  }

  return (
    <div
      style={{ position: 'relative', height: size, width: containerWidth }}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {colors.map((color, i) => {
        let extraX = 0
        if (hoveredIndex !== null) {
          const h = hoveredIndex
          if (h === 0) {
            // First circle is pinned; push everything else right
            if (i > 0) extraX = margin
          } else {
            // Hovered circle opens a gap on its left; circles after it open a gap on its right
            if (i === h)      extraX = margin
            else if (i > h)   extraX = margin * 2
            // circles before h (and circle 0) stay
          }
        }

        const isHovered = hoveredIndex === i
        const isCopied  = copiedIndex === i

        return (
          <div
            key={color.hex + i}
            onMouseEnter={() => setHoveredIndex(i)}
            onClick={() => isHovered && handleClick(color.hex, i)}
            title={isHovered ? `Click to copy ${color.hex}` : ''}
            style={{
              position: 'absolute',
              left: i * step,
              top: 0,
              width: size,
              height: size,
              borderRadius: '50%',
              background: color.hex,
              border: color.hex === '#ffffff' ? '1.5px solid rgba(0,0,0,0.18)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isHovered ? 'pointer' : 'default',
              transform: `translateX(${extraX}px)`,
              transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s ease',
              boxShadow: isHovered ? '0 6px 20px rgba(0,0,0,0.18)' : 'none',
              zIndex: isHovered ? colors.length + 1 : i + 1,
            }}
          >
            {isHovered && (
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: isCopied
                    ? (color.textColor === '#ffffff' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.45)')
                    : color.textColor,
                  fontFamily: 'monospace',
                  letterSpacing: '0.02em',
                  userSelect: 'none',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  padding: '0 6px',
                  pointerEvents: 'none',
                }}
              >
                {isCopied ? '✓' : color.hex}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function ColorModal({ onClose }: ColorModalProps) {
  const [circleSize, setCircleSize] = useState(104)

  useEffect(() => {
    const update = () => setCircleSize(window.innerWidth <= 600 ? 68 : 104)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const isMobile = circleSize < 104

  return (
    <TileModal onClose={onClose}>
      <div
        style={{
          padding: isMobile ? '32px 20px 40px' : '48px 72px 56px',
          fontFamily: 'var(--font-rubik)',
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            color: '#1a1a1a',
            textAlign: 'center',
            lineHeight: 1.05,
            marginBottom: 48,
          }}
        >
          Color
        </h1>

        {/* Primary colors */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
            Primary colors:
          </h2>
          <p style={{ fontSize: 14, color: '#666', marginBottom: 28, lineHeight: 1.5 }}>
            For logos and lockups, only use our assets in black or white
          </p>
          <OverlapHoverRow colors={PRIMARY_COLORS} size={circleSize} />
        </section>

        {/* Secondary colors */}
        <section>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
            Secondary colors:
          </h2>
          <p style={{ fontSize: 14, color: '#666', marginBottom: 28, lineHeight: 1.5 }}>
            For logos and lockups, only use our assets in black or white
          </p>
          <OverlapHoverRow colors={SECONDARY_COLORS} size={circleSize} />
        </section>

      </div>
    </TileModal>
  )
}
