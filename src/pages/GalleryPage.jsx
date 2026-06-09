import GallerySection from '../components/GallerySection'
import Seo from '../components/Seo'
import { siteConfig } from '../seo/siteConfig'

function GalleryPage() {
  return (
    <>
      <Seo
        title="Галерия | Спортен клуб бокс ЦСКА"
        description="Галерия със снимки от тренировки, състезания и събития на Спортен клуб бокс ЦСКА."
        pageType="ImageGallery"
        breadcrumbs={[{ name: 'Галерия', url: `${siteConfig.siteUrl}/galeria` }]}
      />
      <GallerySection />
    </>
  )
}

export default GalleryPage
