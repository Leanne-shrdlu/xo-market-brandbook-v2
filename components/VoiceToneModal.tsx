'use client'

import TileModal from './TileModal'

interface VoiceToneModalProps {
  onClose: () => void
}

export default function VoiceToneModal({ onClose }: VoiceToneModalProps) {
  return (
    <TileModal onClose={onClose} title="Voice &amp; Tone">
      <style>{`
        .voicetone-wrap { padding: 48px 48px 56px; }
        @media (max-width: 600px) { .voicetone-wrap { padding: 32px 20px 40px; } }
      `}</style>
      <div className="voicetone-wrap" style={{ fontFamily: 'var(--font-rubik)' }}>
        {/* Core Brand Voice */}
        <section style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 16,
            }}
          >
            Core Brand Voice
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#444444',
              marginBottom: 6,
              lineHeight: 1.6,
            }}
          >
            Confident, Intelligent, and Empowering
          </p>
          <p
            style={{
              fontSize: 16,
              color: '#444444',
              lineHeight: 1.65,
              marginBottom: 24,
            }}
          >
            XO Market speaks like a sharp, forward-thinking strategist in the Web3 space — someone
            who respects your convictions and gives you the tools to monetize and test them.
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {[
              'Professional yet approachable: Clear, precise language without heavy jargon or hype.',
              'Futuristic & innovative: Subtle excitement about new possibilities (permissionless creation, AI resolution, adaptive liquidity).',
              'Empowering & belief-centric: It positions the user as smart, opinionated, and capable of turning ideas into value.',
              'Minimalist & efficient: No fluff. Every sentence serves a purpose — scannable, direct, and benefit-focused.',
              'Trustworthy & transparent: Emphasizes speed, fairness, decentralization, and verifiable outcomes.',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: 15,
                  color: '#444444',
                  lineHeight: 1.6,
                  paddingLeft: 20,
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.55em',
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    display: 'inline-block',
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #ff87a6',
            margin: '0 0 40px',
          }}
        />

        {/* Brand Tone */}
        <section>
          <h2
            style={{
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 16,
            }}
          >
            Brand Tone
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#444444',
              lineHeight: 1.65,
            }}
          >
            XO Market&apos;s tone is confident, intelligent, and empowering. It speaks with clarity and
            precision, never using hype or unnecessary words. The tone feels modern and trustworthy —
            like a sharp strategist who respects your beliefs and gives you the tools to turn them into
            real value.
          </p>
        </section>
      </div>
    </TileModal>
  )
}
