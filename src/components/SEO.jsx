import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  LOCALE,
  absoluteUrl
} from '../seo.config'

/**
 * Per-page metadata: title, description, canonical, Open Graph,
 * Twitter card and JSON-LD structured data.
 *
 * @param {string}  title       Page title (falls back to the site default)
 * @param {string}  description Meta description, aim for 150-160 characters
 * @param {string}  path        Canonical path, e.g. '/about'. Defaults to the
 *                              current route. Set this explicitly on pages that
 *                              are reachable from more than one URL so the
 *                              duplicates all point at one canonical.
 * @param {string}  image       Social preview image (site-relative or absolute)
 * @param {string}  type        Open Graph type: 'website' or 'article'
 * @param {boolean} noindex     Keep the page out of search results
 * @param {object|object[]} schema  JSON-LD object(s) for this page
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  schema,
  children
}) {
  const location = useLocation()
  const canonicalPath = path || location.pathname || '/'
  const canonical = absoluteUrl(canonicalPath)
  const pageTitle = title || DEFAULT_TITLE
  const imageUrl = absoluteUrl(image)
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={pageTitle} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((entry, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(entry)}
        </script>
      ))}

      {children}
    </Helmet>
  )
}
