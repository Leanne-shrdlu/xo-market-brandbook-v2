'use client'

import { useEffect, useState } from 'react'

const DROPBOX_LOGO_SMALL = (
  <svg viewBox="0 0 46 42" fill="currentColor" style={{ width: 32, height: 29 }}>
    <path d="M11.4995 2L0 9.31249L11.4995 16.625L23.001 9.31249L34.5005 16.625L46 9.31249L34.5005 2L23.001 9.31249L11.4995 2Z" />
    <path d="M11.4995 31.2501L0 23.9376L11.4995 16.625L23.001 23.9376L11.4995 31.2501Z" />
    <path d="M23.001 23.9376L34.5005 16.625L46 23.9376L34.5005 31.2501L23.001 23.9376Z" />
    <path d="M23.001 41L11.4995 33.6875L23.001 26.375L34.5005 33.6875L23.001 41Z" />
  </svg>
)

interface NavButtonProps {
  buttonState: number
  scrollProgress: number
  easedProgress: number
  loaded: boolean
}

export default function NavButton({
  buttonState,
  scrollProgress,
  easedProgress,
  loaded,
}: NavButtonProps) {
  const [logoDrawn, setLogoDrawn] = useState(false)

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => setLogoDrawn(true), 300)
      return () => clearTimeout(timer)
    }
  }, [loaded])

  // Compute button size based on scroll progress
  let size: number
  if (scrollProgress <= 0.05) {
    const t = scrollProgress / 0.05
    size = 800 - t * 300
  } else if (scrollProgress <= 0.12) {
    const t = (scrollProgress - 0.05) / 0.07
    size = 500 - t * 410
  } else {
    size = 90
  }
  size = Math.max(90, Math.round(size))

  const showText1 = scrollProgress < 0.04
  const showText2 = scrollProgress >= 0.04 && scrollProgress <= 0.14
  const showLogo = scrollProgress > 0.14

  const isSmall = scrollProgress > 0.12
  const isBlue = scrollProgress > 0.025
  const bgColor = isBlue ? '#0061ff' : '#ffffff'
  const borderRadius = isSmall ? '50%' : Math.min(24, size / 20)

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: borderRadius,
          background: bgColor,
          boxShadow: !isBlue
            ? '0 0 0 1px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.1)'
            : '0 4px 32px rgba(0,97,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          transition: [
            'width 0.35s cubic-bezier(0.4,0,0.2,1)',
            'height 0.35s cubic-bezier(0.4,0,0.2,1)',
            'border-radius 0.35s cubic-bezier(0.4,0,0.2,1)',
            'background 0.28s ease',
            'box-shadow 0.28s ease',
          ].join(', '),
        }}
      >
        {/* State 1: large white — animated Dropbox logo draw-in + tagline */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: Math.min(56, size * 0.07),
            gap: 28,
            opacity: showText1 ? 1 : 0,
            transform: showText1 ? 'scale(1)' : 'scale(0.96)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            pointerEvents: 'none',
          }}
        >
          <LogoDrawIn drawn={logoDrawn} size={size} />
          <p
            style={{
              fontSize: Math.max(14, Math.min(21, size * 0.026)),
              fontWeight: 400,
              lineHeight: 1.55,
              textAlign: 'center',
              color: '#1a1a1a',
              maxWidth: 440,
              fontFamily: 'var(--font-family)',
              margin: 0,
            }}
          >
            At Dropbox, our Brand Guidelines help us infuse everything we make with identity.
          </p>
        </div>

        {/* State 2: blue medium — description text */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: Math.min(48, size * 0.09),
            opacity: showText2 ? 1 : 0,
            transform: showText2 ? 'scale(1)' : 'scale(0.96)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            pointerEvents: 'none',
          }}
        >
          <p
            style={{
              fontSize: Math.max(13, Math.min(18, size * 0.034)),
              fontWeight: 400,
              lineHeight: 1.58,
              textAlign: 'center',
              color: '#ffffff',
              maxWidth: 360,
              fontFamily: 'var(--font-family)',
              margin: 0,
            }}
          >
            From icons to illustration, logos to language, this collection is the foundation for
            how Dropbox looks, feels, and sounds like Dropbox.
          </p>
        </div>

        {/* State 3: small nav circle — Dropbox logo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: showLogo ? 1 : 0,
            transition: 'opacity 0.3s ease 0.08s',
            pointerEvents: 'none',
            color: '#ffffff',
          }}
        >
          {DROPBOX_LOGO_SMALL}
        </div>
      </div>
    </div>
  )
}

function LogoDrawIn({ drawn, size }: { drawn: boolean; size: number }) {
  const logoSize = Math.min(110, size * 0.14)

  return (
    <div style={{ width: logoSize, height: logoSize * 0.92 }}>
      <svg viewBox="120 120 1462 1462" style={{ width: '100%', height: '100%' }}>
        <style>{`
          @keyframes drawLogo {
            from { stroke-dashoffset: 3000; }
            to   { stroke-dashoffset: 0; }
          }
        `}</style>
        <path
          d="M663.477 555.977L850.079 673.172L663.477 790.366L476.906 673.172L663.477 555.977ZM663.477 791.542L850.079 908.739L663.477 1025.93L476.906 908.739L663.477 791.542ZM851.951 908.739L1038.52 791.542L1225.09 908.739L1038.52 1025.93L851.951 908.739ZM1225.09 673.172L1038.52 790.366L851.951 673.172L1038.52 555.977L1225.09 673.172ZM1037.59 1065.78L851.015 1182.97L664.413 1065.78L851.015 948.585L1037.59 1065.78Z"
          fill="none"
          stroke="#0061ff"
          strokeWidth="48"
          strokeLinejoin="round"
          strokeDasharray="3000"
          strokeDashoffset={drawn ? 0 : 3000}
          style={{
            transition: drawn
              ? 'stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1) 0.1s'
              : 'none',
          }}
        />
      </svg>
    </div>
  )
}
