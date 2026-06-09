import ProjectsSection from '../components/ProjectsSection'
import Seo from '../components/Seo'
import { siteConfig } from '../seo/siteConfig'

function ProjectsPage() {
  return (
    <>
      <Seo
        title="Проекти | Спортен клуб бокс ЦСКА"
        description="Проекти, инициативи и дейности за развитие на Спортен клуб бокс ЦСКА."
        breadcrumbs={[{ name: 'Проекти', url: `${siteConfig.siteUrl}/proekti` }]}
      />
      <ProjectsSection />
    </>
  )
}

export default ProjectsPage
