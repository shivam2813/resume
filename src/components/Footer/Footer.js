import { Container, Typography, Link, Grid } from "@mui/material";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={6} className="footer-grid">
          {/* Contact */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="footer-title">
              Contact
            </Typography>

            <Typography className="footer-text">
              shivamarora1314@gmail.com
            </Typography>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="footer-title">
              Connect
            </Typography>

            <div className="footer-links">
              <Link
                href="https://www.linkedin.com/in/shivamarora1314/"
                target="_blank"
                underline="none"
              >
                LinkedIn
              </Link>

              <Link
                href="https://github.com/shivam2813"
                target="_blank"
                underline="none"
              >
                GitHub
              </Link>
            </div>
          </Grid>
        </Grid>

        <div className="footer-bottom">
          <Typography variant="body2">
            © {year} <span>Shivam Arora</span>. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
