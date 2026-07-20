/**
 * Certifications — from Anwar's CV. Issuers/dates added as confirmed.
 * Remaining unconfirmed issuers/years are TODOs (see docs/TODO.md).
 */
export interface Certification {
  title: string;
  /** Issuing organisation, when known. */
  issuer?: string;
  /** Year earned, when known. */
  year?: string;
  icon: string;
}

export const CERTIFICATIONS: Certification[] = [
  { title: 'Android Developer', issuer: 'Udemy', icon: 'Smartphone' },
  // TODO(anwar): confirm issuer/year for the two below.
  { title: 'Flutter Developer', icon: 'Smartphone' },
  { title: 'Digital Marketing & SEO', icon: 'TrendingUp' },
];
