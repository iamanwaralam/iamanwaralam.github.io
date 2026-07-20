import { SITE } from '@/data/site';

interface SEOProps {
  title?: string;
  description?: string;
  /** Path only, e.g. "/projects" — combined with SITE.url for canonical/OG. */
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  /** Optional JSON-LD structured data object. */
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

/**
 * Per-route metadata: title, description, canonical, Open Graph, Twitter Card,
 * and optional JSON-LD. Uses React 19's native document metadata hoisting —
 * these tags are automatically lifted into <head>, so no Helmet dependency.
 */
export function SEO({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.ogImage,
  type = 'website',
  jsonLd,
  noindex = false,
}: SEOProps) {
  const fullTitle = title ? `${title} — ${SITE.name}` : SITE.defaultTitle;
  const url = `${SITE.url}${path}`;
  const absoluteImage = image.startsWith('http') ? image : `${SITE.url}${image}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      {SITE.twitterHandle && (
        <meta name="twitter:creator" content={SITE.twitterHandle} />
      )}

      {jsonLd && (
        <script
          type="application/ld+json"
          // JSON-LD is trusted, app-generated data (no user input).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
