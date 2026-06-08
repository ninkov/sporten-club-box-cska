function HistorySection() {
  return (
    <section className="history-section" id="history" aria-labelledby="history-title">
      <div className="section-heading">
        <p className="eyebrow">История на клуба</p>
        <h2 id="history-title">Традиция, която се гради в залата.</h2>
        <p>
          Тази секция е подготвена за кратка история на клуба, важни състезания,
          отличия и моменти, които представят развитието на бокса в ЦСКА.
        </p>
      </div>
      <div className="timeline-list">
        <article>
          <span>Начало</span>
          <p>Основаване, първи треньори и първи тренировъчни групи.</p>
        </article>
        <article>
          <span>Развитие</span>
          <p>Участия в турнири, подготовка на състезатели и работа с млади боксьори.</p>
        </article>
        <article>
          <span>Днес</span>
          <p>Тренировки за деца, любители и състезатели с фокус върху дисциплина и техника.</p>
        </article>
      </div>
    </section>
  )
}

export default HistorySection
