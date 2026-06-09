import ContactSection from '../components/ContactSection'
import Seo from '../components/Seo'
import { siteConfig } from '../seo/siteConfig'

function ContactPage() {
  return (
    <>
      <Seo
        title="Контакти | Спортен клуб бокс ЦСКА"
        description="Контакти за записване на пробна тренировка в Спортен клуб бокс ЦСКА."
        pageType="ContactPage"
        breadcrumbs={[{ name: 'Контакти', url: `${siteConfig.siteUrl}/kontakti` }]}
      />
      <ContactSection />
    </>
  )
}

export default ContactPage
