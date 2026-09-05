export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "UI",
    skills: ["Material UI", "Responsive Design", "UI/UX"],
  },
  {
    title: "State Management",
    skills: ["Redux", "Redux Toolkit", "RTK Query"],
  },
  {
    title: "Forms & Validation",
    skills: ["React Hook Form", "Zod", "Yup"],
  },
  {
    title: "Data",
    skills: ["TanStack Table", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "ESLint", "Prettier"],
  },
];

export interface EngineeringPrinciple {
  title: string;
  description: string;
}

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    title: "Reusable Components",
    description: "Build consistent and reusable UI components.",
  },
  {
    title: "Scalable Architecture",
    description: "Structure applications for maintainability and future growth.",
  },
  {
    title: "API Integration",
    description:
      "Build reliable API-driven experiences with proper loading, error and success states.",
  },
  {
    title: "Responsive UX",
    description: "Ensure applications work properly across desktop, tablet and mobile.",
  },
  {
    title: "Type Safety",
    description: "Use TypeScript and schema validation to reduce runtime errors.",
  },
  {
    title: "User Experience",
    description: "Focus on clear workflows, usability and accessible interfaces.",
  },
];
