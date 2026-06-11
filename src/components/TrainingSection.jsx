import { trainingGroups } from './data'

const trainingIntro = [
  'В Спортен клуб бокс ЦСКА тренировките са повече от спорт - те са път към дисциплина, увереност и силен характер. В залата всеки състезател се учи не само как да нанася удар, а как да контролира себе си, да мисли под напрежение и да не се отказва пред трудностите.',
  'Боксът изгражда физическа сила, бързина, издръжливост и координация, но най-важното - възпитава воля, уважение и постоянство. Независимо дали правите първите си стъпки в спорта, или вече имате състезателен опит, нашите тренировки са насочени към постепенно развитие, правилна техника и безопасна подготовка.',
  'В клуба работим с деца, младежи и състезатели, като поставяме акцент върху индивидуалния напредък на всеки трениращ. Всяка тренировка е възможност да станеш по-силен, по-уверен и по-дисциплиниран - както на ринга, така и извън него.',
]

function TrainingSection() {
  return (
    <section className="training-section" id="training" aria-labelledby="training-title">
      <div className="section-heading">
        <p className="eyebrow">Тренировки</p>
        <h2 id="training-title">Групи за различно ниво и възраст.</h2>
        <div className="training-intro">
          {trainingIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="training-callout">
            Ела в залата. Направи първата крачка. Характерът се изгражда с труд,
            постоянство и желание за победа.
          </p>
        </div>
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
