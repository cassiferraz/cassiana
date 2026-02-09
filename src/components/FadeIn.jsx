'use client'

import { useEffect, useRef } from 'react'

export default function FadeIn({ children, className = '', stagger = false }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${stagger ? 'fade-in-children' : 'fade-in'} ${className}`}
    >
      {children}
    </div>
  )
}
