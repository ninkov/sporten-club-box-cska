import { useEffect } from 'react'
import { buildStructuredData } from '../seo/schema'
import { siteConfig } from '../seo/siteConfig'

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

function setStructuredData(schema) {
  let script = document.querySelector('#structured-data')

  if (!script) {
    script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    document.head.append(script)
  }

  script.textContent = JSON.stringify(schema)
}

function Seo({ breadcrumbs = [], description, pageType = 'WebPage', title }) {
  useEffect(() => {
    const origin = siteConfig.siteUrl
    const canonicalUrl = `${origin}${window.location.pathname}`
    const imageUrl = `${origin}${siteConfig.defaultImage}`
    const schema = buildStructuredData({
      breadcrumbs,
      canonicalUrl,
      description,
      imageUrl,
      origin,
      pageType,
      title,
    })

    document.title = title

    setCanonical(canonicalUrl)
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)
    setMeta('meta[property="og:image"]', 'content', imageUrl)
    setMeta('meta[property="og:image:alt"]', 'content', siteConfig.imageAlt)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', imageUrl)
    setStructuredData(schema)
  }, [breadcrumbs, description, pageType, title])

  return null
}

export default Seo
