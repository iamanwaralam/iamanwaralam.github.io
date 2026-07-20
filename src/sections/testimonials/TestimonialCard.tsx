import { Quote } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

/** Initials for the avatar fallback (max two letters). */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/** Single testimonial slide: quote + author with avatar/initials. */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const meta = [testimonial.role, testimonial.company]
    .filter(Boolean)
    .join(' · ');

  return (
    <figure className="glass relative mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl p-8 text-center sm:p-10">
      <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
        <Quote className="size-5" aria-hidden />
      </span>

      <blockquote className="text-balance text-lg leading-relaxed text-foreground sm:text-xl">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-3">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt=""
            loading="lazy"
            className="size-11 rounded-full border border-border object-cover"
          />
        ) : (
          <span className="grid size-11 place-items-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--secondary))] font-display text-sm font-bold text-primary-foreground">
            {initials(testimonial.name)}
          </span>
        )}
        <span className="text-left">
          <span className="block text-sm font-semibold">
            {testimonial.name}
          </span>
          {meta && (
            <span className="block text-xs text-muted-foreground">{meta}</span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
