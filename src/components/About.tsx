import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { profile, engineeringPhilosophy } from "@/data/profile";

const highlights = [
  "3 years of professional frontend development experience",
  "React and Next.js expertise with the App Router",
  "Strong TypeScript foundations across large codebases",
  "Building enterprise dashboards and admin portals",
  "REST API integration with robust loading/error states",
  "Reusable, well-structured UI component libraries",
  "Application state management with Redux Toolkit & RTK Query",
  "Complex forms, schema validation and responsive design",
];

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading eyebrow="About" title="A frontend engineer focused on real-world products" />

        <Typography variant="body1" sx={{ fontSize: "1.05rem", color: "text.secondary", mb: 2 }}>
          I&apos;m a Frontend Engineer with {profile.yearsOfExperience} years of experience building
          enterprise-grade web applications — primarily dashboards, admin portals and management
          systems used by real teams in production. My day-to-day work centers on React and
          Next.js, with TypeScript for type safety and Material UI for consistent, accessible
          interfaces.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.05rem", color: "text.secondary", mb: 4 }}>
          Most of my professional experience involves integrating REST APIs, managing complex
          application state, building forms with strict validation requirements, and implementing
          role-based UI so different users see the right data and actions. I care about how an
          application holds up as it grows — not just how it looks on day one.
        </Typography>

        <Paper
          variant="outlined"
          sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper", mb: 5 }}
        >
          <Typography variant="body1" sx={{ fontStyle: "italic", fontSize: "1.05rem" }}>
            &ldquo;{engineeringPhilosophy}&rdquo;
          </Typography>
        </Paper>

        <Grid container spacing={1.5}>
          {highlights.map((item) => (
            <Grid size={{ xs: 12, sm: 6 }} key={item}>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  gap: 1,
                  alignItems: "flex-start",
                  fontSize: "0.95rem",
                }}
              >
                <Box component="span" sx={{ color: "primary.main", mt: "2px" }}>
                  ▹
                </Box>
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
