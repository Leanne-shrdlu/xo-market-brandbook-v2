'use client'

import Image from 'next/image'
import TileModal from './TileModal'

interface ImageryModalProps {
  onClose: () => void
}

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

function ImageCard({
  src,
  alt,
  download: downloadHref,
  width,
  height,
}: {
  src: string
  alt: string
  download: string
  width: number
  height: number
}) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 10,
        overflow: 'hidden',
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto', display: 'block' }}
      />
      <a
        href={downloadHref}
        download
        title={`Download ${alt}`}
        style={{
          position: 'absolute',
          bottom: 8,
          right: 10,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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

export default function ImageryModal({ onClose }: ImageryModalProps) {
  return (
    <TileModal onClose={onClose} title="Imagery">
      <style>{`
        .imagery-modal-wrap { padding: 48px 72px 56px; }
        @media (max-width: 600px) {
          .imagery-modal-wrap { padding: 32px 20px 40px; }
        }
        .imagery-icons-grid {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 36px;
        }
        .imagery-mascot-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }
        .imagery-mascot-full-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }
        @media (max-width: 640px) {
          .imagery-mascot-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .imagery-mascot-full-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="imagery-modal-wrap" style={{ fontFamily: 'var(--font-rubik)' }}>
        {/* Icons */}
        <DownloadSectionHeader
          href="/downloads/icons.zip"
          label="Download"
          suffix="icons"
        />
        <div className="imagery-icons-grid">
          {[
            { src: '/brand/icons/Group 2549.png', alt: 'Icon 1' },
            { src: '/brand/icons/Group 2550.png', alt: 'Icon 2' },
            { src: '/brand/icons/image 217.png',  alt: 'Icon 3' },
            { src: '/brand/icons/image 218.png',  alt: 'Icon 4' },
            { src: '/brand/icons/image 219.png',  alt: 'Icon 5' },
            { src: '/brand/icons/image 220.png',  alt: 'Icon 6' },
          ].map((icon) => (
            <div
              key={icon.src}
              style={{
                width: 90,
                height: 90,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icon.src}
                alt={icon.alt}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          ))}
        </div>

        {/* Mascot full */}
        <DownloadSectionHeader
          href="/downloads/Deek Poses.zip"
          label="Download"
          suffix="Mascot (full)"
        />
        <div className="imagery-mascot-full-grid">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43].map((n) => (
            <ImageCard
              key={n}
              src={`/brand/Deek_Pose_${n}.png`}
              alt={`Deek mascot pose ${n}`}
              download={`/brand/Deek_Pose_${n}.png`}
              width={220}
              height={300}
            />
          ))}
        </div>

        {/* Mascot head */}
        <DownloadSectionHeader
          href="/downloads/Deek Faces.zip"
          label="Download"
          suffix="Mascot (head)"
        />
        <div className="imagery-mascot-grid">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((n) => (
            <ImageCard
              key={n}
              src={`/brand/deekface_${n}.png`}
              alt={`Deek face ${n}`}
              download={`/brand/deekface_${n}.png`}
              width={160}
              height={160}
            />
          ))}
        </div>
      </div>
    </TileModal>
  )
}
