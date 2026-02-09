'use client'

import { useEffect, useRef, useState } from 'react'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hero({ settings }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 20% 50%, #2a1f14 0%, #1a1310 40%, #110e0b 100%)',
      }}
    >
      {/* Subtle warm accent lines */}
      <div className="absolute top-1/4 left-0 w-1/3 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(180, 120, 60, 0.12), transparent)' }} />
      <div className="absolute bottom-1/3 right-0 w-1/4 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(180, 120, 60, 0.08), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: '#8b5a2b99' }}>
          {settings.overline}
        </p>

        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#ede0d0' }}>
          {settings.name}
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: '#a08b74' }}>
          {settings.hero_subtitle}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          {settings.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-light mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9a87c' }}>
                <Counter end={Math.round(stat.value)} suffix={stat.suffix} />
              </div>
              <p className="text-xs tracking-widest uppercase" style={{ color: '#6b5a49' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mt-16 inline-block transition-all"
          style={{ color: '#8a7560' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(4px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4v32m0 0l-8-8m8 8l8-8" />
          </svg>
        </button>
      </div>
    </section>
  )
}
