import { Chip } from "@mui/material";

export default function TechnologyChip({ label }: { label: string }) {
  return (
    <Chip
      label={label}
      size="small"
      variant="outlined"
      sx={{
        borderColor: "divider",
        bgcolor: "background.paper",
        fontSize: "0.8rem",
      }}
    />
  );
}
