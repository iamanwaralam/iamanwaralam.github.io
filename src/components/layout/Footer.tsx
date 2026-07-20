import { Link, useLocation } from 'react-router-dom';
import { ArrowUp, Heart } from 'lucide-react';
import { Container, Reveal, SocialLinks } from '@/components/common';
import { Button } from '@/components/ui/button';
import { PROFILE } from '@/data/profile';
import { SERVICES } from '@/data/services';
import { NAV_LINKS } from '@/data/navigation';
import { SITE } from '@/data/site';
import { Logo } from './Logo';

/**
 * Route-aware footer link: hash links become plain smooth-scroll anchors on
 * the home page and `/#hash` router links elsewhere (ScrollToTop lands them
 * on the right section after navigation).
 */
function FooterLink({ href, label }: { href: string; label: string }) {
  const { pathname } = useLocation();
  const isHash = href.startsWith('#');
  const className =
    'text-sm text-muted-foreground transition-colors hover:text-foreground';

  if (isHash && pathname === '/') {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link to={isHash ? `/${href}` : href} className={className}>
      {label}
    </Link>
  );
}

/**
 * Site footer — brand, quick links, services, socials, back-to-top, copyright.
 * Rendered on every route.
 */
export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative mt-8 border-t border-border">
      {/* Gradient hairline accent */}
      <span
        aria-hidden
        className="absolute inset-x-0 -top-px h-px bg-[linear-gradient(90deg,transparent,var(--primary),var(--secondary),transparent)]"
      />

      <Container>
        <Reveal className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {PROFILE.primaryRole} in {PROFILE.location}. Building fast,
              elegant web experiences for brands worldwide.
            </p>
            <SocialLinks size="sm" />
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Quick links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <FooterLink href="#services" label={service.title} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Get in touch
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="transition-colors hover:text-foreground"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>{PROFILE.location}</li>
            </ul>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="mt-5"
              aria-label="Back to top"
            >
              <ArrowUp />
              Back to top
            </Button>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {PROFILE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with
            <Heart
              className="size-3.5 fill-primary text-primary motion-safe:animate-pulse"
              aria-hidden
            />
            using React 19, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
