// Typography tile — "Aa" letters, on hover become outlined
export default function TypographyTile({ hovered }: { hovered: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 260 190"
        style={{ width: '88%', height: '88%', overflow: 'visible' }}
      >
        {/* Large "A" — filled by default, outline on hover */}
        <text
          x="10"
          y="168"
          fontSize="175"
          fontFamily="'Inter', -apple-system, sans-serif"
          fontWeight="700"
          letterSpacing="-6"
          fill={hovered ? 'none' : '#ffffff'}
          stroke={hovered ? '#ffffff' : 'none'}
          strokeWidth={hovered ? '2.5' : '0'}
          paintOrder="stroke"
          style={{ transition: 'fill 0.35s ease, stroke 0.35s ease' }}
        >
          A
        </text>

        {/* Small "a" — filled by default, outline on hover */}
        <text
          x="155"
          y="165"
          fontSize="108"
          fontFamily="'Inter', -apple-system, sans-serif"
          fontWeight="400"
          fill={hovered ? 'none' : 'rgba(255,255,255,0.72)'}
          stroke={hovered ? 'rgba(255,255,255,0.72)' : 'none'}
          strokeWidth={hovered ? '2' : '0'}
          paintOrder="stroke"
          style={{ transition: 'fill 0.35s ease, stroke 0.35s ease' }}
        >
          a
        </text>
      </svg>
    </div>
  )
}
