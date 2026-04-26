export interface Project {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  technologies: string[];
  status: string;
  year: string;
  url: string;
  featured: boolean;
  /** Visually highlighted as the flagship project */
  highlight?: boolean;
  highlights: string[];
  /** Extended case study fields — optional */
  problem?: string;
  solution?: string;
  impact?: string[];
  targetUsers?: string;
  lessons?: string;
}

export const projects: Project[] = [
  /* ─────────────────────────────────────────
     PERSONAL PROJECTS — Athena first (featured)
  ───────────────────────────────────────── */
  {
    title: "Athena Classroom",
    slug: "athena-classroom",
    category: "Personal Projects",
    shortDescription:
      "An EdTech classroom management platform designed to help teachers organize classes, attendance, quizzes, gradebooks, lesson planning, and student performance in one workspace.",
    fullDescription:
      "Athena Classroom is an education technology platform designed to help teachers manage classroom workflows more efficiently. It brings together essential teaching tools such as class management, attendance tracking, quizzes, gradebook monitoring, student performance insights, and lesson planning support in one organized digital workspace. Built from the perspective of a teacher and systems developer, it focuses on practical classroom needs, mobile-friendly access, and tools that reduce repetitive administrative work.",
    role: "Founder / Product Owner / System Planner",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "In Development",
    year: "2024–Present",
    url: "To be provided",
    featured: true,
    highlight: true,
    highlights: [
      "Class and student management",
      "Attendance monitoring and tracking",
      "Quiz management and assessment tools",
      "Gradebook and student performance monitoring",
      "Lesson planning support",
      "Teacher dashboard",
    ],
    problem:
      "Teachers often manage classroom records, attendance, quizzes, lesson planning, and student performance using separate tools or manual processes. This becomes time-consuming, repetitive, and difficult to organize — especially when handling multiple classes.",
    solution:
      "Athena Classroom brings essential classroom management tools into a single digital platform. It is designed to help teachers save time, organize records, monitor learners, and simplify teaching-related workflows through a clean and practical interface.",
    impact: [
      "Reduces repetitive teacher workload",
      "Improves organization of class records",
      "Supports better monitoring of student performance",
      "Encourages practical use of ICT in teaching",
      "Provides a foundation for data-driven classroom decisions",
    ],
    targetUsers:
      "Teachers and educators managing multiple classes, particularly in Philippine academic institutions.",
    lessons:
      "Building Athena Classroom has helped me connect my teaching experience with systems development. EdTech should not only look modern — it should solve real problems for teachers and learners.",
  },
  {
    title: "SIPLocator",
    slug: "siplocator",
    category: "Personal Projects",
    shortDescription:
      "Coffee shop locator and discovery platform helping users find nearby coffee shops, explore store details, view operating hours, and support local business visibility.",
    fullDescription:
      "SIPLocator is a coffee shop discovery platform that connects coffee enthusiasts with local shops. Users can find nearby coffee shops, explore store details, view menus and operating hours, and discover new spots — while helping local coffee businesses in the Philippines gain digital visibility and attract new customers.",
    role: "Founder / Product Owner",
    technologies: ["Next.js", "TypeScript", "Google Maps API", "Supabase", "Tailwind CSS"],
    status: "Prototype",
    year: "2024–Present",
    url: "To be provided",
    featured: false,
    highlights: [
      "Map-based coffee shop discovery and locator",
      "Store details, menus, and operating hours",
      "Local business digital visibility support",
      "User reviews and discovery features",
    ],
    impact: [
      "Supports local business digital presence",
      "Helps users discover nearby coffee shops",
      "Encourages community-based commerce",
    ],
  },
  {
    title: "Framify",
    slug: "framify",
    category: "Personal Projects",
    shortDescription:
      "Web-based frame generation platform for event frames, campaign frames, profile frames, and social media-ready designs.",
    fullDescription:
      "Framify is a web-based platform for creating and generating digital frames for social media, events, and campaigns. Users can create event frames, campaign overlays, profile photo frames, and social media-ready designs — making it easy to produce branded digital content for organizations, advocates, and individuals.",
    role: "Founder / Product Owner",
    technologies: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS"],
    status: "Live / Prototype",
    year: "2024–Present",
    url: "To be provided",
    featured: false,
    highlights: [
      "Event and campaign frame generation",
      "Profile photo frame creation tools",
      "Social media-ready digital design output",
      "Organizational branding overlay support",
    ],
    impact: [
      "Simplifies branded content creation",
      "Accessible to non-designers",
      "Supports advocacy and event campaigns",
    ],
  },
  {
    title: "RobTech Journey",
    slug: "robtech-journey",
    category: "Personal Projects",
    shortDescription:
      "ICT-focused content platform sharing technology tips, digital tools, productivity workflows, programming concepts, cybersecurity basics, and practical ICT knowledge.",
    fullDescription:
      "RobTech Journey is an ICT content platform and advocacy initiative founded by Rowbie Lopez. It focuses on sharing practical technology knowledge, digital tools, productivity workflows, programming concepts, and cybersecurity basics — with the goal of making ICT education more accessible and relevant for Filipino students, teachers, and professionals.",
    role: "Founder / Content Creator",
    technologies: ["Content Creation", "Video Production", "Digital Tools", "Social Media"],
    status: "Active",
    year: "Ongoing",
    url: "To be provided",
    featured: true,
    highlights: [
      "ICT education content and digital advocacy",
      "Technology tips and digital productivity tools",
      "Programming concepts for beginners and educators",
      "Cybersecurity awareness and digital safety content",
    ],
    impact: [
      "Makes ICT knowledge accessible to Filipino educators",
      "Promotes digital literacy and awareness",
      "Supports continuous professional development",
    ],
  },

  /* ─────────────────────────────────────────
     CSU PROJECTS
  ───────────────────────────────────────── */
  {
    title: "Cagayan State University Official Website",
    slug: "csu-official-website",
    category: "CSU Projects",
    shortDescription:
      "Official university website supporting institutional communication, public information, news publishing, announcements, academic updates, and access to university digital services.",
    fullDescription:
      "The official Cagayan State University website serves as the primary digital presence of the institution. It supports public information dissemination, news publishing, academic announcements, transparency-related content, and access to university digital services — serving students, faculty, staff, and the general public.",
    role: "Systems Developer / Web Developer / MIS Office Contributor",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    status: "Live",
    year: "Ongoing",
    url: "To be provided",
    featured: true,
    highlights: [
      "Institutional communication and information platform",
      "News and announcements publishing system",
      "Academic updates and transparency content",
      "University digital services access portal",
    ],
    impact: [
      "Centralized public information access for the university community",
      "Improved institutional digital presence",
      "Supports transparency and announcements",
    ],
  },
  {
    title: "CSU Campus Websites",
    slug: "csu-campus-websites",
    category: "CSU Projects",
    shortDescription:
      "Multi-campus website initiative supporting the online presence of CSU campuses including Andrews, Aparri, Carig, Gonzaga, Lal-lo, Lasam, Piat, Sanchez Mira, and Solana.",
    fullDescription:
      "A multi-campus website initiative that supports the online presence of multiple Cagayan State University campuses. Each campus site provides localized information, announcements, faculty directories, and campus-specific services while maintaining a consistent institutional brand identity across all locations.",
    role: "Systems Developer / Web Developer / Project Development Team Member",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    status: "Live",
    year: "Ongoing",
    url: "To be provided",
    featured: true,
    highlights: [
      "Multi-campus coverage: Andrews, Aparri, Carig, Gonzaga, Lal-lo, Lasam, Piat, Sanchez Mira, and Solana",
      "Consistent institutional branding across all campuses",
      "Localized campus information and services",
      "Responsive web design implementation",
    ],
    impact: [
      "Extended digital reach across all CSU campuses",
      "Consistent brand identity university-wide",
      "Localized access to campus information",
    ],
  },
  {
    title: "Old CSU MyPortal / Student Portal",
    slug: "csu-student-portal",
    category: "CSU Projects",
    shortDescription:
      "Student portal supporting online student access to admission, registration, enrollment-related information, account management, and student-centered online services.",
    fullDescription:
      "The CSU Student Portal (MyPortal) provided students with centralized online access to academic services including admission information, registration processes, enrollment records, and account management. It served as a student-facing gateway to university digital services.",
    role: "Systems Developer / Web Developer / MIS Office Contributor",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    status: "Legacy / Internal",
    year: "Past",
    url: "To be provided",
    featured: false,
    highlights: [
      "Centralized student admission and registration access",
      "Enrollment-related information management",
      "Student account management features",
      "Online student-centered services gateway",
    ],
    impact: [
      "Reduced physical visits for enrollment-related inquiries",
      "Provided digital access to academic records",
      "Improved student service delivery",
    ],
  },
  {
    title: "Enrollment-to-Employment System (E2E)",
    slug: "e2e-system",
    category: "CSU Projects",
    shortDescription:
      "University-wide information system supporting the academic lifecycle from admission and enrollment to employment-related tracking.",
    fullDescription:
      "The Enrollment-to-Employment (E2E) System is a comprehensive university information platform that manages the complete academic lifecycle. It covers student admission, enrollment processes, academic records management, and employment-related tracking to support institutional data needs and reporting across Cagayan State University.",
    role: "Project Development Team Leader / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    featured: true,
    highlights: [
      "End-to-end academic lifecycle management",
      "Admission and enrollment workflow support",
      "Academic records and data tracking",
      "Employment and graduate outcome monitoring",
    ],
    impact: [
      "Streamlined student academic lifecycle management",
      "Improved institutional data tracking and reporting",
      "Connected enrollment data to graduate outcomes",
    ],
  },
  {
    title: "Human Resource Information System (HRIS)",
    slug: "hris-system",
    category: "CSU Projects",
    shortDescription:
      "Web-based HR system supporting PDS management, leave credits, service records, calendar of events, employee records, data validation, and HR process tracking.",
    fullDescription:
      "The Human Resource Information System (HRIS) is a web-based platform for Cagayan State University's HR management needs. It handles Personal Data Sheet (PDS) management, leave credit tracking, service record management, employee records, and HR administrative processes, supporting compliance with Philippine Civil Service Commission requirements.",
    role: "Project Development Team Leader / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    featured: true,
    highlights: [
      "Personal Data Sheet (PDS) management",
      "Leave credit tracking and approval workflows",
      "Service records and employee data management",
      "HR administrative process support",
      "Civil Service Commission compliance features",
    ],
    impact: [
      "Digitized HR record-keeping and compliance processes",
      "Reduced manual HR paperwork",
      "Improved leave tracking accuracy and transparency",
    ],
  },
  {
    title: "Online Faculty Evaluation System (OFES)",
    slug: "ofes-system",
    category: "CSU Projects",
    shortDescription:
      "Faculty evaluation system supporting student and dean evaluations, semester-based setup, evaluation summaries, individual faculty reports, PDF generation, and role-based access.",
    fullDescription:
      "The Online Faculty Evaluation System (OFES) is a digital platform for managing faculty performance evaluations at Cagayan State University. It facilitates student evaluations, dean assessments, semester-based configuration, evaluation summary generation, and individual faculty performance reports with PDF export capabilities and role-based access control.",
    role: "Project Development Team Leader / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    featured: false,
    highlights: [
      "Student and dean evaluation workflows",
      "Semester-based evaluation setup and configuration",
      "Evaluation summary generation and analytics",
      "Individual faculty report generation with PDF export",
      "Role-based access control for all user types",
    ],
    impact: [
      "Replaced manual paper-based faculty evaluation",
      "Enabled digital evaluation summaries and reports",
      "Improved evaluation process transparency",
    ],
  },
  {
    title: "Procurement Management System",
    slug: "procurement-management-system",
    category: "CSU Projects",
    shortDescription:
      "Research-based procurement workflow system concept aligned with Philippine government procurement processes, RA 9184, and RA 12009.",
    fullDescription:
      "A research-based procurement management system concept designed to digitize and streamline government procurement workflows in compliance with Philippine procurement laws including RA 9184 and RA 12009. The system aims to improve transparency, efficiency, and auditability in public procurement processes for government institutions.",
    role: "Researcher / System Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    status: "Research Project",
    year: "Past",
    url: "To be provided",
    featured: false,
    highlights: [
      "Compliance with RA 9184 and RA 12009",
      "Government procurement workflow digitization",
      "Transparency and audit trail support",
      "Philippine public procurement process alignment",
    ],
    impact: [
      "Proposed digital solution for compliant procurement workflows",
      "Addressed inefficiencies in manual procurement tracking",
      "Aligned with national government procurement standards",
    ],
  },
];

export const categories = ["All", "Personal Projects", "CSU Projects"] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
