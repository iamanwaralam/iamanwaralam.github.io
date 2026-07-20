import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectFiltersProps {
  categories: string[];
  active: string;
  onCategory: (c: string) => void;
  query: string;
  onQuery: (q: string) => void;
}

/** Category chips + search box controlling the projects grid. */
export function ProjectFilters({
  categories,
  active,
  onCategory,
  query,
  onQuery,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Category chips */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => {
          const selected = active === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onCategory(cat)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                selected
                  ? 'border-transparent bg-primary text-primary-foreground shadow-sm'
                  : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground',
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative w-full sm:w-64">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search projects…"
          aria-label="Search projects"
          className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-9 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => onQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
