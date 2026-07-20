import type { BlogPost, BlogPostMeta } from '@/data/types';

/**
 * Markdown-driven blog engine.
 *
 * Drop a `.md` file into `src/content/blog/` and it's published automatically:
 * eagerly imported at build time (static, SEO-friendly, no fetch waterfall),
 * frontmatter parsed, sorted by date. Files starting with `_` or with
 * `draft: true` in frontmatter are skipped — that's how the example template
 * stays out of production.
 */
const files = import.meta.glob('/src/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

interface Frontmatter {
  [key: string]: string;
}

/** Minimal frontmatter parser: `key: value` lines between --- fences. */
function parseFrontmatter(raw: string): { meta: Frontmatter; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { meta: {}, body: raw };

  const meta: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key) meta[key] = value;
  }
  return { meta, body: match[2].trim() };
}

function estimateReadingMinutes(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '');
}

const POSTS: BlogPost[] = Object.entries(files)
  .filter(([path]) => !slugFromPath(path).startsWith('_'))
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: meta.title ?? slugFromPath(path),
      description: meta.description ?? '',
      date: meta.date ?? '',
      category: meta.category ?? 'General',
      tags: meta.tags ? meta.tags.split(',').map((t) => t.trim()) : [],
      readingMinutes: estimateReadingMinutes(body),
      body,
      draft: meta.draft === 'true',
    };
  })
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((p) => {
    const { draft, ...post } = p;
    void draft;
    return post;
  });

/** All published posts, newest first. */
export function getPosts(): BlogPostMeta[] {
  return POSTS.map((p) => {
    const { body, ...meta } = p;
    void body;
    return meta;
  });
}

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Distinct categories present in published posts. */
export function getCategories(): string[] {
  return [...new Set(POSTS.map((p) => p.category))];
}
