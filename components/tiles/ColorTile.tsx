export default function ColorTile({ hovered: _ }: { hovered: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
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
        {/* Black circle — back layer */}
        <circle cx="92" cy="65" r="52" fill="#000000" />
        {/* Pink circle — front layer, shifted right */}
        <circle cx="128" cy="65" r="52" fill="#ff87a6" />
      </svg>
    </div>
  )
}
