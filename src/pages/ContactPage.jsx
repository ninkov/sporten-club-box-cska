import ContactSection from '../components/ContactSection'
import Seo from '../components/Seo'

function ContactPage() {
  return (
    <>
      <Seo
        title="Контакти | Спортен клуб бокс ЦСКА"
        description="Контакти за записване на пробна тренировка в Спортен клуб бокс ЦСКА."
      />
      <ContactSection />
    </>
  )
}

export default ContactPage
