import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const rubik = localFont({
  src: [
    {
      path: '../public/fonts/Rubik-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Rubik-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-rubik',
  display: 'swap',
})

const figtree = localFont({
  src: [
    {
      path: '../public/fonts/Figtree-VariableFont_wght.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Figtree-Italic-VariableFont_wght.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'XO Market Brand Guidelines',
  description:
    'From icons to illustration, logos to language — the foundation for how XO Market looks, feels, and sounds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${figtree.variable}`}>
      <body className={rubik.className}>
        {/* Fixed viewport shell — the brand canvas lives inside here */}
        <div
          id="root"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
