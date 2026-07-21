# TODO — Content & Assets Needed From Anwar

Most content is now verified from the official CV
(`public/resume/Anwar_Alam_CV_OnePage.pdf`). Remaining items below.

## Assets
- [x] **Hero photo** — professional headshots uploaded to `public/profile/`;
      `2.png` (dev-workspace look) optimized to `anwar-hero.jpg` (54 kB) and
      wired into the hero. Alternates 1/3/4.png remain — swap `PHOTO_SRC` in
      `src/sections/hero/HeroPhoto.tsx` to change.
- [x] **Project screenshots** — all 9 web/e-commerce projects done (akiuae,
      esthica, beatryx, flavor-and-figures, r3hrs, ceovia, skinin, prizmah)
      captured from the live sites, optimized, and wired into both the
      project card and case study page. Google Play Apps has no single site
      to screenshot (GitHub-linked only).
- [x] **OG social share image** (1200×630) generated at `public/og/og-image.jpg`
      — branded card with real headshot, name, role, and tagline. Replace with
      a designed version anytime; it's referenced from `index.html` and
      `src/data/site.ts` (`SITE.ogImage`).
- [ ] Favicon set / brand mark (SVG placeholder currently in use).

## Content to confirm
- [x] Live URLs for Beatryx (beatryx.com) and Flavor & Figures
      (flavorandfigures.com) — added, live button + screenshot both wired.
- [ ] **Certification details** — issuer + year for Android Developer,
      Flutter Developer, Digital Marketing & SEO (`src/data/certifications.ts`).
- [x] Testimonials — 3 real client quotes added (Esthica, AK International,
      Flavor & Figures). Optional: client logos/avatars →
      `public/testimonials/<name>.jpg`.
- [x] Case study depth (problem/solution/challenges/results) per project — live
      at `/projects/<slug>` for all 5 projects.

## Infra
- [x] Deployed to `https://iamanwaralam.github.io` via GitHub Actions
      (auto-deploys on push to `main`). Domain updated everywhere: `SITE.url`,
      `index.html`, `robots.txt`, `sitemap.xml`.

## Verified & wired from the CV (no action needed)
- [x] 8+ years experience (4 in the UAE); full work history with real dates:
      AK International (2022–present), Independent e-commerce (2023–present),
      ArhamTechMind (2020–2022), csdevbin (2017–2019).
- [x] Education: M.Tech (JNTU Hyderabad), B.E. (Osmania University).
- [x] Languages: English, Hindi/Urdu, Nepali.
- [x] Certifications (titles): Android, Flutter, Digital Marketing & SEO.
- [x] Skills grouped per CV (Frontend, Mobile, E-commerce, SEO & Analytics,
      Infrastructure, Tools & AI).
- [x] Projects: AKIUAE, Esthica, Beatryx, Flavor & Figures, R3, Ceovia, Skinin,
      Prizmah, Google Play apps.
- [x] Contact: iamanwaralam48@gmail.com · +971 58 661 9341.
- [x] Socials: GitHub, LinkedIn (in/iamanwaralam), Instagram, X.
- [x] Resume PDF wired to the navbar / hero download buttons.
