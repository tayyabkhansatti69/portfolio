import { Box, Container, Typography, Grid, Paper, Stack, Chip } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SectionHeading from "./SectionHeading";
import TechnologyChip from "./TechnologyChip";
import { professionalProjects } from "@/data/professionalProjects";

export default function ProfessionalProjects() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Professional Work"
          title="Professional Experience"
          description="Selected professional work. Details and source code are private due to company confidentiality."
        />

        <Grid container spacing={3}>
          {professionalProjects.map((project) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.name}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 1.5 }}>
                  <Typography variant="h6">{project.name}</Typography>
                  <Chip
                    icon={<LockOutlinedIcon sx={{ fontSize: "0.9rem !important" }} />}
                    label={project.status}
                    size="small"
                    sx={{ bgcolor: "action.hover", fontSize: "0.72rem" }}
                  />
                </Stack>

                <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, flexGrow: 1 }}>
                  {project.description}
                </Typography>

                <Typography variant="caption" sx={{ color: "text.disabled", fontWeight: 600, mb: 1 }}>
                  ROLE
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.role}
                </Typography>

                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                  {project.technologies.map((tech) => (
                    <TechnologyChip key={tech} label={tech} />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
