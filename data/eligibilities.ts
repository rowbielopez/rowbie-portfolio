export interface EligibilityItem {
  title: string;
  issuingBody: string;
  date: string;
  type: string;
}

export const eligibilityItems: EligibilityItem[] = [
  {
    title: "Licensed Professional Teacher (LPT)",
    issuingBody: "Professional Regulation Commission",
    date: "March 23, 2025",
    type: "Professional License / Teaching Eligibility",
  },
  {
    title: "Career Service Professional Examination",
    issuingBody: "Civil Service Commission",
    date: "August 8, 2023",
    type: "Government Eligibility",
  },
  {
    title: "Career Service Sub-Professional Examination",
    issuingBody: "Civil Service Commission",
    date: "May 3, 2015",
    type: "Government Eligibility",
  },
];
