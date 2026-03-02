import { Container, Grid, Typography, Box, Chip } from "@mui/material";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Engineering",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Material UI",
        "Hooks",
        "Context API",
        "Performance Optimization",
        "Component Architecture",
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "REST APIs",
        "MongoDB",
        "Electron",
        "Flask",
      ],
    },
    {
      category: "Systems",
      skills: ["Linux", "SSH", "Process Management"],
    },
  ];

  return (
    <Container sx={{ mt: 8, mb: 15 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{ mb: 6, fontWeight: 600 }}
      >
        Skills
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {skillsData.map((section, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              sx={{
                p: 5,
                borderRadius: 4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                height: "100%",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                {section.category}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                {section.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      px: 1,
                      backgroundColor: "#f5f5f5",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
