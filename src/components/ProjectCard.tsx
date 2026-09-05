import { Paper, Typography, Stack, Chip, Button, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import TechnologyChip from "./TechnologyChip";
import type { PublicProject } from "@/data/projects";
import { withBasePath } from "@/lib/paths";

export default function ProjectCard({ project }: { project: PublicProject }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {project.imagePath ? (
        <Box
          component="img"
          src={withBasePath(project.imagePath)}
          alt={`${project.name} preview`}
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        />
      ) : null}

      <Box sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 1.5 }}>
        <Typography variant="h6">{project.name}</Typography>
        <Chip label={project.status} size="small" sx={{ bgcolor: "action.hover", fontSize: "0.72rem" }} />
      </Stack>

      <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
        {project.description}
      </Typography>

      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap", mb: 2 }}>
        {project.technologies.map((tech) => (
          <TechnologyChip key={tech} label={tech} />
        ))}
      </Stack>

      <Typography variant="caption" sx={{ color: "text.disabled", fontWeight: 600, mb: 1 }}>
        FEATURES
      </Typography>
      <Box component="ul" sx={{ m: 0, mb: 3, pl: 3, display: "grid", gap: 0.5 }}>
        {project.features.map((feature) => (
          <Typography key={feature} component="li" variant="body2" sx={{ color: "text.secondary" }}>
            {feature}
          </Typography>
        ))}
      </Box>

      <Stack direction="row" spacing={1.5} sx={{ mt: "auto" }}>
        <Button
          component="a"
          size="small"
          variant="outlined"
          startIcon={<GitHubIcon />}
          href={project.githubUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!project.githubUrl}
        >
          {project.githubUrl ? "View Source Code" : "Source coming soon"}
        </Button>
        <Button
          component="a"
          size="small"
          variant="outlined"
          startIcon={<LaunchIcon />}
          href={project.liveUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          disabled={!project.liveUrl}
        >
          {project.liveUrl ? "View Live Demo" : "Demo coming soon"}
        </Button>
      </Stack>
      </Box>
    </Paper>
  );
}
