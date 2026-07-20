import { Link } from 'react-router-dom';
import { SEO } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/common';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page not found" path="/404" noindex />
      <main className="flex min-h-dvh items-center justify-center">
        <Container className="text-center">
          <p className="font-mono text-sm text-primary-text">404</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            This page took a wrong turn.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Button asChild className="mt-8" variant="gradient">
            <Link to="/">Back to home</Link>
          </Button>
        </Container>
      </main>
    </>
  );
}

export default NotFoundPage;
