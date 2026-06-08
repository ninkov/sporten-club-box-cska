import { trainingGroups } from './data'

function TrainingSection() {
  return (
    <section className="training-section" id="training" aria-labelledby="training-title">
      <div className="section-heading">
        <p className="eyebrow">Тренировки</p>
        <h2 id="training-title">Групи за различно ниво и възраст.</h2>
        <p>
          Страницата е подготвена като базова версия. Текстовете, графикът и контактите
          могат лесно да се сменят, когато имаш точната информация.
        </p>
      </div>
      <div className="training-grid">
        {trainingGroups.map((group) => (
          <article className="training-card" key={group.title}>
            <span>{group.meta}</span>
            <h3>{group.title}</h3>
            <p>{group.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TrainingSection
