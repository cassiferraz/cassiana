'use client'

import FadeIn from './FadeIn'
import { sanitizeUrl } from '@/lib/sanitize'

export default function Contact({ settings }) {
  const linkedinHref = sanitizeUrl(settings.linkedin_url)
  const emailHref = sanitizeUrl(`mailto:${settings.email}`)

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-accent-dark text-sm tracking-[0.3em] uppercase mb-4">Contato</p>
          <h2 className="font-serif text-3xl md:text-4xl text-accent font-medium leading-snug mb-6">
            Vamos conversar?
          </h2>
          <p className="text-muted-light text-lg max-w-xl mx-auto mb-12">
            Estou sempre aberta a trocar ideias sobre design, liderança e educação.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent/10 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 hover:border-accent/50 transition-all text-sm tracking-wider uppercase"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href={emailHref}
              className="inline-flex items-center gap-3 px-8 py-4 border border-muted/30 text-muted-light rounded-lg hover:border-accent/30 hover:text-accent transition-all text-sm tracking-wider uppercase"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
