import { Section, SectionHeader, Reveal } from '@/components/common';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

/**
 * Contact — validated form (email-integration ready) beside direct channels:
 * WhatsApp, email, phone, LinkedIn, GitHub, location, and availability.
 */
export function Contact() {
  return (
    <Section id="contact" className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--primary)_7%,transparent),transparent_60%)]"
      />

      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something{' '}
            <span className="text-gradient">great together</span>
          </>
        }
        description="Have a project, a role, or an idea? Send a message — I usually reply within a day."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <ContactInfo />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass h-full rounded-2xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
