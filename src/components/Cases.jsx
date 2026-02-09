'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

function CaseCard({ caseData, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <FadeIn delay={index * 100}>
      <div className="rounded-lg border overflow-hidden transition-all" style={{ backgroundColor: '#0f0c0a', borderColor: '#1f1812' }}>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-8 transition-colors"
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#151110')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0f0c0a')}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {caseData.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded border" style={{ color: '#8b5a2b', borderColor: '#1f1812' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#ede0d0' }}>
                {caseData.title}
              </h3>

              <p className="leading-relaxed max-w-2xl" style={{ color: '#8a7560' }}>
                {caseData.subtitle}
              </p>
            </div>

            <div className="flex md:flex-col gap-6 md:gap-4 md:items-end text-center md:text-right">
              {caseData.metrics.map((m, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-light mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#c9a87c' }}>
                    {m.value}
                  </div>
                  <p className="text-xs tracking-wide" style={{ color: '#6b5a49' }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm transition-colors" style={{ color: '#8b5a2b' }}>
            <span>{expanded ? 'Recolher' : 'Ver case completo'}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </div>
        </button>

        {expanded && (
          <div className="px-8 pb-8 space-y-8" style={{ borderTop: '1px solid #1f1812' }}>
            {caseData.sections.map((section, i) => (
              <div key={i} className="pt-8">
                <h4 className="text-lg font-medium mb-3" style={{ color: '#c9a87c' }}>{section.title}</h4>
                <p className="leading-relaxed" style={{ color: '#8a7560' }}>{section.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  )
}

export default function Cases({ cases }) {
  return (
    <section id="cases" className="py-24 md:py-32" style={{ backgroundColor: '#110e0b' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: '#8b5a2b99' }}>02 — Cases</p>
        </FadeIn>

        <FadeIn delay={50}>
          <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#ede0d0' }}>
            Trabalhos <span style={{ color: '#c9a87c' }}>selecionados</span>
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mb-16 max-w-xl" style={{ color: '#6b5a49' }}>
            Cases que demonstram construção de produtos, liderança estratégica e inovação aplicada na educação digital.
          </p>
        </FadeIn>

        <div className="space-y-8">
          {cases.map((c, i) => <CaseCard key={i} caseData={c} index={i} />)}
        </div>
      </div>
    </section>
  )
}
