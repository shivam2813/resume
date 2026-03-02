import { Container, Typography, Link, Grid, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 12,
        backgroundColor: "#333",
        color: "#fff",
        py: 2,
      }}
    >
      <Container>
        <Grid container spacing={6} justifyContent="center">
          {/* Contact Section */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contact
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              shivamarora1314@gmail.com
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Connect
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="https://www.linkedin.com/in/shivamarora1314/"
                color="inherit"
                underline="none"
                target="_blank"
                sx={{
                  width: "fit-content",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#ffb400",
                    transform: "translateX(4px)",
                  },
                }}
              >
                LinkedIn
              </Link>

              <Link
                href="https://github.com/shivam2813"
                color="inherit"
                underline="none"
                target="_blank"
                sx={{
                  width: "fit-content",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#ffb400",
                    transform: "translateX(4px)",
                  },
                }}
              >
                GitHub
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Divider */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: 6,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Shivam Arora. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
