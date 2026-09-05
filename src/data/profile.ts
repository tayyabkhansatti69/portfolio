// Central place for all personal / contact configuration.
// Update these values to keep the whole site in sync.

interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  availability: string;
  location: string;
  yearsOfExperience: number;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeAvailable: boolean;
  resumePath: string;
}

export const profile: Profile = {
  name: "Tayyab Khan Satti",
  role: "Frontend Engineer",
  tagline:
    "Building scalable, responsive and user-focused web applications with React, Next.js and TypeScript.",
  summary:
    "Frontend Engineer with 3 years of experience building enterprise dashboards, management portals and API-driven web applications. Experienced in React, Next.js, TypeScript, MUI, Redux and modern frontend architecture.",
  availability: "Open to Frontend / React / Next.js Opportunities",
  location: "Islamabad, Pakistan",
  yearsOfExperience: 3,
  email: "tayyabkhansatti69@gmail.com",

  // Confirmed via authenticated GitHub CLI session.
  githubUrl: "https://github.com/tayyabkhansatti69",

  linkedinUrl: "https://www.linkedin.com/in/tayyab-satti-2b961921a",

  // Place the real PDF at public/resume.pdf and flip this to true.
  resumeAvailable: false,
  resumePath: "/resume.pdf",
};

export const engineeringPhilosophy =
  "I focus on building maintainable, scalable and user-friendly interfaces rather than simply making screens look good.";
