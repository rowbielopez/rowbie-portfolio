export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  image?: string;
  relationship?: string;
}

export const testimonials: Testimonial[] = [];
