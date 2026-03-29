// Framework tile — SVG bezier curve with handle points
// On hover a second sketch path draws in and control handles appear
export default function FrameworkTile({ hovered }: { hovered: boolean }) {
  const pathLength = 520

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 300 220"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '82%',
          height: '78%',
          overflow: 'visible',
        }}
      >
        {/* Static default curve */}
        <path
          d="M 30 190 C 90 190 90 60 150 100 C 210 140 210 30 270 50"
          fill="none"
          stroke={hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.35)'}
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ transition: 'stroke 0.35s ease' }}
        />

        {/* Hover animated path */}
        <path
          d="M 20 210 C 80 40 110 180 160 80 C 210 0 240 160 280 80"
          fill="none"
          stroke={hovered ? '#ffffff' : 'transparent'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={hovered ? 0 : pathLength}
          style={{
            transition: hovered
              ? 'stroke-dashoffset 0.85s cubic-bezier(0.4,0,0.2,1) 0.05s, stroke 0.2s ease'
              : 'stroke-dashoffset 0.3s ease, stroke 0.2s ease 0.1s',
          }}
        />

        {/* Control handles (visible on hover) */}
        {(
          [
            { ax: 30, ay: 190, hx: 90, hy: 190 },
            { ax: 150, ay: 100, hx: 90, hy: 60 },
            { ax: 150, ay: 100, hx: 210, hy: 140 },
            { ax: 270, ay: 50, hx: 210, hy: 30 },
          ] as const
        ).map((h, i) => (
          <line
            key={i}
            x1={h.ax}
            y1={h.ay}
            x2={h.hx}
            y2={h.hy}
            stroke={hovered ? 'rgba(255,255,255,0.4)' : 'transparent'}
            strokeWidth="1"
            strokeDasharray="3 3"
            style={{ transition: 'stroke 0.3s ease' }}
          />
        ))}

        {/* Handle circles */}
        {(
          [
            { cx: 90, cy: 190 },
            { cx: 90, cy: 60 },
            { cx: 210, cy: 140 },
            { cx: 210, cy: 30 },
          ] as const
        ).map((pt, i) => (
          <circle
            key={i}
            cx={pt.cx}
            cy={pt.cy}
            r={hovered ? 4.5 : 0}
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            style={{ transition: 'r 0.3s ease' }}
          />
        ))}

        {/* Anchor point dots */}
        {(
          [
            { cx: 30, cy: 190 },
            { cx: 150, cy: 100 },
            { cx: 270, cy: 50 },
          ] as const
        ).map((pt, i) => (
          <circle
            key={i}
            cx={pt.cx}
            cy={pt.cy}
            r={hovered ? 4.5 : 3.5}
            fill={hovered ? '#ffffff' : 'rgba(255,255,255,0.65)'}
            style={{ transition: 'r 0.3s ease, fill 0.3s ease' }}
          />
        ))}
      </svg>
    </div>
  )
}
