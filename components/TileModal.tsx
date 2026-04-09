'use client'

import { useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

interface TileModalProps {
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export default function TileModal({ onClose, children, title }: TileModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!mounted) return null

  const content = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5vh 5vw',
      }}
    >
      {/* Dark overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.55)',
        }}
      />

      {/* Modal container */}
      <div
        style={{
          position: 'relative',
          background: '#ffffff',
          borderRadius: '20px',
          width: '90vw',
          height: '90vh',
          overflowY: 'auto',
          zIndex: 1,
          boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header: title + close button */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 64px 20px',
            minHeight: '64px',
          }}
        >
          {title && (
            <h1
              style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 800,
                color: '#1a1a1a',
                lineHeight: 1.05,
                margin: 0,
                fontFamily: 'var(--font-rubik)',
                textAlign: 'center',
              }}
            >
              {title}
            </h1>
          )}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '50%',
              right: '24px',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              fontSize: '18px',
              fontWeight: 800,
              color: '#1a1a1a',
              lineHeight: 1,
              fontFamily: 'var(--font-rubik)',
              padding: 0,
            }}
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
