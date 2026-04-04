'use client'

import TileModal from './TileModal'

interface MotionModalProps {
  onClose: () => void
}

const GIFS = [
  { src: '/brand/Deek Agree.gif', alt: 'Deek Agree', download: '/brand/Deek Agree.gif' },
  { src: '/brand/Deek Basketball.gif', alt: 'Deek Basketball', download: '/brand/Deek Basketball.gif' },
  { src: '/brand/Deek Beach.gif', alt: 'Deek Beach', download: '/brand/Deek Beach.gif' },
]

const MOVIES = [
  { src: '/brand/Deek Weekend.gif', alt: 'Deek Weekend', download: '/brand/Deek Weekend.gif' },
  { src: '/brand/Deek Agree.gif', alt: 'Deek Agree', download: '/brand/Deek Agree.gif' },
  { src: '/brand/Deek Basketball.gif', alt: 'Deek Basketball', download: '/brand/Deek Basketball.gif' },
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
    <TileModal onClose={onClose}>
      <style>{`
        .motion-modal-wrap { padding: 48px 72px 56px; }
        .motion-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }
        @media (max-width: 600px) {
          .motion-modal-wrap { padding: 32px 20px 40px; }
          .motion-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
        @media (max-width: 380px) {
          .motion-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="motion-modal-wrap" style={{ fontFamily: 'var(--font-rubik)' }}>
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
          Motion
        </h1>

        {/* GIFs */}
        <h2
          style={{
            fontSize: 'clamp(17px, 2vw, 20px)',
            fontWeight: 500,
            color: '#1a1a1a',
            marginBottom: 16,
          }}
        >
          GIFs
        </h2>
        <div className="motion-grid">
          {GIFS.map((g) => (
            <MediaCard key={g.src} src={g.src} alt={g.alt} download={g.download} />
          ))}
        </div>

        {/* Movies */}
        <h2
          style={{
            fontSize: 'clamp(17px, 2vw, 20px)',
            fontWeight: 500,
            color: '#1a1a1a',
            marginBottom: 16,
          }}
        >
          Movies
        </h2>
        <div className="motion-grid">
          {MOVIES.map((m) => (
            <MediaCard key={m.src + m.alt} src={m.src} alt={m.alt} download={m.download} />
          ))}
        </div>
      </div>
    </TileModal>
  )
}
