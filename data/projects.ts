export interface Project {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  features?: string[];
  impactStatements?: string[];
  technologies: string[];
  status: string;
  year: string;
  url: string;
  liveUrl?: string;
  repositoryUrl?: string;
  previewEnabled: boolean;
  previewType: "screenshot" | "og" | "manual";
  isInternal: boolean;
  featured: boolean;
  /** Visually highlighted as the flagship project */
  highlight?: boolean;
  highlights: string[];
  /** Project screenshot / mockup - relative path from public/ */
  image: string;
  screenshots?: string[];
  demoVideoUrl?: string;
  demoVideoType?: "youtube" | "loom" | "mp4" | "external";
  /** Extended case study fields - optional */
  problem?: string;
  solution?: string;
  impact?: string[];
  targetUsers?: string;
  lessons?: string;
  projectContext?: string;
  architectureDecisions?: string[];
  keyChallenges?: string[];
  whatsNext?: string[];
}

export const projects: Project[] = [
  // PERSONAL PROJECTS - Athena first (featured)
  {
    title: "Athena Classroom",
    slug: "athena-classroom",
    category: "Personal Projects",
    image: "/projects/athena-classroom1.png",
    shortDescription:
      "An EdTech classroom management platform designed to help teachers organize classes, attendance, quizzes, gradebooks, lesson planning, and student performance in one workspace.",
    fullDescription:
      "Athena Classroom is an education technology platform designed to help teachers manage classroom workflows more efficiently. It brings together essential teaching tools such as class management, attendance tracking, quizzes, gradebook monitoring, student performance insights, and lesson planning support in one organized digital workspace. Built from the perspective of a teacher and systems developer, it focuses on practical classroom needs, mobile-friendly access, and tools that reduce repetitive administrative work.",
    role: "Founder / Product Owner / System Planner",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "In Development",
    year: "2024-Present",
    url: "https://athenaclassroom.app",
    liveUrl: "https://athenaclassroom.app",
    repositoryUrl: "",
    previewEnabled: true,
    previewType: "manual",
    isInternal: false,
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
    features: [
      "Class and student management",
      "Attendance monitoring and tracking",
      "Quiz and assessment tools",
      "Gradebook and performance monitoring",
      "Lesson planning support",
      "Teacher dashboard",
    ],
    screenshots: [
      "/projects/athena-classroom1.png",
      "/projects/athena-classroom2.png",
      "/projects/athena-classroom3.png",
      "/projects/athena-classroom4.png",
      "/projects/athena-classroom5.png",
    ],
    impactStatements: [
      "Reduces repetitive teacher administrative work.",
      "Organizes class records in one practical workspace.",
      "Helps teachers monitor learners more clearly.",
      "Supports practical ICT use in teaching workflows.",
    ],
    projectContext:
      "Athena Classroom is built from my combined experience as an ICT educator and systems developer, shaped by real classroom workflows and the operational needs of teachers.",
    architectureDecisions: [
      "Modular feature-based structure for classroom tools.",
      "Teacher-first workflow designed around daily classroom tasks.",
      "Mobile-friendly experience for classroom and on-the-go use.",
      "Scalable data model for classes, students, quizzes, attendance, and gradebook records.",
      "Clean separation between classroom tools and reporting features.",
      "Prepared for future enhancements without overcomplicating the current experience.",
    ],
    keyChallenges: [
      "Reducing teacher workload without making the UI complicated.",
      "Balancing feature depth with simplicity.",
      "Designing for mobile-first classroom use.",
      "Keeping data organized across classes and grading periods.",
      "Making tools approachable for non-technical users.",
    ],
    whatsNext: [
      "Stronger analytics for student performance.",
      "Improved quiz experience.",
      "Better lesson planning workflow.",
      "Export and reporting tools.",
      "Optional AI-supported teaching assistance in future versions.",
    ],
    problem:
      "Teachers often manage classroom records, attendance, quizzes, lesson planning, and student performance using separate tools or manual processes. This becomes time-consuming, repetitive, and difficult to organize - especially when handling multiple classes.",
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
      "Building Athena Classroom has helped me connect my teaching experience with systems development. EdTech should not only look modern - it should solve real problems for teachers and learners.",
  },
  {
    title: "SIPLocator",
    slug: "siplocator",
    category: "Personal Projects",
    image: "/projects/siplocator1.png",
    shortDescription:
      "Coffee shop locator and discovery platform helping users find nearby coffee shops, explore store details, view operating hours, and support local business visibility.",
    fullDescription:
      "SIPLocator is a coffee shop discovery platform that connects coffee enthusiasts with local shops. Users can find nearby coffee shops, explore store details, view menus and operating hours, and discover new spots - while helping local coffee businesses in the Philippines gain digital visibility and attract new customers.",
    role: "Founder / Product Owner",
    technologies: [
      "Next.js",
      "TypeScript",
      "Google Maps API",
      "Supabase",
      "Tailwind CSS",
    ],
    status: "Prototype",
    year: "2024-Present",
    url: "https://siplocator.com",
    liveUrl: "https://siplocator.com",
    repositoryUrl: "",
    previewEnabled: true,
    previewType: "manual",
    isInternal: false,
    featured: false,
    highlights: [
      "Map-based coffee shop discovery and locator",
      "Store details, menus, and operating hours",
      "Local business digital visibility support",
      "User reviews and discovery features",
    ],
    screenshots: [
      "/projects/siplocator1.png",
      "/projects/siplocator2.png",
      "/projects/siplocator3.png",
      "/projects/siplocator4.png",
      "/projects/siplocator5.png",
    ],
    impactStatements: [
      "Supports local business digital visibility.",
      "Helps users discover nearby coffee shops more easily.",
      "Creates a focused discovery workflow for community-based commerce.",
    ],
    problem:
      "Local coffee shops in the Philippines often lack a centralized digital presence, making it difficult for customers to discover them, check operating hours, or view menus online.",
    solution:
      "SIPLocator provides a map-based discovery platform where users can find nearby coffee shops, view store details, and explore menus in one place - while helping local businesses gain digital visibility.",
    targetUsers:
      "Coffee enthusiasts, local customers, and small coffee shop owners in the Philippines.",
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
    image: "/projects/framify1.png",
    shortDescription:
      "Web-based frame generation platform for event frames, campaign frames, profile frames, and social media-ready designs.",
    fullDescription:
      "Framify is a web-based platform for creating and generating digital frames for social media, events, and campaigns. Users can create event frames, campaign overlays, profile photo frames, and social media-ready designs - making it easy to produce branded digital content for organizations, advocates, and individuals.",
    role: "Founder / Product Owner",
    technologies: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS"],
    status: "Live / Prototype",
    year: "2024-Present",
    url: "https://framify-pi.vercel.app",
    liveUrl: "https://framify-pi.vercel.app",
    repositoryUrl: "",
    previewEnabled: true,
    previewType: "manual",
    isInternal: false,
    featured: false,
    highlights: [
      "Event and campaign frame generation",
      "Profile photo frame creation tools",
      "Social media-ready digital design output",
      "Organizational branding overlay support",
    ],
    screenshots: [
      "/projects/framify1.png",
      "/projects/framify2.png",
      "/projects/framify3.png",
      "/projects/framify4.png",
    ],
    impactStatements: [
      "Simplifies branded content creation for non-designers.",
      "Helps organizations prepare social media-ready campaign visuals.",
      "Supports advocacy and event communication workflows.",
    ],
    problem:
      "Creating branded digital frames for events, campaigns, and social media requires design skills or expensive tools that most organizations, schools, and advocacy groups do not have access to.",
    solution:
      "Framify provides a simple browser-based tool that lets anyone create custom event frames, campaign overlays, and profile photo borders without design software - producing social media-ready output in seconds.",
    targetUsers:
      "Organizations, advocacy groups, event organizers, and individuals who need branded digital frames without needing design expertise.",
    impact: [
      "Simplifies branded content creation",
      "Accessible to non-designers",
      "Supports advocacy and event campaigns",
    ],
  },
  // CSU PROJECTS
  {
    title: "Cagayan State University Official Website",
    slug: "csu-official-website",
    category: "CSU Projects",
    image: "",
    shortDescription:
      "Official university website supporting institutional communication, public information, news publishing, announcements, academic updates, and access to university digital services.",
    fullDescription:
      "The official Cagayan State University website serves as the primary digital presence of the institution. It supports public information dissemination, news publishing, academic announcements, transparency-related content, and access to university digital services - serving students, faculty, staff, and the general public.",
    role: "Systems Developer / Web Developer / MIS Office Contributor",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    status: "Live",
    year: "Ongoing",
    url: "",
    previewEnabled: false,
    previewType: "manual",
    isInternal: false,
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
    impactStatements: [
      "Improved access to official institutional information.",
      "Supported online publishing for news, announcements, and academic updates.",
      "Strengthened the university's public digital presence.",
    ],
    problem:
      "Cagayan State University needed a centralized digital platform to communicate institutional news, academic updates, and public information to students, faculty, staff, and the general public.",
    solution:
      "The CSU Official Website provides a structured, institution-branded web presence for publishing news, announcements, academic updates, and university digital services - accessible to all stakeholders online.",
    targetUsers:
      "CSU students, faculty, staff, alumni, applicants, and the general public seeking official university information.",
  },
  {
    title: "CSU Campus Websites",
    slug: "csu-campus-websites",
    category: "CSU Projects",
    image: "",
    shortDescription:
      "Multi-campus website initiative supporting the online presence of CSU campuses including Andrews, Aparri, Carig, Gonzaga, Lal-lo, Lasam, Piat, Sanchez Mira, and Solana.",
    fullDescription:
      "A multi-campus website initiative that supports the online presence of multiple Cagayan State University campuses. Each campus site provides localized information, announcements, faculty directories, and campus-specific services while maintaining a consistent institutional brand identity across all locations.",
    role: "Systems Developer / Web Developer / Project Development Team Member",
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    status: "Live",
    year: "Ongoing",
    url: "",
    previewEnabled: false,
    previewType: "manual",
    isInternal: false,
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
    impactStatements: [
      "Extended digital presence across multiple campus communities.",
      "Improved access to localized campus information.",
      "Supported consistent institutional branding across campuses.",
    ],
    problem:
      "Individual CSU campuses lacked their own dedicated online presence, making it difficult for campus-specific audiences to find localized information, announcements, and services.",
    solution:
      "A unified multi-campus website initiative that provides each campus with a dedicated site under a consistent institutional design - supporting localized content while maintaining university-wide brand standards.",
    targetUsers:
      "Students, faculty, staff, and community members of each individual CSU campus.",
  },
  {
    title: "Old CSU MyPortal / Student Portal",
    slug: "csu-student-portal",
    category: "CSU Projects",
    image: "",
    shortDescription:
      "Student portal supporting online student access to admission, registration, enrollment-related information, account management, and student-centered online services.",
    fullDescription:
      "The CSU Student Portal (MyPortal) provided students with centralized online access to academic services including admission information, registration processes, enrollment records, and account management. It served as a student-facing gateway to university digital services.",
    role: "Systems Developer / Web Developer / MIS Office Contributor",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    status: "Legacy / Internal",
    year: "Past",
    url: "",
    previewEnabled: false,
    previewType: "manual",
    isInternal: false,
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
    impactStatements: [
      "Improved student access to online academic services.",
      "Helped organize admission, registration, and account workflows.",
      "Supported more accessible student-facing digital services.",
    ],
    problem:
      "Students had to visit offices in person to access admission, registration, and enrollment-related information, creating long queues and inefficiencies in service delivery.",
    solution:
      "The CSU Student Portal (MyPortal) provided students with online access to academic services including registration, enrollment records, and account management - reducing the need for in-person visits.",
    targetUsers:
      "CSU students accessing admission, registration, enrollment, and account services online.",
  },
  {
    title: "MyCSU SSO Portal",
    slug: "mycsu-sso-portal",
    category: "CSU Projects",
    image: "",
    screenshots: [],
    shortDescription:
      "A centralized login and single sign-on portal designed to provide unified access to CSU digital systems through one secure entry point.",
    fullDescription:
      "MyCSU SSO Portal is a centralized authentication and access gateway for Cagayan State University digital systems. It is designed to simplify how users access institutional platforms by providing a single entry point for multiple services, improving consistency, accessibility, and user experience across CSU's digital ecosystem.",
    role: "System Planner / Web Developer / MIS Office Contributor",
    technologies: [
      "Web Development",
      "Authentication",
      "Information Systems",
      "UI/UX",
      "Institutional Systems",
    ],
    status: "Live / Institutional System",
    year: "Ongoing",
    url: "https://login.csu.edu.ph",
    liveUrl: "",
    repositoryUrl: "",
    previewEnabled: true,
    previewType: "manual",
    isInternal: false,
    featured: true,
    highlights: [
      "Centralized login portal",
      "Unified access point for CSU digital systems",
      "Clean and responsive login interface",
      "System routing to connected CSU platforms",
      "Institutional digital identity support",
      "Improved user access experience",
      "Foundation for future single sign-on integration",
    ],
    features: [
      "Centralized login portal",
      "Unified access point for CSU digital systems",
      "Clean and responsive login interface",
      "System routing to connected CSU platforms",
      "Institutional digital identity support",
      "Improved user access experience",
      "Foundation for future single sign-on integration",
    ],
    impactStatements: [
      "Simplifies access to CSU digital platforms.",
      "Reduces confusion caused by multiple system entry points.",
      "Supports a more unified university digital ecosystem.",
      "Improves user experience for students, faculty, staff, and administrators.",
      "Strengthens the foundation for future digital transformation initiatives.",
    ],
    problem:
      "As the university continues to expand its digital systems, users may need to access multiple platforms with different login flows and system entry points. This can create confusion, repetitive authentication steps, and fragmented access experiences.",
    solution:
      "The MyCSU SSO Portal provides a unified login experience where users can access connected CSU digital systems from a centralized portal. It supports a cleaner access flow, strengthens the identity of CSU's digital ecosystem, and improves user convenience for students, employees, and system users.",
  },
  {
    title: "Enrollment-to-Employment System (E2E)",
    slug: "e2e-system",
    category: "CSU Projects",
    image: "",
    shortDescription:
      "University-wide information system supporting the academic lifecycle from admission and enrollment to employment-related tracking.",
    fullDescription:
      "The Enrollment-to-Employment (E2E) System is a comprehensive university information platform that manages the complete academic lifecycle. It covers student admission, enrollment processes, academic records management, and employment-related tracking to support institutional data needs and reporting across Cagayan State University.",
    role: "Project Development Team Leader / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    previewEnabled: false,
    previewType: "manual",
    isInternal: true,
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
    impactStatements: [
      "Helped organize academic lifecycle workflows in one system.",
      "Supported institutional data tracking and reporting needs.",
      "Reduced fragmentation across student record processes.",
    ],
    problem:
      "Managing student data across the full academic lifecycle - from admission and enrollment to graduation and employment - relied on fragmented manual processes that made tracking, reporting, and data integrity difficult.",
    solution:
      "The E2E System consolidates student admission, enrollment, academic records, and employment tracking into a single platform, providing the university with accurate, integrated data across the full student lifecycle.",
    targetUsers:
      "University registrars, MIS staff, department heads, and institutional administrators responsible for student data management and reporting.",
  },
  {
    title: "Human Resource Information System (HRIS)",
    slug: "hris-system",
    category: "CSU Projects",
    image: "",
    shortDescription:
      "Web-based HR system supporting PDS management, leave credits, service records, calendar of events, employee records, data validation, and HR process tracking.",
    fullDescription:
      "The Human Resource Information System (HRIS) is a web-based platform for Cagayan State University's HR management needs. It handles Personal Data Sheet (PDS) management, leave credit tracking, service record management, employee records, and HR administrative processes, supporting compliance with Philippine Civil Service Commission requirements.",
    role: "Project Development Team Leader / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    previewEnabled: false,
    previewType: "manual",
    isInternal: true,
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
    impactStatements: [
      "Helped digitize HR record-keeping and administrative workflows.",
      "Supported more organized leave and service record management.",
      "Reduced reliance on manual HR tracking processes.",
    ],
    problem:
      "HR processes at Cagayan State University relied heavily on manual paper-based record-keeping for employee data, leave requests, and service records - making it time-consuming and error-prone to maintain compliance with CSC requirements.",
    solution:
      "The HRIS digitizes HR record management, leave tracking, and service documentation in a centralized web-based platform, supporting HR staff with accurate employee data management and Civil Service Commission compliance.",
    targetUsers:
      "HR officers, department heads, and university employees managing records, leave requests, and service documentation.",
  },
  {
    title: "Online Faculty Evaluation System (OFES)",
    slug: "ofes-system",
    category: "CSU Projects",
    image: "",
    shortDescription:
      "Faculty evaluation system supporting student and dean evaluations, semester-based setup, evaluation summaries, individual faculty reports, PDF generation, and role-based access.",
    fullDescription:
      "The Online Faculty Evaluation System (OFES) is a digital platform for managing faculty performance evaluations at Cagayan State University. It facilitates student evaluations, dean assessments, semester-based configuration, evaluation summary generation, and individual faculty performance reports with PDF export capabilities and role-based access control.",
    role: "Project Development Team Leader / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    previewEnabled: false,
    previewType: "manual",
    isInternal: true,
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
    impactStatements: [
      "Helped move faculty evaluation from paper-based to digital workflows.",
      "Supported clearer evaluation summaries and report preparation.",
      "Improved organization of semester-based evaluation processes.",
    ],
    problem:
      "Faculty evaluation at CSU was conducted through paper-based forms, making it difficult to consolidate responses, generate reports, and deliver timely feedback to faculty members and administrators.",
    solution:
      "OFES provides a digital evaluation platform where students and deans can submit evaluations online, with automatic summary generation, individual faculty reports, and PDF export - streamlining the entire evaluation process.",
    targetUsers:
      "Students submitting evaluations, deans conducting assessments, and HR or academic administrators reviewing faculty performance reports.",
  },
  {
    title: "Procurement Management System",
    slug: "procurement-management-system",
    category: "CSU Projects",
    image: "",
    shortDescription:
      "Research-based procurement workflow system concept aligned with Philippine government procurement processes, RA 9184, and RA 12009.",
    fullDescription:
      "A research-based procurement management system concept designed to digitize and streamline government procurement workflows in compliance with Philippine procurement laws including RA 9184 and RA 12009. The system aims to improve transparency, efficiency, and auditability in public procurement processes for government institutions.",
    role: "Researcher / System Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    status: "Research Project",
    year: "Past",
    url: "",
    previewEnabled: false,
    previewType: "manual",
    isInternal: false,
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
    impactStatements: [
      "Proposed a structured digital approach for procurement workflows.",
      "Supported process visibility and auditability in procurement planning.",
      "Aligned system design with Philippine public procurement requirements.",
    ],
    problem:
      "Government procurement workflows in Philippine public institutions are complex, regulation-heavy, and often managed manually - leading to inefficiencies, audit challenges, and compliance risks under RA 9184 and RA 12009.",
    solution:
      "This research-based system concept proposes a digitized procurement workflow platform aligned with Philippine procurement law, designed to improve process transparency, auditability, and compliance tracking.",
    targetUsers:
      "Government procurement officers, BAC members, and institutional administrators in Philippine public institutions.",
  },

  // ADDITIONAL CSU SYSTEMS
  {
    title: "Queueing Management System",
    slug: "queueing-management-system",
    category: "CSU Projects",
    image: "",
    shortDescription:
      "Digital queueing system supporting organized service delivery across university offices, reducing wait times and managing in-person service queues efficiently.",
    fullDescription:
      "The CSU Queueing Management System digitizes service queue management across university offices and service areas. It assigns queue numbers, manages service windows, and provides real-time queue status updates - improving service delivery efficiency and reducing student and staff wait times.",
    role: "Project Development Team Member / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    previewEnabled: false,
    previewType: "manual",
    isInternal: true,
    featured: false,
    highlights: [
      "Digital queue number assignment and tracking",
      "Service window management and routing",
      "Real-time queue status and notifications",
      "Multi-office deployment support",
    ],
    problem:
      "University offices handling high volumes of students and staff faced disorganized queuing, long wait times, and poor service delivery - especially during peak academic periods like enrollment.",
    solution:
      "A digital queueing system that assigns numbered tickets, manages service windows, and provides real-time queue tracking - bringing order, transparency, and efficiency to in-person service delivery.",
    targetUsers:
      "Students and staff visiting university offices; administrative staff managing service windows.",
    impact: [
      "Reduced crowding and wait times in service areas",
      "Improved order and efficiency in university offices",
      "Better service delivery experience for students",
    ],
    impactStatements: [
      "Helped organize in-person service queues across office workflows.",
      "Supported more predictable service delivery for students and staff.",
      "Reduced manual handling of queue coordination.",
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

const blockedHostnames = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "::1",
]);

const restrictedUrlLabels = new Set([
  "internal / restricted access",
  "to be provided",
  "coming soon",
  "",
]);

function isPrivateHostname(hostname: string): boolean {
  const host = hostname.toLowerCase();
  if (blockedHostnames.has(host)) return true;
  if (host.endsWith(".local") || host.endsWith(".internal") || host.endsWith(".test")) {
    return true;
  }

  const parts = host.split(".").map((part) => Number(part));
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) {
    return false;
  }

  const [a, b] = parts;
  return (
    a === 10 ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    a === 169
  );
}

/** Returns true only for HTTPS URLs that are safe to preview publicly. */
export function isPublicUrl(url: string | undefined | null): boolean {
  if (!url) return false;
  if (restrictedUrlLabels.has(url.trim().toLowerCase())) return false;

  try {
    const u = new URL(url);
    return u.protocol === "https:" && !isPrivateHostname(u.hostname);
  } catch {
    return false;
  }
}

export function canPreviewProject(
  project: Pick<Project, "url" | "previewEnabled" | "isInternal">
): boolean {
  return project.previewEnabled && !project.isInternal && isPublicUrl(project.url);
}
