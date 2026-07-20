import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROFILE, SOCIALS } from '@/data/profile';
import { SITE } from '@/data/site';

/** Contact details, quick actions (WhatsApp/LinkedIn/GitHub), availability. */
export function ContactInfo() {
  const whatsapp = SOCIALS.find((s) => s.icon === 'whatsapp');
  const linkedin = SOCIALS.find((s) => s.icon === 'linkedin');
  const github = SOCIALS.find((s) => s.icon === 'github');

  return (
    <div className="flex h-full flex-col gap-6">
      {/* Availability */}
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
          </span>
          <p className="font-display text-base font-semibold">
            Available for work
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {PROFILE.availability.map((a) => (
            <Badge key={a} variant="outline">
              {a}
            </Badge>
          ))}
        </div>
      </div>

      {/* Direct details */}
      <ul className="glass flex flex-col divide-y divide-border rounded-2xl p-2">
        <li>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3.5 rounded-xl p-4 transition-colors hover:bg-muted"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <Mail className="size-4.5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Email</span>
              <span className="block truncate text-sm font-medium">
                {SITE.email}
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-3.5 rounded-xl p-4 transition-colors hover:bg-muted"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <Phone className="size-4.5" />
            </span>
            <span>
              <span className="block text-xs text-muted-foreground">Phone</span>
              <span className="block text-sm font-medium">
                {SITE.phoneDisplay}
              </span>
            </span>
          </a>
        </li>
        <li className="flex items-center gap-3.5 p-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <MapPin className="size-4.5" />
          </span>
          <span>
            <span className="block text-xs text-muted-foreground">
              Location
            </span>
            <span className="block text-sm font-medium">
              {PROFILE.location}
            </span>
          </span>
        </li>
      </ul>

      {/* Quick actions */}
      <div className="flex flex-col gap-3">
        {whatsapp && (
          <Button asChild size="lg" className="bg-[#25D366] text-white hover:brightness-105 hover:shadow-lg hover:shadow-[#25D366]/25">
            <a
              href={`${whatsapp.href}?text=${encodeURIComponent(
                'Hi Anwar — found you via your portfolio.',
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="size-5" />
              Chat on WhatsApp
            </a>
          </Button>
        )}
        <div className="grid grid-cols-2 gap-3">
          {linkedin && (
            <Button asChild variant="outline">
              <a href={linkedin.href} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="size-4" />
                LinkedIn
              </a>
            </Button>
          )}
          {github && (
            <Button asChild variant="outline">
              <a href={github.href} target="_blank" rel="noopener noreferrer">
                <FaGithub className="size-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
