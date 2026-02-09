'use client'

import { useState, useEffect } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Cases from './Cases'
import Contact from './Contact'
import Footer from './Footer'

const SECTIONS = ['home', 'about', 'cases', 'contact']

export default function PortfolioClient({ settings, about, cases }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#110e0b', color: '#8a7560', fontFamily: "'system-ui', sans-serif" }}>
      <Nav active={activeSection} />
      <Hero settings={settings} />
      <About about={about} />
      <Cases cases={cases} />
      <Contact settings={settings} />
      <Footer settings={settings} />
    </div>
  )
}
