'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import NavButton from './NavButton'
import NavTile from './NavTile'
import VoiceToneTile from './tiles/VoiceToneTile'
import LogoTile from './tiles/LogoTile'
import TypographyTile from './tiles/TypographyTile'
import ColorTile from './tiles/ColorTile'
import ImageryTile from './tiles/ImageryTile'
import MotionTile from './tiles/MotionTile'
import LogoModal from './LogoModal'
import VoiceToneModal from './VoiceToneModal'
import TypographyModal from './TypographyModal'
import ColorModal from './ColorModal'
import ImageryModal from './ImageryModal'
import MotionModal from './MotionModal'
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

const SOCIALS = [
  {
    label: 'Discord',
    href: 'https://discord.gg/xomarket',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/xomarket',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/xomarket',
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://research.xo.market',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
]

function SocialBar({ opacity }: { opacity: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 200,
        pointerEvents: opacity > 0.05 ? 'all' : 'none',
        opacity,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div style={{ width: '100%', height: '1px', background: '#ff87a6' }} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          padding: '14px 24px',
          background: 'transparent',
        }}
      >
        <style>{`
          .social-icon-link {
            color: #1a1a1a;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
            text-decoration: none;
          }
          .social-icon-link:hover { transform: scale(1.15); }
        `}</style>
        {SOCIALS.map(({ label, href, icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon-link">
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

const TILES: TileConfig[] = [
  {
    id: 'voice-tone',
    label: 'Brand Voice',
    color: '#ff9500',
    textColor: '#3d1a00',
    offsetX: -0.1,
    offsetY: 1,
    component: VoiceToneTile,
  },
  {
    id: 'logo',
    label: 'Logo',
    color: '#18daeb',
    textColor: '#003d4d',
    offsetX: -1,
    offsetY: -0.1,
    component: LogoTile,
  },
  {
    id: 'typography',
    label: 'Typography',
    color: '#ffffff',
    textColor: '#000000',
    offsetX: -4,
    offsetY: 2,
    component: TypographyTile,
  },
  {
    id: 'color',
    label: 'Color',
    color: '#d0fa49',
    textColor: '#1a2600',
    offsetX: 1,
    offsetY: 0.1,
    component: ColorTile,
  },
  {
    id: 'imagery',
    label: 'Imagery',
    color: '#ff87a6',
    textColor: '#1a1a1a',
    offsetX: 0.1,
    offsetY: -1,
    component: ImageryTile,
  },
  {
    id: 'motion',
    label: 'Motion',
    color: '#a293ff',
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
  const [openModal, setOpenModal] = useState<string | null>(null)
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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          pointerEvents: tileProgress > 0.55 ? 'all' : 'none',
        }}
      >
        {TILES.map((tile) => {
          const TileComponent = tile.component
          const tileW = vw / 3
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
              onOpenModal={() => setOpenModal(tile.id)}
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

      {/* Social icons */}
      <SocialBar opacity={Math.max(0, 1 - scrollProgress / 0.08)} />

      {/* Modals */}
      {openModal === 'logo' && <LogoModal onClose={() => setOpenModal(null)} />}
      {openModal === 'voice-tone' && <VoiceToneModal onClose={() => setOpenModal(null)} />}
      {openModal === 'typography' && <TypographyModal onClose={() => setOpenModal(null)} />}
      {openModal === 'color' && <ColorModal onClose={() => setOpenModal(null)} />}
      {openModal === 'imagery' && <ImageryModal onClose={() => setOpenModal(null)} />}
      {openModal === 'motion' && <MotionModal onClose={() => setOpenModal(null)} />}
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
      {[33.333, 66.666].map((pct, i) => (
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
