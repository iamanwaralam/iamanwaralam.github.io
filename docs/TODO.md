# TODO — Content & Assets Needed From Anwar

Most content is now verified from the official CV
(`public/resume/Anwar_Alam_Full_Stack_Web_Developer_Dubai_CV.pdf`). Remaining items below.

## Assets
- [x] **Hero photo** — removed by request; the hero is now a text-only,
      single-column layout (no `HeroPhoto.tsx`). Source photos remain in
      `public/profile/` if a portrait is wanted back later.
- [x] **Project screenshots** — all 12 web/e-commerce projects done (akiuae,
      esthica, beatryx, flavor-and-figures, r3hrs, ceovia, skinin, prizmah,
      lapromed, alameerali, techsavvyhelp, mesoage) captured from the live
      sites, optimized, and wired into both the project card and case study
      page. Google Play Apps has no single site to screenshot (GitHub-linked
      only).
- [x] **OG social share image** (1200×630) generated at `public/og/og-image.jpg`
      — branded card with real headshot, name, role, and tagline. Replace with
      a designed version anytime; it's referenced from `index.html` and
      `src/data/site.ts` (`SITE.ogImage`).
- [ ] Favicon set / brand mark (SVG placeholder currently in use).

## Content to confirm
- [x] Live URLs for Beatryx (beatryx.com) and Flavor & Figures
      (flavorandfigures.com) — added, live button + screenshot both wired.
- [x] Certification issuers — all three (Android Developer, Flutter
      Developer, Digital Marketing & SEO) confirmed as Udemy
      (`src/data/certifications.ts`).
- [ ] Certification years — still unconfirmed for all three.
- [ ] **Miskeen Burger** (miskeenburger.com, independent project) — site is
      still mid-build (empty hero, Humble Menu / Contact Us nav links 404 as
      of Sep 2026). Add as a project once it's actually launched.
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
- [x] Full work history with real dates, no exact-duration headline figures:
      AK International (2022–present), Independent e-commerce (2023–present),
      ArhamTechMind (2020–2022), csdevbin (2017–2019).
- [x] Education: M.Tech (JNTU Hyderabad), B.E. (Osmania University).
- [x] Languages: English, Hindi/Urdu, Nepali.
- [x] Certifications (titles): Android, Flutter, Digital Marketing & SEO.
- [x] Skills grouped per CV (Web Development, E-commerce & CMS, Mobile &
      Backend Services, SEO/Analytics & Infrastructure, Tools & Delivery).
- [x] Projects: AKIUAE, Esthica, Beatryx, Flavor & Figures, R3, Ceovia, Skinin,
      Prizmah, Lapromed, AmeerAli, TechSavvyHelp, MesoAge, Google Play apps.
- [x] Contact: iamanwaralam48@gmail.com · +971 58 661 9341.
- [x] Socials: GitHub, LinkedIn (in/iamanwaralam), Instagram, X.
- [x] Resume PDF wired to the navbar / hero download buttons.
