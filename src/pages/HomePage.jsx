import AboutSection from '../components/AboutSection'
import CoachesSection from '../components/CoachesSection'
import ContactSection from '../components/ContactSection'
import GallerySection from '../components/GallerySection'
import Hero from '../components/Hero'
import HistorySection from '../components/HistorySection'
import ProjectsSection from '../components/ProjectsSection'
import ScheduleSection from '../components/ScheduleSection'
import Seo from '../components/Seo'
import Stats from '../components/Stats'
import TrainingSection from '../components/TrainingSection'

function HomePage() {
  return (
    <>
      <Seo
        title="Спортен клуб бокс ЦСКА"
        description="Официален сайт на Спортен клуб бокс ЦСКА - тренировки, история, треньори, галерия и контакти."
        pageType="WebPage"
      />
      <Hero />
      <Stats />
      <AboutSection />
      <HistorySection />
      <CoachesSection />
      <GallerySection />
      <ProjectsSection />
      <TrainingSection />
      <ScheduleSection />
      <ContactSection />
    </>
  )
}

export default HomePage
