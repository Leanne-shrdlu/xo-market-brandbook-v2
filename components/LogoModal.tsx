'use client'

import Image from 'next/image'
import TileModal from './TileModal'

interface LogoModalProps {
  onClose: () => void
}

export default function LogoModal({ onClose }: LogoModalProps) {
  return (
    <TileModal onClose={onClose}>
      <style>{`
        .logo-modal-grid {
          display: grid;
          grid-template-columns: 1.4fr 1.6fr 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .logo-modal-img-wrap {
          height: 80px;
          display: flex;
          align-items: flex-end;
          margin-bottom: 14px;
        }
        .logo-modal-label {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .logo-modal-desc {
          font-size: 15px;
          line-height: 1.5;
        }
        .logo-modal-download {
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 4px;
          line-height: 1.3;
        }
        .logo-modal-download:hover {
          text-decoration: underline;
        }
        @media (max-width: 640px) {
          .logo-modal-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }
        @media (max-width: 400px) {
          .logo-modal-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        .logo-title-wrap { padding: 48px 72px 0; }
        .logo-section-black { padding: 0 72px 40px; }
        .logo-section-white { padding: 32px 72px 40px; }
        .logo-footer { padding: 20px 72px 28px; }
        @media (max-width: 600px) {
          .logo-title-wrap { padding: 32px 20px 0; }
          .logo-section-black { padding: 0 20px 32px; }
          .logo-section-white { padding: 24px 20px 32px; }
          .logo-footer { padding: 16px 20px 24px; }
        }
      `}</style>

      {/* Title */}
      <div
        className="logo-title-wrap"
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-rubik)',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.05,
            marginBottom: 40,
          }}
        >
          Logo
        </h1>
      </div>

      {/* Certified Black brand assets */}
      <section
        className="logo-section-black"
        style={{ fontFamily: 'var(--font-rubik)' }}
      >
        <h2
          style={{
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            fontWeight: 600,
            color: '#1a1a1a',
            marginBottom: 32,
          }}
        >
          Certified Black brand assets
        </h2>

        <div className="logo-modal-grid">
          {/* Lockup */}
          <div>
            <div className="logo-modal-img-wrap">
              <Image
                src="/brand/XO Market Logo Coloured.svg"
                alt="XO Market Lockup"
                width={180}
                height={72}
                unoptimized
                style={{ objectFit: 'contain', objectPosition: 'left center', maxWidth: '100%' }}
              />
            </div>
            <p className="logo-modal-label" style={{ color: '#1a1a1a' }}>Lockup</p>
            <p className="logo-modal-desc" style={{ color: '#666666' }}>Default Brand representation</p>
          </div>

          {/* Wordmark */}
          <div>
            <div className="logo-modal-img-wrap">
              <Image
                src="/brand/XO Market Wordmark Coloured.svg"
                alt="XO Market Wordmark"
                width={160}
                height={72}
                unoptimized
                style={{ objectFit: 'contain', objectPosition: 'left center', maxWidth: '100%' }}
              />
            </div>
            <p className="logo-modal-label" style={{ color: '#1a1a1a' }}>Wordmark</p>
            <p className="logo-modal-desc" style={{ color: '#666666' }}>Used in places where logo is already in present</p>
          </div>

          {/* Logomark */}
          <div>
            <div className="logo-modal-img-wrap">
              <Image
                src="/brand/XO Market Logomark Coloured.svg"
                alt="XO Market Logomark"
                width={64}
                height={64}
                unoptimized
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </div>
            <p className="logo-modal-label" style={{ color: '#1a1a1a' }}>Logomark</p>
            <p className="logo-modal-desc" style={{ color: '#666666' }}>Used for profile pictures</p>
          </div>

          {/* Download ZIP */}
          <div>
            <div className="logo-modal-img-wrap" />
            <a
              href="/downloads/Black brand assets - xo market.zip"
              download
              className="logo-modal-download"
              style={{ color: '#1a1a1a' }}
            >
              Download ZIP
            </a>
            <p className="logo-modal-desc" style={{ color: '#666666' }}>Black brand assets</p>
          </div>
        </div>
      </section>

      {/* Certified White brand assets */}
      <section
        className="logo-section-white"
        style={{ background: '#1a1a1a', fontFamily: 'var(--font-rubik)' }}
      >
        <h2
          style={{
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: 32,
          }}
        >
          Certified White brand assets
        </h2>

        <div className="logo-modal-grid">
          {/* Lockup */}
          <div>
            <div className="logo-modal-img-wrap">
              <Image
                src="/brand/XO Market Logo White.svg"
                alt="XO Market Lockup White"
                width={180}
                height={72}
                unoptimized
                style={{ objectFit: 'contain', objectPosition: 'left center', maxWidth: '100%' }}
              />
            </div>
            <p className="logo-modal-label" style={{ color: '#ffffff' }}>Lockup</p>
            <p className="logo-modal-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>Default Brand representation</p>
          </div>

          {/* Wordmark */}
          <div>
            <div className="logo-modal-img-wrap">
              <Image
                src="/brand/XO Market Wordmark White.svg"
                alt="XO Market Wordmark White"
                width={160}
                height={72}
                unoptimized
                style={{ objectFit: 'contain', objectPosition: 'left center', maxWidth: '100%' }}
              />
            </div>
            <p className="logo-modal-label" style={{ color: '#ffffff' }}>Wordmark</p>
            <p className="logo-modal-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>Used in places where logo is already in present</p>
          </div>

          {/* Logomark */}
          <div>
            <div className="logo-modal-img-wrap">
              <Image
                src="/brand/XO Market Logomark Dark.svg"
                alt="XO Market Logomark White"
                width={64}
                height={64}
                unoptimized
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </div>
            <p className="logo-modal-label" style={{ color: '#ffffff' }}>Logomark</p>
            <p className="logo-modal-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>Used for profile pictures</p>
          </div>

          {/* Download ZIP */}
          <div>
            <div className="logo-modal-img-wrap" />
            <a
              href="/downloads/White brand assets - xo market.zip"
              download
              className="logo-modal-download"
              style={{ color: '#ffffff' }}
            >
              Download ZIP
            </a>
            <p className="logo-modal-desc" style={{ color: 'rgba(255,255,255,0.55)' }}>White brand assets</p>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <p
        className="logo-footer"
        style={{
          fontSize: '16px',
          color: '#888888',
          fontFamily: 'var(--font-rubik)',
          lineHeight: 1.55,
        }}
      >
        You can download logos individually by rightclicking on the logo and choose copy/download image or download a ZIP file.
      </p>
    </TileModal>
  )
}
