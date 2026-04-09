'use client'

import TileModal from './TileModal'

interface MotionModalProps {
  onClose: () => void
}

const GIFS = [
  'Deek Agree',
  'Deek Basketball',
  'Deek Beach',
  'Deek Binoculars',
  'Deek Cooking',
  'Deek Disagree',
  'Deek Empty Wallet',
  'Deek Football',
  'Deek GM',
  'Deek GM 3',
  'Deek GN',
  'Deek GN 2',
  'Deek Going Down',
  'Deek Grass (1)',
  'Deek Hold',
  'Deek McDonalds',
  'Deek Phone call',
  'Deek Politician',
  'Deek Swimming in Cash',
  'Deek Taking Notes',
  'Deek Trade',
  'Deek Weekend',
  'Deek going up',
  'Deek green chart',
  'Deek red chart',
  'Deek rich',
  'Deek videogames',
  'Deek_ LFG',
  'Deek_ This is fine',
  'deek broke',
  'deek broke then rich',
  'deek down then up',
]

function DownloadSectionHeader({
  href,
  label,
  suffix,
}: {
  href: string
  label: string
  suffix: string
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <a
        href={href}
        download
        style={{
          fontSize: 18,
          color: '#1a1a1a',
          textDecoration: 'none',
          fontFamily: 'var(--font-rubik)',
          display: 'inline-flex',
          alignItems: 'baseline',
          gap: 6,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget.querySelector('.dl-label') as HTMLElement
          if (el) el.style.textDecoration = 'underline'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget.querySelector('.dl-label') as HTMLElement
          if (el) el.style.textDecoration = 'none'
        }}
      >
        <span className="dl-label" style={{ fontWeight: 700 }}>
          {label}
        </span>
        <span style={{ fontWeight: 400 }}>{suffix}</span>
      </a>
    </div>
  )
}

function MediaCard({ src, alt, download }: { src: string; alt: string; download: string }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 10,
        overflow: 'hidden',
        background: '#f0f0f0',
        aspectRatio: '4 / 3',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      <a
        href={download}
        download
        title={`Download ${alt}`}
        style={{
          position: 'absolute',
          bottom: 10,
          right: 12,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="1" x2="7" y2="14"/>
          <polyline points="1,9 7,15 13,9"/>
        </svg>
      </a>
    </div>
  )
}

export default function MotionModal({ onClose }: MotionModalProps) {
  return (
    <TileModal onClose={onClose} title="Motion">
      <style>{`
        .motion-modal-wrap { padding: 48px 72px 56px; }
        .motion-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }
        @media (max-width: 900px) {
          .motion-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 600px) {
          .motion-modal-wrap { padding: 32px 20px 40px; }
          .motion-grid { grid-template-columns: repeat(3, 1fr); gap: 12px; }
        }
        @media (max-width: 400px) {
          .motion-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="motion-modal-wrap" style={{ fontFamily: 'var(--font-rubik)' }}>
        <DownloadSectionHeader
          href="/downloads/XO Market Public Gifs.zip"
          label="Download"
          suffix="GIFs"
        />
        <div className="motion-grid">
          {GIFS.map((name) => (
            <MediaCard
              key={name}
              src={`/brand/${name}.gif`}
              alt={name}
              download={`/brand/${name}.gif`}
            />
          ))}
        </div>
      </div>
    </TileModal>
  )
}
