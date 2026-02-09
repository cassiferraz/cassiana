'use client'

import FadeIn from './FadeIn'

export default function About({ about }) {
  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: '#0d0b09' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: '#8b5a2b99' }}>01 — Sobre</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <FadeIn delay={50}>
              <h2 className="text-3xl md:text-4xl font-light mb-6 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#ede0d0' }}>
                {about.headline}
              </h2>
            </FadeIn>

            {about.bio_paragraphs.map((p, i) => (
              <FadeIn key={i} delay={100 + i * 50}>
                <p className="leading-relaxed mb-6" style={{ color: '#8a7560' }}>
                  {p}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={250}>
            <div className="space-y-6">
              <div className="p-6 rounded border" style={{ backgroundColor: '#151110', borderColor: '#1f1812' }}>
                <h3 className="text-sm tracking-widest uppercase mb-4" style={{ color: '#8b5a2b' }}>Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {about.specialties.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded border" style={{ color: '#a08b74', borderColor: '#1f1812', backgroundColor: '#110e0b' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded border" style={{ backgroundColor: '#151110', borderColor: '#1f1812' }}>
                <h3 className="text-sm tracking-widest uppercase mb-4" style={{ color: '#8b5a2b' }}>Liderança</h3>
                <p style={{ color: '#8a7560' }}>{about.leadership_text}</p>
              </div>

              <div className="p-6 rounded border" style={{ backgroundColor: '#151110', borderColor: '#1f1812' }}>
                <h3 className="text-sm tracking-widest uppercase mb-4" style={{ color: '#8b5a2b' }}>IA + Design</h3>
                <p style={{ color: '#8a7560' }}>{about.ai_text}</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <h3 className="text-2xl font-light mb-12" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#ede0d0' }}>
            Trajetória
          </h3>
        </FadeIn>

        <div className="space-y-6">
          {about.timeline.map((item, i) => (
            <FadeIn key={i} delay={350 + i * 50}>
              <div className="flex flex-col md:flex-row gap-6 p-6 rounded border transition-colors" style={{ backgroundColor: '#0f0c0a', borderColor: '#1a1510' }}>
                <div className="md:w-32 flex-shrink-0">
                  <p className="text-xs tracking-widest uppercase" style={{ color: '#8b5a2b99' }}>{item.period}</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium mb-1" style={{ color: '#ede0d0' }}>{item.role}</h4>
                  <p className="text-sm mb-2" style={{ color: '#c9a87c' }}>{item.company}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5a49' }}>{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
