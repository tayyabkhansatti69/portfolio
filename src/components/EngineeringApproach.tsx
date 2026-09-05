import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { engineeringPrinciples } from "@/data/skills";

export default function EngineeringApproach() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <SectionHeading eyebrow="Approach" title="How I approach frontend development" />

        <Grid container spacing={2.5}>
          {engineeringPrinciples.map((principle) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={principle.title}>
              <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 2, height: "100%" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                  {principle.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {principle.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
