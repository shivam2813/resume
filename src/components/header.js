import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", link: "#home" },
    { label: "Projects", link: "#projects" },
    { label: "Experience", link: "#experience" },
    { label: "Skills", link: "#skills" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#ffb400",
          boxShadow: "none",
        }}
      >
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minHeight: { xs: 64, md: 68 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              Portfolio
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                alignItems: "center",
              }}
            >
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  component="a"
                  href={item.link}
                  aria-label={`Open ${item.label} menu`}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 500,
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "white",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}

              <Button
                variant="contained"
                href="https://www.linkedin.com/in/shivamarora1314/"
                target="_blank"
                aria-label="Contact Me"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: 600,
                  borderRadius: 3,
                  px: 3,
                  boxShadow: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>

            <IconButton
              sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  aria-label={`Open ${item.label} Button`}
                  href={item.link}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="https://www.linkedin.com/in/shivamarora1314/"
                target="_blank"
                onClick={() => setOpen(false)}
                aria-label="Open Contact"
              >
                <ListItemText primary="Contact Me" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
