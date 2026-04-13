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

function ColorRow({ colors, size = 80 }: { colors: ColorSwatch[]; size?: number }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleClick = (hex: string, i: number) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedIndex(i)
      setTimeout(() => setCopiedIndex(null), 1400)
    })
  }

  return (
    <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>
      {colors.map((color, i) => {
        const isCopied = copiedIndex === i
        return (
          <div
            key={color.hex + i}
            onClick={() => handleClick(color.hex, i)}
            title={`Click to copy ${color.hex}`}
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              background: color.hex,
              border: color.hex === '#ffffff' ? '1.5px solid rgba(0,0,0,0.18)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: isCopied ? 28 : 11,
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
    <TileModal onClose={onClose} title="Color">
      <div
        style={{
          padding: isMobile ? '32px 20px 40px' : '48px 72px 56px',
          fontFamily: 'var(--font-rubik)',
        }}
      >

        {/* Primary colors */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
            Primary colors:
          </h2>
          <p className="popup-desc" style={{ color: '#666', marginBottom: 28 }}>
            For logos and lockups, only use our assets in black or white
          </p>
          <ColorRow colors={PRIMARY_COLORS} size={circleSize} />
        </section>

        {/* Secondary colors */}
        <section>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>
            Secondary colors:
          </h2>
          <p className="popup-desc" style={{ color: '#666', marginBottom: 28 }}>
            For logos and lockups, only use our assets in black or white
          </p>
          <ColorRow colors={SECONDARY_COLORS} size={circleSize} />
        </section>

      </div>
    </TileModal>
  )
}
