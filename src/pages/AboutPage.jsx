import AboutSection from '../components/AboutSection'
import Seo from '../components/Seo'
import { siteConfig } from '../seo/siteConfig'

function AboutPage() {
  return (
    <>
      <Seo
        title="За нас | Спортен клуб бокс ЦСКА"
        description="Научете повече за подхода, тренировките и развитието в Спортен клуб бокс ЦСКА."
        pageType="AboutPage"
        breadcrumbs={[{ name: 'За нас', url: `${siteConfig.siteUrl}/za-nas` }]}
      />
      <AboutSection />
    </>
  )
}

export default AboutPage
