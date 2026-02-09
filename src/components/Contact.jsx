'use client'

import FadeIn from './FadeIn'
import { sanitizeUrl } from '@/lib/sanitize'

export default function Contact({ settings }) {
  const linkedinHref = sanitizeUrl(settings.linkedin_url)
  const emailHref = sanitizeUrl(`mailto:${settings.email}`)

  const contactLinks = [
    { label: 'LinkedIn', value: 'linkedin.com/in/cassianeferraz', href: linkedinHref },
    { label: 'Email', value: settings.email, href: emailHref },
  ]

  return (
    <section id="contact" className="py-24 md:py-32" style={{ backgroundColor: '#151110', borderTop: '1px solid #1f1812' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: '#8b5a2b99' }}>03 — Contato</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <FadeIn delay={50}>
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#ede0d0' }}>
                Vamos <span style={{ color: '#c9a87c' }}>conversar?</span>
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="leading-relaxed mb-10 max-w-md" style={{ color: '#8a7560' }}>
                Estou aberta a novas conexões, oportunidades e conversas sobre design, educação e tecnologia.
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-6">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 transition-colors"
                    style={{ color: '#8a7560' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a87c')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8a7560')}
                  >
                    <span className="text-xs tracking-widest uppercase w-20" style={{ color: '#5a4a38' }}>{item.label}</span>
                    <span className="text-sm">{item.value}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M1 13L13 1M13 1H5M13 1v8" />
                    </svg>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="hidden md:flex items-center justify-center">
              <div className="text-7xl lg:text-8xl font-light select-none leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                <span style={{ color: '#1f1812' }}>&ldquo;Design é</span><br />
                <span style={{ color: '#1a1510' }}>entender o</span><br />
                <span style={{ color: '#17130f' }}>ecossistema</span><br />
                <span style={{ color: '#14110d' }}>completo.&rdquo;</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
