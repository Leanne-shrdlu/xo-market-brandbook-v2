'use client'

import TileModal from './TileModal'

interface MotionModalProps {
  onClose: () => void
}

const PARTS = [
  {
    label: 'Part 1',
    href: '/downloads/XO Market Public Gifs Part 1.zip',
    gifs: [
      'Deek Agree',
      'Deek Beach',
      'deek broke',
      'deek broke then rich',
      'Deek Disagree',
      'deek down then up',
      'Deek Empty Wallet',
      'Deek Going Down',
      'Deek Swimming in Cash',
      'Deek Taking Notes',
    ],
  },
  {
    label: 'Part 2',
    href: '/downloads/XO Market Public Gifs Part 2.zip',
    gifs: [
      'Deek Basketball',
      'Deek Binoculars',
      'Deek Cooking',
      'Deek Football',
      'Deek GM 3',
      'Deek going up',
      'Deek McDonalds',
      'Deek Phone call',
      'Deek Politician',
      'Deek Trade',
      'Deek videogames',
    ],
  },
  {
    label: 'Part 3',
    href: '/downloads/XO Market Public Gifs Part 3.zip',
    gifs: [
      'Deek GM',
      'Deek GN',
      'Deek GN 2',
      'Deek Grass (1)',
      'Deek green chart',
      'Deek Hold',
      'Deek red chart',
      'Deek rich',
      'Deek Weekend',
      'Deek_ LFG',
      'Deek_ This is fine',
    ],
  },
]

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
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
          margin-bottom: 12px;
        }
        .motion-part { margin-bottom: 48px; }
        .motion-part:last-child { margin-bottom: 0; }
        .motion-part-header {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 12px;
        }
        .motion-gif-list {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 16px;
          margin-bottom: 20px;
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

        {/* Section heading */}
        <p style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', marginBottom: 32 }}>
          Download
        </p>

        {PARTS.map((part) => (
          <div key={part.label} className="motion-part">

            {/* Part label is the download link */}
            <div className="motion-part-header">
              <a
                href={part.href}
                download
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = 'underline')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.textDecoration = 'none')}
              >
                {part.label}
                <svg width="11" height="14" viewBox="0 0 14 18" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="1" x2="7" y2="14"/>
                  <polyline points="1,9 7,15 13,9"/>
                </svg>
              </a>
            </div>

            {/* GIF grid */}
            <div className="motion-grid">
              {part.gifs.map((name) => (
                <MediaCard
                  key={name}
                  src={`/brand/${name}.gif`}
                  alt={name}
                  download={`/brand/${name}.gif`}
                />
              ))}
            </div>

          </div>
        ))}

      </div>
    </TileModal>
  )
}
