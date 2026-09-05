import { Box, Container, Paper, Typography, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { profile } from "@/data/profile";

export default function GithubCTA() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Paper
          variant="outlined"
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <GitHubIcon sx={{ fontSize: 40, mb: 2 }} />
          <Typography variant="h4" sx={{ mb: 1.5, fontSize: { xs: "1.5rem", md: "1.8rem" } }}>
            Explore My Code
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, maxWidth: 560, mx: "auto" }}>
            Most of my professional work is maintained in private company repositories. I&apos;ve
            also built personal projects that are publicly available for code review.
          </Typography>
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
