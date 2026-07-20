import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { PROFILE } from '@/data/profile';
import { EASE_PREMIUM } from '@/animations/variants';

/**
 * Hero portrait. Uses the optimized headshot in public/profile/ — WebP
 * (17 KB) as the primary source via <picture>, JPEG (55 KB) as the fallback
 * for browsers without WebP support. Original photos (alternates 1–4.png)
 * live in assets-source/profile/ — to swap, re-export one at both formats
 * here (`cwebp -q 82 in.jpg -o out.webp`) and update the constants.
 * object-cover crops the square source cleanly into the 4:5 frame. The
 * branded fallback renders if the file is ever missing.
 */
const PHOTO_SRC_WEBP = '/profile/anwar-hero.webp';
const PHOTO_SRC_JPG = '/profile/anwar-hero.jpg';

export function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.2 }}
      className="relative mx-auto w-full max-w-sm"
    >
      {/* Glow ring */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[conic-gradient(from_140deg,var(--primary),var(--secondary),var(--accent),var(--primary))] opacity-30 blur-2xl" />

      {/* Frame */}
      <div className="glass relative aspect-4/5 overflow-hidden rounded-[1.75rem] p-1.5">
        <div className="relative size-full overflow-hidden rounded-[1.4rem] bg-card">
          <picture>
            <source srcSet={PHOTO_SRC_WEBP} type="image/webp" />
            <img
              src={PHOTO_SRC_JPG}
              alt={`${PROFILE.name}, ${PROFILE.primaryRole} in ${PROFILE.location}`}
              loading="eager"
              fetchPriority="high"
              // If the placeholder files are absent, reveal the branded fallback.
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="relative z-10 size-full object-cover"
            />
          </picture>
          {/* Branded fallback (behind the img; visible when img fails/absent) */}
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)]">
            <span className="grid size-24 place-items-center rounded-full bg-[linear-gradient(135deg,var(--primary),var(--secondary))] font-display text-4xl font-bold text-primary-foreground">
              AA
            </span>
            <p className="font-mono text-xs text-muted-foreground">
              Add profile photo
            </p>
          </div>
        </div>
      </div>

      {/* Floating location chip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM, delay: 0.6 }}
        className="glass absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium shadow-lg"
      >
        <MapPin className="size-4 text-primary" />
        {PROFILE.location}
      </motion.div>

      {/* Floating experience chip */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM, delay: 0.7 }}
        className="glass absolute -right-4 top-6 rounded-xl px-3 py-2 text-center shadow-lg"
      >
        <span className="block font-display text-lg font-bold text-gradient">
          {PROFILE.yearsOfExperience}+
        </span>
        <span className="block text-[0.65rem] font-medium text-muted-foreground">
          Years Exp.
        </span>
      </motion.div>
    </motion.div>
  );
}
