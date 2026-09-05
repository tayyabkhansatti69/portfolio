import { Box, Container, Grid } from "@mui/material";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Public Work"
          title="Selected Projects"
          description="Personal projects available for code review, separate from confidential professional work."
        />

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.name}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
