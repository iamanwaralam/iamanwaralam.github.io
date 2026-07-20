import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiAndroid,
  SiFirebase,
  SiShopify,
  SiWordpress,
  SiWoocommerce,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiVercel,
  SiCpanel,
  SiGit,
  SiGithub,
  SiGradle,
  SiClaude,
} from 'react-icons/si';
import { cn } from '@/lib/utils';

interface TechDef {
  Icon?: IconType;
  /** Brand color; omit to inherit currentColor. */
  color?: string;
  /** Letters shown when there's no brand icon (trademarked brands removed from the set). */
  fallback?: string;
}

// name (from src/data/skills.ts) → brand icon + color, or a lettered fallback.
const TECH: Record<string, TechDef> = {
  // Frontend
  'Next.js 14': { Icon: SiNextdotjs },
  React: { Icon: SiReact, color: '#61DAFB' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  'HTML5 & CSS3': { Icon: SiHtml5, color: '#E34F26' },

  // Mobile
  Flutter: { Icon: SiFlutter, color: '#02569B' },
  Dart: { Icon: SiDart, color: '#0175C2' },
  'Android (Java)': { Icon: SiAndroid, color: '#3DDC84' },
  Firebase: { Icon: SiFirebase, color: '#FFCA28' },

  // E-commerce
  'Shopify OS 2.0': { Icon: SiShopify, color: '#7AB55C' },
  Liquid: { fallback: 'Lq' },
  WordPress: { Icon: SiWordpress },
  WooCommerce: { Icon: SiWoocommerce, color: '#96588A' },

  // SEO & Analytics
  'Technical SEO': { fallback: 'SEO' },
  GA4: { Icon: SiGoogleanalytics, color: '#E37400' },
  'Search Console': { Icon: SiGooglesearchconsole, color: '#458CF5' },
  'Tag Manager': { Icon: SiGoogletagmanager, color: '#246FDB' },

  // Infrastructure
  Vercel: { Icon: SiVercel },
  DNS: { fallback: 'DNS' },
  cPanel: { Icon: SiCpanel, color: '#FF6C2C' },
  'Microsoft 365': { fallback: '365' },
  SSL: { fallback: 'SSL' },

  // Tools & AI
  Git: { Icon: SiGit, color: '#F05032' },
  GitHub: { Icon: SiGithub },
  Gradle: { Icon: SiGradle, color: '#02303A' },
  'Claude Code': { Icon: SiClaude, color: '#D97757' },
  MCP: { fallback: 'MCP' },
  'CI/CD': { fallback: 'CI' },
};

interface TechIconProps {
  name: string;
  className?: string;
  /** Apply the brand color; otherwise inherits currentColor. */
  colored?: boolean;
}

/**
 * Renders a technology's brand logo (Simple Icons) or a lettered fallback tile
 * for brands that were removed from the icon set. `colored` opts into the
 * brand color (used on hover in the skills grid).
 */
export function TechIcon({ name, className, colored = false }: TechIconProps) {
  const def = TECH[name];

  if (def?.Icon) {
    const { Icon, color } = def;
    return (
      <Icon
        className={cn('size-6', className)}
        style={colored && color ? { color } : undefined}
        aria-hidden
      />
    );
  }

  // Lettered fallback (e.g. Lq, SEO, 365, MCP).
  const letters = def?.fallback ?? name.slice(0, 2);
  return (
    <span
      className={cn(
        'grid size-6 place-items-center font-mono text-[0.6rem] font-bold leading-none',
        className,
      )}
      aria-hidden
    >
      {letters}
    </span>
  );
}
