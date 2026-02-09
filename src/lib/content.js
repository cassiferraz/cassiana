import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export function getSettings() {
  const filePath = path.join(contentDir, 'settings.json')
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
}

export function getAbout() {
  const filePath = path.join(contentDir, 'about.md')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(raw)
  return data
}

export function getCases() {
  const casesDir = path.join(contentDir, 'cases')
  const files = fs.readdirSync(casesDir).filter(f => f.endsWith('.md'))

  const cases = files.map(file => {
    const raw = fs.readFileSync(path.join(casesDir, file), 'utf-8')
    const { data } = matter(raw)
    return { ...data, slug: file.replace('.md', '') }
  })

  return cases
    .filter(c => c.published)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}
