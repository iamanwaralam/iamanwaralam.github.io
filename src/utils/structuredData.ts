import { SITE } from '@/data/site';
import { PROFILE, SOCIALS } from '@/data/profile';

/**
 * JSON-LD Person/ProfilePage structured data for rich search results.
 * Passed to the SEO component on the home page.
 */
export function getPersonJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.name,
    jobTitle: PROFILE.primaryRole,
    description: SITE.description,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    telephone: SITE.phone,
    image: `${SITE.url}${SITE.ogImage}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    sameAs: SOCIALS.filter((s) => s.href.startsWith('http')).map((s) => s.href),
  };
}

/** WebSite structured data (enables sitelinks/search box eligibility). */
export function getWebsiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
  };
}
