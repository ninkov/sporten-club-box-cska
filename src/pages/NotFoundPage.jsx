import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

function NotFoundPage() {
  return (
    <section className="not-found-section">
      <Seo
        title="Страницата не е намерена | Спортен клуб бокс ЦСКА"
        description="Тази страница не съществува."
      />
      <p className="eyebrow">404</p>
      <h1>Страницата не е намерена.</h1>
      <p>Линкът може да е променен или страницата да е премахната.</p>
      <Link className="primary-button" to="/">
        Към началото
      </Link>
    </section>
  )
}

export default NotFoundPage
