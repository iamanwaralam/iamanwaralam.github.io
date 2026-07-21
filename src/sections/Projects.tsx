import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';
import { Section, SectionHeader } from '@/components/common';
import { PROJECTS } from '@/data/projects';
import { staggerContainer } from '@/animations/variants';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectFilters } from './projects/ProjectFilters';

const ALL = 'All';

/**
 * Projects — filterable, searchable grid of real client and personal work.
 * Category chips + a text query narrow the list; the grid re-staggers in on
 * every filter change (keyed remount, not AnimatePresence) — nesting
 * AnimatePresence here would compete with the outer page-transition
 * AnimatePresence in AppRoutes when this whole section unmounts on
 * navigation, leaving the exit stuck and the destination page never
 * rendering until a hard refresh.
 */
export function Projects() {
  const [category, setCategory] = useState(ALL);
  const [query, setQuery] = useState('');

  // Categories present in the data, in first-seen order.
  const categories = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p) => set.add(p.category));
    return [ALL, ...set];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesCategory = category === ALL || p.category === category;
      const matchesQuery =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Projects"
        title={
          <>
            Selected <span className="text-gradient">work</span>
          </>
        }
        description="Real websites, storefronts, and apps shipped for UAE brands and international users."
      />

      <div className="mt-10">
        <ProjectFilters
          categories={categories}
          active={category}
          onCategory={setCategory}
          query={query}
          onQuery={setQuery}
        />
      </div>

      {filtered.length > 0 ? (
        <motion.div
          key={`${category}-${query}`}
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate="visible"
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <SearchX className="size-8 text-muted-foreground" />
          <p className="text-muted-foreground">
            No projects match &ldquo;{query}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setCategory(ALL);
            }}
            className="text-sm font-medium text-primary-text hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </Section>
  );
}
