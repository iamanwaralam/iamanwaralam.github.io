import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Briefcase,
  Copy,
  Download,
  FileText,
  FolderGit2,
  Home,
  Mail,
  Moon,
  Sparkles,
  Sun,
  User,
  Volume2,
  VolumeX,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';
import { useSound, useTheme } from '@/hooks';
import { NAV_LINKS, RESUME_URL } from '@/data/navigation';
import { PROJECTS } from '@/data/projects';
import { SOCIALS } from '@/data/profile';
import { SITE } from '@/data/site';

export interface Command {
  id: string;
  label: string;
  group: 'Navigate' | 'Projects' | 'Actions' | 'Connect';
  icon: React.ComponentType<{ className?: string }>;
  keywords?: string;
  shortcut?: string;
  perform: () => void;
}

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  whatsapp: FaWhatsapp,
};

// lucide icon per nav label, kept local since it's a one-off UI mapping.
const NAV_ICONS: Record<string, LucideIcon> = {
  About: User,
  Skills: Wrench,
  Services: Briefcase,
  Experience: Briefcase,
  Projects: FolderGit2,
  Blog: FileText,
  Contact: Mail,
};

/**
 * Builds the full command list for the palette: section/page navigation,
 * every project (searchable by name), and quick actions (theme, resume,
 * copy email, socials, sound). Route-aware: hash links resolve relative to
 * home from any page, same pattern as Footer/Navbar.
 */
export function useCommands(close: () => void): Command[] {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const sound = useSound();

  return useMemo(() => {
    const go = (href: string) => () => {
      if (href.startsWith('#')) {
        if (pathname === '/') {
          document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate(`/${href}`);
        }
      } else {
        navigate(href);
      }
      close();
    };

    const commands: Command[] = [
      {
        id: 'home',
        label: 'Home',
        group: 'Navigate',
        icon: Home,
        perform: go('/'),
      },
      ...NAV_LINKS.map((link) => ({
        id: `nav-${link.href}`,
        label: link.label,
        group: 'Navigate' as const,
        icon: NAV_ICONS[link.label] ?? Sparkles,
        perform: go(link.href),
      })),

      ...PROJECTS.map((project) => ({
        id: `project-${project.slug}`,
        label: project.title,
        group: 'Projects' as const,
        icon: FolderGit2,
        keywords: project.tech.join(' '),
        perform: go(`/projects/${project.slug}`),
      })),

      {
        id: 'toggle-theme',
        label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
        group: 'Actions',
        icon: theme === 'dark' ? Sun : Moon,
        keywords: 'dark light appearance',
        perform: () => {
          toggleTheme();
          close();
        },
      },
      {
        id: 'toggle-sound',
        label: sound.enabled ? 'Mute sound effects' : 'Enable sound effects',
        group: 'Actions',
        icon: sound.enabled ? VolumeX : Volume2,
        keywords: 'audio mute',
        perform: () => {
          sound.toggle();
          close();
        },
      },
      {
        id: 'download-resume',
        label: 'Download resume',
        group: 'Actions',
        icon: Download,
        keywords: 'cv pdf',
        perform: () => {
          const a = document.createElement('a');
          a.href = RESUME_URL;
          a.download = '';
          a.click();
          close();
        },
      },
      {
        id: 'copy-email',
        label: `Copy email — ${SITE.email}`,
        group: 'Actions',
        icon: Copy,
        keywords: 'contact mail',
        perform: () => {
          void navigator.clipboard.writeText(SITE.email);
          close();
        },
      },

      ...SOCIALS.filter((s) => s.icon !== 'email').map((social) => ({
        id: `social-${social.icon}`,
        label: `Open ${social.label}`,
        group: 'Connect' as const,
        icon: SOCIAL_ICONS[social.icon] ?? Sparkles,
        perform: () => {
          window.open(social.href, '_blank', 'noopener,noreferrer');
          close();
        },
      })),
    ];

    return commands;
  }, [navigate, pathname, theme, toggleTheme, sound, close]);
}

/** Simple case-insensitive substring match across label + keywords. */
export function filterCommands(commands: Command[], query: string): Command[] {
  const q = query.trim().toLowerCase();
  if (!q) return commands;
  return commands.filter((c) =>
    `${c.label} ${c.keywords ?? ''}`.toLowerCase().includes(q),
  );
}
