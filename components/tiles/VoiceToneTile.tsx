import Image from 'next/image'

// Voice & Tone tile — Two large quotation marks slide toward center on hover.
// A megaphone sits centered between the quotes; swaps light→dark on hover.
export default function VoiceToneTile({ hovered }: { hovered: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Opening quote — top left */}
      <div
        style={{
          position: 'absolute',
          left: hovered ? '28%' : '10%',
          top: '15%',
          transition: 'left 0.45s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <svg
          viewBox="0 0 60 50"
          style={{ width: 60, height: 50 }}
          fill={hovered ? '#ffffff' : '#3d2800'}
        >
          <path
            d="M6 4 Q6 0 10 0 L16 0 Q20 0 20 4 L20 22 Q20 34 8 38 L4 40 Q2 41 2 39 Q2 37 4 36 Q12 32 12 22 L12 22 Q6 22 6 15 Z"
            style={{ transition: 'fill 0.35s ease' }}
          />
          <path
            d="M30 4 Q30 0 34 0 L40 0 Q44 0 44 4 L44 22 Q44 34 32 38 L28 40 Q26 41 26 39 Q26 37 28 36 Q36 32 36 22 L36 22 Q30 22 30 15 Z"
            style={{ transition: 'fill 0.35s ease' }}
          />
        </svg>
      </div>

      {/* Megaphone — centered between the quotes */}
      <div
        style={{
          position: 'relative',
          width: '32%',
          aspectRatio: '1 / 1',
          flexShrink: 0,
        }}
      >
        {/* Light megaphone — visible by default, fades out on hover */}
        <Image
          src="/brand/megaphone1.svg"
          alt="Megaphone"
          fill
          unoptimized
          style={{
            objectFit: 'contain',
            opacity: hovered ? 0 : 1,
            transition: 'opacity 0.35s ease',
          }}
        />
        {/* Dark megaphone — hidden by default, fades in on hover */}
        <Image
          src="/brand/megaphone2.svg"
          alt="Megaphone"
          fill
          unoptimized
          style={{
            objectFit: 'contain',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.35s ease',
          }}
        />
      </div>

      {/* Closing quote — bottom right */}
      <div
        style={{
          position: 'absolute',
          right: hovered ? '28%' : '10%',
          bottom: '20%',
          transition: 'right 0.45s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <svg
          viewBox="0 0 60 50"
          style={{ width: 60, height: 50, transform: 'rotate(180deg)' }}
          fill={hovered ? '#ffffff' : '#3d2800'}
        >
          <path
            d="M6 4 Q6 0 10 0 L16 0 Q20 0 20 4 L20 22 Q20 34 8 38 L4 40 Q2 41 2 39 Q2 37 4 36 Q12 32 12 22 L12 22 Q6 22 6 15 Z"
            style={{ transition: 'fill 0.35s ease' }}
          />
          <path
            d="M30 4 Q30 0 34 0 L40 0 Q44 0 44 4 L44 22 Q44 34 32 38 L28 40 Q26 41 26 39 Q26 37 28 36 Q36 32 36 22 L36 22 Q30 22 30 15 Z"
            style={{ transition: 'fill 0.35s ease' }}
          />
        </svg>
      </div>
    </div>
  )
}
