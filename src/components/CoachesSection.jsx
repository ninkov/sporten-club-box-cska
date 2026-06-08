const coaches = [
  {
    name: 'Главен треньор',
    role: 'Техническа подготовка',
  },
  {
    name: 'Помощник треньор',
    role: 'Кондиция и работа с начинаещи',
  },
  {
    name: 'Състезателна група',
    role: 'Спаринг, тактика и подготовка за ринг',
  },
]

function CoachesSection() {
  return (
    <section className="coaches-section" id="coaches" aria-labelledby="coaches-title">
      <div className="section-heading">
        <p className="eyebrow">Треньори</p>
        <h2 id="coaches-title">Екипът зад подготовката.</h2>
        <p>
          Тук могат да се добавят реалните имена, снимки и кратки биографии на треньорите.
        </p>
      </div>
      <div className="coaches-grid">
        {coaches.map((coach) => (
          <article className="coach-card" key={coach.name}>
            <div className="coach-avatar" aria-hidden="true">
              {coach.name.slice(0, 1)}
            </div>
            <h3>{coach.name}</h3>
            <p>{coach.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CoachesSection
