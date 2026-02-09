'use client'

import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const target = parseFloat(value)
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            setCount(current)
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  const displayValue = Number.isInteger(parseFloat(value))
    ? Math.round(count)
    : count.toFixed(1)

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl md:text-5xl text-accent font-medium">
        {displayValue}
        <span className="text-accent-dark">{suffix}</span>
      </div>
      <div className="text-muted text-sm mt-1 tracking-wide">{label}</div>
    </div>
  )
}

export default function Hero({ settings }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-muted text-sm tracking-[0.3em] uppercase mb-6 fade-in visible">
          {settings.overline}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-accent font-medium leading-tight mb-8">
          {settings.name}
        </h1>
        <p className="text-muted-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
          {settings.hero_subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {settings.stats.map((stat, i) => (
            <AnimatedCounter
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-muted/50"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
