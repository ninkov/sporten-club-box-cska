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
      <div className="landing-section-marker">
        <AboutSection />
      </div>
      <div className="landing-section-marker">
        <HistorySection />
      </div>
      <div className="landing-section-marker">
        <CoachesSection />
      </div>
      <div className="landing-section-marker">
        <TrainingSection />
      </div>
      <ScheduleSection />
      <div className="landing-section-marker">
        <GallerySection />
      </div>
      <div className="landing-section-marker">
        <ProjectsSection />
      </div>
      <div className="landing-section-marker">
        <ContactSection />
      </div>
    </>
  )
}

export default HomePage
