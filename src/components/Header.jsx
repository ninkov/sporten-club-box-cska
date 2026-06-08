import { useState } from 'react'
import logoImg from '../assets/cska-logo.jpg'

const navLinks = [
  ['#top', 'Начало'],
  ['#about', 'За нас'],
  ['#history', 'История на клуба'],
  ['#coaches', 'Треньори'],
  ['#gallery', 'Галерия'],
  ['#contact', 'Контакти'],
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Спортен клуб бокс ЦСКА">
        <img className="brand-logo" src={logoImg} alt="" />
        <span>Спортен клуб бокс</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Затвори менюто' : 'Отвори менюто'}
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        id="site-navigation"
        className={isMenuOpen ? 'is-open' : ''}
        aria-label="Основна навигация"
      >
        {navLinks.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setIsMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
