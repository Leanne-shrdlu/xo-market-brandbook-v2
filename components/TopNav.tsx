'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_ITEMS = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path d="M8 1L1 6v9h5v-5h4v5h5V6L8 1z" />
      </svg>
    ),
  },
  {
    href: '/logo',
    label: 'Logo',
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path d="M4 1L0 3.5l4 2.5 4-2.5L16 6.5 12 9l4 2.5L12 14l-4-2.5L4 14 0 11.5 4 9 0 6.5 4 4l-4-2.5L4 1zm0 5.5L2 5l2-1.5L6 5 4 6.5zM4 11l-2-1.5L4 8l2 1.5L4 11zm4-2.5L6 7l2-1.5L10 7 8 8.5zM12 11l-2-1.5L12 8l2 1.5L12 11zm0-4.5L10 5l2-1.5L14 5l-2 1.5z" />
      </svg>
    ),
  },
  {
    href: '/colors',
    label: 'Colors',
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="5.5" cy="8" r="4" />
        <circle cx="10.5" cy="8" r="4" />
      </svg>
    ),
  },
  {
    href: '/typography',
    label: 'Typography',
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
        <path d="M2 3h12v2H9v8H7V5H2V3z" />
      </svg>
    ),
  },
  {
    href: '/assets',
    label: 'Assets',
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="5" height="5" rx="1" />
        <rect x="9" y="2" width="5" height="5" rx="1" />
        <rect x="2" y="9" width="5" height="5" rx="1" />
        <rect x="9" y="9" width="5" height="5" rx="1" />
      </svg>
    ),
  },
  {
    href: '/guidelines',
    label: 'Guidelines',
    icon: (
      <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 4h12M2 8h8M2 12h10" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function TopNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <nav
        className="hidden md:flex"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: 60,
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 16,
          paddingBottom: 16,
          zIndex: 200,
          background: 'rgba(10, 10, 10, 0.82)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          gap: 4,
        }}
      >
        {/* XO Market logomark */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            marginBottom: 12,
            flexShrink: 0,
          }}
          aria-label="XO Market Brand Home"
        >
          <Image
            src="/brand/XO Market Logomark Coloured.svg"
            alt="XO Market"
            width={32}
            height={32}
            unoptimized
            priority
          />
        </Link>

        {/* Divider */}
        <div
          style={{
            width: 28,
            height: 1,
            background: 'rgba(255,255,255,0.1)',
            marginBottom: 8,
            flexShrink: 0,
          }}
        />

        {/* Nav items */}
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
          return (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={isActive}
            />
          )
        })}
      </nav>

      {/* Mobile top bar */}
      <nav
        className="flex md:hidden"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 52,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16,
          zIndex: 200,
          background: 'rgba(10, 10, 10, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* XO Market logo (full, white for dark bar) */}
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Image
            src="/brand/XO Market Logo White.svg"
            alt="XO Market"
            width={110}
            height={32}
            unoptimized
            priority
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            padding: 6,
            color: '#ffffff',
          }}
        >
          <span
            style={{
              display: 'block',
              width: 20,
              height: 1.5,
              background: 'currentColor',
              transition: 'transform 0.2s ease',
              transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 20,
              height: 1.5,
              background: 'currentColor',
              opacity: mobileOpen ? 0 : 1,
              transition: 'opacity 0.2s ease',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 20,
              height: 1.5,
              background: 'currentColor',
              transition: 'transform 0.2s ease',
              transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div
          className="flex md:hidden"
          style={{
            position: 'fixed',
            top: 52,
            left: 0,
            right: 0,
            zIndex: 199,
            background: 'rgba(10, 10, 10, 0.96)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            flexDirection: 'column',
            padding: '8px 0',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 20px',
                  color: isActive ? '#0061ff' : 'rgba(255,255,255,0.75)',
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  fontFamily: 'var(--font-rubik)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

function SidebarItem({
  href,
  label,
  icon,
  isActive,
}: {
  href: string
  label: string
  icon: React.ReactNode
  isActive: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 44,
          color: isActive ? '#0061ff' : hovered ? '#ffffff' : 'rgba(255,255,255,0.45)',
          transition: 'color 0.2s ease',
          textDecoration: 'none',
          position: 'relative',
        }}
        aria-label={label}
      >
        {/* Active indicator bar */}
        {isActive && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 2,
              height: 20,
              background: '#0061ff',
              borderRadius: '0 2px 2px 0',
            }}
          />
        )}
        {icon}
      </Link>

      {/* Tooltip */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            left: 64,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(10,10,10,0.92)',
            color: '#ffffff',
            fontSize: 12,
            fontWeight: 500,
            fontFamily: 'var(--font-rubik)',
            padding: '5px 10px',
            borderRadius: 6,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            border: '1px solid rgba(255,255,255,0.08)',
            zIndex: 300,
          }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
