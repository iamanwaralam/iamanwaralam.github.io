import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  /** Pause once a word is fully typed, before deleting. */
  pauseMs?: number;
}

/**
 * Cycles through `words` with a type/delete effect. When the user prefers
 * reduced motion, it returns the full current word statically (no animation)
 * and stops cycling.
 */
export function useTypewriter(
  words: readonly string[],
  { typeSpeed = 90, deleteSpeed = 45, pauseMs = 1600 }: TypewriterOptions = {},
): string {
  const reduce = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(words[0] ?? '');
      return;
    }

    const current = words[index % words.length] ?? '';

    // Fully typed → pause, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    // Fully deleted → advance to the next word.
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduce, typeSpeed, deleteSpeed, pauseMs]);

  return reduce ? (words[0] ?? '') : text;
}
