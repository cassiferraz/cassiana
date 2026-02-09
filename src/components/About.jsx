'use client'

import FadeIn from './FadeIn'

export default function About({ about }) {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-accent-dark text-sm tracking-[0.3em] uppercase mb-4">Sobre</p>
          <h2 className="font-serif text-3xl md:text-4xl text-accent font-medium leading-snug mb-12">
            {about.headline}
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="space-y-6 mb-16">
            {about.bio_paragraphs.map((p, i) => (
              <p key={i} className="text-muted-light leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <FadeIn>
            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="font-serif text-xl text-accent mb-4">Liderança</h3>
              <p className="text-muted-light leading-relaxed">{about.leadership_text}</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="font-serif text-xl text-accent mb-4">IA + Design</h3>
              <p className="text-muted-light leading-relaxed">{about.ai_text}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <h3 className="font-serif text-xl text-accent mb-6">Especialidades</h3>
          <div className="flex flex-wrap gap-3 mb-16" >
            {about.specialties.map((s, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-muted/30 text-muted-light text-sm rounded-full hover:border-accent/50 hover:text-accent transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h3 className="font-serif text-xl text-accent mb-8">Trajetória</h3>
        </FadeIn>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-muted/20" />
          {about.timeline.map((item, i) => (
            <FadeIn key={i}>
              <div
                className={`relative grid md:grid-cols-2 gap-4 mb-10 ${
                  i % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                <div className={`${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:col-start-2 md:pl-10'}`}>
                  <span className="text-accent-dark text-sm font-medium">{item.period}</span>
                  <h4 className="font-serif text-accent text-lg">{item.role}</h4>
                  <p className="text-muted text-sm mb-1">{item.company}</p>
                  <p className="text-muted-light text-sm leading-relaxed">{item.description}</p>
                </div>
                <div
                  className="absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full bg-accent/60 border-2 border-bg -translate-x-1/2"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
