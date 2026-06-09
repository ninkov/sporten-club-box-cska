const projects = [
  {
    title: 'Мултикултурна среда без насилие',
    meta: '1 юни',
    text: 'Спортен празник за деца в залата на СК Бокс ЦСКА с активности по бокс, волейбол, баскетбол и бадминтон, насочени към екипност, толерантност и уважение.',
    sourceUrl:
      'https://demetra.bg/sporten-praznik-sabra-deca-v-zalata-na-sporten-klub-po-boks-cska-po-povod-1-yuni/',
  },
]

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Проекти</p>
        <h2 id="projects-title">Инициативи за развитие на клуба.</h2>
        <p>
          Представяне на текущи и бъдещи проекти на клуба - школа,
          състезателна дейност, партньорства и събития.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span>{project.meta}</span>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            {project.sourceUrl && (
              <a className="project-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
                Виж повече
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
