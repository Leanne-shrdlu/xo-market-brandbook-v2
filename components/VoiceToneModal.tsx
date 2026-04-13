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

const SOCIALS = [
  {
    label: 'Discord',
    href: 'https://discord.gg/xomarket',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/xomarket',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/xomarket',
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://research.xo.market',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
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
        .social-icon-link {
          color: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
          text-decoration: none;
        }
        .social-icon-link:hover { transform: scale(1.15); }
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
          <p className="popup-desc" style={{ color: '#444444', lineHeight: 1.7 }}>
            Confident, direct, informed. Confident means we don&apos;t hedge or over-qualify. Direct means we get to the point without preamble. Informed means we use real data and specifics, not vague claims.
          </p>
          <p className="popup-desc" style={{ color: '#444444', lineHeight: 1.7 }}>
            Natural means we write the way people actually talk, not the way brands typically post.
          </p>
        </section>

        {/* Do / Don't columns */}
        <div className="voicetone-columns">

          {/* Do */}
          <div>
            <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 16 }}>
              Do
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {DO_ITEMS.map((item) => (
                <li key={item} className="popup-desc" style={{ color: '#444444', paddingLeft: 18, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '0.45em', width: 5, height: 5, borderRadius: '50%', background: '#1a1a1a', display: 'inline-block' }} />
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
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {DONT_ITEMS.map((item) => (
                <li key={item} className="popup-desc" style={{ color: '#444444', paddingLeft: 18, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, top: '0.45em', width: 5, height: 5, borderRadius: '50%', background: '#1a1a1a', display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Pink divider before Examples */}
        <hr style={{ border: 'none', borderTop: '1px solid #ff87a6', margin: '0 0 48px' }} />

        {/* Examples */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#1a1a1a', marginBottom: 32 }}>
            Examples
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {EXAMPLES.map(({ context, bad, good }) => (
              <div key={context}>
                <p className="popup-desc" style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
                  {context}
                </p>
                <p className="popup-desc" style={{ color: '#888888', lineHeight: 1.45, marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, color: '#ff87a6' }}>Not this:</span>{' '}
                  &ldquo;{bad}&rdquo;
                </p>
                <p className="popup-desc" style={{ color: '#444444', lineHeight: 1.45 }}>
                  <span style={{ fontWeight: 600, color: '#1a1a1a' }}>This:</span>{' '}
                  &ldquo;{good}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pink divider before Socials */}
        <hr style={{ border: 'none', borderTop: '1px solid #ff87a6', margin: '0 0 32px' }} />

        {/* Social icons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, paddingBottom: 8 }}>
          {SOCIALS.map(({ label, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon-link">
              {icon}
            </a>
          ))}
        </div>

      </div>
    </TileModal>
  )
}
