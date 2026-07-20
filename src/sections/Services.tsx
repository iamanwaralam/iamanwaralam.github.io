import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/common';
import { SERVICES } from '@/data/services';
import { staggerContainer } from '@/animations/variants';
import { ServiceCard } from './services/ServiceCard';

/**
 * Services — premium card grid of everything Anwar offers. Cards stagger in
 * on scroll and each has a cursor-following spotlight on hover.
 */
export function Services() {
  return (
    <Section id="services" className="relative">
      {/* Soft background wash to separate from neighboring sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_6%,transparent),transparent_60%)]"
      />

      <SectionHeader
        eyebrow="Services"
        title={
          <>
            What I can <span className="text-gradient">do for you</span>
          </>
        }
        description="From first line of code to launch and growth — end-to-end services for businesses that want to move fast without cutting corners."
      />

      <motion.div
        variants={staggerContainer(0.06, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.slug} service={service} index={i} />
        ))}
      </motion.div>
    </Section>
  );
}
