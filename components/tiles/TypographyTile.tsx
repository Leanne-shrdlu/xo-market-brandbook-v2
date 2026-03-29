// Typography tile
// Default: white tile bg (set in NavContainer), black "Aa".
// Hover:   NavTile switches tile bg to #1a1a1a; text transitions to white.
export default function TypographyTile({ hovered }: { hovered: boolean }) {
  const textColor = hovered ? '#ffffff' : '#000000'

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
        {/* Large "A" */}
        <text
          x="10"
          y="168"
          fontSize="175"
          fontFamily="'Inter', -apple-system, sans-serif"
          fontWeight="700"
          letterSpacing="-6"
          fill={textColor}
          style={{ transition: 'fill 0.35s ease' }}
        >
          A
        </text>

        {/* Small "a" — x moved from 155 → 122 to sit tighter against the A */}
        <text
          x="122"
          y="165"
          fontSize="108"
          fontFamily="'Inter', -apple-system, sans-serif"
          fontWeight="400"
          fill={textColor}
          style={{ transition: 'fill 0.35s ease' }}
        >
          a
        </text>
      </svg>
    </div>
  )
}
