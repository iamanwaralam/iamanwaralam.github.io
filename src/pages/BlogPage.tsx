import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, PenLine, Search, X } from 'lucide-react';
import { SEO, Container, SocialLinks } from '@/components/common';
import { PageHeader } from '@/components/layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { getPosts, getCategories } from '@/utils';
import { fadeUp, staggerContainer } from '@/animations/variants';

const ALL = 'All';

function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
}

/**
 * Blog index — latest articles with search + category filters. Fully
 * markdown-driven (see src/content/blog/). With zero published posts it shows
 * an honest "in the works" state instead of fake articles.
 */
export function BlogPage() {
  const posts = getPosts();
  const categories = useMemo(() => [ALL, ...getCategories()], []);
  const [category, setCategory] = useState(ALL);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = category === ALL || p.category === category;
      const matchesQuery =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [posts, category, query]);

  return (
    <>
      <SEO
        title="Blog"
        description="Articles on Next.js, Shopify, SEO, and AI-assisted development by Anwar Alam — Full-Stack Web Developer in Dubai."
        path="/blog"
      />
      <PageHeader backTo="/" backLabel="Home" />

      <main className="pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_9%,transparent),transparent_60%)]"
          />
          <Container>
            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 font-mono text-sm font-medium text-primary-text"
              >
                <span className="h-px w-6 bg-primary/50" />
                Blog
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl"
              >
                Notes from the <span className="text-gradient">build</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-lg text-muted-foreground"
              >
                Practical writing on Next.js, Shopify, SEO, and AI-assisted
                development — from real projects shipped in the UAE.
              </motion.p>
            </motion.div>
          </Container>
        </section>

        <Container>
          {posts.length > 0 ? (
            <>
              {/* Filters */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div
                  className="flex flex-wrap gap-2"
                  role="tablist"
                  aria-label="Filter articles by category"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={category === cat}
                      onClick={() => setCategory(cat)}
                      className={cn(
                        'rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300',
                        category === cat
                          ? 'border-transparent bg-primary text-primary-foreground shadow-sm'
                          : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground',
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles…"
                    aria-label="Search articles"
                    className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-9 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  {query && (
                    <button
                      type="button"
                      aria-label="Clear search"
                      onClick={() => setQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Article cards */}
              <motion.div
                variants={staggerContainer(0.06)}
                initial="hidden"
                animate="visible"
                className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((post) => (
                  <motion.div key={post.slug} variants={fadeUp}>
                    <Card interactive className="group h-full">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex h-full flex-col p-5"
                      >
                        <div className="flex items-center gap-2">
                          <Badge>{post.category}</Badge>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="size-3" />
                            {post.readingMinutes} min read
                          </span>
                        </div>
                        <h2 className="mt-3 font-display text-lg font-semibold transition-colors group-hover:text-primary-text">
                          {post.title}
                        </h2>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {post.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="size-3" />
                            {formatDate(post.date)}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-text">
                            Read
                            <ArrowUpRight className="size-4" />
                          </span>
                        </div>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {filtered.length === 0 && (
                <p className="mt-16 text-center text-muted-foreground">
                  No articles match &ldquo;{query}&rdquo;.
                </p>
              )}
            </>
          ) : (
            /* Honest empty state — no fake posts, ever. */
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl p-10 text-center"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <PenLine className="size-6" />
              </span>
              <h2 className="font-display text-xl font-semibold">
                First articles are in the works
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I&apos;m writing about rebuilding akiuae.com with Next.js 14,
                zero-downtime hosting migrations, Shopify OS 2.0 theming, and
                AI-assisted development with Claude Code. Follow along to catch
                the first posts.
              </p>
              <SocialLinks size="sm" />
            </motion.div>
          )}
        </Container>
      </main>
    </>
  );
}

export default BlogPage;
