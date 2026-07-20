import { useParams, Link, Navigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { SEO, Container } from '@/components/common';
import { PageHeader } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getPost } from '@/utils';
import { SITE } from '@/data/site';
import { fadeUp, staggerContainer } from '@/animations/variants';

function formatDate(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
}

/** Single blog article: markdown body with SEO + Article structured data. */
export function BlogPostPage() {
  const { slug = '' } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Person', name: SITE.name, url: SITE.url },
    keywords: post.tags.join(', '),
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <PageHeader backTo="/blog" backLabel="All articles" />

      <main className="pb-24">
        <Container className="max-w-3xl">
          <motion.article
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.header variants={fadeUp} className="py-12 md:py-16">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{post.category}</Badge>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="size-3.5" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="size-3.5" />
                  {post.readingMinutes} min read
                </span>
              </div>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {post.description}
              </p>
            </motion.header>

            {/* Body */}
            <motion.div variants={fadeUp} className="prose-blog">
              <Markdown>{post.body}</Markdown>
            </motion.div>

            {/* Tags + footer */}
            <motion.footer
              variants={fadeUp}
              className="mt-12 border-t border-border pt-8"
            >
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}
              <Button asChild variant="outline" className="mt-8">
                <Link to="/blog">
                  <ArrowLeft />
                  All articles
                </Link>
              </Button>
            </motion.footer>
          </motion.article>
        </Container>
      </main>
    </>
  );
}

export default BlogPostPage;
