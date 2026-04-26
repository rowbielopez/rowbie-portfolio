export interface CertificationItem {
  title: string;
  provider: string;
  date: string;
  duration: string;
  tags: string[];
}

export const certificationItems: CertificationItem[] = [
  {
    title: "Python Programming Essentials Course",
    provider: "Department of Information and Communications Technology (DICT)",
    date: "June 16–20, 2025",
    duration: "40 hours",
    tags: ["Python", "Programming", "DICT"],
  },
  {
    title: "Official Cybersecurity Certification Training (OCCT)",
    provider: "Department of Information and Communications Technology (DICT)",
    date: "August 12–14, 2024",
    duration: "36 hours",
    tags: ["Cybersecurity", "Security", "DICT"],
  },
  {
    title: "Cyber Range Exercises",
    provider: "Department of Information and Communications Technology (DICT)",
    date: "August 28, 2024",
    duration: "8 hours",
    tags: ["Cybersecurity", "Hands-on Training", "DICT"],
  },
  {
    title: "Web Development for Web Developers",
    provider: "Department of Information and Communications Technology (DICT)",
    date: "December 12–16, 2022",
    duration: "40 hours",
    tags: ["Web Development", "DICT"],
  },
  {
    title: "Serverless App Development Training",
    provider: "Department of Information and Communications Technology (DICT)",
    date: "June 17, 2022",
    duration: "8 hours",
    tags: ["Serverless", "Cloud", "DICT"],
  },
  {
    title: "National Training on Educational Technology Tools",
    provider: "EdTech Teacher Training Center",
    date: "April 19–20, 2025",
    duration: "24 hours",
    tags: ["EdTech", "Teaching", "ICT Education"],
  },
  {
    title: "IT Governance: COBIT5 Self-Assessment",
    provider: "Department of Information and Communications Technology (DICT)",
    date: "May 16–18, 2018",
    duration: "24 hours",
    tags: ["IT Governance", "COBIT5", "DICT"],
  },
];
