import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <picture>
          <source media="(max-width: 700px)" srcSet="/images/boxing-hero-mobile.jpg" />
          <img
            src="/images/boxing-hero-desktop.jpg"
            alt="Боксова зала с ринг и ръкавици"
            width="1717"
            height="916"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className="hero-content">
        <p className="eyebrow">София • бокс • дисциплина</p>
        <h1>Спортен клуб бокс ЦСКА</h1>
        <p className="lead">
          Клуб за тренировки по бокс, групи за начинаещи и напреднали,
          състезателна подготовка и контакт с клуба.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/kontakti">
            Запиши се
          </Link>
          <Link className="secondary-button" to="/#training">
            Виж групите
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
