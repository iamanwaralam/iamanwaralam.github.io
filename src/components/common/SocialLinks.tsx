import type { IconType } from 'react-icons';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { SOCIALS } from '@/data/profile';
import type { SocialLink } from '@/data/types';

// Map data icon keys → react-icons components (keeps the data layer pure).
const ICONS: Record<SocialLink['icon'], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  whatsapp: FaWhatsapp,
  email: MdEmail,
};

interface SocialLinksProps {
  className?: string;
  /** Which links to show; defaults to all. */
  items?: SocialLink[];
  size?: 'sm' | 'md';
}

/** Reusable row of social icon links (hero, footer, contact, mobile menu). */
export function SocialLinks({
  className,
  items = SOCIALS,
  size = 'md',
}: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {items.map((social) => {
        const Icon = ICONS[social.icon];
        const external = social.href.startsWith('http');
        return (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              title={social.label}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={cn(
                'grid place-items-center rounded-lg border border-border text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary',
                size === 'md' ? 'size-10' : 'size-9',
              )}
            >
              <Icon className={size === 'md' ? 'size-4.5' : 'size-4'} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
