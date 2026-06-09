import HistorySection from '../components/HistorySection'
import Seo from '../components/Seo'
import { siteConfig } from '../seo/siteConfig'

function HistoryPage() {
  return (
    <>
      <Seo
        title="История на клуба | Спортен клуб бокс ЦСКА"
        description="История, традиция и развитие на Спортен клуб бокс ЦСКА."
        breadcrumbs={[{ name: 'История на клуба', url: `${siteConfig.siteUrl}/istoria-na-kluba` }]}
      />
      <HistorySection />
    </>
  )
}

export default HistoryPage
