function ContactSection() {
  const googleMapsUrl =
    'https://www.google.com/maps/place/%D0%91%D0%BE%D0%BA%D1%81+%D0%BA%D0%BB%D1%83%D0%B1+%D0%A6%D0%A1%D0%9A%D0%90/@42.6717037,23.3774397,691m/data=!3m1!1e3!4m6!3m5!1s0x40aa86770673ebed:0x41a003b8b463f40f!8m2!3d42.6717037!4d23.3800093!16s%2Fg%2F11b6gm0zmn?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D'
  const mapUrl =
    'https://www.google.com/maps?q=Boxing%20Club%20CSKA%2C%20Boulevard%20Professor%20Tsvetan%20Lazarov%2014%2C%201784%20Sofia%2C%20Bulgaria&t=k&z=17&output=embed'

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
        <a className="secondary-button" href={googleMapsUrl} target="_blank" rel="noreferrer">
          Отвори в Google Maps
        </a>
        <p>Адрес: м. Къро, бул. „Асен Йорданов“ 2,  София</p>
        <iframe
          className="map-frame"
          title="Карта до Спортен клуб бокс ЦСКА"
          src={mapUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default ContactSection
