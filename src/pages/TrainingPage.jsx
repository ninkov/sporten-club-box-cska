import ScheduleSection from '../components/ScheduleSection'
import TrainingSection from '../components/TrainingSection'
import Seo from '../components/Seo'
import { siteConfig } from '../seo/siteConfig'

function TrainingPage() {
  return (
    <>
      <Seo
        title="Тренировки | Спортен клуб бокс ЦСКА"
        description="Тренировки по бокс в Спортен клуб бокс ЦСКА за различно ниво, възраст и подготовка."
        breadcrumbs={[{ name: 'Тренировки', url: `${siteConfig.siteUrl}/trenirovki` }]}
      />
      <TrainingSection />
      <ScheduleSection />
    </>
  )
}

export default TrainingPage
