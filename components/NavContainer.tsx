'use client'

import { useState } from 'react'
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
  component: ComponentType<{ hovered: boolean }>
}

const TILES: TileConfig[] = [
  {
    id: 'voice-tone',
    label: 'Brand Voice',
    color: '#ff9500',
    textColor: '#3d1a00',
    component: VoiceToneTile,
  },
  {
    id: 'logo',
    label: 'Logo',
    color: '#18daeb',
    textColor: '#003d4d',
    component: LogoTile,
  },
  {
    id: 'typography',
    label: 'Typography',
    color: '#ffffff',
    textColor: '#000000',
    component: TypographyTile,
  },
  {
    id: 'color',
    label: 'Color',
    color: '#d0fa49',
    textColor: '#1a2600',
    component: ColorTile,
  },
  {
    id: 'imagery',
    label: 'Imagery',
    color: '#ff87a6',
    textColor: '#1a1a1a',
    component: ImageryTile,
  },
  {
    id: 'motion',
    label: 'Motion',
    color: '#a293ff',
    textColor: '#2d0050',
    component: MotionTile,
  },
]

export default function NavContainer() {
  const [openModal, setOpenModal] = useState<string | null>(null)

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
        }}
      >
        {TILES.map((tile) => {
          const TileComponent = tile.component
          return (
            <NavTile
              key={tile.id}
              id={tile.id}
              label={tile.label}
              color={tile.color}
              textColor={tile.textColor}
              TileComponent={TileComponent}
              onOpenModal={() => setOpenModal(tile.id)}
            />
          )
        })}
      </div>

      {/* Grid lines */}
      <GridLines />

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

function GridLines() {
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
      }}
    >
      {[33.333, 66.666].map((pct) => (
        <div
          key={`v${pct}`}
          style={{
            position: 'absolute',
            top: 0,
            left: `${pct}%`,
            width: '1px',
            height: '100%',
            background: 'rgba(0,0,0,0.12)',
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '1px',
          background: 'rgba(0,0,0,0.12)',
        }}
      />
    </div>
  )
}
