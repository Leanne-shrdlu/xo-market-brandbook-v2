// Logo tile — Dropbox logo solid blue fades out, outline version appears on hover
export default function LogoTile({ hovered }: { hovered: boolean }) {
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
      {/* Solid blue logo (default) */}
      <div
        style={{
          position: 'absolute',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.35s ease',
        }}
      >
        <svg viewBox="0 0 46 42" style={{ width: 100, height: 90 }} fill="#0061ff">
          <path d="M11.4995 2L0 9.31249L11.4995 16.625L23.001 9.31249L34.5005 16.625L46 9.31249L34.5005 2L23.001 9.31249L11.4995 2Z" />
          <path d="M11.4995 31.2501L0 23.9376L11.4995 16.625L23.001 23.9376L11.4995 31.2501Z" />
          <path d="M23.001 23.9376L34.5005 16.625L46 23.9376L34.5005 31.2501L23.001 23.9376Z" />
          <path d="M23.001 41L11.4995 33.6875L23.001 26.375L34.5005 33.6875L23.001 41Z" />
        </svg>
      </div>

      {/* Outline white logo (hover) */}
      <div
        style={{
          position: 'absolute',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      >
        <svg
          viewBox="0 0 46 42"
          style={{ width: 100, height: 90 }}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
        >
          <path d="M11.4995 2L0 9.31249L11.4995 16.625L23.001 9.31249L34.5005 16.625L46 9.31249L34.5005 2L23.001 9.31249L11.4995 2Z" />
          <path d="M11.4995 31.2501L0 23.9376L11.4995 16.625L23.001 23.9376L11.4995 31.2501Z" />
          <path d="M23.001 23.9376L34.5005 16.625L46 23.9376L34.5005 31.2501L23.001 23.9376Z" />
          <path d="M23.001 41L11.4995 33.6875L23.001 26.375L34.5005 33.6875L23.001 41Z" />
        </svg>
      </div>
    </div>
  )
}
