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
  {
    name: "Aajizz Donation Platform",
    description:
      "Donation platform frontend covering campaign browsing, donor payment flows and transaction history, built with a focus on responsive, API-driven UI.",
    role: "Frontend Engineer",
    technologies: ["Next.js", "TypeScript", "Material UI", "RTK Query", "REST APIs"],
    status: "Professional / Private",
  },
  {
    name: "Eternal",
    description:
      "Membership/booking-style web application with authenticated user flows, account management and a consistent design system across pages.",
    role: "Frontend Engineer",
    technologies: ["React", "TypeScript", "Redux Toolkit", "REST APIs"],
    status: "Professional / Private",
  },
  {
    name: "Tutor Hub",
    description:
      "Online tutoring/course platform frontend covering authentication, student and tutor dashboards, and course management workflows.",
    role: "Frontend Engineer",
    technologies: ["React", "TypeScript", "Redux Toolkit", "REST APIs"],
    status: "Professional / Private",
  },
  {
    name: "Easyology",
    description:
      "E-commerce/sales management web app covering authenticated seller flows, catalog and order-related dashboards.",
    role: "Frontend Engineer",
    technologies: ["React", "TypeScript", "Material UI", "REST APIs"],
    status: "Professional / Private",
  },
  {
    name: "ComplianceSheet",
    description:
      "Compliance and inspection management platform covering templates, scheduled inspections, actions and analytics dashboards for audit workflows.",
    role: "Frontend Engineer",
    technologies: ["React", "TypeScript", "MUI", "TanStack Table", "REST APIs"],
    status: "Professional / Private",
  },
];
