import { schedule } from './data'

function ScheduleSection() {
  return (
    <section className="schedule-section" id="schedule" aria-labelledby="schedule-title">
      <div className="section-heading">
        <p className="eyebrow">График</p>
        <h2 id="schedule-title">Седмична програма.</h2>
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
  )
}

export default ScheduleSection
