export interface TrainingConductedItem {
  title: string;
  role: string;
  date?: string;
  focus: string;
  tags: string[];
}

export const trainingsConductedItems: TrainingConductedItem[] = [
  {
    title:
      "Data Management, Encoding, Cleaning, and Querying using MS Excel / Google Sheets",
    role: "Resource Person",
    date: "March 10–11, 2026",
    focus: "Data Management, Productivity Tools, Digital Skills",
    tags: ["Data Management", "Excel", "Google Sheets", "Training"],
  },
  {
    title: "HackTheNorth.PH ICT Roadshow",
    role: "Resource Speaker",
    date: "August 16, 2024",
    focus: "ICT Awareness, Technology Learning, Community Engagement",
    tags: ["ICT", "Community", "Technology Awareness"],
  },
  {
    title: "Resource Speaker - E2E & University Branding",
    role: "Resource Speaker",
    date: "May 2024",
    focus: "E2E System, University Branding, Digital Transformation",
    tags: ["E2E", "University Branding", "Digital Transformation"],
  },
  {
    title: "Demonstration Cum-Training Workshop on CSU HRIS",
    role: "Trainer",
    date: "February 2023",
    focus: "HRIS, User Training, University Systems",
    tags: ["HRIS", "User Training", "University Systems"],
  },
  {
    title: "Training-Workshop on the CSU Helpdesk",
    role: "Trainer",
    date: "July 2022",
    focus: "Helpdesk System, User Training, Technical Support",
    tags: ["Helpdesk", "Technical Support", "Training"],
  },
  {
    title: "Trainer's Training on DAAS",
    role: "Trainer",
    date: "July 2020",
    focus: "Digital Archiving, Document Systems, Process Improvement",
    tags: ["Digital Archiving", "Document Systems", "Process Improvement"],
  },
  {
    title: "Training Workshop on the Campus Website",
    role: "Trainer",
    date: "September 2019",
    focus: "Campus Websites, Web Content Management",
    tags: ["Web Content", "Campus Website", "CMS"],
  },
  {
    title: "Resource Speaker - Responsible AI Use in the 21st Century Education",
    role: "Resource Speaker",
    focus: "Responsible AI, ICT Education, Digital Literacy",
    tags: ["Responsible AI", "ICT Education", "Digital Literacy"],
  },
];
