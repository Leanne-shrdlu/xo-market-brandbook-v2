'use client'

import TileModal from './TileModal'

interface TypographyModalProps {
  onClose: () => void
}

const RUBIK_WEIGHTS = [
  { label: 'Rubik Light', weight: 300, style: 'normal' },
  { label: 'Rubik Light Italic', weight: 300, style: 'italic' },
  { label: 'Rubik Italic', weight: 400, style: 'italic' },
  { label: 'Rubik Regular', weight: 400, style: 'normal' },
  { label: 'Rubik Medium', weight: 500, style: 'normal' },
  { label: 'Rubik Medium Italic', weight: 500, style: 'italic' },
  { label: 'Rubik Semibold', weight: 600, style: 'normal' },
  { label: 'Rubik Semibold Italic', weight: 600, style: 'italic' },
  { label: 'Rubik Bold', weight: 700, style: 'normal' },
  { label: 'Rubik Bold Italic', weight: 700, style: 'italic' },
  { label: 'Rubik ExtraBold', weight: 800, style: 'normal' },
  { label: 'Rubik ExtraBold Italic', weight: 800, style: 'italic' },
  { label: 'Rubik Black', weight: 900, style: 'normal' },
  { label: 'Rubik Black Italic', weight: 900, style: 'italic' },
]

const FIGTREE_WEIGHTS = [
  { label: 'Figtree Light', weight: 300, style: 'normal' },
  { label: 'Figtree Light Italic', weight: 300, style: 'italic' },
  { label: 'Figtree Italic', weight: 400, style: 'italic' },
  { label: 'Figtree Regular', weight: 400, style: 'normal' },
  { label: 'Figtree Medium', weight: 500, style: 'normal' },
  { label: 'Figtree Medium Italic', weight: 500, style: 'italic' },
  { label: 'Figtree Semibold', weight: 600, style: 'normal' },
  { label: 'Figtree Semibold Italic', weight: 600, style: 'italic' },
  { label: 'Figtree Bold', weight: 700, style: 'normal' },
  { label: 'Figtree Bold Italic', weight: 700, style: 'italic' },
  { label: 'Figtree ExtraBold', weight: 800, style: 'normal' },
  { label: 'Figtree ExtraBold Italic', weight: 800, style: 'italic' },
  { label: 'Figtree Black', weight: 900, style: 'normal' },
  { label: 'Figtree Black Italic', weight: 900, style: 'italic' },
]

interface FontSectionProps {
  name: string
  description: string
  fontVar: string
  weights: { label: string; weight: number; style: string }[]
}

function FontSection({ name, description, fontVar, weights }: FontSectionProps) {
  return (
    // Inner 2-column grid: display column | details column
    // Row 1: "Typeface" | name + description
    // Row 2: "Font"     | weight list
    // Both rows share the same row boundaries so Font aligns with Rubik Light
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: 'auto auto',
        columnGap: 28,
        alignItems: 'start',
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* Row 1 col 1 — large "Typeface" */}
      <p
        style={{
          fontSize: 'clamp(16px, 2vw, 26px)',
          fontWeight: 400,
          fontFamily: fontVar,
          color: '#1a1a1a',
          lineHeight: 1.1,
          gridRow: 1,
          gridColumn: 1,
          paddingRight: 4,
          alignSelf: 'center',
        }}
      >
        Typeface
      </p>

      {/* Row 1 col 2 — name + description */}
      <div style={{ gridRow: 1, gridColumn: 2, paddingBottom: 20 }}>
        <p style={{ fontSize: 15, fontWeight: 600, color: '#1a1a1a', marginBottom: 3 }}>
          {name}
        </p>
        <p style={{ fontSize: 13, color: '#888', lineHeight: 1.4 }}>{description}</p>
      </div>

      {/* Row 2 col 1 — large "Font" */}
      <p
        style={{
          fontSize: 'clamp(20px, 2.5vw, 34px)',
          fontWeight: 300,
          fontFamily: fontVar,
          color: '#1a1a1a',
          lineHeight: 1.1,
          gridRow: 2,
          gridColumn: 1,
          paddingRight: 4,
          alignSelf: 'start',
          paddingTop: 2,
        }}
      >
        Font
      </p>

      {/* Row 2 col 2 — weight list */}
      <div style={{ gridRow: 2, gridColumn: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {weights.map((w) => (
          <span
            key={w.label}
            style={{
              fontFamily: fontVar,
              fontWeight: w.weight,
              fontStyle: w.style,
              fontSize: 14,
              color: '#1a1a1a',
              lineHeight: 1.55,
            }}
          >
            {w.label}
          </span>
        ))}
      </div>

    </div>
  )
}

export default function TypographyModal({ onClose }: TypographyModalProps) {
  return (
    <TileModal onClose={onClose} title="Typography">
      <style>{`
        .typo-halves {
          display: flex;
          gap: 48px;
          align-items: start;
        }
        .typo-pink-line {
          border: none;
          border-top: 1px solid #ff87a6;
          margin: 32px 0 0;
        }
        @media (max-width: 640px) {
          .typo-halves {
            flex-direction: column;
            gap: 40px;
          }
        }
      `}</style>

      <style>{`
        .typo-wrap { padding: 48px 72px 52px; }
        @media (max-width: 600px) { .typo-wrap { padding: 32px 20px 40px; } }
      `}</style>
      <div className="typo-wrap" style={{ fontFamily: 'var(--font-rubik)' }}>
        <div className="typo-halves">
          <FontSection
            name="Rubik"
            description="Using for Headers H1–H5"
            fontVar="var(--font-rubik)"
            weights={RUBIK_WEIGHTS}
          />
          <FontSection
            name="Figtree"
            description="Using for body and body headers"
            fontVar="var(--font-figtree)"
            weights={FIGTREE_WEIGHTS}
          />
        </div>

        <hr className="typo-pink-line" />

        {/* Download links — below the pink line, aligned under each font column */}
        <div className="typo-halves" style={{ paddingTop: 24 }}>
          {[
            { href: '/Typography/Rubik Font.zip', label: 'Download Rubik font' },
            { href: '/Typography/Figtree Font.zip', label: 'Download Figtree font' },
          ].map(({ href, label }) => (
            <div key={href} style={{ flex: 1, minWidth: 0 }}>
              <a
                href={href}
                download
                style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                {label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </TileModal>
  )
}
