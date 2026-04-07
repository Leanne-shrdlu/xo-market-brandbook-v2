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
          href="/brand/Deek_Pose_1.png"
          label="Download"
          suffix="Mascot (full)"
        />
        <div className="imagery-mascot-full-grid">
          <ImageCard
            src="/brand/Deek_Pose_1.png"
            alt="Deek mascot pose 1"
            download="/brand/Deek_Pose_1.png"
            width={220}
            height={300}
          />
          <ImageCard
            src="/brand/Deek_Pose_2.png"
            alt="Deek mascot pose 2"
            download="/brand/Deek_Pose_2.png"
            width={220}
            height={300}
          />
        </div>

        {/* Mascot head */}
        <DownloadSectionHeader
          href="/brand/deekface_1.png"
          label="Download"
          suffix="Mascot (head)"
        />
        <div className="imagery-mascot-grid">
          <ImageCard
            src="/brand/deekface_1.png"
            alt="Deek face 1"
            download="/brand/deekface_1.png"
            width={160}
            height={160}
          />
          <ImageCard
            src="/brand/deekface_2.png"
            alt="Deek face 2"
            download="/brand/deekface_2.png"
            width={160}
            height={160}
          />
          <ImageCard
            src="/brand/deekface_3.png"
            alt="Deek face 3"
            download="/brand/deekface_3.png"
            width={160}
            height={160}
          />
        </div>
      </div>
    </TileModal>
  )
}
