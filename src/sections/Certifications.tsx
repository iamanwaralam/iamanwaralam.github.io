import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/common';
import { CERTIFICATIONS } from '@/data/certifications';
import { EDUCATION } from '@/data/about';
import { staggerContainer, fadeUp } from '@/animations/variants';
import { GraduationCap } from 'lucide-react';
import { CertCard } from './certifications/CertCard';

/**
 * Certifications — badge cards plus an education summary. Education comes from
 * the CV; certifications from the CV with issuer/year filled in as confirmed.
 */
export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader
        eyebrow="Credentials"
        title={
          <>
            Certifications & <span className="text-gradient">education</span>
          </>
        }
        description="Formal training in computer science, backed by hands-on developer and marketing certifications."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        {/* Certifications */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {CERTIFICATIONS.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Education
          </p>
          <ul className="mt-5 flex flex-col gap-5">
            {EDUCATION.map((edu) => (
              <motion.li key={edu.degree} variants={fadeUp} className="flex gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-4" />
                </span>
                <div>
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                    {edu.period ? ` · ${edu.period}` : ''}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
