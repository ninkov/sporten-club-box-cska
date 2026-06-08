import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import CoachesSection from './components/CoachesSection'
import GallerySection from './components/GallerySection'
import Header from './components/Header'
import Hero from './components/Hero'
import HistorySection from './components/HistorySection'
import ScheduleSection from './components/ScheduleSection'
import Stats from './components/Stats'
import TrainingSection from './components/TrainingSection'

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <AboutSection />
      <HistorySection />
      <CoachesSection />
      <GallerySection />
      <TrainingSection />
      <ScheduleSection />
      <ContactSection />
    </main>
  )
}

export default App
