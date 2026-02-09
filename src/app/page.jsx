import { getSettings, getAbout, getCases } from '@/lib/content'
import PortfolioClient from '@/components/PortfolioClient'

export default function Home() {
  const settings = getSettings()
  const about = getAbout()
  const cases = getCases()

  return <PortfolioClient settings={settings} about={about} cases={cases} />
}
