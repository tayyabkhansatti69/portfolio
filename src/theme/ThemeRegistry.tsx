"use client";

import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./getTheme";
import { ColorModeContext } from "./ColorModeContext";

const STORAGE_KEY = "portfolio-color-mode";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null;
    const preferred = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    // One-time sync from browser storage/media query on mount; not a response to a state change.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(preferred);
    setMounted(true);
  }, []);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleMode: () => {
        setMode((prev) => {
          const next = prev === "light" ? "dark" : "light";
          window.localStorage.setItem(STORAGE_KEY, next);
          return next;
        });
      },
    }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ visibility: mounted ? "visible" : "hidden" }}>{children}</div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
