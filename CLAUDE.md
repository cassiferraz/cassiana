# CLAUDE.md — Cassiana Portfolio

## Project Overview

Personal portfolio website for Cassi Ferraz, a Design Manager with 17+ years of experience in EdTech and product design. Built with Next.js 14 (App Router), Tailwind CSS, and Decap CMS for content management. Content is in Portuguese (pt-BR).

## Tech Stack

- **Framework**: Next.js 14.2.35 (React 18.3.1, App Router)
- **Styling**: Tailwind CSS 3.4.17 (dark luxury theme: browns, golds)
- **CMS**: Decap CMS 3.3.3 (headless, GitHub-backed)
- **Content**: Markdown + YAML frontmatter (parsed with gray-matter)
- **Output**: Standalone build (optimized for Vercel/containers)

## Commands

```bash
npm run dev       # Start dev server on localhost:3000
npm run build     # Production build (standalone output)
npm run start     # Serve production build
npm run lint      # Run ESLint (Next.js built-in)
```

## Directory Structure

```
src/
  app/
    layout.jsx        # Root layout (metadata, fonts, lang=pt-BR)
    page.jsx          # Home page (server component, SSG)
    globals.css       # Global styles, animations, Tailwind directives
  components/
    Hero.jsx          # Hero with animated counters (client)
    Nav.jsx           # Sticky responsive navigation (client)
    About.jsx         # Bio, specialties, career timeline (client)
    Cases.jsx         # Case study grid with modals (client)
    Contact.jsx       # Contact CTA with sanitized URLs (client)
    Footer.jsx        # Footer (server component)
    FadeIn.jsx        # Reusable scroll-triggered animation wrapper (client)
  lib/
    content.js        # Content loading: getSettings(), getAbout(), getCases()
    sanitize.js       # URL sanitization (whitelist: https, http, mailto)
content/
  settings.json       # Site metadata, stats, contact info
  about.md            # About section content (frontmatter)
  cases/*.md          # Case studies (lxp.md, ia-design.md, ecossistema.md)
public/
  admin/
    index.html        # Decap CMS admin interface
    config.yml        # CMS collections and field schemas
  images/uploads/     # CMS-managed image uploads
```

## Architecture Patterns

- **Server/Client split**: `page.jsx` and `layout.jsx` are server components; interactive components use `'use client'` directive
- **Static Generation (SSG)**: Home page built at build time from markdown content
- **Content layer**: `src/lib/content.js` reads markdown/JSON from `content/` directory using `gray-matter`
- **Flat-file CMS**: Decap CMS commits content changes to GitHub; no backend API needed
- **Import aliases**: `@/*` maps to `./src/*` (configured in `jsconfig.json`)

## Code Conventions

- **Components**: PascalCase filenames (`Hero.jsx`, `FadeIn.jsx`)
- **Utilities**: camelCase functions (`getSettings`, `sanitizeUrl`)
- **Styling**: Tailwind utility classes only; custom theme colors defined in `tailwind.config.js`
- **Animations**: Use `FadeIn` wrapper component with IntersectionObserver for scroll-triggered animations
- **No TypeScript**: Project uses plain JavaScript (JSX)

## Custom Theme Colors (tailwind.config.js)

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#110e0b` | Main background |
| `bg-light` | `#1a1613` | Card/section background |
| `accent` | `#c9a87c` | Primary gold accent |
| `accent-dark` | `#b8860b` | Darker gold for hover states |
| `muted` | `#8a7560` | Muted text/borders |

Fonts: Playfair Display (serif headings) + System UI (sans body text).

## Security

- **Security headers** in `next.config.js` for all routes except `/admin`: X-Frame-Options DENY, X-Content-Type-Options nosniff, strict Referrer-Policy, Permissions-Policy
- **URL sanitization** in `src/lib/sanitize.js`: whitelist-based (https, http, mailto only); defaults to `#` for invalid URLs
- **CMS admin** uses relaxed CSP to allow Decap CMS scripts (`unsafe-eval`)
- Never inject raw HTML without sanitization

## Content Editing

Content is editable via Decap CMS at `/admin` or by editing markdown files directly:

- **Site settings**: `content/settings.json` (name, stats, contact URLs)
- **About section**: `content/about.md` (bio, specialties, timeline)
- **Case studies**: `content/cases/*.md` (title, subtitle, tags, metrics, sections)

Case studies have `published: true/false` and `order` fields for visibility and sorting.

## Dependencies (minimal)

**Production**: next, react, react-dom, gray-matter
**Dev**: tailwindcss, postcss, autoprefixer, @types/node

## Testing

No test framework is currently configured. Validate changes with:
1. `npm run build` — ensures no build errors
2. `npm run lint` — catches code quality issues
3. Manual browser testing on `npm run dev`

## Deployment

Target platform: Vercel (standalone output mode). No CI/CD workflows configured yet. The `.gitignore` excludes `.vercel`, `.next`, and `node_modules`.
