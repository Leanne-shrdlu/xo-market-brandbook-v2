'use client'

import { useState } from 'react'
import type { ComponentType } from 'react'

interface NavTileProps {
  id: string
  label: string
  color: string
  textColor: string
  transform: string
  progress: number
  TileComponent: ComponentType<{ hovered: boolean }>
  onOpenModal?: () => void
}

export default function NavTile({
  id,
  label,
  color,
  textColor,
  transform,
  progress,
  TileComponent,
  onOpenModal,
}: NavTileProps) {
  const [hovered, setHovered] = useState(false)

  const isVisible = progress > 0.08

  return (
    <>
    <style>{`
      .nav-tile-bar { padding: 20px 24px; }
      .nav-tile-label { font-size: 22px; }
      @media (max-width: 600px) {
        .nav-tile-bar { padding: 10px 12px; }
        .nav-tile-label { font-size: clamp(13px, 4vw, 17px); }
      }
    `}</style>
    <div
      data-tile-id={id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpenModal}
      style={{
        position: 'relative',
        background: hovered ? '#1a1a1a' : color,
        color: hovered ? '#ffffff' : textColor,
        overflow: 'hidden',
        cursor: 'pointer',
        transform: transform,
        transformOrigin: 'center center',
        transition: [
          'background 0.38s cubic-bezier(0.4,0,0.2,1)',
          'color 0.38s cubic-bezier(0.4,0,0.2,1)',
        ].join(', '),
        willChange: 'transform',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.55s ease',
        }}
      >
        {/* Illustration / visual area */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <TileComponent hovered={hovered} />
        </div>

        {/* Bottom label bar */}
        <div
          className="nav-tile-bar"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 5,
          }}
        >
          <span
            className="nav-tile-label"
            style={{
              fontWeight: 600,
              letterSpacing: '0.01em',
              fontFamily: 'var(--font-rubik)',
              color: 'inherit',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            {label}
          </span>

          {/* Arrow icon — appears on hover */}
          <svg
            viewBox="0 0 16 16"
            style={{
              width: 16,
              height: 16,
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translate(0,0)' : 'translate(-4px, 4px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              flexShrink: 0,
            }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 13L13 3M13 3H6M13 3V10" />
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}
