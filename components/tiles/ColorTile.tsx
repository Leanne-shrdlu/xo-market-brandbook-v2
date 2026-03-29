// Color tile — Two overlapping circles, separate and become outlined on hover
export default function ColorTile({ hovered }: { hovered: boolean }) {
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
      <svg
        viewBox="0 0 220 130"
        style={{ width: '85%', height: '65%' }}
        overflow="visible"
      >
        {/* Left circle */}
        <circle
          cx={hovered ? 75 : 92}
          cy="65"
          r="52"
          fill={hovered ? 'none' : 'rgba(255,255,255,0.9)'}
          stroke={hovered ? '#ffffff' : 'none'}
          strokeWidth="2.5"
          style={{
            transition: [
              'cx 0.45s cubic-bezier(0.4,0,0.2,1)',
              'fill 0.35s ease',
              'stroke 0.35s ease',
            ].join(', '),
          }}
        />

        {/* Right circle */}
        <circle
          cx={hovered ? 145 : 128}
          cy="65"
          r="52"
          fill={hovered ? 'none' : 'rgba(255,255,255,0.45)'}
          stroke={hovered ? 'rgba(255,255,255,0.65)' : 'none'}
          strokeWidth="2.5"
          style={{
            transition: [
              'cx 0.45s cubic-bezier(0.4,0,0.2,1)',
              'fill 0.35s ease',
              'stroke 0.35s ease',
            ].join(', '),
          }}
        />
      </svg>
    </div>
  )
}
