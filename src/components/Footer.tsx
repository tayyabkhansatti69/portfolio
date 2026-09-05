import { Box, Container, Typography, Stack, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ py: 5, borderTop: "1px solid", borderColor: "divider" }}>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {profile.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {profile.role} — Building scalable and user-focused web experiences.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <Tooltip title="GitHub">
              <IconButton component="a" href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            {profile.linkedinUrl ? (
              <Tooltip title="LinkedIn">
                <IconButton component="a" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            ) : null}
            <Tooltip title="Email">
              <IconButton component="a" href={`mailto:${profile.email}`} aria-label="Send email">
                <MailOutlineIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>

        <Typography variant="caption" sx={{ display: "block", textAlign: "center", color: "text.disabled", mt: 4 }}>
          © {year} {profile.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
