import { Link } from 'react-router-dom'
import heroImg from '../assets/boxing-hero.png'

function Hero() {
  return (
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
