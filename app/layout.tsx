import type { Metadata } from 'next'
import { Inter, Noto_Sans_Mono } from 'next/font/google'
import './globals.css'
import TopNav from '@/components/TopNav'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dropbox Brand Guidelines',
  description:
    'From icons to illustration, logos to language — the foundation for how Dropbox looks, feels, and sounds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansMono.variable}`}>
      <body>
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
          <TopNav />
          {children}
        </div>
      </body>
    </html>
  )
}
