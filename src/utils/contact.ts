import { SITE } from '@/data/site';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Email integration point.
 *
 * Preferred: set VITE_CONTACT_ENDPOINT in a `.env` file to any
 * Formspree-compatible endpoint (e.g. https://formspree.io/f/xxxx) and the
 * form POSTs JSON there — no code changes needed.
 *
 * Fallback (no endpoint configured): opens the visitor's mail client with a
 * pre-filled message to Anwar's address, so the form always works.
 */
export async function sendContactMessage(data: ContactMessage): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Contact endpoint responded with ${res.status}`);
    }
    return;
  }

  // Mailto fallback — always available.
  const subject = encodeURIComponent(`[Portfolio] ${data.subject}`);
  const body = encodeURIComponent(
    `${data.message}\n\n— ${data.name}\n${data.email}`,
  );
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}
