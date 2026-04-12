'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

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

  // Compute circle size based on scroll progress
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

  // Scroll-linked shrink: tiles are visually settled around easedProgress ~0.92+.
  // The circle shrinks from full (scale=1) to zero over the final scroll range.
  // Using easedProgress means: scroll up → eased goes down → circle grows back. Fully reversible.
  const SHRINK_START = 0.99
  const SHRINK_END   = 1.00
  const shrinkT     = Math.min(1, Math.max(0, (easedProgress - SHRINK_START) / (SHRINK_END - SHRINK_START)))
  const circleScale = 1 - shrinkT

  const showText1 = scrollProgress < 0.04
  const showText2 = scrollProgress >= 0.04 && scrollProgress <= 0.14
  const showLogo  = scrollProgress > 0.14

  const isSmall = scrollProgress > 0.12
  const isBlue  = scrollProgress > 0.025
  const bgColor = isBlue
    ? 'linear-gradient(270deg, rgb(255, 135, 166) 0%, rgb(168, 110, 245) 100%)'
    : '#ffffff'
  const borderRadius = isSmall ? '50%' : Math.min(24, size / 20)

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${circleScale})`,
        transformOrigin: 'center center',
        opacity: 1,
        zIndex: 50,
        pointerEvents: 'none',
        transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
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
            : '0 4px 32px rgba(168,110,245,0.35)',
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
        {/* State 1: large white — XO Market logo + tagline */}
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
          <LogoMark drawn={logoDrawn} size={size} />
          <p
            style={{
              fontSize: Math.max(14, Math.min(21, size * 0.026)),
              fontWeight: 400,
              lineHeight: 1.55,
              textAlign: 'center',
              color: '#1a1a1a',
              maxWidth: 440,
              fontFamily: 'var(--font-rubik)',
              margin: 0,
            }}
          >
            Icons. Illustrations. Logos. Language. This collection captures the essence of XO Market — its look, feel, and voice.
          </p>
        </div>

        {/* State 2: gradient medium — description text */}
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
              fontFamily: 'var(--font-rubik)',
              margin: 0,
            }}
          >
            Icons. Illustrations. Logos. Language.
            <br />
            This collection captures the essence of XO Market — its look, feel, and voice.
          </p>
        </div>

        {/* State 3: small circle — XO Market logomark */}
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
          }}
        >
          <Image
            src="/brand/XO Market Logomark Coloured.svg"
            alt="XO Market"
            width={36}
            height={36}
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  )
}

function LogoMark({ drawn, size }: { drawn: boolean; size: number }) {
  const logoSize = Math.min(110, size * 0.14)

  return (
    <div
      style={{
        opacity: drawn ? 1 : 0,
        transform: drawn ? 'scale(1)' : 'scale(0.88)',
        transition: drawn ? 'opacity 0.6s ease 0.1s, transform 0.6s cubic-bezier(0.4,0,0.2,1) 0.1s' : 'none',
      }}
    >
      <Image
        src="/brand/XO Market Logomark Coloured.svg"
        alt="XO Market"
        width={110}
        height={110}
        unoptimized
        priority
        style={{ width: logoSize, height: logoSize, objectFit: 'contain' }}
      />
    </div>
  )
}
