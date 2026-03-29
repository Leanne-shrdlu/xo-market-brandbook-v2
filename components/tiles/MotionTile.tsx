// Motion tile — Bezier curve with control points. On hover curve shape changes to steeper S
export default function MotionTile({ hovered }: { hovered: boolean }) {
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
        viewBox="0 0 300 200"
        style={{ width: '85%', height: '75%', overflow: 'visible' }}
      >
        {/* Subtle background track */}
        <path
          d="M 20 170 C 80 170 80 50 150 100 C 220 150 220 30 280 30"
          fill="none"
          stroke={hovered ? 'rgba(255,255,255,0.18)' : 'rgba(45,0,80,0.22)'}
          strokeWidth="2"
          style={{ transition: 'stroke 0.4s ease' }}
        />

        {/* Main animated S-curve */}
        <path
          d={
            hovered
              ? 'M 20 180 C 40 180 40 20 100 20 C 160 20 140 180 200 180 C 260 180 260 20 280 20'
              : 'M 20 170 C 80 170 80 50 150 100 C 220 150 220 30 280 30'
          }
          fill="none"
          stroke={hovered ? '#ffffff' : '#2d0050'}
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            transition: [
              'd 0.65s cubic-bezier(0.4,0,0.2,1)',
              'stroke 0.35s ease',
            ].join(', '),
          }}
        />

        {/* Control point handles (dashed lines, visible on hover) */}
        {hovered &&
          (
            [
              { x1: 20, y1: 180, x2: 40, y2: 180 },
              { x1: 100, y1: 20, x2: 40, y2: 20 },
              { x1: 100, y1: 20, x2: 160, y2: 20 },
              { x1: 200, y1: 180, x2: 140, y2: 180 },
              { x1: 200, y1: 180, x2: 260, y2: 180 },
              { x1: 280, y1: 20, x2: 260, y2: 20 },
            ] as const
          ).map((ln, i) => (
            <line
              key={i}
              x1={ln.x1}
              y1={ln.y1}
              x2={ln.x2}
              y2={ln.y2}
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          ))}

        {/* Handle dots */}
        {(
          [
            { x: hovered ? 40 : 80, y: hovered ? 180 : 170 },
            { x: hovered ? 40 : 80, y: hovered ? 20 : 50 },
            { x: hovered ? 160 : 220, y: hovered ? 20 : 150 },
            { x: hovered ? 260 : 220, y: hovered ? 180 : 30 },
          ] as const
        ).map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={hovered ? 4.5 : 3.5}
            fill={hovered ? 'none' : 'rgba(45,0,80,0.35)'}
            stroke={hovered ? '#ffffff' : 'none'}
            strokeWidth="1.8"
            style={{
              transition: [
                'cx 0.65s cubic-bezier(0.4,0,0.2,1)',
                'cy 0.65s cubic-bezier(0.4,0,0.2,1)',
                'fill 0.35s ease',
                'stroke 0.35s ease',
              ].join(', '),
            }}
          />
        ))}

        {/* Endpoint anchor dots */}
        {(
          [
            { x: 20, y: hovered ? 180 : 170 },
            { x: 280, y: hovered ? 20 : 30 },
          ] as const
        ).map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r="5"
            fill={hovered ? '#ffffff' : '#2d0050'}
            style={{
              transition: [
                'cy 0.65s cubic-bezier(0.4,0,0.2,1)',
                'fill 0.35s ease',
              ].join(', '),
            }}
          />
        ))}
      </svg>
    </div>
  )
}
