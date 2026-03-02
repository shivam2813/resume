import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";

const projectsData = [
  {
    name: "Todo List Web App",
    imageUrl: require("../assets/todo-loggedin.png"),
    tech: "React • Node.js • MongoDB",
    description:
      "Developed a full-stack task management application with authentication and persistent storage, improving task tracking efficiency by 30%.",
    link: "https://clever-hare-jeans.cyclic.app/",
  },
  {
    name: "Number Plate Recognition System",
    imageUrl: require("../assets/numberplate.png"),
    tech: "Python • OpenCV • Tesseract OCR",
    description:
      "Implemented a real-time License Plate Recognition system using computer vision and OCR to detect and extract plate numbers from live video streams.",
    link: "https://github.com/shivam2813/number_plate_recognition",
  },
];

const Projects = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 6, fontWeight: 600 }}
      >
        Projects
      </Typography>

      <Grid container justifyContent="center" spacing={5}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} md={12} key={index}>
            <Card elevation={3} sx={{ borderRadius: 4 }}>
              <CardMedia
                component="img"
                height="260"
                image={project.imageUrl}
                alt={project.name}
                loading="lazy"
              />

              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {project.name}
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: 600, mb: 2 }}>
                  {project.tech}
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                  {project.description}
                </Typography>

                <Button
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#ffb400",
                    color: "black",
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#e0a800",
                    },
                  }}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
