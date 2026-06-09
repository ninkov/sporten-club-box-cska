import { googleMapsUrl } from '../seo/siteConfig'

function ContactSection() {
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
        <p>Адрес: м. Къро, бул. „Асен Йорданов“ 2, София</p>
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
