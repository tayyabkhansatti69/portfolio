import { Box, Typography } from "@mui/material";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: align, maxWidth: align === "center" ? 640 : "none", mx: align === "center" ? "auto" : 0 }}>
      {eyebrow && (
        <Typography
          component="p"
          variant="overline"
          sx={{ color: "primary.main", fontWeight: 700, letterSpacing: "0.08em", mb: 1 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography component="h2" variant="h3" sx={{ fontSize: { xs: "1.7rem", md: "2.1rem" } }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" sx={{ color: "text.secondary", mt: 1.5, fontSize: "1.05rem" }}>
          {description}
        </Typography>
      )}
    </Box>
  );
}
