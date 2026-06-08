function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Контакт</p>
        <h2 id="contact-title">Ела на пробна тренировка.</h2>
        <p>
          Попълни реалните телефон, адрес и имейл на клуба, когато са готови. Засега
          бутоните са оставени като placeholders.
        </p>
      </div>
      <div className="contact-card">
        <a className="primary-button" href="tel:+359000000000">
          Обади се
        </a>
        <a className="secondary-button" href="mailto:club@example.com">
          Изпрати имейл
        </a>
        <p>Адрес: София, спортна зала ЦСКА</p>
      </div>
    </section>
  )
}

export default ContactSection
