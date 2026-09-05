import { Box, Container, Typography, Button, Stack } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/paths";

export default function ResumeCTA() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 1.5, fontSize: { xs: "1.6rem", md: "1.9rem" } }}>
          Interested in working together?
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
          I&apos;m currently open to Frontend, React and Next.js opportunities.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center" }}>
          <Button
            component="a"
            variant="contained"
            size="large"
            startIcon={<DescriptionIcon />}
            href={profile.resumeAvailable ? withBasePath(profile.resumePath) : "#"}
            target="_blank"
            rel="noopener noreferrer"
            disabled={!profile.resumeAvailable}
          >
            {profile.resumeAvailable ? "Download Resume" : "Resume coming soon"}
          </Button>
          <Button variant="outlined" size="large" startIcon={<MailOutlineIcon />} href="#contact">
            Contact Me
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
