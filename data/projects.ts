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
  /** Project screenshot / mockup — relative path from public/ */
  image?: string;
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
    image: "/projects/athena-classroom.png",
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
    image: "/projects/siplocator.png",
    shortDescription:
      "Coffee shop locator and discovery platform helping users find nearby coffee shops, explore store details, view operating hours, and support local business visibility.",
    fullDescription:
      "SIPLocator is a coffee shop discovery platform that connects coffee enthusiasts with local shops. Users can find nearby coffee shops, explore store details, view menus and operating hours, and discover new spots — while helping local coffee businesses in the Philippines gain digital visibility and attract new customers.",
    role: "Founder / Product Owner",
    technologies: [
      "Next.js",
      "TypeScript",
      "Google Maps API",
      "Supabase",
      "Tailwind CSS",
    ],
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
    problem:
      "Local coffee shops in the Philippines often lack a centralized digital presence, making it difficult for customers to discover them, check operating hours, or view menus online.",
    solution:
      "SIPLocator provides a map-based discovery platform where users can find nearby coffee shops, view store details, and explore menus in one place — while helping local businesses gain digital visibility.",
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
    image: "/projects/framify.png",
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
    problem:
      "Creating branded digital frames for events, campaigns, and social media requires design skills or expensive tools that most organizations, schools, and advocacy groups do not have access to.",
    solution:
      "Framify provides a simple browser-based tool that lets anyone create custom event frames, campaign overlays, and profile photo borders without design software — producing social media-ready output in seconds.",
    targetUsers:
      "Organizations, advocacy groups, event organizers, and individuals who need branded digital frames without needing design expertise.",
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
    image: "/projects/robtech-journey.png",
    shortDescription:
      "ICT-focused content platform sharing technology tips, digital tools, productivity workflows, programming concepts, cybersecurity basics, and practical ICT knowledge.",
    fullDescription:
      "RobTech Journey is an ICT content platform and advocacy initiative founded by Rowbie Lopez. It focuses on sharing practical technology knowledge, digital tools, productivity workflows, programming concepts, and cybersecurity basics — with the goal of making ICT education more accessible and relevant for Filipino students, teachers, and professionals.",
    role: "Founder / Content Creator",
    technologies: [
      "Content Creation",
      "Video Production",
      "Digital Tools",
      "Social Media",
    ],
    status: "Active",
    year: "Ongoing",
    url: "https://www.facebook.com/RobsTechJourney",
    featured: true,
    highlights: [
      "ICT education content and digital advocacy",
      "Technology tips and digital productivity tools",
      "Programming concepts for beginners and educators",
      "Cybersecurity awareness and digital safety content",
    ],
    problem:
      "Practical ICT knowledge — technology tips, programming concepts, digital productivity tools, and cybersecurity basics — is often hard to find in Filipino-contextualized, accessible formats for students and educators.",
    solution:
      "RobTech Journey delivers short-form content, tutorials, and digital guides tailored to Filipino learners and educators, making practical ICT knowledge accessible through social media and digital content platforms.",
    targetUsers:
      "Filipino students, teachers, and professionals looking for practical, accessible ICT knowledge and digital skills content.",
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
    image: "/projects/csu-website.png",
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
    problem:
      "Cagayan State University needed a centralized digital platform to communicate institutional news, academic updates, and public information to students, faculty, staff, and the general public.",
    solution:
      "The CSU Official Website provides a structured, institution-branded web presence for publishing news, announcements, academic updates, and university digital services — accessible to all stakeholders online.",
    targetUsers:
      "CSU students, faculty, staff, alumni, applicants, and the general public seeking official university information.",
  },
  {
    title: "CSU Campus Websites",
    slug: "csu-campus-websites",
    category: "CSU Projects",
    image: "/projects/csu-campus-websites.png",
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
    problem:
      "Individual CSU campuses lacked their own dedicated online presence, making it difficult for campus-specific audiences to find localized information, announcements, and services.",
    solution:
      "A unified multi-campus website initiative that provides each campus with a dedicated site under a consistent institutional design — supporting localized content while maintaining university-wide brand standards.",
    targetUsers:
      "Students, faculty, staff, and community members of each individual CSU campus.",
  },
  {
    title: "Old CSU MyPortal / Student Portal",
    slug: "csu-student-portal",
    category: "CSU Projects",
    image: "/projects/old-csu-myportal.png",
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
    problem:
      "Students had to visit offices in person to access admission, registration, and enrollment-related information, creating long queues and inefficiencies in service delivery.",
    solution:
      "The CSU Student Portal (MyPortal) provided students with online access to academic services including registration, enrollment records, and account management — reducing the need for in-person visits.",
    targetUsers:
      "CSU students accessing admission, registration, enrollment, and account services online.",
  },
  {
    title: "Enrollment-to-Employment System (E2E)",
    slug: "e2e-system",
    category: "CSU Projects",
    image: "/projects/e2e-system.png",
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
    problem:
      "Managing student data across the full academic lifecycle — from admission and enrollment to graduation and employment — relied on fragmented manual processes that made tracking, reporting, and data integrity difficult.",
    solution:
      "The E2E System consolidates student admission, enrollment, academic records, and employment tracking into a single platform, providing the university with accurate, integrated data across the full student lifecycle.",
    targetUsers:
      "University registrars, MIS staff, department heads, and institutional administrators responsible for student data management and reporting.",
  },
  {
    title: "Human Resource Information System (HRIS)",
    slug: "hris-system",
    category: "CSU Projects",
    image: "/projects/hris.png",
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
    problem:
      "HR processes at Cagayan State University relied heavily on manual paper-based record-keeping for employee data, leave requests, and service records — making it time-consuming and error-prone to maintain compliance with CSC requirements.",
    solution:
      "The HRIS digitizes HR record management, leave tracking, and service documentation in a centralized web-based platform, supporting HR staff with accurate employee data management and Civil Service Commission compliance.",
    targetUsers:
      "HR officers, department heads, and university employees managing records, leave requests, and service documentation.",
  },
  {
    title: "Online Faculty Evaluation System (OFES)",
    slug: "ofes-system",
    category: "CSU Projects",
    image: "/projects/ofes.png",
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
    problem:
      "Faculty evaluation at CSU was conducted through paper-based forms, making it difficult to consolidate responses, generate reports, and deliver timely feedback to faculty members and administrators.",
    solution:
      "OFES provides a digital evaluation platform where students and deans can submit evaluations online, with automatic summary generation, individual faculty reports, and PDF export — streamlining the entire evaluation process.",
    targetUsers:
      "Students submitting evaluations, deans conducting assessments, and HR or academic administrators reviewing faculty performance reports.",
  },
  {
    title: "Procurement Management System",
    slug: "procurement-management-system",
    category: "CSU Projects",
    image: "/projects/procurement-management-system.png",
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
    problem:
      "Government procurement workflows in Philippine public institutions are complex, regulation-heavy, and often managed manually — leading to inefficiencies, audit challenges, and compliance risks under RA 9184 and RA 12009.",
    solution:
      "This research-based system concept proposes a digitized procurement workflow platform aligned with Philippine procurement law, designed to improve process transparency, auditability, and compliance tracking.",
    targetUsers:
      "Government procurement officers, BAC members, and institutional administrators in Philippine public institutions.",
  },

  /* ─────────────────────────────────────────
     ADDITIONAL CSU SYSTEMS
  ───────────────────────────────────────── */
  {
    title: "Queueing Management System",
    slug: "queueing-management-system",
    category: "CSU Projects",
    image: "/projects/queueing-management-system.png",
    shortDescription:
      "Digital queueing system supporting organized service delivery across university offices, reducing wait times and managing in-person service queues efficiently.",
    fullDescription:
      "The CSU Queueing Management System digitizes service queue management across university offices and service areas. It assigns queue numbers, manages service windows, and provides real-time queue status updates — improving service delivery efficiency and reducing student and staff wait times.",
    role: "Project Development Team Member / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    featured: false,
    highlights: [
      "Digital queue number assignment and tracking",
      "Service window management and routing",
      "Real-time queue status and notifications",
      "Multi-office deployment support",
    ],
    problem:
      "University offices handling high volumes of students and staff faced disorganized queuing, long wait times, and poor service delivery — especially during peak academic periods like enrollment.",
    solution:
      "A digital queueing system that assigns numbered tickets, manages service windows, and provides real-time queue tracking — bringing order, transparency, and efficiency to in-person service delivery.",
    targetUsers:
      "Students and staff visiting university offices; administrative staff managing service windows.",
    impact: [
      "Reduced crowding and wait times in service areas",
      "Improved order and efficiency in university offices",
      "Better service delivery experience for students",
    ],
  },
  {
    title: "Appointment Management System",
    slug: "appointment-management-system",
    category: "CSU Projects",
    image: "/projects/appointment-management-system.png",
    shortDescription:
      "Online appointment scheduling system allowing students and staff to book, manage, and track appointments with university offices and services.",
    fullDescription:
      "The CSU Appointment Management System provides an online platform for scheduling appointments with university offices. Students and staff can book time slots, receive confirmations, and track appointment status — reducing walk-in congestion and enabling better service planning for administrative offices.",
    role: "Project Development Team Member / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    featured: false,
    highlights: [
      "Online appointment booking for university offices",
      "Time slot management and scheduling",
      "Appointment confirmation and status tracking",
      "Admin dashboard for managing appointments",
    ],
    problem:
      "Walk-in service visits to university offices were uncoordinated, leading to congestion, long waiting periods, and difficulty in scheduling office workloads efficiently.",
    solution:
      "The Appointment Management System allows students and staff to schedule visits online, receive confirmations, and track their appointment status — enabling offices to better manage their time and reduce walk-in congestion.",
    targetUsers:
      "Students and staff needing to schedule visits to university offices; administrative staff managing appointment calendars.",
    impact: [
      "Reduced uncoordinated walk-in traffic to offices",
      "Improved scheduling and workload management for staff",
      "More organized and predictable service delivery",
    ],
  },
  {
    title: "Alumni Database System",
    slug: "alumni-database-system",
    category: "CSU Projects",
    image: "/projects/alumni-database-system.png",
    shortDescription:
      "Alumni records management system for tracking graduate profiles, employment status, and institutional alumni data to support university reporting and engagement.",
    fullDescription:
      "The CSU Alumni Database System supports the management and tracking of graduate records, employment outcomes, and alumni profiles. It provides the university with a structured data platform for alumni engagement, employment tracking, and compliance with institutional reporting requirements related to graduate outcomes.",
    role: "Project Development Team Member / Systems Developer",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Ongoing",
    url: "Internal / Restricted Access",
    featured: false,
    highlights: [
      "Graduate profile and records management",
      "Employment status and outcome tracking",
      "Alumni data search and filtering",
      "Institutional reporting support",
    ],
    problem:
      "Tracking graduate outcomes and maintaining up-to-date alumni records was done manually or not consistently — making it difficult to report employment rates and engage alumni systematically.",
    solution:
      "The Alumni Database System provides a centralized platform for managing graduate profiles, tracking employment outcomes, and supporting alumni engagement — improving data accuracy and institutional reporting capability.",
    targetUsers:
      "University alumni officers, registrars, and institutional planners managing graduate data and reporting.",
    impact: [
      "Centralized and accessible alumni records",
      "Improved graduate outcome tracking and reporting",
      "Supports institutional accreditation requirements",
    ],
  },
  {
    title: "Hotel Management System",
    slug: "hotel-management-system",
    category: "CSU Projects",
    image: "/projects/hotel-management-system.png",
    shortDescription:
      "Internal hotel management system supporting reservations, room assignments, billing, and guest record management for a university-affiliated accommodation facility.",
    fullDescription:
      "An internal hotel management system developed for a university-affiliated accommodation facility. The system handles room reservations, check-in and check-out management, billing, guest records, and room assignment workflows — supporting the operational needs of the facility.",
    role: "Systems Developer",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    status: "Internal System",
    year: "Past",
    url: "Internal / Restricted Access",
    featured: false,
    highlights: [
      "Room reservation and availability management",
      "Check-in and check-out workflow support",
      "Guest records and billing management",
      "Room assignment and status tracking",
    ],
    problem:
      "Managing room reservations, guest records, and billing at the facility was handled manually, leading to booking conflicts, record-keeping gaps, and inefficient front desk operations.",
    solution:
      "A web-based hotel management system that digitizes reservations, guest records, and billing workflows — providing front desk staff with an organized, reliable platform for managing facility operations.",
    targetUsers:
      "Front desk staff and facility administrators managing reservations, guest records, and billing.",
    impact: [
      "Digitized reservations and guest record management",
      "Reduced manual errors in billing and room assignments",
      "Improved operational efficiency for facility staff",
    ],
  },

  /* ─────────────────────────────────────────
     ADDITIONAL PERSONAL PROJECTS
  ───────────────────────────────────────── */
  {
    title: "Pancit Finder",
    slug: "pancit-finder",
    category: "Personal Projects",
    image: "/projects/pancit-finder.png",
    shortDescription:
      "Food discovery platform for finding local Filipino pancit spots, exploring restaurant details, and supporting community-based food businesses.",
    fullDescription:
      "Pancit Finder is a food discovery platform focused on helping users locate local Filipino pancit restaurants and food establishments. Users can find nearby pancit spots, view restaurant details, explore menu offerings, and discover community food businesses — celebrating Filipino food culture while giving small businesses digital visibility.",
    role: "Founder / Product Owner",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "Prototype",
    year: "2024–Present",
    url: "To be provided",
    featured: false,
    highlights: [
      "Location-based pancit restaurant discovery",
      "Restaurant details, menus, and operating hours",
      "Community food business digital visibility",
      "Filipino food culture discovery features",
    ],
    problem:
      "Local Filipino food businesses — particularly small pancit vendors and restaurants — often lack a digital presence, making it difficult for customers to discover or find them online.",
    solution:
      "Pancit Finder provides a map-based food discovery platform where users can find local pancit spots and restaurants, while giving community food businesses a simple way to gain digital visibility.",
    targetUsers:
      "Filipinos looking to discover local pancit restaurants and food businesses near them.",
    impact: [
      "Promotes local Filipino food businesses and culture",
      "Helps users discover community food spots",
      "Supports small business digital visibility",
    ],
  },
  {
    title: "KL Auto Hub Information System",
    slug: "kl-auto-hub",
    category: "Personal Projects",
    image: "/projects/kl-auto-hub.png",
    shortDescription:
      "Internal information system for a local automotive business, supporting inventory management, service records, customer tracking, and basic business operations.",
    fullDescription:
      "KL Auto Hub Information System is an internal web-based system designed for a local automotive business. It supports inventory management, vehicle service record tracking, customer management, and basic business operations — helping the business replace manual records with a structured digital platform.",
    role: "Systems Developer",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    status: "Prototype",
    year: "Past",
    url: "To be provided",
    featured: false,
    highlights: [
      "Vehicle inventory and parts management",
      "Customer records and service history tracking",
      "Service job order management",
      "Basic business operations and reporting",
    ],
    problem:
      "The automotive business managed inventory, service records, and customer information manually — making it difficult to track vehicle history, parts availability, and customer service status accurately.",
    solution:
      "KL Auto Hub IS provides a web-based platform to manage inventory, customer records, and service job orders digitally — replacing manual logs and improving operational accuracy for the business.",
    targetUsers:
      "Automotive shop staff and management tracking vehicles, parts inventory, and customer service records.",
    impact: [
      "Replaced manual record-keeping with digital management",
      "Improved tracking of service records and inventory",
      "Reduced record-keeping errors for the business",
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

/** Returns true if the URL is a valid, publicly accessible http/https link. */
export function isPublicUrl(url: string | undefined | null): boolean {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}
