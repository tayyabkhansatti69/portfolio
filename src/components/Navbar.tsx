"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Tooltip,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DescriptionIcon from "@mui/icons-material/DescriptionOutlined";
import { useColorMode } from "@/theme/ColorModeContext";
import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/paths";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { mode, toggleMode } = useColorMode();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "background.paper" : "transparent",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: scrolled ? "divider" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(10px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: { xs: 2, md: 3 } }}>
        <Typography
          component="a"
          href="#home"
          sx={{ fontWeight: 800, fontSize: "1.1rem", color: "text.primary", textDecoration: "none", mr: "auto" }}
        >
          Tayyab Khan Satti
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, alignItems: "center" }}>
          {navLinks.map((link) => (
            <Button key={link.href} href={link.href} color="inherit" sx={{ fontWeight: 500 }}>
              {link.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5, ml: 2 }}>
          <Tooltip title="GitHub profile">
            <IconButton component="a" href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile" color="inherit">
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          {profile.linkedinUrl ? (
            <Tooltip title="LinkedIn profile">
              <IconButton component="a" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile" color="inherit">
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          ) : null}
          {profile.resumeAvailable ? (
            <Button
              href={withBasePath(profile.resumePath)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={<DescriptionIcon />}
              sx={{ ml: 1 }}
            >
              Resume
            </Button>
          ) : null}
          <Tooltip title={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
            <IconButton onClick={toggleMode} aria-label="Toggle color mode" color="inherit" sx={{ ml: 1 }}>
              {mode === "light" ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Box>

        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          aria-label="Open navigation menu"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2, height: "100%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpen(false)} aria-label="Close navigation menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItemButton key={link.href} component="a" href={link.href} onClick={() => setOpen(false)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <Box sx={{ mt: "auto", display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GitHubIcon />}
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            {profile.linkedinUrl ? (
              <Button fullWidth variant="outlined" startIcon={<LinkedInIcon />} href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Button>
            ) : null}
            {profile.resumeAvailable ? (
              <Button fullWidth variant="contained" startIcon={<DescriptionIcon />} href={withBasePath(profile.resumePath)} target="_blank" rel="noopener noreferrer">
                Resume
              </Button>
            ) : null}
            <Button
              fullWidth
              variant="text"
              onClick={toggleMode}
              startIcon={mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            >
              {mode === "light" ? "Dark mode" : "Light mode"}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
