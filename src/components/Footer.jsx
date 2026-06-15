import { NavLink } from 'react-router-dom'
import logoImg from '../assets/optimized/cska-logo-128.jpg'
import { googleMapsUrl, siteConfig } from '../seo/siteConfig'

const footerLinks = [
  ['/', 'Начало'],
  ['/za-nas', 'За нас'],
  ['/istoria-na-kluba', 'История'],
  ['/trenyori', 'Треньори'],
  ['/trenirovki', 'Тренировки'],
  ['/galeria', 'Галерия'],
  ['/proekti', 'Проекти'],
  ['/kontakti', 'Контакти'],
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <NavLink className="brand" to="/" aria-label={siteConfig.name}>
            <img
              className="brand-logo"
              src={logoImg}
              alt=""
              width="48"
              height="48"
              loading="lazy"
              decoding="async"
            />
            <span>{siteConfig.name}</span>
          </NavLink>
          <p>
            Тренировки по бокс, спортна дисциплина и развитие на състезатели в духа
            на традициите на ЦСКА.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Връзки във футъра">
          {footerLinks.map(([href, label]) => (
            <NavLink key={href} to={href} end={href === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>

        <address className="footer-contact">
          <strong>Контакти</strong>
          <a href="tel:+359884019209">0884 019 209</a>
          <a href="tel:+359888712041">0888 712 041</a>
          <a href="mailto:hapa_n@abv.bg">hapa_n@abv.bg</a>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer">
            {siteConfig.address.addressLocality}, {siteConfig.address.streetAddress}
          </a>
        </address>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} {siteConfig.name}</span>
        <span>Всички права запазени.</span>
      </div>
    </footer>
  )
}

export default Footer
