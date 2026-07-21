import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fadeUp } from '@/animations/variants';
import { hasCaseStudy } from '@/data/caseStudies';
import type { Project } from '@/data/types';

/**
 * Premium project card: cover (image or branded gradient fallback), title,
 * description, tech chips, and conditional live/code links. Links only render
 * when a URL exists, so there are never dead buttons.
 */
export function ProjectCard({ project }: { project: Project }) {
  const caseStudy = hasCaseStudy(project.slug);
  return (
    <motion.div variants={fadeUp} className="h-full">
      <Card interactive className="group flex h-full flex-col overflow-hidden">
        {/* Cover */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          ) : (
            <div className="relative flex size-full items-center justify-center bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_55%),radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--secondary)_20%,transparent),transparent_55%)]">
              <span className="font-display text-4xl font-bold text-foreground/80">
                {project.title.charAt(0)}
              </span>
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.12]" />
            </div>
          )}

          <div className="absolute left-3 top-3 flex gap-2">
            <Badge variant="glass">{project.category}</Badge>
            {project.featured && (
              <Badge variant="glass">
                <Star className="size-3 fill-current" />
                Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>

          {(project.liveUrl || project.githubUrl || caseStudy) && (
            <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
              {caseStudy && (
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-text transition-colors hover:brightness-110"
                >
                  Case study
                  <ArrowUpRight className="size-4" />
                </Link>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary-text"
                >
                  <ExternalLink className="size-4" />
                  Live demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="size-4" />
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
