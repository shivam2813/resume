import { Container, Grid, Typography, Box } from "@mui/material";
import image from "../assets/myImage.jpeg";

function Top() {
  return (
    <Container sx={{ mt: { xs: 8, md: 14 } }}>
      <Grid container alignItems="center" spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: 1.2,
            }}
          >
            Hi, I'm <span style={{ color: "#ffb400" }}>Shivam Arora</span>
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mt: 2,
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.6rem" },
              color: "#2b2b2b",
            }}
          >
            Software Developer
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 3,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#555",
              maxWidth: "600px",
            }}
          >
            I build scalable frontend applications and optimize complex systems.
            With experience in React, Python, and UAV-based technologies, I
            focus on improving performance, reducing processing time, and
            engineering solutions that create measurable impact.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            component="img"
            src={image}
            alt="Shivam Arora"
            loading="lazy"
            width={320}
            height={450}
            sx={{
              width: { xs: "80%", md: "100%" },
              maxWidth: 380,
              borderRadius: 4,
              boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Top;
