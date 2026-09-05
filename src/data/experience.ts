export interface ExperienceEntry {
  title: string;
  subtitle: string;
  period: string;
  responsibilities: string[];
}

// Edit this file to update the experience timeline shown on the site.
export const experience: ExperienceEntry[] = [
  {
    title: "Frontend Engineer",
    subtitle: "Professional Experience",
    period: "3 Years",
    responsibilities: [
      "Built and maintained enterprise web applications using React and Next.js.",
      "Developed responsive dashboards and management portals.",
      "Integrated REST APIs and handled complex asynchronous states.",
      "Implemented reusable UI components using Material UI.",
      "Managed application state using Redux Toolkit and RTK Query.",
      "Built complex forms with React Hook Form and validation schemas (Zod / Yup).",
      "Developed reusable data tables with filtering, sorting and pagination using TanStack Table.",
      "Implemented role-based UI and permission-aware experiences.",
      "Worked with device management and enterprise management workflows.",
      "Collaborated with backend engineers and product/design teams.",
      "Improved usability, consistency and responsiveness across the application.",
    ],
  },
];
