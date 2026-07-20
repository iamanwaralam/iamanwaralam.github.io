import {
  Code2,
  ShoppingBag,
  Layout,
  Search,
  Gauge,
  Sparkles,
  Store,
  Megaphone,
  LifeBuoy,
  PenTool,
  TrendingUp,
  Smartphone,
  Award,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Resolves the icon-name strings kept in the data layer to Lucide components.
 * Explicit map (not a dynamic import) so only the icons we use are bundled.
 */
const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  ShoppingBag,
  Layout,
  Search,
  Gauge,
  Sparkles,
  Store,
  Megaphone,
  LifeBuoy,
  PenTool,
  TrendingUp,
  Smartphone,
  Award,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const Cmp = ICON_MAP[name] ?? Sparkles;
  return <Cmp className={cn('size-5', className)} aria-hidden />;
}
