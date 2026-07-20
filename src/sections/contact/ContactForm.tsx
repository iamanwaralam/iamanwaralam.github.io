import { useState } from 'react';
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { sendContactMessage, type ContactMessage } from '@/utils';

type Status = 'idle' | 'sending' | 'success' | 'error';

type Errors = Partial<Record<keyof ContactMessage, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: ContactMessage): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (values.subject.trim().length < 3) {
    errors.subject = 'Please add a short subject.';
  }
  if (values.message.trim().length < 20) {
    errors.message = 'Please write at least a couple of sentences (20+ characters).';
  }
  return errors;
}

const inputClasses =
  'w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring aria-[invalid=true]:border-destructive';

/**
 * Validated contact form. Client-side validation with inline errors,
 * honeypot spam trap, and async submit through sendContactMessage
 * (endpoint-ready, mailto fallback).
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [honeypot, setHoneypot] = useState('');

  const set =
    (field: keyof ContactMessage) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      // Clear the field's error as the user fixes it.
      setErrors((errs) => ({ ...errs, [field]: undefined }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot filled the hidden field — drop silently

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus('sending');
    try {
      await sendContactMessage(values);
      setStatus('success');
      setValues({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot — hidden from humans, tempting for bots */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={set('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={inputClasses}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={set('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={inputClasses}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="Project inquiry, job opportunity…"
          value={values.subject}
          onChange={set('subject')}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          className={inputClasses}
        />
        {errors.subject && (
          <p id="contact-subject-error" className="mt-1.5 text-xs text-destructive">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell me about your project, timeline, and goals…"
          value={values.message}
          onChange={set('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={cn(inputClasses, 'resize-y')}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send />
              Send message
            </>
          )}
        </Button>

        {status === 'success' && (
          <p
            role="status"
            className="flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            <CheckCircle2 className="size-4" />
            Message sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p
            role="alert"
            className="flex items-center gap-1.5 text-sm font-medium text-destructive"
          >
            <TriangleAlert className="size-4" />
            Something went wrong — email me directly instead.
          </p>
        )}
      </div>
    </form>
  );
}
