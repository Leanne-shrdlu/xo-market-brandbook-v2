// Iconography tile — Lock icon, shackle animates up on hover
export default function IconographyTile({ hovered }: { hovered: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg viewBox="0 0 80 96" style={{ width: 80, height: 96 }} overflow="visible">
        {/* Shackle arc — moves up on hover */}
        <path
          d={
            hovered
              ? 'M 18 46 L 18 18 Q 18 4 40 4 Q 62 4 62 18 L 62 46'
              : 'M 18 46 L 18 28 Q 18 10 40 10 Q 62 10 62 28 L 62 46'
          }
          fill="none"
          stroke={hovered ? '#ffffff' : '#1a3d00'}
          strokeWidth="10"
          strokeLinecap="round"
          style={{
            transition: 'd 0.45s cubic-bezier(0.4,0,0.2,1), stroke 0.35s ease',
          }}
        />

        {/* Lock body */}
        <rect
          x="6"
          y="44"
          width="68"
          height="46"
          rx="7"
          fill={hovered ? 'none' : '#1a3d00'}
          stroke={hovered ? '#ffffff' : 'none'}
          strokeWidth="2.5"
          style={{ transition: 'fill 0.35s ease, stroke 0.35s ease' }}
        />

        {/* Keyhole circle */}
        <circle
          cx="40"
          cy="63"
          r="8"
          fill={hovered ? 'none' : '#9fd46a'}
          stroke={hovered ? 'rgba(255,255,255,0.7)' : 'none'}
          strokeWidth="2"
          style={{ transition: 'fill 0.35s ease, stroke 0.35s ease' }}
        />

        {/* Keyhole stem */}
        <rect
          x="37"
          y="63"
          width="6"
          height="14"
          rx="3"
          fill={hovered ? 'none' : '#9fd46a'}
          stroke={hovered ? 'rgba(255,255,255,0.7)' : 'none'}
          strokeWidth="2"
          style={{ transition: 'fill 0.35s ease, stroke 0.35s ease' }}
        />
      </svg>
    </div>
  )
}
