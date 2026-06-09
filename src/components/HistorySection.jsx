import { useState } from 'react'
import { historyPreview, historySections } from './historyContent'

function HistorySection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="history-section" id="history" aria-labelledby="history-title">
      <div className="section-heading">
        <p className="eyebrow">История на клуба</p>
        <h2 id="history-title">Традиция, която се гради в залата.</h2>
        <p>
          Историята на бокса в ЦСКА съчетава армейска дисциплина, олимпийска слава,
          национални титли и постоянна работа с нови поколения боксьори.
        </p>
      </div>
      <article className="history-card">
        <p>{historyPreview}</p>
        {isExpanded && (
          <div className="history-full" id="club-history-full">
            {historySections.map((section) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        )}
        <button
          className="read-more-button"
          type="button"
          aria-controls="club-history-full"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((currentValue) => !currentValue)}
        >
          {isExpanded ? 'Скрий текста' : 'Прочети повече'}
        </button>
      </article>
    </section>
  )
}

export default HistorySection
