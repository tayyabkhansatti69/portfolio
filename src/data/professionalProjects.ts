export interface ProfessionalProject {
  name: string;
  description: string;
  role: string;
  technologies: string[];
  status: "Professional / Private";
}

// High-level descriptions only. Source code and confidential details
// for company/client work are intentionally not shown or linked.
export const professionalProjects: ProfessionalProject[] = [
  {
    name: "MDM Management Portal",
    description:
      "Enterprise device management platform focused on managing devices, enrollment workflows, policies, applications and device-related operations.",
    role: "Frontend Engineer",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "MUI",
      "Redux Toolkit",
      "RTK Query",
      "REST APIs",
    ],
    status: "Professional / Private",
  },
  {
    name: "Enterprise Management / RNR Platform",
    description:
      "Repair-ticket and enterprise management workflow system covering user management, lab handling, shipment tracking and device status flows for admin and lab users.",
    role: "Frontend Engineer",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "MUI",
      "React Hook Form",
      "TanStack Table",
      "REST APIs",
    ],
    status: "Professional / Private",
  },
];
