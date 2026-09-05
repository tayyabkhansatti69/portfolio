export interface PublicProject {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  status: string;
  // Leave empty until a real, working URL is available. Empty values
  // hide the corresponding button instead of linking to a fake URL.
  githubUrl: string;
  liveUrl: string;
}

// Personal / public projects recruiters can actually inspect.
// Add real repositories here as they become available.
export const projects: PublicProject[] = [
  {
    name: "Snooker Club Management System",
    description:
      "A responsive web application for managing snooker tables, bookings, hourly rates and club operations.",
    technologies: ["Next.js", "TypeScript", "MUI", "Redux Toolkit", "REST API"],
    features: [
      "Table management",
      "Booking management",
      "Hourly booking",
      "Responsive design",
      "Admin management",
      "User-friendly dashboard",
    ],
    status: "In Progress",
    githubUrl: "",
    liveUrl: "",
  },
];
