import AboutSection from '../components/AboutSection'
import Seo from '../components/Seo'
import { siteConfig } from '../seo/siteConfig'

function AboutPage() {
  return (
    <>
      <Seo
        title="За нас | Спортен клуб бокс ЦСКА"
        description="Научете повече за Спортен клуб бокс ЦСКА, тренировъчния подход, традицията и средата за развитие в клуба."
        pageType="AboutPage"
        breadcrumbs={[{ name: 'За нас', url: `${siteConfig.siteUrl}/za-nas` }]}
      />
      <AboutSection />
    </>
  )
}

export default AboutPage
