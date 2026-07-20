/**
 * Client testimonials — REAL quotes only, added as Anwar provides them
 * (see docs/TODO.md). While this array is empty the Testimonials section
 * renders an honest "references on request" card instead of fake praise.
 *
 * To add one:
 * {
 *   quote: 'What the client actually said.',
 *   name: 'Client Name',
 *   role: 'Title',
 *   company: 'Company',
 *   avatar: '/testimonials/client-name.jpg', // optional — initials otherwise
 * }
 */
export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  /** Path under /public; initials avatar is used when absent. */
  avatar?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Anwar transformed our online presence into a much more modern and user-friendly e-commerce experience. He understood our products, improved the website structure, and paid close attention to mobile responsiveness and the customer journey. His ability to combine design, development, and SEO made a real difference to the project.',
    name: 'Esthica',
    role: 'E-commerce Client',
    company: 'Dubai, UAE',
  },
  {
    quote:
      'Working with Anwar on the AK International website was a great experience. He successfully translated our business, product portfolio, and regional presence into a professional digital platform. He was proactive, detail-oriented, and handled everything from development and content structure to SEO and ongoing improvements. The result is a website that represents our company much more professionally.',
    name: 'AK International LLC',
    role: 'Corporate Website',
    company: 'Dubai, UAE',
  },
  {
    quote:
      'Anwar helped us create a strong digital presence for Flavor & Figures with a website that reflects the energy and creativity of our food media brand. He understood the importance of visual storytelling, mobile experience, and making our content easy for audiences to explore. His technical knowledge and creative approach made the entire process smooth and effective.',
    name: 'Flavor & Figures',
    role: 'Food Media Channel',
    company: 'Dubai, UAE',
  },
];
