import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/cska-logo.jpg'

const navLinks = [
  ['/', 'Начало'],
  ['/za-nas', 'За нас'],
  ['/istoria-na-kluba', 'История на клуба'],
  ['/trenyori', 'Треньори'],
  ['/galeria', 'Галерия'],
  ['/kontakti', 'Контакти'],
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Спортен клуб бокс ЦСКА">
        <img className="brand-logo" src={logoImg} alt="" />
        <span>Спортен клуб бокс</span>
      </NavLink>
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
          <NavLink key={href} to={href} end={href === '/'} onClick={() => setIsMenuOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
