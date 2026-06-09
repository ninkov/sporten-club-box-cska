import { useEffect } from 'react'

const defaultImage = '/og-cover.png'

function setMeta(selector, attribute, value) {
  let element = document.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    const [attrName, attrValue] = selector
      .replace('meta[', '')
      .replace(']', '')
      .split('=')

    element.setAttribute(attrName, attrValue.replaceAll('"', ''))
    document.head.append(element)
  }

  element.setAttribute(attribute, value)
}

function setCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.append(canonical)
  }

  canonical.setAttribute('href', url)
}

function setStructuredData(origin) {
  let script = document.querySelector('#structured-data')

  if (!script) {
    script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    document.head.append(script)
  }

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Спортен клуб бокс ЦСКА',
    alternateName: 'Boxing Club CSKA',
    sport: 'Boxing',
    url: origin,
    image: `${origin}${defaultImage}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'бул. Професор Цветан Лазаров 14',
      addressLocality: 'София',
      postalCode: '1784',
      addressCountry: 'BG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.6717037,
      longitude: 23.3800093,
    },
    sameAs: [
      'https://www.google.com/maps/place/%D0%91%D0%BE%D0%BA%D1%81+%D0%BA%D0%BB%D1%83%D0%B1+%D0%A6%D0%A1%D0%9A%D0%90/@42.6717037,23.3774397,691m/data=!3m1!1e3!4m6!3m5!1s0x40aa86770673ebed:0x41a003b8b463f40f!8m2!3d42.6717037!4d23.3800093!16s%2Fg%2F11b6gm0zmn',
    ],
  })
}

function Seo({ description, title }) {
  useEffect(() => {
    const origin = window.location.origin
    const canonicalUrl = `${origin}${window.location.pathname}`
    const imageUrl = `${origin}${defaultImage}`

    document.title = title

    setCanonical(canonicalUrl)
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)
    setMeta('meta[property="og:image"]', 'content', imageUrl)
    setMeta('meta[property="og:image:alt"]', 'content', 'Боксови ръкавици в спортна зала')
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', imageUrl)
    setStructuredData(origin)
  }, [description, title])

  return null
}

export default Seo
