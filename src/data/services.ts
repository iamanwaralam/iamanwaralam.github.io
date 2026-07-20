import type { Service } from './types';

/**
 * Services offered. Expanded from the live site's list (Web Design, Flutter,
 * Android, SEO, Data Analytics, E-Commerce/Shopify) to match the roles Anwar
 * advertises. Descriptions are recruiter/client focused.
 */
export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    title: 'Website Development',
    description:
      'Fast, responsive, SEO-ready websites built with modern stacks — from marketing sites to full-stack web apps.',
    icon: 'Code2',
  },
  {
    slug: 'shopify-development',
    title: 'Shopify Development',
    description:
      'Custom Shopify stores and theme work focused on conversion, speed, and a frictionless checkout.',
    icon: 'ShoppingBag',
  },
  {
    slug: 'wordpress-development',
    title: 'WordPress Development',
    description:
      'Bespoke WordPress and WooCommerce builds with Elementor — easy to manage, quick to load.',
    icon: 'Layout',
  },
  {
    slug: 'seo',
    title: 'SEO',
    description:
      'Technical and on-page SEO that improves rankings, indexing, and organic traffic.',
    icon: 'Search',
  },
  {
    slug: 'speed-optimization',
    title: 'Website Speed Optimization',
    description:
      'Core Web Vitals and performance tuning to make existing sites noticeably faster.',
    icon: 'Gauge',
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    description:
      'Practical AI workflows and automations that remove repetitive work and save teams time.',
    icon: 'Sparkles',
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce Solutions',
    description:
      'End-to-end online stores — catalog, payments, and analytics — built to sell.',
    icon: 'Store',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns and content strategy that turn visibility into leads.',
    icon: 'Megaphone',
  },
  {
    slug: 'it-support',
    title: 'IT Support',
    description:
      'Reliable technical support, setup, and troubleshooting for small teams and businesses.',
    icon: 'LifeBuoy',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Clean, usable interfaces designed in Figma and shipped pixel-accurate to code.',
    icon: 'PenTool',
  },
];
