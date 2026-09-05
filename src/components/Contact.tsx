import { Box, Container, Paper, Grid, Typography, Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutlineOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

const contactMethods = [
  {
    icon: <MailOutlineIcon />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    show: true,
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    value: profile.githubUrl.replace("https://", ""),
    href: profile.githubUrl,
    show: true,
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: profile.linkedinUrl ? profile.linkedinUrl.replace("https://", "") : "Coming soon",
    href: profile.linkedinUrl || undefined,
    show: true,
  },
];

export default function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Contact"
          title="Let's get in touch"
          description="The quickest way to reach me is by email."
          align="center"
        />

        <Grid container spacing={2.5} sx={{ maxWidth: 700, mx: "auto" }}>
          {contactMethods.map((method) => (
            <Grid size={{ xs: 12, sm: 4 }} key={method.label}>
              <Paper
                variant="outlined"
                component={method.href ? "a" : "div"}
                href={method.href}
                target={method.href?.startsWith("http") ? "_blank" : undefined}
                rel={method.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  textAlign: "center",
                  textDecoration: "none",
                  color: "text.primary",
                  display: "block",
                  transition: "border-color 0.15s ease",
                  "&:hover": method.href ? { borderColor: "primary.main" } : {},
                }}
              >
                <Box sx={{ color: "primary.main", mb: 1 }}>{method.icon}</Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {method.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", wordBreak: "break-word", fontSize: "0.85rem" }}
                >
                  {method.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button variant="contained" size="large" startIcon={<MailOutlineIcon />} href={`mailto:${profile.email}`}>
            Send me an email
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
