import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import "./navbar.css";
import { useTheme, useMediaQuery } from "@mui/material";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  console.log(isMobile);
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(8,12,20,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(163,255,71,0.07)",
      }}
    >
      <Toolbar className="nav-container">
        {/* LOGO */}
        <Typography className="logo">
          SA<span className="accent">.</span>
        </Typography>

        {/* DESKTOP LINKS */}
        {!isMobile && (
          <Box className="nav-links">
            {links.map((l) => (
              <Button key={l} href={`#${l.toLowerCase()}`} className="nav-btn">
                {l}
              </Button>
            ))}
          </Box>
        )}

        {/* CTA */}
        {!isMobile && (
          <Button
            href={`mailto:shivamarora1314@gmail.com`}
            className="hire-btn"
          >
            Hire Me
          </Button>
        )}

        {/* MOBILE MENU ICON */}
        {isMobile === true && (
          <IconButton className="menu-icon" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}

        {/* DRAWER */}
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              background: "rgba(8, 12, 20, 0.97)",
              backdropFilter: "blur(10px)",
              borderLeft: "1px solid rgba(163,255,71,0.08)",
              width: 240,
            },
          }}
        >
          <Box className="mobile-menu">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <a href="mailto:shivamarora1314@gmail.com" className="mobile-hire">
              Hire Me
            </a>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
