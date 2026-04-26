export interface ExperienceRole {
  title: string;
  note?: string;
  description: string;
  keyPoints: string[];
}

export interface ExperienceItem {
  title?: string;
  organization: string;
  years: string;
  description?: string;
  keyPoints?: string[];
  roles?: ExperienceRole[];
}

export const experienceItems: ExperienceItem[] = [
  {
    organization: "Cagayan State University",
    years: "2020 – Present",
    roles: [
      {
        title: "Instructor / ICT Educator",
        note: "Designated within the same period as University Senior Programmer / Project Development Leader.",
        description:
          "Teaches ICT-related subjects to Education students, focusing on ICT integration, digital literacy, educational technology, data management, troubleshooting, cybersecurity awareness, basic programming, and web development fundamentals.",
        keyPoints: [
          "Handles ICT-related courses for Education students",
          "Teaches subjects such as Teaching ICT, Living in the IT Era, Data Management, Introduction to ICT Specializations I and II, and Teaching Common Competencies in ICT",
          "Prepares modules, assessments, learning materials, and digital resources",
          "Uses LMS and digital platforms for teaching and class delivery",
          "Integrates practical ICT tools, productivity platforms, and responsible technology use into instruction",
          "Supports students in developing digital skills useful for teaching and professional practice",
        ],
      },
      {
        title: "University Senior Programmer / Project Development Leader",
        note: "Designated within the same period as Instructor / ICT Educator.",
        description:
          "Leads and supports the development, enhancement, deployment, and maintenance of university information systems supporting academic, administrative, HR, student, and institutional services.",
        keyPoints: [
          "Lead developer of the E2E Admission-Enrollment-Employment System used across multiple campuses",
          "Builds new modules, fixes bugs, improves system functions, and manages database updates",
          "Deploys applications on VPS/cPanel and handles hosting, SSL, backups, and site maintenance",
          "Coordinates with university offices to gather requirements and implement system changes",
          "Maintains the official CSU website and supports website updates across campuses",
          "Provides technical troubleshooting and user support for university offices",
        ],
      },
    ],
  },
  {
    title: "Web Developer",
    organization: "Cagayan State University",
    years: "2014 – 2020",
    description:
      "Developed and maintained university websites, portals, and internal web-based systems supporting academic and administrative operations.",
    keyPoints: [
      "Developed multiple internal systems such as PBB Reporting System, Helpdesk System, Graduate Tracer, Alumni Database, Document Tracking, and Training Management System",
      "Designed web layouts and maintained official and campus websites",
      "Deployed updates, maintained hosting, and supported website security and backups",
      "Provided IT support and created digital materials for academic and administrative events",
    ],
  },
  {
    title: "Founder & Developer — Independent Projects",
    organization: "Independent / Personal Projects",
    years: "2024 – Present",
    description:
      "Builds and explores independent digital products focused on EdTech, productivity, local discovery, and practical web-based tools.",
    keyPoints: [
      "Building Athena Classroom, an EdTech platform for classroom management using Next.js, TypeScript, and Supabase",
      "Developed Framify, a web-based frame generation platform for event and social media designs",
      "Built SIPLocator, a coffee shop discovery platform using Google Maps API and Supabase",
    ],
  },
  {
    title: "Admin Aide III",
    organization: "LGU Tuguegarao City",
    years: "2013 – 2014",
    description:
      "Handled administrative, data encoding, payroll preparation, design, and basic technical support functions.",
    keyPoints: [
      "Performed administrative tasks, payroll preparation, and data encoding",
      "Designed IEC materials, invitations, banners, and event layouts",
      "Provided basic troubleshooting for hardware and software concerns",
      "Assisted with computer and multimedia equipment setup during official events",
    ],
  },
];
