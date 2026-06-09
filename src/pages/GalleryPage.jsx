import GallerySection from '../components/GallerySection'
import Seo from '../components/Seo'

function GalleryPage() {
  return (
    <>
      <Seo
        title="Галерия | Спортен клуб бокс ЦСКА"
        description="Галерия със снимки от тренировки, състезания и събития на Спортен клуб бокс ЦСКА."
      />
      <GallerySection />
    </>
  )
}

export default GalleryPage
