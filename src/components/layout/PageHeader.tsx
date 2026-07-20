import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/common';
import { Container } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';

interface PageHeaderProps {
  /** Back link target. */
  backTo: string;
  backLabel: string;
}

/** Sticky glass top bar for sub-pages (case studies, blog). */
export function PageHeader({ backTo, backLabel }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm">
            <Link to={backTo}>
              <ArrowLeft />
              {backLabel}
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
