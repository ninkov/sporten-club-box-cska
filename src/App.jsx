import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollManager from './components/ScrollManager'
import ScrollToTopButton from './components/ScrollToTopButton'
import AboutPage from './pages/AboutPage'
import CoachesPage from './pages/CoachesPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HistoryPage from './pages/HistoryPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectsPage from './pages/ProjectsPage'
import TrainingPage from './pages/TrainingPage'

function App() {
  return (
    <main>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/za-nas" element={<AboutPage />} />
        <Route path="/istoria-na-kluba" element={<HistoryPage />} />
        <Route path="/trenyori" element={<CoachesPage />} />
        <Route path="/trenirovki" element={<TrainingPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/proekti" element={<ProjectsPage />} />
        <Route path="/kontakti" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </main>
  )
}

export default App
