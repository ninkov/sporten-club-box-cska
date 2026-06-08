import { stats } from './data'

function Stats() {
  return (
    <section className="intro-section" aria-label="Клубът накратко">
      {stats.map((stat) => (
        <article key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </article>
      ))}
    </section>
  )
}

export default Stats
