// Imagery tile — Hills landscape with sun/moon, rotates to night on hover.
// Mascot sits bottom-right at ~1/3 tile height; dips down and fades out on hover.
export default function ImageryTile({ hovered }: { hovered: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 400 260"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Sun / Moon celestial body */}
        <circle
          cx={hovered ? 320 : 300}
          cy={hovered ? 55 : 72}
          r="30"
          fill={hovered ? 'none' : '#f5c842'}
          stroke={hovered ? '#ffffff' : 'none'}
          strokeWidth="2.5"
          style={{
            transition: [
              'cx 0.5s cubic-bezier(0.4,0,0.2,1)',
              'cy 0.5s cubic-bezier(0.4,0,0.2,1)',
              'fill 0.4s ease',
              'stroke 0.4s ease',
            ].join(', '),
          }}
        />

        {/* Moon bite (crescent effect on hover) */}
        <circle
          cx={hovered ? 334 : 600}
          cy={hovered ? 48 : 600}
          r="24"
          fill="#1a1a1a"
          style={{
            transition: [
              'cx 0.5s cubic-bezier(0.4,0,0.2,1)',
              'cy 0.5s cubic-bezier(0.4,0,0.2,1)',
            ].join(', '),
          }}
        />

        {/* Stars (only visible on hover) */}
        {([[40, 35], [80, 20], [140, 45], [200, 28], [250, 15], [60, 70], [170, 10], [350, 40]] as [number, number][]).map(
          ([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="1.8"
              fill="#ffffff"
              opacity={hovered ? 0.85 : 0}
              style={{ transition: `opacity 0.5s ease ${i * 40}ms` }}
            />
          )
        )}

        {/* Far back hill */}
        <path
          d="M -10 200 Q 60 90 130 130 Q 200 170 280 110 Q 340 70 410 120 L 410 260 L -10 260 Z"
          fill={hovered ? 'none' : '#d4688c'}
          stroke={hovered ? 'rgba(255,255,255,0.45)' : 'none'}
          strokeWidth="2"
          style={{ transition: 'fill 0.45s ease, stroke 0.45s ease' }}
        />

        {/* Mid hill */}
        <path
          d="M -10 230 Q 80 150 180 175 Q 280 200 380 155 L 410 160 L 410 260 L -10 260 Z"
          fill={hovered ? 'none' : '#e87fa0'}
          stroke={hovered ? 'rgba(255,255,255,0.6)' : 'none'}
          strokeWidth="2"
          style={{ transition: 'fill 0.45s ease, stroke 0.45s ease' }}
        />

        {/* Front hill */}
        <path
          d="M -10 260 Q 100 195 200 215 Q 300 235 410 205 L 410 260 L -10 260 Z"
          fill={hovered ? 'none' : '#f0a8c0'}
          stroke={hovered ? '#ffffff' : 'none'}
          strokeWidth="2"
          style={{ transition: 'fill 0.45s ease, stroke 0.45s ease' }}
        />
      </svg>

      {/* Mascot — sits bottom-right at ~1/3 tile height.
          On hover: slides down 40px and fades out, clipped by overflow:hidden. */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          height: '62%',
          display: 'flex',
          alignItems: 'flex-end',
          pointerEvents: 'none',
          opacity: hovered ? 0 : 1,
          transform: hovered ? 'translateY(40px)' : 'translateY(0)',
          transition: 'opacity 0.38s ease, transform 0.38s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/Deek_Pose_1.png"
          alt="XO Market mascot"
          style={{ height: '100%', width: 'auto', display: 'block' }}
        />
      </div>
    </div>
  )
}
