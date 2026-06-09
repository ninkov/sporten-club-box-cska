import { siteConfig } from './siteConfig'

function getAbsoluteUrl(origin, path = '/') {
  return new URL(path, origin).toString()
}

function getBaseSchemas({ imageUrl, origin }) {
  const organizationId = `${origin}/#organization`
  const websiteId = `${origin}/#website`
  const placeId = `${origin}/#sports-activity-location`

  return [
    {
      '@type': 'SportsOrganization',
      '@id': organizationId,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      sport: 'Boxing',
      url: origin,
      logo: getAbsoluteUrl(origin, siteConfig.logo),
      image: imageUrl,
      sameAs: [siteConfig.mapUrl],
    },
    {
      '@type': 'SportsActivityLocation',
      '@id': placeId,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      sport: 'Boxing',
      url: origin,
      image: imageUrl,
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.address,
      },
      geo: {
        '@type': 'GeoCoordinates',
        ...siteConfig.geo,
      },
      hasMap: siteConfig.mapUrl,
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      url: origin,
      inLanguage: siteConfig.language,
      publisher: {
        '@id': organizationId,
      },
    },
  ]
}

function getBreadcrumbSchema({ breadcrumbs, canonicalUrl, origin }) {
  const items = [{ name: 'Начало', url: origin }, ...breadcrumbs]

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

function getWebPageSchema({ canonicalUrl, description, origin, pageType, title }) {
  return {
    '@type': pageType,
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: siteConfig.language,
    isPartOf: {
      '@id': `${origin}/#website`,
    },
    about: {
      '@id': `${origin}/#sports-activity-location`,
    },
  }
}

export function buildStructuredData({
  breadcrumbs = [],
  canonicalUrl,
  description,
  imageUrl,
  origin,
  pageType = 'WebPage',
  title,
}) {
  const graph = [
    ...getBaseSchemas({ imageUrl, origin }),
    getWebPageSchema({ canonicalUrl, description, origin, pageType, title }),
  ]

  if (breadcrumbs.length > 0) {
    graph.push(getBreadcrumbSchema({ breadcrumbs, canonicalUrl, origin }))
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
