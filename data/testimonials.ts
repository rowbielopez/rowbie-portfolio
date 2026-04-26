export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
  image?: string;
  relationship?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Colleague / Collaborator",
    role: "Colleague / Collaborator",
    organization: "To be updated",
    quote:
      "Rowbie is a reliable ICT professional who combines technical skill, creativity, and a strong commitment to helping others learn and use technology effectively.",
  },
];
