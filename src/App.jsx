import heroImg from './assets/boxing-hero.png'
import './App.css'

const trainingGroups = [
  {
    title: 'Деца и юноши',
    meta: '8-16 години',
    text: 'Основи на бокса, дисциплина, координация и работа в група.',
  },
  {
    title: 'Любители',
    meta: 'Начинаещи и напреднали',
    text: 'Техника, кондиция, лапи, чувал и контролирани партньорски упражнения.',
  },
  {
    title: 'Състезатели',
    meta: 'Подготовка за ринг',
    text: 'Интензивни тренировки, спаринг, тактика и индивидуална работа.',
  },
]

const schedule = [
  ['Понеделник', '18:00 - 20:00'],
  ['Сряда', '18:00 - 20:00'],
  ['Петък', '18:00 - 20:00'],
  ['Събота', '10:00 - 12:00'],
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Спортен клуб бокс ЦСКА">
          <span className="brand-mark">ЦСКА</span>
          <span>Спортен клуб бокс</span>
        </a>
        <nav aria-label="Основна навигация">
          <a href="#training">Тренировки</a>
          <a href="#schedule">График</a>
          <a href="#contact">Контакт</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img src={heroImg} alt="Боксова зала с ринг и ръкавици" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">София • бокс • дисциплина</p>
          <h1>Спортен клуб бокс ЦСКА</h1>
          <p className="lead">
            Базов клубен сайт за тренировки по бокс, групи за начинаещи и напреднали,
            състезателна подготовка и контакт с клуба.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Запиши се
            </a>
            <a className="secondary-button" href="#training">
              Виж групите
            </a>
          </div>
        </div>
      </section>

      <section className="intro-section" aria-label="Клубът накратко">
        <article>
          <strong>3</strong>
          <span>тренировъчни групи</span>
        </article>
        <article>
          <strong>4</strong>
          <span>дни седмично</span>
        </article>
        <article>
          <strong>1</strong>
          <span>ясна цел: развитие</span>
        </article>
      </section>

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

      <section className="schedule-section" id="schedule" aria-labelledby="schedule-title">
        <div className="section-heading">
          <p className="eyebrow">График</p>
          <h2 id="schedule-title">Примерна седмична програма.</h2>
        </div>
        <div className="schedule-list">
          {schedule.map(([day, time]) => (
            <div className="schedule-row" key={day}>
              <span>{day}</span>
              <strong>{time}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">Подход</p>
          <h2 id="about-title">Техника, характер и постоянство.</h2>
        </div>
        <p>
          Тренировките комбинират загрявка, движение, боксова техника, работа на чувал,
          упражнения по двойки и кондиция. Фокусът е върху правилна основа, безопасност
          и постепенно надграждане.
        </p>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Контакт</p>
          <h2 id="contact-title">Ела на пробна тренировка.</h2>
          <p>
            Попълни реалните телефон, адрес и имейл на клуба, когато са готови. Засега
            бутоните са оставени като placeholders.
          </p>
        </div>
        <div className="contact-card">
          <a className="primary-button" href="tel:+359000000000">
            Обади се
          </a>
          <a className="secondary-button" href="mailto:club@example.com">
            Изпрати имейл
          </a>
          <p>Адрес: София, спортна зала ЦСКА</p>
        </div>
      </section>
    </main>
  )
}

export default App
