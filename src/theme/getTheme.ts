import { createTheme, ThemeOptions } from "@mui/material/styles";

const shared: ThemeOptions = {
  shape: { borderRadius: 10 },
  typography: {
    fontFamily:
      'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, paddingInline: 20 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: false },
    },
  },
};

export function getTheme(mode: "light" | "dark") {
  const isLight = mode === "light";
  return createTheme({
    ...shared,
    palette: {
      mode,
      primary: {
        main: isLight ? "#1d4ed8" : "#5b8def",
      },
      secondary: {
        main: isLight ? "#0f766e" : "#2dd4bf",
      },
      background: {
        default: isLight ? "#fafafa" : "#0a0a0c",
        paper: isLight ? "#ffffff" : "#131316",
      },
      text: {
        primary: isLight ? "#111318" : "#f2f3f5",
        secondary: isLight ? "#4b5563" : "#a1a5ad",
      },
      divider: isLight ? "rgba(17,19,24,0.09)" : "rgba(255,255,255,0.09)",
    },
  });
}
