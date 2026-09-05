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
  // Optional preview screenshot, relative to /public (e.g. "/projects/foo.png").
  // Leave empty until a real image has been added — no placeholder is rendered.
  imagePath?: string;
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
  {
    name: "Local GPT — ChatGPT Style Assistant",
    description:
      "A personal ChatGPT-style chat assistant with a clean browser UI, chat history and configurable AI backends.",
    technologies: ["Next.js", "TypeScript"],
    features: [
      "Chat-style conversation UI",
      "Multiple/local model support",
      "Chat history sidebar",
      "File and image upload UI",
      "Responsive layout",
    ],
    status: "In Progress",
    githubUrl: "",
    liveUrl: "https://free-chat-gpt-6q7l.vercel.app/",
  },
];
