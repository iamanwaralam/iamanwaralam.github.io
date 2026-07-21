/**
 * Global site identity + SEO defaults. Single source of truth used by the SEO
 * component, structured data, and the footer.
 */
export const SITE = {
  name: 'Anwar Alam',
  /** Default browser-tab title for the home page. */
  defaultTitle: 'Anwar Alam — Full Stack Web Developer in Dubai, UAE',
  role: 'Full Stack Web Developer',
  description:
    'Anwar Alam is a Full Stack Web Developer, Shopify & WordPress expert, and SEO specialist based in Dubai, UAE. Available for remote, hybrid, onsite, and freelance work.',
  url: 'https://iamanwaralam.github.io',
  ogImage: '/og/og-image.jpg',
  locale: 'en_US',
  location: 'Dubai, UAE',
  twitterHandle: '@iamanwaralam',
  email: 'iamanwaralam48@gmail.com',
  phone: '+971586619341',
  phoneDisplay: '+971 58 661 9341',
} as const;
