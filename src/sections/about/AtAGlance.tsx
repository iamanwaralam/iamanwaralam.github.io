import { Briefcase, GraduationCap, Languages, MapPin, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PROFILE } from '@/data/profile';
import { EDUCATION, LANGUAGES } from '@/data/about';
import { EXPERIENCE } from '@/data/experience';

/** Small "to confirm" tag for placeholder data (keeps us honest, never fake). */
function TodoTag() {
  return (
    <span className="rounded-full bg-muted px-2 py-0.5 text-[0.65rem] font-medium text-muted-foreground">
      to confirm
    </span>
  );
}

/** "At a glance" fact panel beside the About story. */
export function AtAGlance() {
  const current = EXPERIENCE.find((e) => e.current) ?? EXPERIENCE[0];
  const hasPlaceholderLanguage = LANGUAGES.some((l) => l.placeholder);
  const languages = LANGUAGES.filter((l) => !l.placeholder)
    .map((l) => l.name)
    .join(', ');

  const rows = [
    {
      icon: MapPin,
      label: 'Based in',
      value: PROFILE.location,
    },
    {
      icon: Briefcase,
      label: 'Currently',
      value: current ? `${current.role} · ${current.company}` : '—',
    },
    {
      icon: Zap,
      label: 'Availability',
      value: PROFILE.availability.join(' · '),
    },
    {
      icon: Languages,
      label: 'Languages',
      value: languages || '—',
      todo: hasPlaceholderLanguage,
    },
    {
      icon: GraduationCap,
      label: 'Education',
      // One line per degree (M.Tech, B.E.).
      value: EDUCATION.some((e) => e.placeholder)
        ? 'Available on request'
        : EDUCATION.map((e) => `${e.degree} · ${e.institution}`),
      todo: EDUCATION.some((e) => e.placeholder),
    },
  ];

  return (
    <Card className="glass h-full p-6">
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        At a glance
      </p>
      <ul className="mt-5 flex flex-col divide-y divide-border">
        {rows.map((row) => (
          <li key={row.label} className="flex items-start gap-3 py-3.5">
            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <row.icon className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                {row.label}
                {row.todo && <TodoTag />}
              </p>
              <div className="space-y-1.5">
                {(Array.isArray(row.value) ? row.value : [row.value]).map((line) => (
                  <p key={line} className="text-sm font-medium text-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
