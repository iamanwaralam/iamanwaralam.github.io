import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Lightbulb,
  Rocket,
  Target,
  TriangleAlert,
} from 'lucide-react';
import { SEO, Container } from '@/components/common';
import { PageHeader } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getCaseStudy, getProject } from '@/data/caseStudies';
import { SITE } from '@/data/site';
import { fadeUp, staggerContainer } from '@/animations/variants';

/** Ordered content blocks rendered as icon-led lists. */
const BLOCKS = [
  { key: 'problem', title: 'The Problem', icon: Target },
  { key: 'solution', title: 'The Solution', icon: Lightbulb },
  { key: 'challenges', title: 'Challenges', icon: TriangleAlert },
  { key: 'results', title: 'Results', icon: Rocket },
] as const;

/**
 * Dedicated case-study page for a single project. Real, CV-grounded content
 * with its own SEO + structured data. Unknown slugs redirect to home.
 */
export function CaseStudyPage() {
  const { slug = '' } = useParams();
  const project = getProject(slug);
  const study = getCaseStudy(slug);

  if (!project || !study) return <Navigate to="/" replace />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    about: study.tagline,
    author: { '@type': 'Person', name: SITE.name },
    keywords: project.tech.join(', '),
    url: `${SITE.url}/projects/${slug}`,
  };

  return (
    <>
      <SEO
        title={`${project.title} — Case Study`}
        description={study.tagline}
        path={`/projects/${slug}`}
        type="article"
        jsonLd={jsonLd}
      />

      <PageHeader backTo="/#projects" backLabel="All projects" />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_60%)]"
          />
          <Container>
            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                <Badge>{project.category}</Badge>
                {project.tech.slice(0, 3).map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-balance text-4xl font-bold leading-tight sm:text-5xl"
              >
                {project.title}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-balance text-lg text-muted-foreground"
              >
                {study.tagline}
              </motion.p>

              {(project.liveUrl || project.githubUrl) && (
                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <Button asChild variant="gradient">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit live site
                        <ExternalLink />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github />
                        View code
                      </a>
                    </Button>
                  )}
                </motion.div>
              )}
            </motion.div>
          </Container>
        </section>

        {/* Screenshot */}
        <Container>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="eager"
                className="size-full object-cover object-top"
              />
            ) : (
              <>
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.15]" />
                <div className="absolute inset-0 grid place-items-center">
                  <p className="font-mono text-sm text-muted-foreground">
                    {/* TODO(anwar): add /public/projects/{slug}.jpg */}
                    Screenshot coming soon
                  </p>
                </div>
              </>
            )}
          </div>
        </Container>

        {/* Overview */}
        <Container className="mt-16">
          <div className="max-w-3xl">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-text">
              Overview
            </h2>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
              {study.overview}
            </p>
          </div>
        </Container>

        {/* Content blocks */}
        <Container className="mt-14 grid gap-8 pb-24 md:grid-cols-2">
          {BLOCKS.map((block) => (
            <motion.div
              key={block.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <block.icon className="size-5" />
                </span>
                <h2 className="font-display text-lg font-semibold">
                  {block.title}
                </h2>
              </div>
              <ul className="mt-4 flex flex-col gap-2.5">
                {study[block.key].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </Container>

        {/* CTA */}
        <section className="border-t border-border py-16">
          <Container className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-balance text-2xl font-bold sm:text-3xl">
              Have a project like this in mind?
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="gradient">
                <Link to="/#contact">
                  Let&apos;s talk
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/#projects">See more work</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default CaseStudyPage;
