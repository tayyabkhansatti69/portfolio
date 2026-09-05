import { Box, Container, Typography, Paper, Stack, Chip } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutlineOutlined";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="A summary of my work as a Frontend Engineer. Company-specific details are kept confidential; the focus here is on scope and responsibilities."
        />

        <Stack spacing={3}>
          {experience.map((entry) => (
            <Paper
              key={entry.title}
              variant="outlined"
              sx={{ p: { xs: 3, md: 4 }, borderRadius: 2 }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                sx={{
                  mb: 1,
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                }}
              >
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <WorkOutlineIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography variant="h6">{entry.title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {entry.subtitle}
                    </Typography>
                  </Box>
                </Stack>
                <Chip label={entry.period} size="small" variant="outlined" />
              </Stack>

              <Box component="ul" sx={{ m: 0, mt: 2, pl: 3, display: "grid", gap: 0.75 }}>
                {entry.responsibilities.map((item) => (
                  <Typography
                    key={item}
                    component="li"
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "0.95rem" }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
