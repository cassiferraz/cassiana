'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

function CaseCard({ caseData, onClick }) {
  return (
    <FadeIn>
      <button
        onClick={onClick}
        className="w-full text-left bg-bg-light border border-muted/10 rounded-lg p-8 hover:border-accent/30 transition-all duration-300 group"
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {caseData.tags.map((tag, i) => (
            <span key={i} className="text-xs text-accent-dark tracking-wider uppercase">
              {tag}{i < caseData.tags.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-2xl text-accent font-medium mb-3 group-hover:text-accent-dark transition-colors">
          {caseData.title}
        </h3>
        <p className="text-muted-light leading-relaxed mb-6">{caseData.subtitle}</p>
        <div className="flex flex-wrap gap-8">
          {caseData.metrics.map((m, i) => (
            <div key={i}>
              <div className="text-accent font-serif text-xl">{m.value}</div>
              <div className="text-muted text-xs tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>
      </button>
    </FadeIn>
  )
}

function CaseModal({ caseData, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-10"
      onClick={onClose}
    >
      <div
        className="bg-bg-light border border-muted/10 rounded-lg max-w-3xl w-full mx-4 p-8 md:p-12 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-muted hover:text-accent transition-colors"
          aria-label="Fechar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        <div className="flex flex-wrap gap-2 mb-4">
          {caseData.tags.map((tag, i) => (
            <span key={i} className="text-xs text-accent-dark tracking-wider uppercase">
              {tag}{i < caseData.tags.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-accent font-medium mb-3">
          {caseData.title}
        </h2>
        <p className="text-muted-light text-lg mb-8">{caseData.subtitle}</p>

        <div className="flex flex-wrap gap-8 mb-10 pb-8 border-b border-muted/10">
          {caseData.metrics.map((m, i) => (
            <div key={i}>
              <div className="text-accent font-serif text-2xl">{m.value}</div>
              <div className="text-muted text-sm tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {caseData.sections.map((section, i) => (
            <div key={i}>
              <h3 className="font-serif text-xl text-accent mb-3">{section.title}</h3>
              <p className="text-muted-light leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Cases({ cases }) {
  const [activeCase, setActiveCase] = useState(null)

  return (
    <section id="cases" className="py-24 md:py-32 px-6 bg-bg-light/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-accent-dark text-sm tracking-[0.3em] uppercase mb-4">Cases</p>
          <h2 className="font-serif text-3xl md:text-4xl text-accent font-medium leading-snug mb-12">
            Projetos que definiram minha trajetória
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <CaseCard key={i} caseData={c} onClick={() => setActiveCase(c)} />
          ))}
        </div>
      </div>

      {activeCase && (
        <CaseModal caseData={activeCase} onClose={() => setActiveCase(null)} />
      )}
    </section>
  )
}
