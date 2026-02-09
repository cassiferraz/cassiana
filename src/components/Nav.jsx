'use client'

import { useState, useEffect } from 'react'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav({ active }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(32, 24, 18, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139, 90, 43, 0.15)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="tracking-widest text-xs uppercase font-medium transition-colors"
          style={{ color: '#c9a87c' }}
          onMouseEnter={(e) => (e.target.style.color = '#dfc4a0')}
          onMouseLeave={(e) => (e.target.style.color = '#c9a87c')}
        >
          Cassi Ferraz
        </button>

        <div className="hidden md:flex items-center gap-8">
          {[
            ['Sobre', 'about'],
            ['Cases', 'cases'],
            ['Contato', 'contact'],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: active === id ? '#c9a87c' : '#8a7560' }}
              onMouseEnter={(e) => (e.target.style.color = '#c9a87c')}
              onMouseLeave={(e) => (e.target.style.color = active === id ? '#c9a87c' : '#8a7560')}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden transition-colors"
          style={{ color: '#a08b74' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-4"
          style={{ backgroundColor: 'rgba(32, 24, 18, 0.97)', borderTop: '1px solid rgba(139, 90, 43, 0.15)' }}
        >
          {[
            ['Sobre', 'about'],
            ['Cases', 'cases'],
            ['Contato', 'contact'],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => { scrollToSection(id); setMenuOpen(false) }}
              className="text-sm tracking-widest uppercase text-left transition-colors"
              style={{ color: '#a08b74' }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
