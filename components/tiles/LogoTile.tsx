import Image from 'next/image'

// Logo tile — XO Market logo fades out, white version appears on hover
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
      {/* Coloured logo (default) */}
      <div
        style={{
          position: 'absolute',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.35s ease',
        }}
      >
        <Image
          src="/brand/XO Market Logo Coloured.svg"
          alt="XO Market"
          width={210}
          height={84}
          unoptimized
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* White logo (hover) */}
      <div
        style={{
          position: 'absolute',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      >
        <Image
          src="/brand/XO Market Logo White.svg"
          alt="XO Market"
          width={210}
          height={84}
          unoptimized
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
