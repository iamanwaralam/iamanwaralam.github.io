import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Container } from '@/components/common';
import { SocialLinks } from '@/components/common';
import { Button } from '@/components/ui/button';
import { PROFILE, STATS } from '@/data/profile';
import { RESUME_URL } from '@/data/navigation';
import { useTypewriter } from '@/hooks';
import { fadeUp, staggerContainer } from '@/animations/variants';
import { HeroBackground } from './hero/HeroBackground';
import { HeroPhoto } from './hero/HeroPhoto';

/**
 * Hero — the first impression. Animated headline, typewriter role cycling,
 * availability badge, quick stats, three CTAs, socials, and the portrait,
 * over an animated background (blobs, particles, cursor parallax).
 */
export function Hero() {
  const role = useTypewriter(PROFILE.roles);

  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden pt-28 pb-16"
    >
      <HeroBackground />

      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text column */}
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div variants={fadeUp}>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Available for work
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-mono text-sm text-muted-foreground"
          >
            <Sparkles className="mr-1.5 inline size-3.5 text-primary" />
            {PROFILE.location}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-3 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{PROFILE.name}</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={fadeUp}
            className="mt-5 flex h-9 items-center gap-2 font-display text-2xl font-semibold sm:text-3xl"
            aria-live="polite"
          >
            <span className="text-muted-foreground">I&apos;m a</span>
            <span className="text-foreground">
              {role}
              <span className="ml-0.5 inline-block h-6 w-0.5 translate-y-0.5 bg-primary animate-caret sm:h-7" />
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
          >
            {PROFILE.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button asChild size="lg" variant="gradient">
              <a href="#projects">
                Explore Projects
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href="#contact">Hire Me</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={RESUME_URL} download>
                <Download />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="mt-8">
            <SocialLinks />
          </motion.div>

          {/* Quick stats */}
          <motion.dl
            variants={fadeUp}
            className="mt-10 grid w-full max-w-md grid-cols-3 gap-4 border-t border-border pt-6"
          >
            {STATS.slice(0, 3).map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-bold text-gradient">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Photo column */}
        <div className="order-first lg:order-last">
          <HeroPhoto />
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="size-1.5 rounded-full bg-primary"
          />
        </span>
      </motion.a>
    </section>
  );
}
