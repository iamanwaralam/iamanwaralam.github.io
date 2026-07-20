import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import { Section, SectionHeader, Reveal } from '@/components/common';
import { Button } from '@/components/ui/button';
import { TESTIMONIALS } from '@/data/testimonials';
import { SOCIALS } from '@/data/profile';
import { usePrefersReducedMotion } from '@/hooks';
import { EASE_PREMIUM } from '@/animations/variants';
import { TestimonialCard } from './testimonials/TestimonialCard';

const AUTOPLAY_MS = 6000;

/**
 * Testimonials — animated one-at-a-time carousel with autoplay (paused on
 * hover/focus and under reduced motion), arrows, and dot navigation.
 * With no real testimonials yet, an honest "references on request" card
 * renders instead — never fabricated praise.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = usePrefersReducedMotion();
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  // Autoplay
  useEffect(() => {
    if (count < 2 || paused || reduce) return;
    const t = setInterval(() => go(index + 1, 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [count, paused, reduce, index, go]);

  const linkedin = SOCIALS.find((s) => s.icon === 'linkedin');

  return (
    <Section id="testimonials">
      <SectionHeader
        eyebrow="Testimonials"
        title={
          <>
            What clients <span className="text-gradient">say</span>
          </>
        }
      />

      {count > 0 ? (
        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Slide */}
          <div className="overflow-hidden px-1 py-2">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -48 }}
                transition={{ duration: 0.45, ease: EASE_PREMIUM }}
              >
                <TestimonialCard testimonial={TESTIMONIALS[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {count > 1 && (
            <div className="mt-8 flex items-center justify-center gap-6">
              <Button
                variant="outline"
                size="icon"
                aria-label="Previous testimonial"
                onClick={() => go(index - 1, -1)}
              >
                <ChevronLeft />
              </Button>

              {/* Dots — button padding keeps the tap target >=24px while the
                  visible dot (inner span) stays small. */}
              <div className="flex items-center" role="tablist">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name + i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1} of ${count}`}
                    onClick={() => go(i, i > index ? 1 : -1)}
                    className="group grid place-items-center p-2.5"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'h-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        i === index
                          ? 'w-6 bg-primary'
                          : 'w-2 bg-border group-hover:bg-muted-foreground',
                      )}
                    />
                  </button>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                aria-label="Next testimonial"
                onClick={() => go(index + 1, 1)}
              >
                <ChevronRight />
              </Button>
            </div>
          )}
        </div>
      ) : (
        /* Honest empty state — references exist, quotes are being collected. */
        <Reveal className="mx-auto mt-14 max-w-xl">
          <div className="glass flex flex-col items-center gap-4 rounded-2xl p-10 text-center">
            <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
              <MessageSquareQuote className="size-6" />
            </span>
            <h3 className="font-display text-xl font-semibold">
              Client words, coming soon
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I&apos;m collecting testimonials from the brands I&apos;ve built
              for — including e-commerce and corporate clients in the UAE.
              References are available on request in the meantime.
            </p>
            {linkedin && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="size-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            )}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
