# Design System — Anwar Alam Portfolio

Minimal luxury · glass morphism · developer theme. Benchmarks: Apple (spacing),
Linear (typography), Stripe (cards), Vercel/Framer (motion restraint).

## 1. Color tokens

Defined once as CSS variables in `src/styles/index.css` and exposed to Tailwind
via `@theme`. Never hard-code hex in components — use the semantic token.

| Token | Hex | Role |
| --- | --- | --- |
| `--primary` | `#2563EB` | Primary actions, links, focus |
| `--secondary` | `#06B6D4` | Secondary accents, gradient stops |
| `--accent` | `#22C55E` | Success, "available" badge |
| `--background` (dark) | `#020617` | Page background |
| `--card` (dark) | `#0F172A` | Surfaces, cards |
| `--foreground` (dark) | `#F8FAFC` | Primary text |
| `--muted-foreground` | `#94A3B8` | Secondary text |

Light theme mirrors these with inverted surfaces (see `index.css`). Every token
has a light and dark value; components stay theme-agnostic.

## 2. Typography scale

| Family | Variable | Usage |
| --- | --- | --- |
| Space Grotesk | `--font-display` | Headlines, hero, section titles |
| Inter | `--font-sans` | Body, UI, paragraphs |
| JetBrains Mono | `--font-mono` | Code, labels, kbd, eyebrows |

Type scale (rem): `display 4.5 / h1 3 / h2 2.25 / h3 1.5 / lg 1.25 / base 1 /
sm 0.875 / xs 0.75`. Tight tracking on display, relaxed leading on body.

## 3. Spacing & layout

- 8px base grid. Section vertical rhythm: `py-24 md:py-32` (Apple-like breathing room).
- Container: `max-w-6xl` (1152px) centered, `px-6` gutters.
- Radius scale: `sm 8px / md 12px / lg 16px / xl 24px / full`.

## 4. Elevation & glass

- Glass surface: `bg-card/60 backdrop-blur-xl border border-white/10`.
- Shadows are soft and low-contrast; no harsh drop shadows.
- Gradient text/borders reserved for emphasis, used sparingly.

## 5. Motion

- Library: Framer Motion for component/scroll motion; GSAP only where a timeline
  is genuinely needed. Respect `prefers-reduced-motion` everywhere.
- Standard easing: `[0.22, 1, 0.36, 1]` (easeOutExpo-ish). Durations 0.3–0.7s.
- Reveal pattern: fade + 16px rise, staggered by 0.06s. Defined in
  `src/animations/variants.ts` so motion is consistent app-wide.

## 6. Reusable primitives (Phase 1)

- `Container` — max-width + gutters wrapper.
- `Section` — vertical rhythm + optional id/anchor.
- `Button` — cva-based, shadcn-compatible variants.
- `Reveal` — scroll-triggered entrance wrapper.
- `SEO` — per-page metadata via react-helmet-async.
- `ThemeToggle` / `ThemeProvider` — light/dark with system default + persistence.

## 7. Accessibility

- Target WCAG AA contrast, visible focus rings (`--ring`), semantic landmarks,
  reduced-motion fallbacks, keyboard-navigable interactives. Goal: Lighthouse a11y 95+.
