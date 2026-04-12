'use client'

import TileModal from './TileModal'

interface VoiceToneModalProps {
  onClose: () => void
}

const DO_ITEMS = [
  'Write in natural flowing sentences, not choppy stacked one-liners',
  'Lead with substance, not excitement',
  'Use data and specifics over vague claims',
  'Match the energy of the context',
  'Sound like a person, not a brand account',
  'Make every sentence worth reading',
]

const DONT_ITEMS = [
  'No em dashes',
  'No hashtags',
  'No emojis unless genuinely appropriate',
  'No "we\'re excited to announce" / "thrilled to share"',
  'No "game-changing," "revolutionary," "seamless," "cutting-edge"',
  'No forced CTAs or "what do you think?" on every post',
  'No press release language',
]

const EXAMPLES = [
  {
    context: 'Launching a feature:',
    bad: 'HUGE NEWS! [Feature] is LIVE! Here\'s how to get started',
    good: '[Feature] is live. Here\'s what it does, here\'s how it works, here\'s where to find it.',
  },
  {
    context: 'Replying to someone else\'s tweet:',
    bad: 'Great point! We have a market for this, check it out!',
    good: 'Add a stat, a counterpoint, or a take that stands on its own. Never mention XO in a reply.',
  },
  {
    context: 'Announcing an update:',
    bad: 'We\'re SO excited to announce our brand new update!',
    good: 'Say what changed and why it matters. No preamble.',
  },
]

export default function VoiceToneModal({ onClose }: VoiceToneModalProps) {
  return (
    <TileModal onClose={onClose} title="Brand Voice">
      <style>{`
        .voicetone-wrap { padding: 48px 48px 56px; }
        .voicetone-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 48px;
        }
        @media (max-width: 600px) {
          .voicetone-wrap { padding: 32px 20px 40px; }
          .voicetone-columns { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
      <div className="voicetone-wrap" style={{ fontFamily: 'var(--font-rubik)' }}>

        {/* Intro */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
            Brand Voice
          </h2>
          <p style={{ fontSize: 16, color: '#444444', lineHeight: 1.7 }}>
            Confident, direct, informed. Confident means we don&apos;t hedge or over-qualify. Direct means we get to the point without preamble. Informed means we use real data and specifics, not vague claims. Natural means we write the way people actually talk, not the way brands typically post.
          </p>
        </section>

        {/* Do / Don't columns */}
        <div className="voicetone-columns">

          {/* Do */}
          <div>
            <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
              Do
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 21 }}>
              {DO_ITEMS.map((item) => (
                <li key={item} style={{ fontSize: 16, color: '#444444', lineHeight: 1.2, paddingLeft: 18, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '0.6em', width: 5, height: 5, borderRadius: '50%', background: '#1a1a1a', display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don't */}
          <div>
            <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
              Don&apos;t
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 21 }}>
              {DONT_ITEMS.map((item) => (
                <li key={item} style={{ fontSize: 16, color: '#444444', lineHeight: 1.2, paddingLeft: 18, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '0.6em', width: 5, height: 5, borderRadius: '50%', background: '#1a1a1a', display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Pink divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #ff87a6', margin: '0 0 48px' }} />

        {/* Examples */}
        <section>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 32 }}>
            Examples
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {EXAMPLES.map(({ context, bad, good }) => (
              <div key={context}>
                <p style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                  {context}
                </p>
                <p style={{ fontSize: 16, color: '#888888', lineHeight: 1.45, marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, color: '#ff87a6' }}>Not this:</span>{' '}
                  &ldquo;{bad}&rdquo;
                </p>
                <p style={{ fontSize: 16, color: '#444444', lineHeight: 1.45 }}>
                  <span style={{ fontWeight: 600, color: '#1a1a1a' }}>This:</span>{' '}
                  &ldquo;{good}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </TileModal>
  )
}
