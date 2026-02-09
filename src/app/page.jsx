import { getSettings, getAbout, getCases } from '@/lib/content'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Cases from '@/components/Cases'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const settings = getSettings()
  const about = getAbout()
  const cases = getCases()

  return (
    <>
      <Nav />
      <main>
        <Hero settings={settings} />
        <About about={about} />
        <Cases cases={cases} />
        <Contact settings={settings} />
      </main>
      <Footer settings={settings} />
    </>
  )
}
