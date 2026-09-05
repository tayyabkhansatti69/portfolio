import { Box, Container, Grid, Paper, Typography, Stack } from "@mui/material";
import SectionHeading from "./SectionHeading";
import TechnologyChip from "./TechnologyChip";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="Grouped by area rather than a flat list — this is the stack I use day to day."
        />

        <Grid container spacing={2.5}>
          {skillCategories.map((category) => (
            <Grid size={{ xs: 12, sm: 6 }} key={category.title}>
              <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 2, height: "100%" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {category.title}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                  {category.skills.map((skill) => (
                    <TechnologyChip key={skill} label={skill} />
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
