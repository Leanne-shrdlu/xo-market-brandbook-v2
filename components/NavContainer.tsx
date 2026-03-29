'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import NavButton from './NavButton'
import NavTile from './NavTile'
import FrameworkTile from './tiles/FrameworkTile'
import VoiceToneTile from './tiles/VoiceToneTile'
import LogoTile from './tiles/LogoTile'
import TypographyTile from './tiles/TypographyTile'
import IconographyTile from './tiles/IconographyTile'
import ColorTile from './tiles/ColorTile'
import ImageryTile from './tiles/ImageryTile'
import MotionTile from './tiles/MotionTile'
import type { ComponentType } from 'react'

interface TileConfig {
  id: string
  label: string
  color: string
  textColor: string
  offsetX: number
  offsetY: number
  component: ComponentType<{ hovered: boolean }>
}

const TILES: TileConfig[] = [
  {
    id: 'framework',
    label: 'Framework',
    color: '#1e2d3d',
    textColor: '#ffffff',
    offsetX: 4,
    offsetY: 2,
    component: FrameworkTile,
  },
  {
    id: 'voice-tone',
    label: 'Voice & Tone',
    color: '#f5c842',
    textColor: '#3d2800',
    offsetX: -0.1,
    offsetY: 1,
    component: VoiceToneTile,
  },
  {
    id: 'logo',
    label: 'Logo',
    color: '#5fd0f0',
    textColor: '#003d4d',
    offsetX: -1,
    offsetY: -0.1,
    component: LogoTile,
  },
  {
    id: 'typography',
    label: 'Typography',
    color: '#e8471c',
    textColor: '#ffffff',
    offsetX: -4,
    offsetY: 2,
    component: TypographyTile,
  },
  {
    id: 'iconography',
    label: 'Iconography',
    color: '#9fd46a',
    textColor: '#1a3d00',
    offsetX: 4,
    offsetY: -2,
    component: IconographyTile,
  },
  {
    id: 'color',
    label: 'Color',
    color: '#111111',
    textColor: '#ffffff',
    offsetX: 1,
    offsetY: 0.1,
    component: ColorTile,
  },
  {
    id: 'imagery',
    label: 'Imagery',
    color: '#8b1a4a',
    textColor: '#ffffff',
    offsetX: 0.1,
    offsetY: -1,
    component: ImageryTile,
  },
  {
    id: 'motion',
    label: 'Motion',
    color: '#c9a8d9',
    textColor: '#2d0050',
    offsetX: -4,
    offsetY: -2,
    component: MotionTile,
  },
]

export default function NavContainer() {
  const { scrollProgress, easedProgress, hasScrolled } = useScrollAnimation()
  const [loaded, setLoaded] = useState(false)
  const [showChevrons, setShowChevrons] = useState(false)
  const [vw, setVw] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1440
  )
  const [vh, setVh] = useState(() =>
    typeof window !== 'undefined' ? window.innerHeight : 900
  )

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth)
      setVh(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120)
    const chevronTimer = setTimeout(() => setShowChevrons(true), 2600)
    return () => {
      clearTimeout(timer)
      clearTimeout(chevronTimer)
    }
  }, [])

  let buttonState = 1
  if (scrollProgress > 0.05 && scrollProgress <= 0.12) buttonState = 2
  if (scrollProgress > 0.12) buttonState = 3

  const tileProgress = easedProgress
  const gridLineOpacity = Math.min(1, Math.max(0, (tileProgress - 0.7) / 0.3))

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* Tile grid */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          pointerEvents: tileProgress > 0.55 ? 'all' : 'none',
        }}
      >
        {TILES.map((tile) => {
          const TileComponent = tile.component
          const tileW = vw / 4
          const tileH = vh / 2
          const tx = tile.offsetX * tileW * (1 - tileProgress)
          const ty = tile.offsetY * tileH * (1 - tileProgress)
          const scale = 2 - tileProgress

          return (
            <NavTile
              key={tile.id}
              id={tile.id}
              label={tile.label}
              color={tile.color}
              textColor={tile.textColor}
              transform={`translate(${tx}px, ${ty}px) scale(${scale})`}
              progress={tileProgress}
              TileComponent={TileComponent}
            />
          )
        })}
      </div>

      {/* Grid lines */}
      <GridLines loaded={loaded} opacity={gridLineOpacity} />

      {/* Central NavButton */}
      <NavButton
        buttonState={buttonState}
        scrollProgress={scrollProgress}
        easedProgress={easedProgress}
        loaded={loaded}
      />

      {/* Scroll chevrons */}
      {showChevrons && !hasScrolled && scrollProgress < 0.015 && <ScrollChevrons />}
    </div>
  )
}

function GridLines({ loaded, opacity }: { loaded: boolean; opacity: number }) {
  const lineOpacity = opacity > 0 ? opacity : loaded ? 1 : 0

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10,
        opacity: lineOpacity,
        transition: 'opacity 0.4s ease',
      }}
    >
      {[25, 50, 75].map((pct, i) => (
        <div
          key={`v${pct}`}
          style={{
            position: 'absolute',
            top: 0,
            left: `${pct}%`,
            width: '1px',
            height: loaded ? '100%' : '0%',
            background: 'rgba(0,0,0,0.12)',
            transformOrigin: 'top center',
            transition: loaded
              ? `height 1.1s cubic-bezier(0.4,0,0.2,1) ${i * 80}ms`
              : 'none',
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: loaded ? '100%' : '0%',
          height: '1px',
          background: 'rgba(0,0,0,0.12)',
          transition: loaded ? 'width 1.1s cubic-bezier(0.4,0,0.2,1) 0.18s' : 'none',
        }}
      />
    </div>
  )
}

function ScrollChevrons() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 36,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        zIndex: 200,
        animation: 'chevronBounce 2s ease-in-out infinite',
      }}
    >
      <style>{`
        @keyframes chevronBounce {
          0%, 100% { transform: translateX(-50%) translateY(0px); opacity: 0.5; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 1; }
        }
      `}</style>
      <svg width="22" height="13" viewBox="0 0 22 13" fill="none">
        <path
          d="M1 1.5L11 10.5L21 1.5"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg width="22" height="13" viewBox="0 0 22 13" fill="none" style={{ opacity: 0.38 }}>
        <path
          d="M1 1.5L11 10.5L21 1.5"
          stroke="#1a1a1a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
