import logoImg from '../assets/cska-logo.jpg'

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Спортен клуб бокс ЦСКА">
        <img className="brand-logo" src={logoImg} alt="" />
        <span>Спортен клуб бокс</span>
      </a>
      <nav aria-label="Основна навигация">
        <a href="#top">Начало</a>
        <a href="#about">За нас</a>
        <a href="#history">История на клуба</a>
        <a href="#coaches">Треньори</a>
        <a href="#gallery">Галерия</a>
        <a href="#contact">Контакти</a>
      </nav>
    </header>
  )
}

export default Header
