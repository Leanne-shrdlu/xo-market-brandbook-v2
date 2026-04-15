'use client'

import type { ComponentType } from 'react'

interface NavTileProps {
  id: string
  label: string
  color: string
  textColor: string
  TileComponent: ComponentType<{ hovered: boolean }>
  onOpenModal?: () => void
  gridColumn?: string
}

export default function NavTile({
  id,
  label,
  color,
  textColor,
  TileComponent,
  onOpenModal,
  gridColumn,
}: NavTileProps) {
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
      onClick={onOpenModal}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: color,
        color: textColor,
        overflow: 'hidden',
        cursor: 'pointer',
        ...(gridColumn ? { gridColumn } : {}),
      }}
    >
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
          <TileComponent hovered={false} />
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
        </div>
      </div>
    </div>
    </>
  )
}
