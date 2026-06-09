import CoachesSection from '../components/CoachesSection'
import Seo from '../components/Seo'
import { siteConfig } from '../seo/siteConfig'

function CoachesPage() {
  return (
    <>
      <Seo
        title="Треньори | Спортен клуб бокс ЦСКА"
        description="Треньорски екип и подготовка в Спортен клуб бокс ЦСКА."
        breadcrumbs={[{ name: 'Треньори', url: `${siteConfig.siteUrl}/trenyori` }]}
      />
      <CoachesSection />
    </>
  )
}

export default CoachesPage
