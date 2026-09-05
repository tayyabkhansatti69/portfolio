import { Box, Container, Typography, Button, Stack, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <Box component="section" id="home" sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Chip
          icon={<FiberManualRecordIcon sx={{ fontSize: "0.6rem !important", color: "success.main" }} />}
          label={profile.availability}
          size="small"
          sx={{
            mb: 3,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            fontWeight: 500,
          }}
        />

        <Typography
          component="h1"
          variant="h1"
          sx={{ fontSize: { xs: "2.3rem", sm: "3rem", md: "3.6rem" }, lineHeight: 1.1, mb: 2 }}
        >
          {profile.role}
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{ color: "text.secondary", fontWeight: 400, mb: 3, maxWidth: 640 }}
        >
          {profile.tagline}
        </Typography>

        <Typography variant="body1" sx={{ color: "text.secondary", mb: 5, maxWidth: 620, fontSize: "1.05rem" }}>
          {profile.summary}
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
          <Button href="#projects" variant="contained" size="large">
            View Projects
          </Button>
          <Button
            href={profile.resumeAvailable ? profile.resumePath : "#contact"}
            target={profile.resumeAvailable ? "_blank" : undefined}
            rel={profile.resumeAvailable ? "noopener noreferrer" : undefined}
            variant="outlined"
            size="large"
            startIcon={<DescriptionIcon />}
          >
            Download Resume
          </Button>
        </Stack>

        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
          <Button
            component="a"
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            color="inherit"
            sx={{ color: "text.secondary" }}
          >
            GitHub
          </Button>
          {profile.linkedinUrl ? (
            <Button
              component="a"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ color: "text.secondary" }}
            >
              LinkedIn
            </Button>
          ) : null}
          <Button
            component="a"
            href="#contact"
            startIcon={<MailOutlineIcon />}
            color="inherit"
            sx={{ color: "text.secondary" }}
          >
            Contact Me
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
