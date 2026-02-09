import { sanitizeUrl } from '@/lib/sanitize'

export default function Footer({ settings }) {
  const linkedinHref = sanitizeUrl(settings.linkedin_url)
  const emailHref = sanitizeUrl(`mailto:${settings.email}`)

  return (
    <footer className="py-8 px-6 border-t border-muted/10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">{settings.footer_text}</p>
        <div className="flex items-center gap-6">
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href={emailHref}
            className="text-muted hover:text-accent transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
